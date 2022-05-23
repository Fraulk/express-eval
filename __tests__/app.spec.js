const {app, Tache} = require("../app");
const request = require("supertest");

describe("TEST API", () => {
    beforeAll(async () => {
        const task1 = new Tache({id: 1, description: "blablablabla", faite: true})
        const task2 = new Tache({id: 2, description: "TEST", faite: false})
        const task3 = new Tache({id: 3, description: "AAAAAAAAAAAA", faite: true})
        task1.save()
        task2.save()
        task3.save()
    })

    afterAll(async () => {
        await Tache.deleteOne({id: 1})
        await Tache.deleteOne({id: 2})
        await Tache.deleteOne({id: 3})
    })

    it("should get all elements", async () => {
        await request(app).get("/tache").send().expect(200)
    })

    it("should get one element", async () => {
        await request(app).get("/tache/1").send().expect(200)
    })

    it("should post one element", async () => {
        await request(app).post("/tache").send({
            "id": 3,
            "description": "AAAAAAAAAAAAAAAAAAA",
            "faite": true
        }).expect(200)
    })

    it("should put one element", async () => {
        await request(app).put("/tache/3").send({
            "description": "BBBBBBBBBBBBBBBB",
            "faite": true
        }).expect(200)
    })

    it("should get one element", async () => {
        await request(app).delete("/tache/3").send().expect(200)
    })
})