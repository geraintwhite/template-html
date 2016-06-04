#!/bin/bash

../../bin/template-html sources/content.html -t sources/index.html -o build/ --define-tag define --build-tag build "$@"
../../bin/template-html build/content.html -t sources/template.html -o build/ --define-tag define --build-tag build "$@"
