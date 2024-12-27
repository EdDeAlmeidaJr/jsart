LISTA=`du -a | cut -f 2 | grep -v node_modules | grep -v public |  egrep \.test\.js$`

for i in $LISTA; do
  echo "*"
  echo "* TEST $i"
  echo "*"
  __TEST__=true FORCE_COLOR=true node $i
done

exit 0
