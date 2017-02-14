import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

let app = express();
app.use(express.static('client'));