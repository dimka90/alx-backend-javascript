import getResponseFromAPI from "./0-promise.js";

const response = getResponseFromAPI();
response.the
console.log(response instanceof Promise);