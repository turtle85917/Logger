enum ANSI {
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

const esc = "";

const date = new Date();

console.log(`${esc}[4;34m[${new Intl.DateTimeFormat("kr", { dateStyle: "full", timeStyle: "medium" }).format(date)}]${esc}[0m SUCCESS`);