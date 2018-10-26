const md = require('markdown-it')();
const slugify = require('transliteration').slugify;

const striptags = require('./strip-tags');

function convert(str) {
  str = str.replace(/(&#x)(\w{4});/gi, function($0) {
    return String.fromCharCode(
      parseInt(
        encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'),
        16
      )
    );
  });
  return str;
}

function wrap(render) {
  return function() {
    console.log('\n', render.apply(this, arguments), '\n');

    return render
      .apply(this, arguments)
      .replace('<code v-pre class="', '<code class="hljs ')
      .replace('<code>', '<code class="hljs">');
  };
}

const webpackConfig = {
  raw: true,
  use: [
    [
      require('markdown-it-anchor'),
      {
        level: 2,
        slugify: slugify,
        permalink: true,
        permalinkBefore: true,
      },
    ],
    [
      require('markdown-it-container'),
      'demo',
      {
        validate: function(params) {
          return params.trim().match(/^demo\s*(.*)$/);
        },
        render: function(tokens, idx) {
          var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
          if (tokens[idx].nesting === 1) {
            var description = m && m.length > 1 ? m[1] : '';
            var content = tokens[idx + 1].content;

            var html = convert(
              striptags.strip(content, ['script', 'style'])
            ).replace(/(<[^>]*)=""(?=.*>)/g, '$1');

            var descriptionHTML = description ? md.render(description) : '';

            return `<demo-block class="demo-box">
                      <div class="source" slot="source">${html}</div>
                      <div class="description">${descriptionHTML}</div>
                      <div class="highlight" slot="highlight">\n`;
          }
          return '</div></demo-block>\n';
        },
      },
    ],
  ],
  preprocess: function(MarkdownIt, source) {
    MarkdownIt.renderer.rules.table_open = function() {
      return '<table class="table">';
    };
    MarkdownIt.renderer.rules.fence = wrap(MarkdownIt.renderer.rules.fence);
    return source;
  },
};

module.exports = webpackConfig;
