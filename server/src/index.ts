// this shim is required
import { createExpressServer } from "routing-controllers";
import { GreetingController } from "./controllers/GreetingController";

const run = async () => {
  // creates express app, registers all controller routes and returns you express app instance
  const app = createExpressServer({
    cors: true,
    controllers: [GreetingController], // we specify controllers we want to use
  });

  // run express application on port 5000
  app.listen(5000);
};

run();
