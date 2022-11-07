import Logger from "./Logger";

new Logger("info", "Server up!") // [TIMESTAMP] (i) Server Up!
  .next("Users").put("15") // Users: 15
  .next("Processors").put("1") // Processors: 2
  .put("2") // 무시
  .out();