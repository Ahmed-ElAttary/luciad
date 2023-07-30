const createProduct = async (token, { data }) => {
  try{
  const response = await fetch("http://poc-1/api/products", {
    method: "POST",
    body: JSON.stringify({
      title: data[0]?.title,
      abstractText: "QuickPublish",
    }),
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const { product } = await response.json();

  await fetch(
    `http://poc-1/studio/service/api/styled-data/batch-create-or-update`,
    {
      method: "POST",
      body: JSON.stringify([
        {
          productPublicId: product.id,
          dataPublicId: data[0].id,
          visible: true,
        },
      ]),
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",

        Authorization: `Bearer ${token}`,
      },
    }
  );
  return product.id
    } catch(err){
        console.log(err);
        throw new Error("error creating product");
  }
};
module.exports = createProduct;

// {
//   "shapefileData": {
//     "data": [
//       {
//         "id": "767a27ff-393c-4291-bdd0-74c0c856037f",
//         "title": "Portsaeid",
//         "type": "SHP",
//         "categories": [
//           "Vector"
//         ],
//         "filePath": "\\\\poc-2\\Requests\\att\\portsaeid.SHP",
//         "mimeType": "application/octet-stream",
//         "creationTime": "2023-07-28T15:21:02.611+02:00",
//         "updateTime": "2023-07-28T15:21:02.611+02:00",
//         "wgs84Bounds": {
//           "x": 32.21850693589253,
//           "y": 31.16518063219624,
//           "width": 0.24303894251607971,
//           "height": 0.12104065900864214
//         },
//         "abstractText": "",
//         "keywords": [],
//         "fileMetadata": {
//           "isDirectory": false,
//           "name": "portsaeid.SHP",
//           "path": "\\\\poc-2\\Requests\\att\\portsaeid.SHP",
//           "extension": "SHP",
//           "size": 17678876,
//           "mimeType": "application/octet-stream",
//           "firstScanTime": "2023-07-28T16:21:02.604328+02:00",
//           "lastScanTime": "2023-07-28T15:21:02.595+02:00"
//         }
//       }
//     ]
//   },
//   "bimData": {
//     "data": [
//       {
//         "id": "1ee4b35f-ff76-402c-9aaf-f0fbec644585",
//         "title": "BIM test [GEOMETRY]",
//         "type": "IFC",
//         "categories": [
//           "Mesh"
//         ],
//         "filePath": "\\\\poc-2\\Requests\\att\\BIM_test.ifc",
//         "mimeType": "application/octet-stream",
//         "creationTime": "2023-07-28T15:22:41.166+02:00",
//         "updateTime": "2023-07-28T15:22:41.166+02:00",
//         "wgs84Bounds": {
//           "x": 28.508638832398848,
//           "y": -0.0015871653460574865,
//           "width": 0.002694958360212496,
//           "height": 0.002558097453424578
//         },
//         "abstractText": "",
//         "keywords": [],
//         "fileMetadata": {
//           "isDirectory": false,
//           "name": "BIM_test.ifc",
//           "path": "\\\\poc-2\\Requests\\att\\BIM_test.ifc",
//           "extension": "ifc",
//           "size": 140254394,
//           "mimeType": "application/octet-stream",
//           "firstScanTime": "2023-07-28T16:22:41.157928+02:00",
//           "lastScanTime": "2023-07-28T15:22:41.166+02:00"
//         }
//       },
//       {
//         "id": "43a1dc01-3cd7-4b7e-8a6c-2461ea1c223a",
//         "title": "BIM test [FEATURES]",
//         "type": "IFC",
//         "categories": [
//           "Vector"
//         ],
//         "filePath": "\\\\poc-2\\Requests\\att\\BIM_test.ifc",
//         "mimeType": "application/octet-stream",
//         "creationTime": "2023-07-28T15:22:41.166+02:00",
//         "updateTime": "2023-07-28T15:22:41.166+02:00",
//         "wgs84Bounds": {
//           "x": 28.508773663450178,
//           "y": -0.0015871280126625155,
//           "width": 0.002482439383413748,
//           "height": 0.0025580372814753716
//         },
//         "abstractText": "",
//         "keywords": [],
//         "fileMetadata": {
//           "isDirectory": false,
//           "name": "BIM_test.ifc",
//           "path": "\\\\poc-2\\Requests\\att\\BIM_test.ifc",
//           "extension": "ifc",
//           "size": 140254394,
//           "mimeType": "application/octet-stream",
//           "firstScanTime": "2023-07-28T16:22:41.157928+02:00",
//           "lastScanTime": "2023-07-28T15:22:41.166+02:00"
//         }
//       }
//     ]
//   },
//   "cadData": {
//     "data": [
//       {
//         "id": "ad2e5d3d-b334-453f-a1c8-186d4ab44a74",
//         "title": "Cad poc data",
//         "type": "DWG",
//         "categories": [
//           "Vector"
//         ],
//         "filePath": "\\\\poc-2\\Requests\\att\\cad poc data.dxf",
//         "mimeType": "image/vnd.dxf",
//         "creationTime": "2023-07-28T15:22:41.572+02:00",
//         "updateTime": "2023-07-28T15:22:41.572+02:00",
//         "wgs84Bounds": {
//           "x": 34.659352935681525,
//           "y": 7.274530094330823,
//           "width": 0.008377338753625452,
//           "height": 0.007888162170706536
//         },
//         "abstractText": "",
//         "keywords": [],
//         "fileMetadata": {
//           "isDirectory": false,
//           "name": "cad poc data.dxf",
//           "path": "\\\\poc-2\\Requests\\att\\cad poc data.dxf",
//           "extension": "dxf",
//           "size": 4115165,
//           "mimeType": "image/vnd.dxf",
//           "firstScanTime": "2023-07-28T16:22:41.577972+02:00",
//           "lastScanTime": "2023-07-28T15:22:41.572+02:00"
//         }
//       }
//     ]
//   }
// }
