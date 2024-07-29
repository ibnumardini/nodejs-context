const express = require("express");

require("./store");

const { requestId } = require("./middleware");
const handler = require("./handler");

const app = express();

app.use(express.json());
app.use(requestId);

app.get("/", handler.helloWorld);
app.get("/prop-drilling", handler.propDrilling);
app.get("/context", handler.context);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
