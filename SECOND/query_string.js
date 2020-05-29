// sei_query_string_to_params_hash_warmup.md
// Query String to Params hash
// You can do this in javascript or ruby
// Given the following sample query string

// var qs = "?title=jaws&apikey=123456&page=5"
// Write a function that accepts a query string as an argument and returns an object

// queryStringToObject(qs)
// Returns the following

// {
//   title: "jaws",
//   apikey: "123456",
//   page: "5"
// }

var qs = "?title=jaws&apikey=123456&page=5"

function queryStringToObject(qs) {
  let queryArray = qs.slice(1).split('&')
  let queryObject = {}

  queryArray.forEach(pair => {
    let [key, value] = pair.split('=')
    queryObject[key] = value
  });

  return queryObject
}

console.log(queryStringToObject(qs));