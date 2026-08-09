const fs = require("fs");
const path = require("path");
const https = require("https");

const HOST = "https://nayeesubah.github.io";
const KEY = "76d19145666036d602c04fff0cdbf8b2";
const dist = path.resolve(__dirname, "..", "dist");

function collectUrls() {
  const urls = new Set();
  for (const file of fs.readdirSync(dist)) {
    if (!/^sitemap-.*\.xml$/.test(file)) continue;
    const raw = fs.readFileSync(path.join(dist, file), "utf-8");
    for (const m of raw.matchAll(/<loc>(.*?)<\/loc>/g)) urls.add(m[1]);
  }
  return [...urls];
}

const urls = collectUrls();
const body = JSON.stringify({
  host: HOST.replace(/^https?:\/\//, ""),
  key: KEY,
  keyLocation: `${HOST}/${KEY}.txt`,
  urlList: urls,
});

const req = https.request(
  "https://api.indexnow.org/indexnow",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Content-Length": Buffer.byteLength(body),
    },
  },
  (res) => {
    let data = "";
    res.on("data", (c) => (data += c));
    res.on("end", () => {
      console.log(`IndexNow: ${res.statusCode} — submitted ${urls.length} URLs`);
      if (res.statusCode >= 300) console.log(data);
    });
  }
);
req.on("error", (e) => console.error("IndexNow ping failed:", e.message));
req.write(body);
req.end();
