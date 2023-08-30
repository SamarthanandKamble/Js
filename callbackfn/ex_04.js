// Exploring Asynchronous code with real apis.
function getUserData() {
  fetch(`https://randomuser.me/api/`)
    .then((data) => data.json())
    .then((data) => console.log(data.results));
}

getUserData();
