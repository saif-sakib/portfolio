// Copies the built CV PDFs from ../cv/pdf into public/cv so the site can
// serve them. public/cv is gitignored: cv/pdf stays the only copy in git.
import { cpSync, mkdirSync, readdirSync, rmSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const from = join(root, '..', 'cv', 'pdf');
const to = join(root, 'public', 'cv');

rmSync(to, { recursive: true, force: true });
mkdirSync(to, { recursive: true });
const pdfs = readdirSync(from).filter((f) => f.endsWith('.pdf'));
for (const f of pdfs) cpSync(join(from, f), join(to, f));
console.log(`sync-cv: copied ${pdfs.length} CV(s) to public/cv`);
