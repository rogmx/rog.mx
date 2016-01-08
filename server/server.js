import Koa from 'koa';
import serve from 'koa-static';
import config from '../config';
import debug from 'debug';

const app = new Koa();
const port = process.env.PORT || config.server.port;
const d = debug('app:server');

app.use(serve(process.cwd() + '/client/public'));

app.listen(port, function initServer() {
  d(`Server listening on port ${port} at ${new Date()}`);
});
