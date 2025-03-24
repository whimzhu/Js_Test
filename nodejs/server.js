const http = require("http");
const url = require("url");
const https = require("https");
const cheerio = require("cheerio");

const server = http
  .createServer((req, res) => {
    const host = req.headers.host;
    const query = url.parse(req.url, true).query;
    const pathname = url.parse(req.url, true).pathname;

    if (pathname === "/favicon.ico") {
      return;
    }

    console.log(pathname);

    switch (pathname) {
      case "/jsonp":
        // jsonp
        // res.write("hello world");
        res.end(`${query?.callback}(${JSON.stringify({ name: "zhangsan" })})`);
        break;
      case "/cors/get":
        // 转发 cors/get请求
        res.writeHead(200, {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json; charset=utf-8", // 添加字符编码设置
        });

        httpGet((data) => {
          res.end(data);
        });
        break;
      case "/spider":
        // 爬虫 运用cheerio
        res.writeHead(200, {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json; charset=utf-8", // 添加字符编码设置
        });

        spider((data) => {
          res.end(data);
        });
        break;
      default:
        res.end("404");
        break;
    }
  })
  .listen(1514, () => {
    console.log("server is running on port 1514");
  });

function httpGet(cb) {
  let data = "";
  https.get(
    "https://www.dongqiudi.com/sport-data/soccer/biz/data/standing?season_id=22563&app=dqd&version=0&platform=web&language=zh-cn&app_type=",
    (res) => {
      res.on("data", (chunk) => {
        data += chunk.toString();
      });

      res.on("end", () => {
        cb(data);
      });

      res.on("error", (err) => {
        console.error("请求出错:", err);
      });
    }
  );
}

function spider(cb) {
  let data = "";
  https.get("https://nba.hupu.com/players/rockets", (res) => {
    res.on("data", (chunk) => {
      data += chunk.toString();
    });

    res.on("end", () => {
      const $ = cheerio.load(data);

      const playerArr = [];

      $(".players_table tr")
        .has("td.left")
        .each(function () {
          const player = {};

          $(this)
            .find("td.left")
            .eq(0)
            .each(function () {
              player.name = $(this).find("b").find("a").text();
              player.eName = $(this).find("b").eq(1).text();
            });
          $(this)
            .find("td")
            .eq(6)
            .each(function () {
              player.birthday = $(this).text();
            });

          playerArr.push(player);
        });

      cb(JSON.stringify(playerArr));
    });

    res.on("error", (err) => {
      console.error("请求出错:", err);
    });
  });
}
