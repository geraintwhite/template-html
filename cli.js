var Templator = require('./'),
    fs = require('fs'),
    mkdirp = require('mkdirp'),
    path = require('path');


module.exports = function(options) {
  var template = new Templator({
    tag: options.tag,
    buildTag: options.buildTag,
    defineTag: options.defineTag,
    templateFile: options.templateFile,
  });

  options.files.forEach(function (file) {
    var content = template.processFile(file);
    var filepath = path.resolve(options.output, options.preserveTree ? file : path.basename(file));

    mkdirp.sync(path.dirname(filepath));
    fs.writeFileSync(filepath, content);
  });
};
