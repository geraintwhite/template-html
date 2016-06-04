#!/bin/bash

ACTUAL="build/content.html"
EXPECTED="expected-output/content.html"

# clean and build first

./clean.sh
./build.sh

# test results

DIFFERENCE=`diff "$ACTUAL" "$EXPECTED"`

echo "Comparing '$ACTUAL' against '$EXPECTED'"

if [ -z "$DIFFERENCE" ]; then
	echo -e "...\t[Success]: no difference found"
else 
	echo -e "...\t[Failure]: there are differences"
fi

exit 0
