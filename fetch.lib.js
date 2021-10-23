// public Rest-API for testing
// url = 'https://jsonplaceholder.typicode.com/todos'

const fetchJSON = url => retrun fetch(url)
  .then(response => response.json())
