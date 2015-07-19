var path = require('path');
var fs = require('fs');
var ul = require('ul');


var Templator = function(options) {
  if (typeof options === 'string') {
    options = {
      templateFile: options,
    };
  }

  options = ul.merge(options, {
    tag: 'build'
  });

  if (typeof options.templateFile !== 'string') {
    throw new Error('No template file provided');
  }

  options.templateFile = path.resolve(options.templateFile);

  this.template = fs.readFileSync(options.templateFile).toString();
  this.options = options;
};

Templator.prototype.processFile = function (contentFile) {
  return this.processContent(fs.readFileSync(contentFile).toString());
};

Templator.prototype.processContent = function (content) {
  var tag = this.options.tag;
  var regMark = new RegExp('<!--\\s*' + tag + ':([^\\s]+)\\s*-->', 'g');

  function genRegex(name) {
    return new RegExp(
      '<!--\\s*' + tag + ':' + name + '\\s*-->' +
      '((.|[\\r\\n])+)' +
      '<!--\\s*\\/' + tag + ':' + name + '\\s*-->'
    );
  }

  return this.template.replace(regMark, function (match, name) {
    var find = content.match(genRegex(name));
    return find ? find[1] : match;
  });
};

module.exports = Templator;
