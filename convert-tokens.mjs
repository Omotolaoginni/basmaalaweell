import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const inputPath = path.join(__dirname, "design-tokens.tokens.json");
const outputPath = path.join(__dirname, "design-tokens.css");

const data = JSON.parse(fs.readFileSync(inputPath, "utf8"));

function slugify(str) {
  return String(str)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const FONT_VALUE_UNITS = {
  fontSize: "px",
  lineHeight: "px",
  letterSpacing: "px",
  paragraphIndent: "px",
  paragraphSpacing: "px",
  fontWeight: "",
  fontFamily: "",
  textDecoration: "",
  fontStyle: "",
  fontStretch: "",
  textCase: "",
};

function formatValue(node) {
  const type = node.type;
  const raw = node.value;

  if (type === "color") return raw;
  if (type === "dimension") return `${raw}px`;
  if (type === "number") return `${raw}`;
  if (type === "string") return raw;
  return `${raw}`;
}

const lines = [];

function emit(segments, node) {
  const prefix = "--sys-" + segments.join("-");

  if (node.type === "custom-fontStyle") {
    for (const [prop, unit] of Object.entries(FONT_VALUE_UNITS)) {
      if (node.value && node.value[prop] !== undefined) {
        lines.push(`  ${prefix}-${slugify(prop)}: ${node.value[prop]}${unit};`);
      }
    }
    return;
  }

  lines.push(`  ${prefix}: ${formatValue(node)};`);
}

function walk(obj, segments) {
  for (const [key, node] of Object.entries(obj)) {
    const next = [...segments, slugify(key)];
    if (node && typeof node === "object" && !Array.isArray(node) && "value" in node) {
      emit(next, node);
    } else if (node && typeof node === "object" && !Array.isArray(node)) {
      walk(node, next);
    }
  }
}

lines.push(":root {");
walk(data, []);
lines.push("}");

fs.writeFileSync(outputPath, lines.join("\n") + "\n", "utf8");

console.log(`Wrote ${lines.length} lines to ${outputPath}`);
