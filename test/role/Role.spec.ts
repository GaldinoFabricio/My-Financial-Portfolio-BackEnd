import request from "supertest";
import app from "../../src/app";
import { faker } from "@faker-js/faker";

describe("Test role routes", () => {
   let id: string | undefined = undefined;
   let token: string | undefined = undefined;

   beforeAll(async () => {
      const body = {
         email: "fabricio.isigal@gmail.com",
         password: "Fagaldino3%",
      };

      const res = (await request(app).post("/session").send(body)) as {
         body: { token: string; user: { name: string } };
      };

      token = res.body.token;
   });

   it("POST /create", async () => {
      const name = faker.company.name();
      const res = await request(app)
         .post("/role")
         .set("Authorization", `Bearer ${token}`)
         .send({
            name,
         });

      id = res.body.id;

      expect(res.status).toBe(201);
      expect(res.body.name).toBe(name);
   });

   it("GET /find", async () => {
      const res = await request(app)
         .get("/role")
         .set("Authorization", `Bearer ${token}`);

      expect(res.status).toBe(200);
      expect;
   });

   it("PUT /update", async () => {
      const name = faker.company.name();
      const res = await request(app)
         .put("/role")
         .set("Authorization", `Bearer ${token}`)
         .send({
            id,
            name,
         });

      expect(res.status).toBe(201);
      expect(res.body.name).toBe(name);
   });

   it("DELETE /logical", async () => {
      const res = await request(app)
         .delete("/role/logical")
         .set("Authorization", `Bearer ${token}`)
         .send({
            id,
         });

      expect(res.status).toBe(201);
   });

   it("DELETE /delete", async () => {
      const res = await request(app)
         .delete("/role/")
         .set("Authorization", `Bearer ${token}`)
         .send({
            id,
         });

      expect(res.status).toBe(201);
   });
});
