const request = require('supertest');
const assert = require('assert');

const productsAPI =
  'https://react-shopping-cart-67954.firebaseio.com';

describe('GET /products', function() {
  describe('GET /all products', function() {
    it('count number of products returned', function() {
      return request(productsAPI)
        .get("/products.json")
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
          console.log(response.body.products.length);
          assert(response.body.products.length===16,'This is failed')
      })
     
    });

    it('validate the products returned', function() {
      return request(productsAPI)
        .get("/products.json")
        .set('Accept', 'application/json')
        .send()
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
          
          assert(response.body.products.length===16,'This is failed')
         
         console.log( typeof jsontest);
          for(var i in response.body.products){
           
          //console.log(Object.keys(response.body.products[i]).length);
          assert(Object.keys(response.body.products[i]).length==11,"All products are not returned with 11 fields");
          }

      })
     
    });
  });
  });