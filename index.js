var xml2js = require('xml2js');
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

  this.template = fs.readFileSync(options.templateFile);
  this.options = options;
};

Templator.prototype.processFile = function (contentFile) {
  return this.processContent(fs.readFileSync(contentFile).toString());
};

Templator.prototype.processContent = function (content) {
  xml2js.parseString(this.template, function(err, result) {
    console.log(result);
  });
};

module.exports = Templator;
