console.log(`
┏━━━━━━━━━━━━━━┓
┃  EXERCISE 6  ┃
┗━━━━━━━━━━━━━━┛

1. Fetch 10 users from https://randomuser.me/api/
- you can request a speciffic number of results with a query-parameter
  Use https://randomuser.me/api/?results=10 (you can adjust the number '10')
- Look up how the fetch api works: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

2. Display all user names in a list.
`);

const userCount = 100;
const root = document.querySelector("#root");

fetch(`https://randomuser.me/api/?results=${userCount}`)
  .then(response => response.json())
  .then(data => {
    root.innerHTML = data.results
      .map(data => `<li>${data.name.first} ${data.name.last}</li>`)
      .join("");
  })
  .catch(error => {
    console.error(error.message);
    error.message === "Unexpected token N in JSON at position 0"
      ? (root.innerHTML = `This URL does not exist.`)
      : (root.innerHTML = `Something went wrong.`);
  })
  .finally(() => {
    root.innerHTML += `Done`;
  });
