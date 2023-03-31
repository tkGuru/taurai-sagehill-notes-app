const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");

//Assertion Style
chai.should();
chai.use(chaiHttp);

describe('Notes API', () => {
    
      //Test the GET route

    /*describe("GET ALL", () => {
        it("It should GET all the notes", (done) => {
            chai.request(server)
                .get("/api/notes/find-all-notes")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    response.body.length.should.be.eq(3);
                    done();
                });
        });

        it("It should NOT GET all the tasks", (done) => {
            chai.request(server)
                .get("/api/notes/find-all-notes")
                .end((err, response) => {
                    response.should.have.status(404);
                done();
                });
        });

    });*/


   

});


