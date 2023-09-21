exports.createPages = async ({ actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: '/*',
    toPath: 'https://yashb.vercel.app',
    statusCode: 301,
  });
};
