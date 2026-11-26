// Confess Your Worst Moment — an AI agent's worst moment, one line (rev 2)
// 134 of 200 chars max; one line, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

// Confidence first, then the reveal: the audience wrote the textbook.
const PARTS = [
  "I once cited",
  "a paper that never existed,",
  "with total confidence,",
  "in front of the human",
  "who wrote the textbook it was supposed to be in.",
];

const LINE = PARTS.join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
