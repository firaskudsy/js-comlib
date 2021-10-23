// public Rest-API for testing
// url = 'https://jsonplaceholder.typicode.com/todos'

const fetchJSON = url => fetch(url)
  .then(response => response.json())
