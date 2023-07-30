const fs = require("fs");
const { promisify } = require("util");
const copyFile = promisify(fs.copyFile);
const path = require("path");
// Path of zip file
const createPRJ = async (shapefile, layer) => {
  try {
    const shapefileName = path.parse(shapefile).name;
    const dirname = path.dirname(shapefile);
    const prjFile = path.join(dirname, shapefileName + ".prj");
    const layerName = path.parse(layer).name;
    await copyFile(prjFile, path.join(dirname, layerName + ".prj"));
    return "prj files created";
  } catch (err) {
    console.log(err);
    throw new Error("error create prj files");
  }
};
module.exports = createPRJ;
