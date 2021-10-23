// public Rest-API for testing

const fetchJSON = url => fetch(url)
  .then(response => response.json())
  .then(json => console.log(json))