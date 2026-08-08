const enc = new TextEncoder();
const dec = new TextDecoder();
const ITERATIONS = 150000;

function b64encode(bytes: Uint8Array): string {
  let binary = "";
  for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
  return btoa(binary);
}

function b64decode(str: string): Uint8Array {
  const binary = atob(str);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

async function deriveKey(password: string, salt: Uint8Array, usage: KeyUsage[]): Promise<CryptoKey> {
  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    enc.encode(password),
    "PBKDF2",
    false,
    ["deriveKey"],
  );
  return crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: salt as BufferSource,
      iterations: ITERATIONS,
      hash: "SHA-256",
    },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    false,
    usage,
  );
}

export interface Vault {
  v: number;
  salt: string;
  iv: string;
  ct: string;
}

export async function encryptWithPassword(plaintext: string, password: string): Promise<string> {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const key = await deriveKey(password, salt, ["encrypt"]);
  const ct = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv: iv as BufferSource },
    key,
    enc.encode(plaintext),
  );
  const vault: Vault = {
    v: 1,
    salt: b64encode(salt),
    iv: b64encode(iv),
    ct: b64encode(new Uint8Array(ct)),
  };
  return JSON.stringify(vault);
}

export async function decryptWithPassword(payload: string, password: string): Promise<string | null> {
  try {
    const vault = JSON.parse(payload) as Vault;
    const salt = b64decode(vault.salt);
    const iv = b64decode(vault.iv);
    const key = await deriveKey(password, salt, ["decrypt"]);
    const pt = await crypto.subtle.decrypt({ name: "AES-GCM", iv: iv as BufferSource }, key, b64decode(vault.ct));
    return dec.decode(pt);
  } catch {
    return null;
  }
}
