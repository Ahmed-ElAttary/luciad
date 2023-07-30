const createService = async (token, { data }, productID, type) => {
  try {
    const response = await fetch("http://poc-1/api/services", {
      method: "POST",
      body: JSON.stringify({
        title: data[0].title,
        name: data[0].title,
        type: type,
        abstractText: "",
        keywords: null,
        meshCompression: "Draco",
        pointCloudCompression: "None",
        accessConstraint: "",
        contactInformation: {
          individualName: "",
          organizationName: "",
          position: "",
          deliveryPoint: "",
          city: "",
          administrativeArea: "",
          postCode: "",
          country: "",
          fax: "",
          phone: "",
          email: "",
        },
      }),
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const { service } = await response.json();
    const { id, endpointUrl } = service;
    await fetch(
      `http://poc-1/studio/service/api/services/${id}/add-products/`,
      {
        method: "POST",
        body: JSON.stringify([productID]),
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",

          Authorization: `Bearer ${token}`,
        },
      }
    );

    //poc-1/api/services/71f4f9fa-c609-46ad-96f2-a56683a3015a/start

    await fetch(`http://poc-1/api/services/${id}/start`, {
      method: "PUT",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",

        Authorization: `Bearer ${token}`,
      },
    });

    return { id, endpointUrl };
  } catch (err) {
    console.log(err);
    throw new Error("error creating service");
  }
};
module.exports = createService;

