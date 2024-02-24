const request = require("supertest");
const app = require("../server/server");

describe("Is the content Object & Is content status 200", () => {
  it("server /destinations endpoints", async () => {
    const response = await request(app).get("/metrics");
    expect(response.statusCode).toBe(200);
    expect(typeof response).toBe('object');
  });
});