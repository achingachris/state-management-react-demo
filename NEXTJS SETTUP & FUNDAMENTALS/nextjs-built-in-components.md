## NextJS Built in Components

One of the things making NextJS the perfect tool is that it comes with a number of built-in features that give out-of-the-box tools.

This means you'll use fewer third-party packages making your site light and faster(also secure).

Let's explore some of them:

### Link

>`import Link from 'next/link'`

The `Link` component is used for routing for client-side routes. It works the same way as HTML's `<a></a>`:

```js
<Link href="/">
   <a>Home</a>
</Link>

<Link href="/about">
   <a>About Us</a>
</Link>
```
https://nextjs.org/docs/api-reference/next/link

### Image

>`import Image from 'next/image'`

The `Image` component is used in rendering images in a NextJS application.

```js
    <Image
      src="me.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />
```

https://nextjs.org/docs/api-reference/next/image

### Head

>`import Head from 'next/head'`

The `Head` component imitates the normal `<head>` tag in HTML.

This is a big save as normal, one would use third-party npm packages like `Helmet` to add `<meta />` tags and `<links>` for CDN.

```js
<Head>
  <title>My page title</title>
  <meta name="viewport" content="initial-scale=1.0, width=device-width" />
</Head>
```

https://nextjs.org/docs/api-reference/next/head

>We will be exploring in-depth practically how to use the components and more built-in components from Nextjs ecosystem.

