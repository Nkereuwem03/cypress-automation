// install xml2js library
// npm install xml2js
// https://tools.onecompiler.com/multiline-to-singleline

const xml2js = require("xml2js");

const parser = new xml2js.Parser({ explicitArray: false });

describe("XML parsing", () => {
  let petId;

  const xmlPayload =
    "<Pet>       <id>0</id>       <Category>         <id>0</id>         <name>Dog</name>       </Category>         <name>Jimmy</name>       <photoUrls>         <photoUrl>string</photoUrl>       </photoUrls>       <tags>         <Tag>           <id>0</id>           <name>string</name>         </Tag>     </tags>     <status>available</status>   </Pet>";

  before("should create a PET using XML payload", () => {
    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/pet",
      headers: {
        "Content-Type": "application/xml",
        'accept': "application/xml",
      },
      body: xmlPayload,
    }).then((response) => {
      expect(response.status).equal(200)
      parser.parseString(response.body, (err, result) => {
        petId = result.Pet.id
        expect(result.Pet.name).equal('Jimmy')
      })
    });
  });

  it.skip("fetching PET data - parsing xml response", () => {
    cy.request({
      method: "GET",
      url: `https://petstore.swagger.io/v2/pet/${petId}`,
      headers: {
        'accept': "application/xml",
      },
    }).then((response) => {
      expect(response.status).equal(200)
      parser.parseString(response.body, (err, result) => {
        expect(result.Pet).has.property('photoUrls')
        expect(result.Pet.id).equal(petId)
        expect(result.Pet).has.property("name");
      })
    });
  });
});
