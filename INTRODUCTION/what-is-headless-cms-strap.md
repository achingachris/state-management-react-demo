## Headless CMS

>Headless CMS (Content Managemnt System)

A Headless CMS is back-end only Content Management System that is the primary 
source of content management on website/application.

## How Headless CMS Work

Headless CMS have in-built RESTfull APIs/Graph APis that let you connect to your static site/front-end application.

There is no creating the backend from scratch, all you do is create your data types for the content you desire, create the content and an endpoint is provided for the data to be fed to your frontend application

An Example of a user case:

When creating an image gallery, you'll have a data collection called **images**, the API endpoint would be(with both GET/PUT/DELETE methods):

```
host/images/
host/images/:id
host/images/count
```

## Strapi CMS

>What is Strapi CMS?

[Strapi](https://strapi.io/) is an open source Headless CMS that is built on [NodeJS](https://nodejs.org/en/).

It gives developers and content editors a wide range of customizable tools and frameworks to work with, and the most interesting part, it can be integrated into any paltform.
