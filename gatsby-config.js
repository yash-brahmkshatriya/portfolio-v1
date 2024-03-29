const isDevEnv = process.env.NODE_ENV === 'development';
const DEV_PORT = process.env.DEV_PORT ?? '8000';
const PROD_URL = process.env.PROD_URL ?? 'https://yashb.vercel.app';
const siteUrl = isDevEnv ? `http://localhost:${DEV_PORT}` : PROD_URL;

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
