const AdmZip = require("adm-zip");

const fs = require("fs");
const { promisify } = require("util");
const readdir = promisify(fs.readdir);
const path = require("path");
// Path of zip file
const unCompress = async (zipPath) => {
  try {
    // Extract zip file

    const zip = new AdmZip(zipPath);

    const extractPath = path.dirname(zipPath);
    zip.extractAllTo(extractPath, true);

    // Log extracted files
    const files = await readdir(extractPath);
    const shapefileName = files.find((file) => {
      return path.extname(file).toLowerCase() == ".shp";
    });
    const extractedShapefile = path.join(extractPath, shapefileName);

    return extractedShapefile;
  } catch (err) {
    console.log(err);
    throw new Error("error extracting zip file");
  }
};
module.exports = unCompress;
