// public Rest-API for testing
// url = 'https://jsonplaceholder.typicode.com/todos/1

const fetchJSON = url => fetch(url)
  .then(response => response.json())
  .then(json => console.log(json))