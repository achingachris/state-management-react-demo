## Built-in API

In case you haven't noticed, there is an `api/` directory inside the `pages/` directory, with a file: `hello.js`

If you run the project:

```shell
npm run dev
```

and head over to http://localhost:3000/api/hello, you'll get a JSON format text:

The URL is an Endpoint

```JSON
{
name: "John Doe"
}
```

![json-response-view](/api/collection/4514957061783552/4997079427973120/page/6645159506214912/image/5773693761880064?page_type=collection_lesson).

The `hello.js` file contains:

```javascript
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
```

The code sends a response with a status code 200 and JSON data.

In this topic, we will create a dummy-data API using NextJS built-in API.

## Creating Data

What's API if there's no data to fetch? (literally nothing).

To simulate dummy data, let's create a file with some data, this' will imitate a database with stored information.

Say we want an endpoint that responds with a list of aircraft, here's a way to do it:

### Step 1

Inside the `api` directory, create a new directory, called `aircraft/`
and an `index.js` file in it.
(Guess the API endpoint ...)

### Step 2

Create a data file: `aircrafts.json` inside the `aircraft/`. Add the following JSON code. (Feel free to add your own)

```js
{
  "aircraft": [
    {
      "id": "1",
      "name": "A350",
      "type": "Long-Haul"
    },
    {
      "id": "2",
      "name": "A380",
      "type": "Long-Haul"
    },
    {
      "id": "3",
      "name": "A220",
      "type": "Short-Haul"
    },
    {
      "id": "4",
      "name": "E170",
      "type": "Short-Haul"
    },
    {
      "id": "5",
      "name": "B787",
      "type": "Long-Haul"
    }
  ]
}

```

### Step 3

Getting the data, we import the JSON data file into the `index.js` file:

```js
const aircraft = require('./aircrafts.json');
```

> Note that we are using regular js, this is because this file is rendered on the server-side.

We then get the data and display it on request:

```js
export default function handler(req, res) {
  res.status(200).json(aircraft)
}
```

Save the file, run the server, and head over to http://localhost:3000/api/aircraft

>It is easier to create your own API endpoint using NextJS, just follow the steps: create file/folder inside the `api/` directory, define your data and that is it.

## Data Fetching

In the next topic, we'll dig into data fetching using the two forms as described by NextJS:

- Server-side Rendering
- Static Generation
