const addData = require("./addData");
const createProduct = require("./createProduct");
const createService = require("./createService");

const serve = async (token, input, type) => {
  const data = await addData(token, input);
  const productID = await createProduct(token, data);
  const endpointUrl = await createService(token, data, productID, type);

  console.log("served ✅", endpointUrl);
  return endpointUrl;
};

module.exports = serve;
