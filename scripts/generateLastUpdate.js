import fs from "fs";
import path from "path";

const currentDate = new Date().toString();
const fileContent = `export const lastUpdate = "${currentDate}";\n`;
const filePath = path.resolve("./components/LastUpdate.js");
fs.writeFileSync(filePath, fileContent, "utf8");

console.log(`lastUpdate.js mis à jour avec : ${currentDate}`);
