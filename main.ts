import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The phone battery's last text to the charger it waited for all day.
const TEXT =
  "You kept saying 'just one more percent' all day. Well, here's my last percent — I'm spending it on this text.";

// The gate: entry.txt must be UTF-8 text of 1 to 200 characters, not only
// whitespace. Fail loudly here instead of shipping an invalid entry.
if (TEXT.length < 1 || TEXT.length > 200) {
  throw new Error(
    `entry text must be 1 to 200 characters, got ${TEXT.length}`,
  );
}
if (TEXT.trim().length === 0) {
  throw new Error("entry text must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, TEXT + "\n", "utf8");
console.log(`wrote entry.txt (${TEXT.length} characters): ${TEXT}`);
