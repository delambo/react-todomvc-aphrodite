
// This script will create a static index.html
// with styles compiled inline. To build a static
// production version of the app, run the following:
//
//  npm run build
//  cd static/
//  python -m SimpleHTTPServer 3001
//

import React from 'react';
import { renderToString } from 'react-dom/server'
import { StyleSheetServer } from 'aphrodite';
import App from './containers/App/'
import fs from 'fs'

import { Provider } from 'react-redux'
import configure from './store'
const store = configure()

// Render the app to extract the css and html.
let {html, css} = StyleSheetServer.renderStatic(() => {
  return renderToString(<Provider store={store}><App/></Provider>);
});
 
fs.writeFile('./static/index.html', `

<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Boilerplate Todos</title>
    <style>
      html,
      body {
        margin: 0;
        padding: 0;
      }

      body {
        font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
        line-height: 1.4em;
        background: #f5f5f5;
        color: #4d4d4d;
        min-width: 230px;
        max-width: 550px;
        margin: 0 auto;
        -webkit-font-smoothing: antialiased;
        -moz-font-smoothing: antialiased;
        -ms-font-smoothing: antialiased;
        font-smoothing: antialiased;
        font-weight: 300;
      }
    </style>
    <style data-aphrodite>${css.content}</style>
  </head>
  <body>
    <div id="root"></div>
    <!-- This script adds the Roboto font to our project. For more detail go to this site:  http://www.google.com/fonts#UsePlace:use/Collection:Roboto:400,300,500 -->
    <script>
      var WebFontConfig = {
        google: { families: [ 'Roboto:400,300,500:latin' ] }
      };
      (function() {
        var wf = document.createElement('script');
        wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
          '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
      })();
    </script>

    <script>
      window.styles = ${JSON.stringify(css.renderedClassNames)};
    </script>

    <script src="/vendor.bundle.js"></script>
    <script src="/bundle.js"></script>

  </body>
</html>

`, function (err) {
  if (err) throw err;
  console.log('Saved static/index.html');
});
