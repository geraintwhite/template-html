var test = require('tape'),
    fs = require('fs'),
    Templator = require('./'),
    cli = require('./cli');


test('Templator simple template', function(t) {
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

test('Templator preserve directory structure', function(t) {
    var exampleDir = 'examples/preserve-tree/';

    process.chdir(exampleDir);

    cli({
      output: 'build',
      preserveTree: true,
      templateFile: 'sources/template.html',
      files: ['sources/file1/index.html', 'sources/file2/index.html'],
    });

    var output1 = fs.readFileSync('build/sources/file1/index.html').toString();
    var output2 = fs.readFileSync('build/sources/file2/index.html').toString();

    var expected1 = fs.readFileSync('expected-output/sources/file1/index.html').toString();
    var expected2 = fs.readFileSync('expected-output/sources/file2/index.html').toString();

    t.equal(output1, expected1, 'processed content should match expected');
    t.equal(output2, expected2, 'processed content should match expected');
    t.end();
});
