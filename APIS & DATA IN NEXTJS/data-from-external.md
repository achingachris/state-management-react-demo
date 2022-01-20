## External Data Sources

Sometimes we may be building applications that will require us to use data from other platforms.

There are alot of Public APIs that can be used to get data, and exampe of a site offering multiple APIs, both free and paid is https://rapidapi.com/

In this demo I will use *Random User Generator API* to demonstrate on that.

https://randomuser.me/

You can use either `getStaticProps` or `getServerSideProps` to get the data:

```js
export async function getServerSideProps() {
  const data = await fetch("https://randomuser.me/api").then((res) =>
    res.json()
  );

  return {
    props: { name: data.results[0].name.first },
  };
}
```

