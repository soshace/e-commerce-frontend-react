module.exports.security = {
  oauth: {
    version: '2.0',
    token: {
      length: 32,
      expiration: 3600
    }
  },
  server: {
    url: process.env.SERVER_URL || 'http://localhost:1337'
  }
};
