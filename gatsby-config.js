module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'tutorial',
    description: 'just some description about our site',
    author: '@johndoe',
    data: { name: 'john', age: 25 },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
  ],
}
