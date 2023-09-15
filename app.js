require("express-async-errors");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const path = require("path");
require("dotenv").config();

const corsOptions = {
    origin: "http://yourfrontenddomain.com", // Replace with your frontend's domain
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"], // Specify the allowed HTTP methods
};

// connect to DB
const connectDB = require("./db/connect");
const authenticateUser = require("./middleware/authentication");

//routers
const authRouter = require("./routes/auth");
const jobsRouter = require("./routes/jobs");

//error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(express.json());
app.use(cors());

//routes
app.use(express.static(path.join(__dirname, "../JobTrackr")));
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", authenticateUser, jobsRouter);
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../JobTrackr/index.html"));
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        console.log(error);
    }
};

start();
