console.clear();
const express = require("express");
const unCompress = require("./unCompress");
const createPRJ = require("./createPRJ");
const serve = require("./serve");
const searchService = require("./searchService");
const app = express();
const cors = require("cors");
const path = require("path");
const port = 1995; // Change this to your desired port number

// Middleware to parse JSON data from the request body
app.use(cors());
app.use(express.json());

app.get("/api/luciad", async (req, res) => {
  return res.send("Received a GET HTTP method");
});

app.post("/api/luciad", async (req, res) => {
  try {
    const { token, shapefile, bim, cad } = req.body;

    const extractedShapefile = await unCompress(shapefile);
    await createPRJ(extractedShapefile, cad);
    await createPRJ(extractedShapefile, bim);

    const shapefileEndPointURL =
      (await searchService(token, extractedShapefile)) ||
      (await serve(token, extractedShapefile, "wms"));
    const cadEndPointURL =
      (await searchService(token, cad)) || (await serve(token, cad, "wms"));

    const bimEndPointURL =
      (await searchService(token, bim)) ||
      (await serve(token, bim, "ogc3dtiles"));
    console.log("-----------------------------");
    return res
      .status(200)
      .json({ shapefileEndPointURL, bimEndPointURL, cadEndPointURL });
  } catch (err) {
    console.log(err);
    return res.status(500).json("error");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on Port ${port} 🌍`);
});
