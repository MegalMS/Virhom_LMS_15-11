// app/api/content/_helpers.js
import fs from "fs";
import path from "path";

const DATA_PATH = path.join(process.cwd(), "data", "content.json");
const TMP_PATH = path.join(process.cwd(), "data", "content.tmp.json");

export async function readJsonFile() {
  try {
    const raw = await fs.promises.readFile(DATA_PATH, "utf8");
    return JSON.parse(raw);
  } catch (err) {
    if (err.code === "ENOENT") return {}; // file not found -> empty object
    throw err;
  }
}

// atomic write: write tmp then rename
export async function writeJsonFile(obj) {
  const str = JSON.stringify(obj, null, 2);
  await fs.promises.writeFile(DATA_PATH, str, "utf8");
  // await fs.promises.rename(DATA_PATH, DATA_PATH);
}
