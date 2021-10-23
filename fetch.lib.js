// public Rest-API for testing

const fetchJSON = url => fetch()
  .then(response => response.json())
  .then(json => console.log(json))