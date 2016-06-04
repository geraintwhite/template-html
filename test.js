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

// test('Templator.processFile', function(t) {
//  var exampleDir = 'examples/nested-template/';

//     var template = new Templator(exampleDir + 'sources/template.html');
//     var output = template.processFile(exampleDir + 'sources/index.html');
//     var expected = fs.readFileSync(exampleDir + 'expected-output/index.html').toString();

//     t.equal(output, expected, 'processed content should match expected');
//     t.end();
// });
