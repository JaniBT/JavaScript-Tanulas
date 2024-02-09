// Belső állapot
let state = {
  circle: 0,
  square: 0,
  rectangle: 0,
};


// 1. Selecteld ki id alapján a form elementet és submit eseményre 
// köss be funkcionalitást

document.getElementById('shapes').onsubmit = (e) => {
  e.preventDefault();
  // 2. Az esemény bekövetkezésekor olvasd ki az input mezőkben lévő adatokat
  const shape = e.target.elements.selectedShape.value;
  const action = e.target.elements.action.value;
  // 3. Az adatok alapján módosítsd az alkalmazás belső állapotát
  state[shape] = action === 'increment' ? state[shape] + 1 : state[shape] - 1;
  // 4. A belső állapot alapján rajzold újra a formákat
  document.getElementById('sh-' + shape).innerText = state[shape];
}








