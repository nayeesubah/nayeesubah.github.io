/**
 * Build-time secret resolution for the encrypted vaults.
 *
 * IMPORTANT: this module is SERVER-ONLY. It reads from `process.env` and the
 * local filesystem, so it must never be imported from a client `<script>`.
 *
 * Secrets are resolved in this order:
 *   1. Environment variables (used by CI / GitHub Actions):
 *        - MATRIX_PASSWORD     — master password for /members/matrix/
 *        - MEMBER_PASSWORDS    — JSON map of { "<memberId>": "<password>" }
 *   2. A git-ignored `secrets.json` at the repo root (used for local builds):
 *        { "matrixPassword": "...", "members": { "NSF-18-002": "..." } }
 *
 * When a secret is missing the vault is encrypted with an empty password and
 * the page reports "no password configured" — data is never exposed in the
 * clear, it simply cannot be unlocked until a real secret is set.
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
  return loadFile().members?.[memberId] ?? "";
}
