import express from 'express';
const app = express();
import taskRouter from "./routes/task.route";
import userRouter from "./routes/user.route";
import otpRouter from "./routes/otp.router";

//Body Parser Implementation
import bodyParser from 'body-parser';
app.use(bodyParser.json());


//Security Middleware
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import hpp from 'hpp';
import cors from 'cors';

//Database
import mongoose from 'mongoose';

//Security Middleware Implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());

app.use(express.json({limit: '50mb'}));


//Rate Limiter
const limiter = rateLimit({windowMs: 15 * 60 * 1000, max: 3000});

//Database
let URI = process.env.DATABASE_URL;
let OPTION = {user: '', pass: '', autoIndex: true};
mongoose
    .connect(URI, OPTION)
    .then((res) => {
        console.log('Database Connection Successful!');
    })
    .catch((err) => {
        console.log('Database Connection Failed!');
    });


// Managing BackEnd API Routing
app.use('/api/v1', userRouter);
app.use('/api/v1', otpRouter);
app.use('/api/v1', taskRouter);


export default app;