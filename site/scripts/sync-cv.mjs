// Copies the built CV PDFs from ../cv/pdf into public/cv so the site can
// serve them. Neither folder is in git: run ../cv/build.sh first (CI does).
import { cpSync, existsSync, mkdirSync, readdirSync, rmSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const from = join(root, '..', 'cv', 'pdf');
const to = join(root, 'public', 'cv');

if (!existsSync(from)) throw new Error('sync-cv: cv/pdf not found, run ./cv/build.sh first');
rmSync(to, { recursive: true, force: true });
mkdirSync(to, { recursive: true });
const pdfs = readdirSync(from).filter((f) => f.endsWith('.pdf'));
for (const f of pdfs) cpSync(join(from, f), join(to, f));
console.log(`sync-cv: copied ${pdfs.length} CV(s) to public/cv`);
