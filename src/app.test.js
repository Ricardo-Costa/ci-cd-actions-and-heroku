import app from "./app.js"
import supertest from "supertest"

const request = supertest(app)

describe("/test endpoint", () => {
  it("Should return a response", async () => {
    const resp = await request.get("/test")
    expect(resp.status).toBe(200)
    expect(resp.text).toBe("Hello World!")
  })
})
