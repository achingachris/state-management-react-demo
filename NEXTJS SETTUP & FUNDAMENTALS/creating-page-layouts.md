## What is a Layout?

A layout is a replica of features or components that are repeated throughout a web page or an application.

For example, in a web app, we can have all pages sharing the same navigation bar/menu and a footer. (That is the layout).

Creating a layout in NextJS saves you time and also ensures that there is uniformity on your platform.

A layout is just a component:

```js
// components/layout.js

import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
```

## How it's created:

It's a simple 3-Way process:

1. Create The layout component
2. Import it on the pages
3. Use it as the parent tag

## Create The layout component

### Step 1 - `layout` directory

At the root of the project, create a new folder, `layouts`.

Inside the `layouts` folder, let's create a new file: `Layout.js`.

Go ahead and create a Layout component:

```js
const Layout = () => {
    return (
        <div>
            // code and good vibes
        </div>
    )
}

export default Layout
```

### Step 2: Navigation and Footer

In the `layout` directory, we will create two more files for the Navigation bar and Footer.

>Note that you can as well add navigation and footer directly in the `Layout.js`, but we need clean and short code right!

The two new files:

`Navigation.js` & `Footer.js`

Let's add some code to the files:

For the `Navigation.js`, add the

```js
const Navigation = () => {
  return (
    <nav
      className='navbar navbar-expand navbar-dark bg-dark'
      aria-label='Second navbar example'
    >
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          Jamstack
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarsExample02'
          aria-controls='navbarsExample02'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarsExample02'>
          <ul className='navbar-nav me-auto'>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='#'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Link
              </a>
            </li>
          </ul>
          <form>
            <input
              className='form-control'
              type='text'
              placeholder='Search'
              aria-label='Search'
            />
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

```

For the `Footer.js`, add the

```js
const Footer = () => {
  return (
    <div className='container'>
      <footer className='py-3 my-4'>
        <ul className='nav justify-content-center border-bottom pb-3 mb-3'>
          <li className='nav-item'>
            <a href='#' className='nav-link px-2 text-muted'>
              Home
            </a>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link px-2 text-muted'>
              Features
            </a>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link px-2 text-muted'>
              Pricing
            </a>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link px-2 text-muted'>
              FAQs
            </a>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link px-2 text-muted'>
              About
            </a>
          </li>
        </ul>
        <p className='text-center text-muted'>&copy; 2022 Jamstack, Inc</p>
      </footer>
    </div>
  )
}

export default Footer

```

The code above is just a normal React Component, with JSX embedded in it.

### Step 3 - Adding `Navigation` and `Footer` to `Layout`

The final step is to import the `Navigation.js` and `Footer.js` into our `Layout.js` file:

```js
import Navigation from './Navigation'
import Footer from './Footer'

const Layout = () => {
  return (
    <>
      <Navigation />
      <main>{/* Page Content goes here */}</main>
      <Footer />
    </>
  )
}

export default Layout
```

## Import it on the pages

To use the layout we created above, we will have to parse it a parent component to all the pages i.e. it will be an `HTML` tag: `<Layout></Layout/>` as opposed to how components are normally used: `<Component />`

To do that, we will add a prop to the `Layout` component: `children`.

The `children` component in react a special prop, automatically passed to every component, that can be used to render the content included between the opening and closing tags when invoking a component.

```js
import Navigation from './Navigation'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main>{/* Page Content goes here */}</main>
      <Footer />
    </>
  )
}

export default Layout
```

And since we would want to put all page content inside the `main` tag, we will pass the component in between the `main` tag:

The final `Layout.js`:

```js
// importing the layout file
import Layout from "../layouts/Layout"

const index = () => {
  return (
    // using the Layout as the parent jsx tag
    <Layout>
      Ahaa
    </Layout>
  )
}

export default index

```

## Running The Updates

By using the `<Layout>` as the parent tag in the `index.js` file, we pass in the themes and page layout through it.

Run the updates to see what happens.

On your terminal:

```shell
 npm run dev
```

![](/api/collection/4514957061783552/4997079427973120/page/6644334677458944/image/4900620124815360?page_type=collection_lesson)

YAAY! It works ...
