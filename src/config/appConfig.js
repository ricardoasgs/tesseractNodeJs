import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const port = process.env.PORT || '3001';

const app = express();

app.listen(port);
app.use(bodyParser.urlencoded({limit: '100mb', extended: true }));
app.use(bodyParser.json({limit: '100mb'}));
app.use(cors());

export default app;
