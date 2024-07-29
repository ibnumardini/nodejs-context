const { randomUUID: uuidv4 } = require("crypto");
const { Context } = require("@theinternetfolks/context");

exports.requestId = async (req, res, next) => {
  Context.set({ reqId: uuidv4() });

  next();
};
