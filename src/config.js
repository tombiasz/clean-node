const toBool = value => value === 'true';

module.exports = env => ({
  restApiEnabled: toBool(env.REST_API_ENABLED),
  restApi: {
    port: env.REST_API_PORT,
  },
});
