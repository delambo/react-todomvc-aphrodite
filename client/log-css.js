
// This script will log the bootstrap contents
// for loading the app and its css isomorphically.

// Instructions - execute the following:
//   npm run log-css

import React from 'react';
import { renderToString } from 'react-dom/server'
import { StyleSheetServer } from 'aphrodite';
// import App from './index'
import App from './containers/App/'

import { Provider } from 'react-redux'
import configure from './store'
const store = configure()

// Render the app to extract the css and html.
var {html, css} = StyleSheetServer.renderStatic(() => {
    return renderToString(<Provider store={store}><App/></Provider>);
});

// The css that would be rendered into the page.
console.log(css.content)

// The bootstrap data that would be used for rehydration:
// Stylesheet.rehydrate(JSON.stringify(css.renderedClassNames))
console.log('\n', css.renderedClassNames)
