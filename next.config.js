const { phase, PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = () => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: 'nextJSadmin',
        mongodb_password: '6xMzlnlJreobvvVk',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'my-site-dev',
      },
    };
  }

  return {
    reactStrictMode: true,
    env: {
      mongodb_username: 'nextJSadmin',
      mongodb_password: '6xMzlnlJreobvvVk',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'my-site',
    },
  };
};
