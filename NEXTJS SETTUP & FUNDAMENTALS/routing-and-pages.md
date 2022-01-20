## Pagination in React

Normally react renders the website into a SPA (Single Page Application). So creating a website that requires more than one page, there are some configurations to be done, like using `react-router`

## Pagination in NextJS

NextJS has made it easier and simple to create pages with ease.

Here's how to do it:

At the root of the project, there is a directory, `pages`.

All pages will be rendered from that specific directory.

To create say "about" page, simply create an `about.js` file inside the `pages` directory.

Let's go into our working directory and create a simple `about/` page:

Inside the `pages` directory, create a new file: `about.js`, and add the following:

```javascript
import Layout from '../layouts/Layout'

const about = () => {
    return (
        <Layout>
           About Page 
        </Layout>
    )
}

export default about
```

The above file contains the `about` component, and the layout we created in the previous topic.

And when you head over to `http://localhost:3000/`, you get to see:
![about page](/api/collection/4514957061783552/4997079427973120/page/4973557167161344/image/5031732792786944?page_type=collection_lesson)

## Creating Dynamic routes

When dealing with complex applications or full-stack websites, say a blogging site, most of the routes won't be pre-determined. They will be fetching varying data content.

In NextJS that is easily achievable. In the pages directory use the following file naming syntax: `[(parameter)].js`. A use-case example:

When creating a URL with a slug:

[slug].js 

In the `pages` directory, create a file: `[slug].js`:
![](/api/collection/4514957061783552/4997079427973120/page/4973557167161344/image/6447877882118144?page_type=collection_lesson) 

```js
import Layout from '../layouts/Layout'
const detailsPage = () => {
    return (
        <Layout>
            This is a dynamic page
        </Layout>
    )
}

export default detailsPage
```

To access the page, use any slug format:
`http://localhost:3000/a-test` or `http://localhost:3000/educative-is-cool`.
![](/api/collection/4514957061783552/4997079427973120/page/4973557167161344/image/6701248287342592?page_type=collection_lesson)

When creating a URL with an ID:

[id].js

The same can be done with an id:

(Exercise)
