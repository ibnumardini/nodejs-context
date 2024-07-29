const { Context } = require("@theinternetfolks/context");

const {
  propDrilling,
  doWithContext,
  doOtherWithContext,
} = require("./service");

exports.helloWorld = (req, res) => {
  const reqId = Context.get("reqId");

  return res.json({ message: "Hello world!", data: { reqId } });
};

exports.propDrilling = (req, res) => {
  const redFlower = "🌸";

  const flower = propDrilling(redFlower);

  return res.json({ data: { flower } });
};

exports.context = (req, res) => {
  Context.set({ flower: "💮", animal: "🙀" });

  const flower = doWithContext();
  const animal = doOtherWithContext();

  return res.json({ data: { flower, animal } });
};
