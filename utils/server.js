const Hapi = require('hapi');
const inert = require('inert');

const server = Hapi.server({
  port: '8000'
});

// start server
const start = async () => {
  await server.register(inert);

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: '.'
      }
    }
  });

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};


process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

start();
