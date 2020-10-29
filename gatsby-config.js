require('dotenv').config();

const queries = require('./src/utils/algolia_queries');

module.exports = {
    siteMetadata: {
        title: `My Blog`,
        position: `Backend Developer`,
        description: `A blog about frontend development and other cool stuff`,
        author: `@myblog`,
        siteUrl: `https://johndoe.com.br`,
    },
    plugins: [
        `gatsby-plugin-transition-link`,
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `uploads`,
                path: `${__dirname}/static/assets/img`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: `${__dirname}/posts`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-algolia-search`,
            options: {
                appId: process.env.GATSBY_ALGOLIA_APP_ID,
                apiKey: process.env.ALGOLIA_ADMIN_KEY,
                indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
                queries,
                chunkSize: 10000, // default: 1000
                enablePartialUpdates: true,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `John Doe`,
                short_name: `John Doe`,
                start_url: `/`,
                background_color: `#16202c`,
                display: `minimal-ui`,
                icon: `static/assets/img/favicon.png`,
            },
        },
        `gatsby-plugin-typescript`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-relative-images',
                        options: {
                            name: 'uploads',
                        },
                    },
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 960,
                            linkImagesToOriginal: false,
                        },
                    },
                    `gatsby-remark-lazy-load`,
                    `gatsby-remark-prismjs`,
                ],
            },
        },
        `gatsby-plugin-offline`,
    ],
};
