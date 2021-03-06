import express from 'express';
import morgan from 'morgan';
import serveIndex from 'serve-index';
import serveStatic from 'serve-static';

const app = express();

app.get('/favicon.ico', (_, res) => res.status(404).send());
app.use(morgan(process.env.HTTP_LOG_FORMAT || 'dev'));

app.use(serveStatic('/', {
  dotfiles: 'allow',
}));

app.use(serveIndex('/', {
  hidden: true,
  icons: true,
}));

export default app;
