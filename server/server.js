import Koa from 'koa';
import views from 'co-views';
import route from 'koa-route';
import serve from 'koa-static';
import config from '../config';
import debug from 'debug';

const app = new Koa();
const port = process.env.PORT || config.server.port;
const render = views(process.cwd() + '/client/templates', { map: { html: 'swig' } });
const d = debug('app:server');

const site = {
  *index() {
    this.body = yield render('index');
  },
};


app.use(serve(process.cwd() + '/client/public'));
app.use(route.get('/', site.index));

app.listen(port, function initServer() {
  d(`Server listening on port ${port} at ${new Date()}`);
});
