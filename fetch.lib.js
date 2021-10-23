// public Rest-API for testing

const fetchJSON = url => fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))