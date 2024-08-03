import express, { Router } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// cross origin resource sharing
// - allowing requests from different origins and
//  allowing the requests with credentials and authorization headers
app.use(
  cors({
    origin: [process.env.CORS_ORIGIN_VERCEL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// to parse the incoming json data from the requests
// also limiting the max-size of the payload
// to prevent massive requests that could cause denial of service attacks.
app.use((req, res, next) => {
  if (req.originalUrl.includes("/payment/webhook")) {
    next();
  } else {
    express.json({
      limit: "16kb",
    })(req, res, next);
  }
});

// parses incoming requests the contain url-encoded form data (mostly strings)
// extended set to true to handle complex objects and arrays nested in the form data.
app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  })
);

// serves static files for the incoming requests directly through middleware
// Improved performance, Reduced server load.
app.use(express.static("public"));

// intercepts the requests to the server that have cookies
// parses the cookie header and stores the cookie data in req.cookies object
// this data becomes accessible to the route handlers.
app.use(cookieParser());

// routes
import userRouter from "./routes/user.routes.js";
import productRouter from "./routes/product.routes.js";
import cartRouter from "./routes/cart.routes.js";
import orderRouter from "./routes/order.routes.js";
import paymentRouter from "./routes/payment.routes.js";

app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/cart", cartRouter);
app.use("/api/v1/orders", orderRouter);
app.use("/api/v1/payment", paymentRouter);

export default app;
