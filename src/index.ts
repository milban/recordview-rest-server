import express, { Express } from 'express';

import 'reflect-metadata';
import { createConnection } from 'typeorm';

const connection = createConnection()
  .then((connection) => {
    console.log('⌗ database is connected');
  })
  .catch((error) => console.log(error));

const app: Express = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () =>
  console.log(`🚀Example app listening at http://localhost:${port}`)
);
