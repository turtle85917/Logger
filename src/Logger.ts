type TYPE = "success" | "info" | "error" | "warn";

export default class Logger {
  public content: string;
  public type: TYPE;

  private esc = "";
  private stack: [string, string][];

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
    this.stack = [];
  }

  timestamp() {
    return new Intl.DateTimeFormat("kr", { dateStyle: "medium", timeStyle: "medium" }).format(new Date());
  }

  next(key: string) {
    this.stack.push([key, '']);
    return this;
  }

  put(value: string) {
    const lastElement = this.stack.pop();
    if (lastElement) this.stack.push([lastElement[0], value]);

    return this;
  }

  out() {
    let content = this.content;
    this.stack.forEach(st => {
      content += `\n${" ".repeat(26)}- ${st.join(": ")}`
    });

    switch (this.type) {
      case "info":
        this.info(content);
        break;
      case "success":
        this.success(content);
        break;
      case "warn":
        this.warn(content);
        break;
      case "error":
        this.error(content);
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