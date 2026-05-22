// Async function always returns a Promise
async function getTodos() {
  // Wait for the HTTP response
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");

  // Convert response body to JSON
  const data = await res.json();

  // Log fetched data
  console.log(data);

  // Return fetched data
  return data;
}

// Calling async function
const todos = getTodos();

// Logs the Promise immediately
console.log(todos);

// Runs immediately
console.log("Nicolau");