// {
//     "service": {
//         "id": "c316dc89-ae6d-4a68-bafc-5fa669c49b90",
//         "title": "Portsaeid",
//         "name": "portsaeid",
//         "type": "wfs",
//         "abstractText": "",
//         "keywords": [
//         ],
//         "status": "Stopped",
//         "endpointPath": "/ogc/wfs/portsaeid",
//         "creationTime": "2023-07-28T16:48:57.132+02:00",
//         "updateTime": "2023-07-28T16:48:57.132+02:00",
//         "startedTime": "2023-07-28T17:48:57.121306+02:00",
//         "isoMetadataXmlContent": "<?xml version='1.0' encoding='UTF-8'?>\n<gmd:MD_Metadata xmlns:gmd=\"http://www.isotc211.org/2005/gmd\" xmlns:gmx=\"http://www.isotc211.org/2005/gmx\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:gco=\"http://www.isotc211.org/2005/gco\" xmlns:gts=\"http://www.isotc211.org/2005/gts\" xmlns:gsr=\"http://www.isotc211.org/2005/gsr\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:gml=\"http://www.opengis.net/gml/3.2\" xmlns:gss=\"http://www.isotc211.org/2005/gss\" xmlns:srv=\"http://www.isotc211.org/2005/srv\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:schemaLocation=\"http://www.isotc211.org/2005/gmd http://www.isotc211.org/2005/gmd/gmd.xsd http://www.isotc211.org/2005/gmx http://www.isotc211.org/2005/gmx/gmx.xsd http://www.w3.org/2001/XMLSchema http://www.w3.org/2001/XMLSchema.xsd http://www.isotc211.org/2005/gco http://www.isotc211.org/2005/gco/gco.xsd http://www.isotc211.org/2005/gts http://www.isotc211.org/2005/gts/gts.xsd http://www.isotc211.org/2005/gsr http://www.isotc211.org/2005/gsr/gsr.xsd http://www.w3.org/1999/xlink http://www.w3.org/1999/xlink.xsd http://www.opengis.net/gml/3.2 http://schemas.opengis.net/gml/3.2.1/base/gml.xsd http://www.isotc211.org/2005/gss http://www.isotc211.org/2005/gss/gss.xsd http://www.isotc211.org/2005/srv http://www.isotc211.org/2005/srv/srv.xsd \">\n  <gmd:fileIdentifier>\n    <gco:CharacterString>c316dc89-ae6d-4a68-bafc-5fa669c49b90</gco:CharacterString>\n  </gmd:fileIdentifier>\n  <gmd:hierarchyLevel>\n    <gmd:MD_ScopeCode codeList=\"iso/19139/resources/gmxCodelists.xml#MD_ScopeCode\" codeListValue=\"service\">service</gmd:MD_ScopeCode>\n  </gmd:hierarchyLevel>\n  <gmd:hierarchyLevelName>\n    <gco:CharacterString>Service</gco:CharacterString>\n  </gmd:hierarchyLevelName>\n  <gmd:contact>\n    <gmd:CI_ResponsibleParty>\n      <gmd:individualName>\n        <gco:CharacterString></gco:CharacterString>\n      </gmd:individualName>\n      <gmd:organisationName>\n        <gco:CharacterString></gco:CharacterString>\n      </gmd:organisationName>\n      <gmd:positionName>\n        <gco:CharacterString></gco:CharacterString>\n      </gmd:positionName>\n      <gmd:contactInfo>\n        <gmd:CI_Contact>\n          <gmd:phone>\n            <gmd:CI_Telephone>\n              <gmd:voice>\n                <gco:CharacterString></gco:CharacterString>\n              </gmd:voice>\n              <gmd:facsimile>\n                <gco:CharacterString></gco:CharacterString>\n              </gmd:facsimile>\n            </gmd:CI_Telephone>\n          </gmd:phone>\n          <gmd:address>\n            <gmd:CI_Address>\n              <gmd:deliveryPoint>\n                <gco:CharacterString></gco:CharacterString>\n              </gmd:deliveryPoint>\n              <gmd:city>\n                <gco:CharacterString></gco:CharacterString>\n              </gmd:city>\n              <gmd:administrativeArea>\n                <gco:CharacterString></gco:CharacterString>\n              </gmd:administrativeArea>\n              <gmd:postalCode>\n                <gco:CharacterString></gco:CharacterString>\n              </gmd:postalCode>\n              <gmd:country>\n                <gco:CharacterString></gco:CharacterString>\n              </gmd:country>\n              <gmd:electronicMailAddress>\n                <gco:CharacterString></gco:CharacterString>\n              </gmd:electronicMailAddress>\n            </gmd:CI_Address>\n          </gmd:address>\n        </gmd:CI_Contact>\n      </gmd:contactInfo>\n      <gmd:role>\n        <gmd:CI_RoleCode codeList=\"iso/19139/resources/gmxCodelists.xml#CI_RoleCode\" codeListValue=\"pointOfContact\">pointOfContact</gmd:CI_RoleCode>\n      </gmd:role>\n    </gmd:CI_ResponsibleParty>\n  </gmd:contact>\n  <gmd:identificationInfo>\n    <srv:SV_ServiceIdentification>\n      <gmd:citation>\n        <gmd:CI_Citation>\n          <gmd:title>\n            <gco:CharacterString>Portsaeid</gco:CharacterString>\n          </gmd:title>\n          <gmd:date>\n            <gmd:CI_Date>\n              <gmd:date>\n                <gco:DateTime>2023-07-28T16:48:57.132+02:00</gco:DateTime>\n              </gmd:date>\n              <gmd:dateType>\n                <gmd:CI_DateTypeCode codeList=\"iso/19139/resources/gmxCodelists.xml#CI_DateTypeCode\" codeListValue=\"revision\">revision</gmd:CI_DateTypeCode>\n              </gmd:dateType>\n            </gmd:CI_Date>\n          </gmd:date>\n        </gmd:CI_Citation>\n      </gmd:citation>\n      <gmd:abstract>\n        <gco:CharacterString></gco:CharacterString>\n      </gmd:abstract>\n      <gmd:descriptiveKeywords>\n        <gmd:MD_Keywords/>\n      </gmd:descriptiveKeywords>\n      <gmd:resourceConstraints>\n        <gmd:MD_SecurityConstraints>\n          <gmd:classification>\n            <gmd:MD_ClassificationCode codeList=\"iso/19139/resources/gmxCodelists.xml#MD_ClassificationCode\" codeListValue=\"unclassified\"></gmd:MD_ClassificationCode>\n          </gmd:classification>\n        </gmd:MD_SecurityConstraints>\n      </gmd:resourceConstraints>\n    </srv:SV_ServiceIdentification>\n  </gmd:identificationInfo>\n  <gmd:distributionInfo>\n    <gmd:MD_Distribution>\n      <gmd:transferOptions>\n        <gmd:MD_DigitalTransferOptions>\n          <gmd:onLine>\n            <gmd:CI_OnlineResource>\n              <gmd:linkage>\n                <gmd:URL>/ogc/wfs/portsaeid?request=GetCapabilities&amp;service=WFS</gmd:URL>\n              </gmd:linkage>\n              <gmd:protocol>\n                <gco:CharacterString>OGC:WFS</gco:CharacterString>\n              </gmd:protocol>\n              <gmd:name>\n                <gco:CharacterString>portsaeid GetCapabilities url</gco:CharacterString>\n              </gmd:name>\n              <gmd:description>\n                <gco:CharacterString>Portsaeid</gco:CharacterString>\n              </gmd:description>\n              <gmd:function>\n                <gmd:CI_OnLineFunctionCode codeList=\"iso/19139/resources/gmxCodelists.xml#CI_OnLineFunctionCode\" codeListValue=\"download\">download</gmd:CI_OnLineFunctionCode>\n              </gmd:function>\n            </gmd:CI_OnlineResource>\n          </gmd:onLine>\n        </gmd:MD_DigitalTransferOptions>\n      </gmd:transferOptions>\n    </gmd:MD_Distribution>\n  </gmd:distributionInfo>\n</gmd:MD_Metadata>",
//         "createdBy": {
//             "username": "acud"
//         },
//         "canDelete": true,
//         "endpointUrl": "http://poc-1/ogc/wfs/portsaeid",
//         "meshCompression": "None",
//         "pointCloudCompression": "None",
//         "contactInformation": {
//         }
//     },
//     "links": [
//         {
//             "rel": "Products",
//             "href": "/api/services/c316dc89-ae6d-4a68-bafc-5fa669c49b90/products",
//             "action": "GET"
//         },
//         {
//             "rel": "Start",
//             "href": "/api/services/c316dc89-ae6d-4a68-bafc-5fa669c49b90/start",
//             "action": "PUT"
//         },
//         {
//             "rel": "Stop",
//             "href": "/api/services/c316dc89-ae6d-4a68-bafc-5fa669c49b90/stop",
//             "action": "PUT"
//         }
//     ]
// }
