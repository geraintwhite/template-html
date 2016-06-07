var test = require('tape'),
    fs = require('fs'),
    path = require('path'),
    Templator = require('./');


test('Templator.processFile', function(t) {
    var exampleDir = 'examples/simple-template/';

    var template = new Templator(exampleDir + 'sources/template.html');
    var output = template.processFile(exampleDir + 'sources/index.html');
    var expected = fs.readFileSync(exampleDir + 'expected-output/index.html').toString();

    t.equal(output, expected, 'processed content should match expected');
    t.end();
});

test('Templator partial templates', function(t) {
 var exampleDir = 'examples/partial-template/';

    var template1 = new Templator(exampleDir + 'sources/index.html');
    var template2 = new Templator(exampleDir + 'sources/template.html');

    var output1 = template1.processFile(exampleDir + 'sources/content.html');
    var output2 = template2.processContent(output1);

    var expected = fs.readFileSync(exampleDir + 'expected-output/content.html').toString();

    t.equal(output2, expected, 'processed content should match expected');
    t.end();
});

test('Templator custom tags', function(t) {
 var exampleDir = 'examples/custom-tags/';

    var template1 = new Templator({
        buildTag: 'build',
        defineTag: 'define',
        templateFile: exampleDir + 'sources/index.html'
    });
    var template2 = new Templator({
        buildTag: 'build',
        defineTag: 'define',
        templateFile: exampleDir + 'sources/template.html'
    });

    var output1 = template1.processFile(exampleDir + 'sources/content.html');
    var output2 = template2.processContent(output1);

    var expected = fs.readFileSync(exampleDir + 'expected-output/content.html').toString();

    t.equal(output2, expected, 'processed content should match expected');
    t.end();
});
