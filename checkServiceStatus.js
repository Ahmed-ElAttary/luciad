const checkServiceStatus = async (token, serviceID) => {
  try {
    const response = await fetch(`http://poc-1/api/services/${serviceID}`, {
      method: "GET",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",

        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();

    return data.service.status;
  } catch (err) {
    console.log(err);
    throw new Error("error checking service status");
  }
};
module.exports = checkServiceStatus;

//   const statusWatcher = setInterval(async () => {
//     const status = await checkServiceStatus(token, id);
//     if (status == "Running") {
//       clearInterval(statusWatcher);
//       console.log("served ✅", endpointUrl);
//       return endpointUrl;
//     }
//   }, 1000);
// } else {
//   console.log("served ✅", endpointUrl);
//   return endpointUrl;
// }
