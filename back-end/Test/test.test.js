const request = require("supertest");
const app = require("../server");


// test formation
describe("test formation ", () => {
  it("should add a formation", async () => {
    const res = await request(app).post("/api/formation/addformation").send({
      title: "bac",
      dat1: "12/12/2022",
      date2: "12/12/2022",
      campo: "campo",
    });
    expect(res.statusCode).toBe(200);
  });

  it("should add a formation", async () => {
    const res = await request(app).post("/api/formation/addformation").send({
      title: "",
      dat1: "",
      date2: "",
      campo: "",
    });
    expect(res.statusCode).toBe(400);
  });

  it("should update a formation", async () => {
    const res = await request(app).post(`/api/formation/updateformation/${1}`).send({
      title: "bac",
      dat1: "12/12/2022",
      date2: "12/12/2022",
      campo: "campo",
    });
    expect(res.statusCode).toBe(200);
  });

  it("should update a formation", async () => {
    const res = await request(app).post(`/api/formation/updateformation/${1}`).send({
      title: "",
      dat1: "",
      date2: "",
      campo: "",
    });
    expect(res.statusCode).toBe(400);
  });

  it("delete formation", async () => {
    const res = await request(app).delete(`/api/formation/deleteformation/${3}`)
    expect(res.status).toBe(200);
  });

})

// test projet
describe("test projet ", () => {
    it("should add a projet", async () => {
      const res = await request(app).post("/api/projet/addprojet").send({
        title: "title",
        description: "description",
        technologe: "technologe",
        github: "github",
        dimo: "dimo",
      });
      expect(res.statusCode).toBe(200);
    });
  
    it("should add a projet", async () => {
      const res = await request(app).post("/api/projet/addprojet").send({
        title: "",
        description: "",
        technologe: "",
        github: "",
        dimo: "",
        
      });
      expect(res.statusCode).toBe(400);
    });
  
    it("should update a projet", async () => {
      const res = await request(app).post(`/api/projet/updateprojet/${1}`).send({
        title: "title",
        description: "description",
        technologe: "technologe",
        github: "github",
        dimo: "dimo",
      });
      expect(res.statusCode).toBe(200);
    });
  
    it("should update a projet", async () => {
      const res = await request(app).post(`/api/projet/updateprojet/${1}`).send({
        title:"",
        description:"",
        technologe:"",
        github:"",
        dimo:"",
      });
      expect(res.statusCode).toBe(400);
    });
  
    it("delete projet", async () => {
      const res = await request(app).delete(`/api/projet/deleteprojet/${3}`)
      expect(res.status).toBe(200);
    });
  
  
  })