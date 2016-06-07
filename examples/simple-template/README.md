# simple template example

This example demonstrates the most basic use case of templating a single source file.

# Building

In a codebase with this example structure, the following syntax would be used to build from the command line:

```
template-html sources/index.html -t sources/template.html -o build/
```

or analogously via node:

```
var fs = require('fs'),
    path = require('path'),
    Templator = require('./');

var template = new Templator('sources/template.html');
var output = template.processFile('sources/index.html');

fs.writeFileSync('/build/index.html', output);
```

# Testing

Compare the actual build output (`build/index.html`) for equality with the expected output (`expected-output/index.html`)
