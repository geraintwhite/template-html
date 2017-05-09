# partial template example

This example runs a source file through a partial template (a file that defines code blocks as well as having placeholders for predefined code blocks) and then runs that through a final template.

# Building

In a codebase with this example structure, the following syntax would be used to perform a 2 step build from the command line:

```sh
$ template-html sources/content.html -t sources/index.html -o build/
$ template-html build/content.html -t sources/template.html -o build/
```

or analogously via node:

```js
var fs = require('fs'),
    path = require('path'),
    Templator = require('./');

var template1 = new Templator('sources/index.html');
var template2 = new Templator('sources/template.html');

var output1 = template1.processFile('sources/content.html');
var output2 = template2.processContent(output1);

fs.writeFileSync('/build/content.html', output2);
```

# Testing

Compare the actual build output (`build/content.html`) for equality with the expected output (`expected-output/content.html`)
