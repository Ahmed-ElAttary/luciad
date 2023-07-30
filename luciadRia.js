import { RasterTileSetLayer } from '@luciad/ria/view/tileset/RasterTileSetLayer';
import { WMSTileSetModel,  } from '@luciad/ria/model/tileset/WMSTileSetModel';

import { TileSet3DLayer } from '@luciad/ria/view/tileset/TileSet3DLayer';
import { OGC3DTilesModel } from '@luciad/ria/model/tileset/OGC3DTilesModel';

async function getLayers(){

let headersList = {
 "Accept": "*/*",
 "Content-Type": "application/json"
}

let bodyContent = JSON.stringify({token:JSON.parse(localStorage.apps_storage).access_token,
  shapefile:"\\\\poc-2\\Requests\\att\\portsaeid.zip",
cad:"\\\\poc-2\\Requests\\att\\cad poc data.dxf"
bim:"\\\\poc-2\\Requests\\att\\sample.ifc",
  
});

let response = await fetch("http://localhost:1995/api/luciad", { 
  method: "POST",
  body: bodyContent,
  headers: headersList
});

let data = await response.json();
return data
}


  const server = "http://poc-1/ogc/wms/cad_poc_data?service=WMS&request=GetCapabilities";
const dataSetName = "772a0c7e_578e_46eb_bbc5_199106dcb8ba";
 

WMSTileSetModel.createFromURL(server, [{layer: dataSetName}])
    .then(model => {

      const wmsLayer = new RasterTileSetLayer(model);
 
      map.layerTree.addChild(wmsLayer, "top");
    });


(async()=>{

const endpointUrls= await getLayers();
const tilesetUrl =await endpointUrls.bimEndPointURL;
const model: OGC3DTilesModel = await OGC3DTilesModel.create(tilesetUrl); 


const ogc3dTilesLayer = new TileSet3DLayer(model, {
//  transformation: createTranslationTransformation({x:100,y:1000,z:0}),

  idProperty: "FeatureID",
  selectable: true,
});
map.mapNavigator.fit({
  bounds: ogc3dTilesLayer.model.bounds,
  animate: true
});
map.layerTree.addChild(ogc3dTilesLayer);
})
()