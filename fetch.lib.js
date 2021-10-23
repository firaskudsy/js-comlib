// public Rest-API for testing
// url = 'https://jsonplaceholder.typicode.com/todos'

const fetchJSON = async (url) => await fetch(url)
  .then(response => response.json())


const response = await fetchJSON('https://jsonplaceholder.typicode.com/todos');
console.log('DEBUG: ~ file: fetch.lib.js ~ line 9 ~ response', response);
