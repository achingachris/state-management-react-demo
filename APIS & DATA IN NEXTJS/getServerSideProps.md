## Data Fetching: getServerSideProps()

This is data fetching done through Server-side rendering, thus the name: `getServerSideProps()`

When this is used, Next.JS will pre-render the page on each request using data returned by `getServerSideProps()`.

It fetches the data first before sending the page to the client. The one big downside of using this method is that once the server is down, no data will be returned, and the page won't be rendered as expected.

## Hands On Code

We will be using the endpoint we created from the previous chapter to practice with the `getServerSideProps()` while fetching data.

`http://localhost:3000/api/aircraft`

To do so, we will go back to our working directory. Inside the `pages/`, create a new file: `aircraft-serverside.js`, and add the following boiler plate:

```js
import Layout from '../layouts/Layout'
const airCraftServerSide = () => {
    return (
        <Layout>
            <div className="container">
                <h1 className='text-center m-3'>Aircraft</h1>
            </div>
        </Layout>
    )
}
export default airCraftServerSide
```

This will have its own URL `aircraft-serverside`, where we'll fetch data from the endpoint created earlier.

### Using getServerSideProps()

At the bottom of the file, we'll add the following code:

```js
export async function getServerSideProps() {
    const res = await fetch('')
    const data = await res.json()

    return {
        props: {
            data
        }
    }
}
```

The function is asynchronous.

Note we use the normal fetch API inside the function: `const res = await fetch('<API End Point>')`, and getting the data in a JSON format: `const data = await res.json()`

We will add the API endpoint inside the `fetch()` :

```javascript
const res = await fetch('http://localhost:3000/api/aircraft')
```

So when we update the code to:

```javascript
export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/aircraft')
  const aircraft = await res.json()

  console.log(aircraft)

  return {
    props: {
      aircraft,
    },
  }
}
```
Run the local server and go to `http://localhost:3000/aircraft-serverside` and observe the terminal:

![](/api/collection/4514957061783552/4997079427973120/page/5192294684164096/image/5803462079545344?page_type=collection_lesson)

We added the code snippet: ` console.log(aircraft)` to display results, but since it runs from the server-side, they were displayed from the terminal.




