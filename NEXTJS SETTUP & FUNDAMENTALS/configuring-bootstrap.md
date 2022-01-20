## Using CSS

Creating a website without *CSS* is like a walking human skeleton.

NextJs brings various options to the table.

We will go through using the built-in CSS and Bootstrap.

## Bootstrap Configuration

[Bootstrap](https://getbootstrap.com/) is an open-source CSS framework that is responsive for front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.

It is built on simple CSS and SCSS and we can customize it to our needs.

## 1. Installing bootstrap

Install bootstrap from your terminal/CMD. (Ensure you are in the main directory)

```
npm install bootstrap
```

or 

```
yarn add bootstrap
``` 

You can confirm installation by looking at the `package.json` file, under the `"dependencies"`

```json
{
 ---
  "dependencies": {
    "bootstrap": "^5.1.3",
    "next": "12.0.7",
    "react": "17.0.2",
    "react-dom": "17.0.2"
  },
---
```

## 2. Loading Bootstrap
To do that, we will import from `node_modules` at our project's entry point, `/pages/_app.js`.

Initially, the file contents are:

```javaScript
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

```

We will import bootstrap above the line that imports global CSS:

```js
import '../styles/globals.css'
```

Add the following line to import bootstrap:

```js
import 'bootstrap/dist/css/bootstrap.css'
```


