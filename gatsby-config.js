const isDevEnv = process.env.NODE_ENV === 'development';
const siteUrl = isDevEnv
  ? 'http://localhost:8000'
  : 'https://yashb.gatsbyjs.io';

const description =
  'Full stack developer, competitive coder, and VSCode lover 😜';
module.exports = {
  siteMetadata: {
    siteUrl: siteUrl,
    title: 'Yash Brahmkshatriya',
    titleTemplate: '%s | Portfolio',
    description,
    image: '/logo.png',
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'YashBrahmkshatriya',
        short_name: 'YashBrahmkshatriya',
        description,
        start_url: '/',
        icon: 'src/images/logo.png',
        theme_color: '#04C3C9',
        background_color: '#1B212C',
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
