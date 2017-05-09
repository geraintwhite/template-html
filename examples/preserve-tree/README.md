# preserve directory structure example

This example demonstrates the use of the `preserveTree` option to copy the source files directory structure into the output.

# Building

In a codebase with this example structure, the following syntax would be used to build from the command line:

```sh
$ template-html --preserve-tree sources/file{1,2}/index.html -t sources/template.html -o build/
```

or analogously via node:

```js
var fs = require('fs'),
    path = require('path'),
    Templator = require('./');

var template = new Templator({
  preserveTree: true,
  templateFile: 'sources/template.html',
});

var output1 = template.processFile('sources/file1/index.html');
var output2 = template.processFile('sources/file2/index.html');

fs.writeFileSync('/build/sources/file1/index.html', output1);
fs.writeFileSync('/build/sources/file2/index.html', output2);
```

# Testing

Compare the actual build output (`build/sources/file{1,2}/index.html`) for equality with the expected output (`expected-output/sources/file{1,2}/index.html`)
