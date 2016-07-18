# Aphrodite Todomvc Example

Most of this code was lifted from [TJ's Frontend Boilerplate](https://github.com/tj/frontend-boilerplate). I replaced CSS Modules with [Aphrodite](https://github.com/Khan/aphrodite) inline styles. I also added a build step which creates a static version of the app and inlines the Aphrodite styles into the html.

## Development

```
npm start
```

## Production Build and Run

The following commands will build the app to `static/` with the aphrodite styles dehydrated and included inline in the html, and run it:

```
npm run build
cd static/
python -m SimpleHTTPServer 3001
```
