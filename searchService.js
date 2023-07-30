const path = require("path");
const searchService = async (token, input) => {
  const serviceName = path.parse(input).name;
  const headers = {
    Accept: "*/*",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  const response = await fetch(
    `http://poc-1/studio/service/api/services?anyText=${serviceName}`,
    {
      method: "GET",
      headers,
    }
  );
  const data = await response.json();
  const serviceID = data[0]?.metadata.publicId;
  if (serviceID) {
    const endpointUrl = await getEndpointUrl(headers, serviceID);
    return endpointUrl;
  }
  return false;
};
const getEndpointUrl = async (headers, serviceID) => {
  const response = await fetch(`http://poc-1/api/services/${serviceID}`, {
    method: "GET",
    headers,
  });
  const data = await response.json();
  console.log("found 🔍", data.service.endpointUrl);
  return data.service.endpointUrl;
};
module.exports = searchService;
