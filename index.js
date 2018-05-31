import et from 'elementtree';
import xml2js from 'xml2js';

import moment from 'moment';

console.log(moment(1525237235908).format('YYYY-MM-DD HH:mm:ss'));

// const document = `<?xml version="1.0"?>
// <entries>
// <entry>
//   <TenantId>12345</TenantId>
//   <ServiceName>MaaS</ServiceName>
//   <ResourceID>enAAAA</ResourceID>
//   <UsageID>550e8400-e29b-41d4-a716-446655440000</UsageID>
//   <EventType>create</EventType>
//   <category term="monitoring.entity.create"/>
//   <DataCenter>global</DataCenter>
//   <Region>global</Region>
//   <StartTime>Sun Apr 29 2012 16:37:32 GMT-0700 (PDT)</StartTime>
//   <ResourceName>entity</ResourceName>
// </entry>
// <entry>
//   <TenantId>44445</TenantId>
//   <ServiceName>MaaS</ServiceName>
//   <ResourceID>enAAAA</ResourceID>
//   <UsageID>550e8400-e29b-41d4-a716-fffffffff000</UsageID>
//   <EventType>update</EventType>
//   <category term="monitoring.entity.update"/>
//   <DataCenter>global</DataCenter>
//   <Region>global</Region>
//   <StartTime>Sun Apr 29 2012 16:40:32 GMT-0700 (PDT)</StartTime>
//   <ResourceName>entity</ResourceName>
// </entry>
// </entries>`;

// const parseString = new Promise((resolve, reject) => {
//     xml2js.parseString(document, function (err, json) {
//         if (err)
//             reject(err);
//         else
//             resolve(json);
//     });

// });

// parseString.then((value) => {
//     console.log(value);
// })

// const a = et.QName('afdafdfadsfadf', 'bdsafdf');

// var XML = et.XML;
// var ElementTree = et.ElementTree;
// var Element = et.Element;
// var SubElement = et.SubElement;
// var QName = et.QName;

// const options = {
//   params: [
//     { website_id: 123 },
//     { order_code: 1321123321 },
//     { receiver_acc: 123 },
//   ],
//   get_sign: true,
//   method: 'CheckPartnerTransation',
// };

// const SOAP_NS = 'http://schemas.xmlsoap.org/soap/envelope/';
// const ns_map = {
//   'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
//   'xmlns:xsd': 'http://www.w3.org/2001/XMLSchema',
// };
// et.register_namespace('soap', SOAP_NS);
// const env = Element(new QName(SOAP_NS, 'Envelope'), ns_map);
// const body = SubElement(env, new QName(SOAP_NS, 'Body'));
// const method = SubElement(body, options.method, { xmlns: 'http://tempuri.org/' });

// let plantext = null
// if (options['params'] != null) {
//     for (let item of options['params']) {
//         const key = Object.keys(item)
//         if (key.lenth > 1)
//             continue
//         if (plantext == null)
//             plantext = `${item[key[0]]}`
//         else
//             plantext = `${plantext}-${item[key[0]]}`
//         const childmethod = SubElement(method, key[0])
//         childmethod.text = item[key[0]]
//     }
// }
// if (options["get_sign"]) {
//     const childmethod = SubElement(method, 'sign')
//     childmethod.text = 'A89E879BDA877=213='
// }

// const etree = new ElementTree(env);

// const xml = etree.write({ xml_declaration: false });
// console.log(xml);