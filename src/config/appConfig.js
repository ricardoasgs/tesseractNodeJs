import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const port = process.env.PORT || '3000';

const app = express();

app.listen(port);
app.use(bodyParser.urlencoded({limit: '50mb', extended: true }));
app.use(bodyParser.json({limit: '50mb'}));
app.use(cors());

export default app;