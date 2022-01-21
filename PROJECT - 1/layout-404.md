## Website Layout

Creating a layout is now simple in React.

In the chapter '**NextJS Set-up & Fundamentals**' we walked through the process of creating layouts in NextJS. So we will put that into real practice.

At the root of the project, create a new folder, `layout/`, where we will create the layout files in it. 

>Note that you can give any name to the folder, but for simplicity and easy-to-understand project structure, I will use `layout/`

Inside the `layout/` directory, create the file `Layout.js`, which will be the main Layout file.

Let's create a simple layout:

```js
const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  )
}

export default Layout
```

We'll make a simple yet basic layout, as used globally:

1. A web menu/navigation bar
2. Footer
3. Main page/body content

## Navigation Bar

There are a lot of snippets for a web navigation component. I will grab some from [Bootstrap's Snippets I customized](https://github.com/achingachris/bootstrap-templates)

We will create a separate component for the navigation bar, inside the same `layout/` directory. The file: `NavigationBar.js`
