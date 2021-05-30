jq -c '.[]' proxies.json | while read i; do
     export HTTP_PROXY=$i
     cypress run
done