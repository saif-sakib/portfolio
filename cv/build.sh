#!/usr/bin/env bash
# Build CVs from cv/src/*.tex into cv/pdf/, check each is one page, clean aux files.
# Usage: ./cv/build.sh            (all CVs)
#        ./cv/build.sh General    (only Saif_Ahmed_CV_General.tex)
set -euo pipefail

# Run from cv/src so every CV finds the shared style file saifcv.sty.
cd "$(dirname "$0")/src"
SRC=.
OUT=../pdf

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
    echo "FAIL  $base (see $OUT/$base.log)"; status=1; continue; }
  pages=$(pdfinfo "$OUT/$base.pdf" | awk '/^Pages:/ {print $2}')
  if [[ "$pages" == "1" ]]; then
    echo "ok    $base (1 page)"
  else
    echo "WARN  $base has $pages pages — must be one page"; status=1
  fi
  rm -f "$OUT/$base".{aux,log,out}
done

exit $status
