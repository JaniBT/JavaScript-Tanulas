let state = {
  teendok: [],
  isPending: false,
};

// 1. Kattintás eseményre köss be funkcionalitást

const fetch_btn = document.querySelector('#fetch-btn')
fetch_btn.onclick = (e) => {
  state.isPending = true
  render()
  fetch('http://jsonplaceholder.typicode.com/todos')
    .then((resp => resp.json()))
    .then((todos) => todos.filter((todo) => todo.completed))
    .then((todos) => {
      state.teendok = todos
      state.isPending = false
      render()}
      )
    .catch(error => {
      console.error(error)
    })
}

function render() {
  const todo_list = document.querySelector('#todo-list')
  if (state.isPending) {
    todo_list.innerHTML = '<p>Betöltés folyamatban</p>'
    return
    }
  let todo_html = ''
  let i = 1
  for (const teendo of state.teendok) {
    todo_html += `<li class="list-group-item">${i}. ${teendo.title}</li>`
    i++
  }
  todo_list.innerHTML = `<ul class="list-group">${todo_html}</ul>`
  
}

// 2. A esemény bekövetkezésekor állítsd a state isPending értékét true-ra

// 3. Küldj AJAX kérést a beépített "fetch" függvény segítségével

// 4. A válaszként kapott adatokat szűrd meg a "filter" függvénnyel

// 5. A megszűrt adatokat írd be a state teendok kulcsa alá

// 6. Ezután állítsd vissza az isPending-et false-ra

/* 7. Készíts egy renderelő függvényt, ami
  - Ha az isPending true, akkor egy "Betöltés folyamatban" feliratot ír ki
  - Ha az isPending false, akkor pedig kirajzolja az összes teendőt, 
    ami a state-ben van
*/

// 8. Hívd meg a renderelő függvényt a 2. és az 4. pont után is
