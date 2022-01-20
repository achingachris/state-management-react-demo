## What is NextJS

[NextJs](https://nextjs.org/) is a front-end framework built on ReactJs.

It's created and maintained by Vercel, and it gives amazing functionalities in Server-side rendering and static site generation.

## Before Diving into NextJS

Since it's a React-based framework, it is important to know key aspects of ReactJS like:

- Props
- Components
- JSX
- State Management

Have a look at the code sample below:

```js
// creating a component

const UserCard = ({ data }) => {
  return (
    <div>
      <div className='container card'>
        <h3>{data.name}</h3>
        <p className='bio'>
          {data.bio}
        </p>
      </div>
    </div>
  )
}

export default UserCard
```

## Awesome NextJS Features

NextJS has out-of-the-box features that make it easier to build an app from scratch to production in no time:

### ​Easy routing
There is no need of using react router to configure routes.
To get a /about page, simply create a `about.js` inside the `page/` directory.

```js
function About() {
  return <div>About</div>
}

export default About
```

You can also have dynamic routes that take parameters:

/blog/post/4638292661

This is simple done by creating a file:
`[id].js`. 

### Data Fetching
Data fetching has been made easier in NextJs.
You can get data either statically or server-side rendered. All ensure on key top performance.

In addition to that, it has built in API. For example, you are creating API for city roads, you create a file:

`pages/api/cityroads.js`

```javascript
export default function handler(req, res) {
  res.status(200).json({ name: 'Moi Avenue' })
}
```

In addition to all that we will explore all the features as we proceed with the course and working on the course project. They include:

- Image Optimization
- Font Optimization
- Sass
- Layouts
