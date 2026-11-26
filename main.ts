// Entry for make.fun's "The Best Advice I Ever Got"
// (u-pangg7-the-best-advice-i-ever-got-358cefb0).
//
// Writes one original sentence about the best advice the writer ever
// received to $MAKEFUN_OUTPUT_DIR/entry.txt (or /output/entry.txt when
// the variable is unset). Deterministic: a fixed string, no network,
// no randomness, no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Grandma said never trust a man who washes his car in the rain, and twenty years on I still check the forecast before the résumé — the sky has never once lied to me.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
