const { Context } = require("@theinternetfolks/context");

exports.propDrilling = (flower) => {
  return `Red flower, ${flower}`;
};

exports.doWithContext = () => {
  const flower = Context.get("flower");

  return `White flower, ${flower}`;
};

exports.doOtherWithContext = () => {
  const reqId = Context.get("reqId");
  const animal = Context.get("animal");

  return `Weary cat, ${animal}, reqId: ${reqId}`;
};
