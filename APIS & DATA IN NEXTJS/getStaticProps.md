## Fetching Data Using getStaticProps

getStaticProps function is more fitting for more static pages that have fewer changes.

We will practice this differently.

In the `index.js` we will create the `getStaticProps()` function:

```javascript

export function getStaticProps() {
  return {
    props: { aircraft: 'Airbus A350-941' },
  }
}
```

In the function, we passed in the data directly to our prop, aircraft. (Yes! we can do that too)

We then pass in the prop `aircraft` inside the page function.

```javascript
const index = ({aircraft}) => {
  return <Layout>Ahaa

    <div>
      { aircraft}
    </div>
  </Layout>
}
```

To display the data on the page, we simply use the prop `aircraft`, as a variable:

`<h2>Aircraft Name: { aircraft}</h2>`

```javascript
const index = ({aircraft}) => {
  return <Layout>Ahaa

    <div>
      <h1>Aircraft Name: { aircraft}</h1>
    </div>
  </Layout>
}
```

