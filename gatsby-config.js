const isDevEnv = process.env.NODE_ENV === 'development';
const siteUrl = isDevEnv
  ? 'http://localhost:8000'
  : 'https://yashb.gatsbyjs.io';

module.exports = {
  siteMetadata: {
    siteUrl: siteUrl,
    title: 'Yash Brahmkshatriya',
    titleTemplate: '%s | Portfolio',
    description: 'Competitive Coder | Full Stack Web Developer',
    image: '/images/dp.png',
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    `gatsby-plugin-robots-txt`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'YashBrahmkshatriya',
        short_name: 'YashBrahmkshatriya',
        start_url: '/',
        icon: 'src/images/logo.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'experience',
        path: `${__dirname}/content/experience`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: `${__dirname}/content/projects`,
      },
    },
  ],
};
