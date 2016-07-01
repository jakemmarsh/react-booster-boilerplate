import WebpackIsomorphicToolsPlugin from 'webpack-isomorphic-tools/plugin';

export default {
  assets: {
    images: {
      extensions: ['png', 'jpg', 'gif', 'ico', 'svg']
    },
    styles: {
      extensions: ['scss'],
      filter: function(module, regularExpression, options, log) {
        if ( process.env.NODE_ENV === 'development' ) {
          return WebpackIsomorphicToolsPlugin.style_loader_filter(module, regular_expression, options, log);
        }
      },
      path: WebpackIsomorphicToolsPlugin.style_loader_path_extractor,
      parser: WebpackIsomorphicToolsPlugin.css_loader_parser
    }
  }
};
