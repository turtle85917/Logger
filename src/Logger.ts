type TYPE = "success" | "info" | "error" | "warn";

export default class Logger {
  public content: string;
  public type: TYPE;

  private esc = "";

  private success(result: string) {
    console.log(`[34m[${this.timestamp()}][0m [32m(√)[0m ${result}`);
  }

  private info(result: string) {
    console.info(`[34m[${this.timestamp()}][0m [36m(i)[0m ${result}`);
  }

  private error(result: string) {
    console.error(`[34m[${this.timestamp()}][0m [31m(×)[0m ${result}`);
  }

  private warn(result: string) {
    console.warn(`[34m[${this.timestamp()}][0m [33m(!)[0m ${result}`);
  }

  constructor(type: TYPE, content: string) {
    this.type = type;
    this.content = content;
  }

  timestamp() {
    return new Intl.DateTimeFormat("kr", { dateStyle: "medium", timeStyle: "medium" }).format(new Date());
  }

  out() {
    switch (this.type) {
      case "info":
        this.info(this.content);
        break;
      case "success":
        this.success(this.content);
        break;
      case "warn":
        this.warn(this.content);
        break;
      case "error":
        this.error(this.content);
        break;
    }
  }
}

export enum ANSIDATA {
  NORMAL,
  BOLD,
  ITALIC = 3,
  UNDERLINE,
  F_BLACK = 30,
  F_RED,
  F_GREEN,
  F_YELLOW,
  F_BLUE,
  F_MAGENTA,
  F_CYAN,
  F_WHITE,
  B_BLACK = 40,
  B_RED,
  B_GREEN,
  B_YELLOW,
  B_BLUE,
  B_MAGENTA,
  B_CYAN,
  B_WHITE,
}