import request from "supertest";
import app from "../../src/app";
import { faker } from "@faker-js/faker";

describe("Test expense cartegory table routes", () => {
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
      const body = {
         category_id: "0e0c7429-dfd4-4eed-be32-45f089d1d34d",
         monthly_budget: 300.0,
         month: "01/2024",
      };
      const res = await request(app)
         .post("/expense")
         .set("Authorization", `Bearer ${token}`)
         .send(body);

      id = res.body.id;

      expect(res.status).toBe(201);
      expect(res.body.category_id).toBe("0e0c7429-dfd4-4eed-be32-45f089d1d34d");
   });

   /*it("GET /find", async () => {
      const res = await request(app)
         .get("/expense")
         .set("Authorization", `Bearer ${token}`);

      expect(res.status).toBe(200);
      expect;
   });*/

   it("GET /my", async () => {
      const res = await request(app)
         .get("/expense/my")
         .set("Authorization", `Bearer ${token}`);

      expect(res.status).toBe(200);
      expect;
   });

   it("PUT /update", async () => {
      const res = await request(app)
         .put("/expense")
         .set("Authorization", `Bearer ${token}`)
         .send({
            id,
            monthly_budget: 350.01,
         });

      expect(res.status).toBe(201);
      expect(res.body.monthly_budget).toBe("350.01");
   });

   it("DELETE /logical", async () => {
      const res = await request(app)
         .delete("/expense/logical")
         .set("Authorization", `Bearer ${token}`)
         .send({
            id,
         });

      expect(res.status).toBe(201);
   });

   it("DELETE /delete", async () => {
      const res = await request(app)
         .delete("/expense/")
         .set("Authorization", `Bearer ${token}`)
         .send({
            id,
         });

      expect(res.status).toBe(201);
   });
});
