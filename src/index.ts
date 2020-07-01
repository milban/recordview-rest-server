import express, { Express } from 'express';

import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { Photo } from './entity/Photo';

const connection = createConnection()
  .then(async (connection) => {
    console.log('🛠 database is connected');

    const photo = new Photo();
    photo.name = 'Me and Bears';
    photo.description = 'I am near polar bears';
    photo.filename = 'photo-with-bears.jpg';
    photo.views = 1;
    photo.isPublished = true;

    const _photo = await connection.manager.save(photo);
    console.log('Photo has been saved. Photo id is', _photo.id);
  })
  .catch((error) => console.log(error));

const app: Express = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () =>
  console.log(`🚀Example app listening at http://localhost:${port}`)
);
