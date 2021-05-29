jq -c '.[]' input.json | while read i; do
    # do stuff with $i
done