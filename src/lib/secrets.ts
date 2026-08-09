/**
 * Build-time secret resolution for the encrypted vaults.
 *
 * IMPORTANT: this module is SERVER-ONLY. It reads from `process.env` and the
 * local filesystem, so it must never be imported from a client `<script>`.
 *
 * The admin matrix (everyone's data in one place — the high-stakes one) needs
 * a real secret, resolved in this order:
 *   1. MATRIX_PASSWORD env var (CI / GitHub Actions repo secret).
 *   2. `matrixPassword` in a git-ignored `secrets.json` at the repo root
 *      (used for local builds): { "matrixPassword": "..." }
 *
 * Per-member portals default to the member's own memberId as the password —
 * same as before, and zero secrets to maintain per member. That's fine here:
 * a member's ID is already public (directory, ID card, verify page), so this
 * isn't real confidentiality, just a light click-through; unlocking only
 * reveals that one member's own data, not the whole database. If a specific
 * member ever needs stronger protection, set an explicit override via the
 * MEMBER_PASSWORDS env var (JSON map) or `secrets.json`'s `members` map —
 * both are optional and only need entries for members you want to override.
 *
 * When the matrix secret is missing, the vault is encrypted with an empty
 * password and the page reports "no password configured" — data is never
 * exposed in the clear, it simply cannot be unlocked until a real secret is set.
 */
import fs from "node:fs";
import path from "node:path";

interface SecretsFile {
  matrixPassword?: string;
  members?: Record<string, string>;
}

let cache: SecretsFile | null = null;

function loadFile(): SecretsFile {
  if (cache) return cache;
  const file = path.resolve(process.cwd(), "secrets.json");
  try {
    if (fs.existsSync(file)) {
      cache = JSON.parse(fs.readFileSync(file, "utf8")) as SecretsFile;
      return cache;
    }
  } catch (err) {
    console.warn(`[secrets] failed to parse secrets.json: ${(err as Error).message}`);
  }
  cache = {};
  return cache;
}

export function getMatrixPassword(): string {
  return process.env.MATRIX_PASSWORD ?? loadFile().matrixPassword ?? "";
}

export function getMemberPassword(memberId: string): string {
  const env = process.env.MEMBER_PASSWORDS;
  if (env) {
    try {
      const map = JSON.parse(env) as Record<string, string>;
      if (map[memberId]) return map[memberId];
    } catch (err) {
      console.warn(`[secrets] failed to parse MEMBER_PASSWORDS env: ${(err as Error).message}`);
    }
  }
  const override = loadFile().members?.[memberId];
  if (override) return override;
  // No explicit override configured — fall back to the memberId itself, same
  // as the site's original behavior. No per-member secret to maintain.
  return memberId;
}
