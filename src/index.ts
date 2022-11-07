import Logger from "./Logger";

new Logger("info", "Hello, World!")
  .next("test1").put("hi")
  .next("test2").put("hi")
  .out();