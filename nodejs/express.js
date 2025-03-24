const express = require("express");
const app = express();
const router = express.Router();

app.use(router);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

router.get("/home", (req, res) => {
  res.send("hello world");
});

router.get("/api/get", (req, res) => {
  console.log(req.query);
  res.json({ name: "zhangsan" });
});

// app.use(router);
app.use("/router", router);

app.listen(3721, () => {
  console.log("server is running on port 3721");
});
