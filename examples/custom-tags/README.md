# custom tags example

This example uses the `defineTag` and `buildTag` parameters to set separate tags for building and defining code blocks.

# Building

In a codebase with this example structure, the following syntax would be used to perform a 2 step build from the command line:

```sh
$ template-html sources/content.html -t sources/index.html -o build/ --define-tag define --build-tag build
$ template-html build/content.html -t sources/template.html -o build/ --define-tag define --build-tag build
```

or analogously via node:

```js
var fs = require('fs'),
    path = require('path'),
    Templator = require('./');

var template1 = new Templator({
    buildTag: 'build',
    defineTag: 'define',
    templateFile: 'sources/index.html'
});
var template2 = new Templator({
    buildTag: 'build',
    defineTag: 'define',
    templateFile: 'sources/template.html'
});

var output1 = template1.processFile('sources/content.html');
var output2 = template2.processContent(output1);

fs.writeFileSync('/build/content.html', output2);
```

# Testing

Compare the actual build output (`build/content.html`) for equality with the expected output (`expected-output/content.html`)
