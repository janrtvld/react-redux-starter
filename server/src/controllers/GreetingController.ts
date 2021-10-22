import { Controller, Get } from "routing-controllers";

@Controller()
export class GreetingController {
  @Get("/")
  greet() {
    return "Hello, user!";
  }
}
