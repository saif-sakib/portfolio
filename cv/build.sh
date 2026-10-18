#!/usr/bin/env bash
# Build CVs from cv/src/*.tex into cv/pdf/, check each is at most two pages, clean aux files.
# cv/pdf/ is gitignored: the PDFs are build output (CI builds them for the site).
# Usage: ./cv/build.sh            (all CVs)
#        ./cv/build.sh General    (only Saif_Ahmed_CV_General.tex)
set -euo pipefail

# Run from cv/src so every CV finds the shared style file saifcv.sty.
cd "$(dirname "$0")/src"
SRC=.
OUT=../pdf
MAX_PAGES=2
mkdir -p "$OUT"

if [[ $# -gt 0 ]]; then
  files=()
  for name in "$@"; do files+=("$SRC/Saif_Ahmed_CV_${name}.tex"); done
else
  files=("$SRC"/Saif_Ahmed_CV_*.tex)
fi

status=0
for tex in "${files[@]}"; do
  base=$(basename "$tex" .tex)
  pdflatex -interaction=nonstopmode -output-directory="$OUT" "$tex" > /dev/null || {
    echo "FAIL  $base (see $OUT/$base.log)"
    grep -m3 -A2 '^!' "$OUT/$base.log" || tail -5 "$OUT/$base.log"
    status=1; continue; }
  pages=$(pdfinfo "$OUT/$base.pdf" | awk '/^Pages:/ {print $2}')
  if (( pages <= MAX_PAGES )); then
    echo "ok    $base ($pages page$([[ $pages == 1 ]] || echo s))"
  else
    echo "WARN  $base has $pages pages — must be at most $MAX_PAGES"; status=1
  fi
  rm -f "$OUT/$base".{aux,log,out}
done

exit $status
