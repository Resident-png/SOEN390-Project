const request = require('supertest');
const app = require('../index')
const mongoose = require("mongoose");
const server = require('../index');
const User = require("../models/user");

let userId;

beforeAll(() => {
    mongoose.connect(process.env.DATABASE)
})

afterAll(async() => {
  // Delete the user from the database after running all the tests
  await User.findByIdAndDelete(userId);
  
  // Closing the DB connection allows Jest to exit successfully.
  mongoose.disconnect();
  server.close();
}) 






describe('POST /user', function(){
  it("successfully creates a user with valid information provided", async () => {
    
    const userResponse = await request(app)
      .post("/users")
      .send({
        firstname: "Test",
        lastname: "epic",
        email: "test@email2.com",
        password: "test123"
    })
      .expect(201); // successfully created account
      userId = userResponse.body.id
  })
});

describe('POST /user', function(){
    it("should not create a user if the email used already exists", async () => {
        var user = 
      await request(app)
        .post("/users")
        .send({
          firstname: "Test",
          lastname: "1234",
          email: "test@email2.com",
          password: "test123"
      })
      .expect(409)
    })
  });

  // Suggestion: Front-end should implement regex verification.
//   describe('POST /user', function(){
//     it("should not create a user with invalid information provided", async () => {
//     var lastname = 1234;
//       await request(app)
//         .post("/users")
//         .send({
//           firstname: "Test",
//           lastname: null,
//           email: "test@mail.com",
//           password: "test123"
//       })
//       .expect(400)
//       .then((response) => {
//         console.log(response);
//         expect(response.text).toBe('{"message":"Please fill out all fields!"}')
//       })
//     })
//   });


  describe('POST /user', function(){
    it("should not create a user with missing fields", async () => {
      await request(app)
        .post("/users")
        .send({
          firstname: "Test",
          email: "test@mail.com",
          password: "test123"
      })
        .expect(400)
        .then((response) => {
            expect(response.text).toBe('{"message":"Please fill out all fields!"}')
        })
    })
  });
