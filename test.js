var test = require('tape'),
    fs = require('fs'),
    path = require('path'),
    Templator = require('./');


test('Templator.processFile', function(t) {
    var template = new Templator('examples/template.html');
    var output = template.processFile('examples/index.html');
    var expected = fs.readFileSync('examples/output.html').toString();

    t.equal(output, expected, 'processed content should match expected');
    t.end();
});
