/**
 * Required External Modules
 */

 import * as dotenv from "dotenv";
 import express from "express";
 import cors from "cors";
 import helmet from "helmet";
 import { routes } from './routes/index';
 import mongoose from "mongoose";
 
 dotenv.config();

 /**
 * App Variables
 */

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DB as string, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  useFindAndModify: false,
}, (err) => {
  console.log(err);
  
  console.log(`Connected to DB ${process.env.DB}`);
});

 /**
 * Server Activation
 */


app.use('/v1/', routes);

process.on('uncaughtException', (error) => {
  console.log(error);
});
process.on('unhandledRejection', (error) => {
  console.log(error);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

export default app;