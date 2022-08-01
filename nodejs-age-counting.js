const https = require("https");

https.get("https://coderbyte.com/api/challenges/json/age-counting", (resp) => {
  resp.setEncoding("utf-8");
  let data = "";

  // parse json data here...
  resp.on("data", (d) => {
    data += [d];
  });

  resp.on("end", () => {
    const dataString = JSON.parse(data)["data"];

    const regex = /\b\d+\b/g;
    const result = dataString.match(regex);
    const count = result
      .map((el) => parseInt(el, 10))
      .filter((el) => el >= 50).length;
    console.log(count);
  });

  resp.on("error", (e) => {
    console.log("error", e);
  });
});
