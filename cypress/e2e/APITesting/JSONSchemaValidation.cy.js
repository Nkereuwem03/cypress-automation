// install ajv library
// npm install ajv
// https://transform.tools/json-to-json-schema - generate json schema from response object

const Ajv = require("ajv");
const ajv = new Ajv();

describe("Schema validation", () => {
  const schema = {
    $schema: "http://json-schema.org/draft-07/schema#",
    title: "Generated schema for Root",
    type: "array",
    items: {
      type: "object",
      properties: {
        id: {
          type: "number",
        },
        title: {
          type: "string",
        },
        price: {
          type: "number",
        },
        description: {
          type: "string",
        },
        category: {
          type: "string",
        },
        image: {
          type: "string",
        },
        rating: {
          type: "object",
          properties: {
            rate: {
              type: "number",
            },
            count: {
              type: "number",
            },
          },
          required: ["rate", "count"],
        },
      },
      required: [
        "id",
        "title",
        "price",
        "description",
        "category",
        "image",
        "rating",
      ],
    },
  };

  it("schema should validate against response", () => {
    cy.request({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    }).then((response) => {
      const validate = ajv.compile(schema);
      const isValid = validate(response.body);
      expect(isValid).equal(true);
      expect(isValid).to.be.true;
    });
  });
});
