// HTTP request to an external API
fetch("https://jsonplaceholder.typicode.com/todos")
  // Convert response body to JSON
  .then((res) => res.json())

  // Handle the parsed JSON data
  .then((data) => console.log(data));

// This runs immediately without waiting for fetch
console.log("Nicolau");
