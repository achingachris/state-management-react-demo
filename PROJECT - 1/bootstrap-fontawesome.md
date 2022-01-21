## Setting Up Bootstrap

In this project, we will not use Bootstrap CDN, rather we will install the node package, to enable us to customize styles later on in the project.

>Remember to have your terminal/CMD open and the path is on the project root.

### Installing Bootstrap

Run the following to install bootstrap:

```shell
npm install bootstrap
```
Once that is done, you can confirm installation by looking at the `package.json` file at the project root directory, under the `dependencies` section:

```JSON
  "dependencies": {
   // bootstrap added
    "bootstrap": "^5.1.3",
    "next": "12.0.8",
    "react": "17.0.2",
    "react-dom": "17.0.2"
  },
```

You'll notice the addition of `bootstrap` among the dependencies.

In addition to that, we will need to install a sass compiler, because Bootstrap is made of `.scss` files, that we will use to customize some of the styles.

```shell
npm install node-sass
```

## Configuring Bootstrap

After the successful installations, we will proceed to configurations.

Inside the `styles/` folder, create a new folder, `scss/`, and create a file `styles.scss`.

For now, we will override bootstrap's color system and add custom ones:

Inside the `styles.scss`, add the following code:

```scss
$theme-colors: (
  'primary': #0d6efd,
  'secondary': #6c757d,
  'success': #52cb21,
  'info': #0dcaf0,
  'warning': #ffc107,
  'danger': #dc3545,
  'light': #c0ccda,
  'dark': #001738,
);

@import '/node_modules/bootstrap/scss/bootstrap.scss';
```

NextJS has built-in SASS/SCSS support. What is needed is to update the `next.config.js` file, which by default contains:

```js
module.exports = {
  reactStrictMode: true,
}
```
On top of the file, import:

```js
const path = require('path')
```

Inside the:
```js
module.exports = {
  reactStrictMode: true,
}
```
add the following:
```js
 sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
```

The complete `next.config.js` file should now contain:

```js
const path = require('path')

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
```

## Importing Bootstrap

This is the final step.

We need to import the custom bootstrap into our project.

To do that we import `styles/scss/styles.css` to `pages/_app.js`:

```js
import '../styles/scss/styles.scss'
```
and just like that, we now have bootstrap CSS in our project.

## Bootstrap JS Files Configuration

Some of Bootstrap's features will require its JS files. This setup will be covered in the next topic.

## Fontawesome

I love using icons on my pages, and [Fontawesome](https://fontawesome.com/) serves me well.

Its configuration will just need us to use a CDN link, and we'll do this in the Layout setup in the next topic.

[Follow along with commit](https://github.com/achingachris/jamblog-client/commit/f0c14a9be1156e93095e38fa056c0f2c8da59d8f)
