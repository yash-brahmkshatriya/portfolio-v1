const isDevEnv = process.env.NODE_ENV === 'development';
const siteUrl = isDevEnv ? 'http://localhost:8000' : '';

module.exports = {
  siteMetadata: {
    siteUrl: siteUrl,
    title: 'Yash Brahmkshatriya',
    titleTemplate: '%s | Portfolio',
    description: 'Competitive Coder | Full Stack Web Developer',
    image: '/images/yash.png',
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    // 'gatsby-source-filesystem',
  ],
};
