import React                    from 'react';
import { match, RouterContext } from 'react-router';
import { renderToString }       from 'react-dom/server';
import routes                   from '../src/js/routes';
import Html                     from '../src/js/html';

function serverRendering(req, res) {
  match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
    if ( err ) {
      return res.status(500).end(err);
    } else if ( redirectLocation ) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if ( !renderProps ) {
      return res.status(404).end('Not found.');
    }

    if ( process.env.NODE_ENV === 'development' ) {
      webpackIsomorphicTools.refresh();
    }

    const initialView = (
      <Html assets={webpackIsomorphicTools.assets()}>
        <RouterContext {...renderProps} />
      </Html>
    );

    const resHtml = renderToString(initialView);

    res.end('<!doctype html>\n' + resHtml);
  });
}

export default serverRendering;
