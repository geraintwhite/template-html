#!/bin/bash

../../bin/template-html sources/index.html -t sources/template.html -o build/ --define-tag define --build-tag build "$@"
