exports.createPages = ({ actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: '/**',
    toPath: 'https://yashb.vercel.app',
    statusCode: 200,
    isPermanent: true,
  });
};
