import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import http from 'http';

let app = express();
app.use(express.static('client'));
app.listen(3000, () => {
	console.log('Listening on port 3000...');
});