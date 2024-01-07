import request from "supertest";
import app from "../../src/app";

describe("Test user routes", () => {
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

   it("find my", async () => {
      const res = await request(app)
         .get("/user/my")
         .set("Authorization", `Bearer ${token}`);

      expect(res.status).toBe(200);
   });
});
