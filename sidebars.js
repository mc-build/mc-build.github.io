const fs = require("fs");
const path = require("path");
const base = path.resolve(process.cwd(), "docs");
const validExtensions = [".md", ".mdx"]
function recursiveSync(dir) {
  return fs.readdirSync(dir).map(loc => {
    const abs = path.join(dir, loc);
    const stat = fs.statSync(abs);
    if (stat.isFile() && validExtensions.includes(path.parse(abs).ext)) {
      return {
        type: 'doc',
        id: [path.relative(base, path.parse(abs).dir), path.parse(abs).name].filter(Boolean).join("/")
      }
    } else if (stat.isDirectory()) {
      return {
        type: "category",
        label: loc,
        items: recursiveSync(abs),
      };
    }
  }).filter(Boolean);
}
module.exports = {
  docs: recursiveSync(base)
};
