const container = document.getElementById('drag-and-drop-app');
let state = {
  elemek : {
    "elso" : {
      id: "elso",
      x: container.offsetLeft,
      y: container.offsetTop
    },
    "masodik" : {
      id: "masodik",
      x: container.offsetLeft + 20,
      y: container.offsetTop + 150,
    },
    "harmadik" : {
      id: "harmadik",
      x: container.offsetLeft + 40,
      y: container.offsetTop + 300,
    }
  },
  draggedId: ""
};


window.onload = render();

// 1. Készíts renderelő függvényt, ami megjeleníti a dobozt a state-ből kiolvasott adatok alapján
function render() {
  let dobozokHTML = '';
  for (let elem of Object.values(state.elemek)) {
    dobozokHTML += `<div class="box ${state.isDragged === elem.id ? "grabbed" : "not-grabbed"}" style="position: absolute; left: ${elem.x}px; top: ${elem.y}px;" onmousedown="dobozDragStart(window.event)" onmouseup="dobozDragEnd(window.event)" onmousemove="dobozMouseMove(window.event)" data-egyedi-azonosito="${elem.id}""><div class="card-body"><h5 class="card-title display-4">${elem.id}</h5></div></div>`;
  }

  document.getElementById("drag-and-drop-app").innerHTML = dobozokHTML;
}

function dobozDragStart() {
  const box = event.target.closest(".box");
  state.draggedId = box.dataset.egyediAzonosito;
  render();
}

function dobozDragEnd() {
  state.draggedId = null;
  render();
}

function dobozMouseMove(event) {
  if (!state.draggedId) {
    return;
  }
  const box = event.target.closest(".box");
  if (!box) {
    return;
  }
  state.elemek[state.draggedId].x = document.documentElement.scrollLeft + event.clientX - box.offsetWidth / 2;
  state.elemek[state.draggedId].y = document.documentElement.scrollTop + event.clientY - box.offsetHeight / 2;

  render();
}

// 2. A dobozt úgy rajzold ki, hogy az element-nek a position style attribútuma "absolute", a 
//    left és a top attribútuma pedig a state-ből származó x és y érték

// 3. A doboz mousedown eseményre reagálva módosítsd a state isDragged értékét true-ra

// 4. A doboz mouseup és mouseleave eseményre reagálva módosítsd a state isDragged értékét false-ra

/* 5. A doboz mousemove eseménykor vizsgáld meg, hogy a state.isDragged értéke true-e
Amennyiben igen, írd be a state x és y kulcsa alá az egér aktuális x,y pozícióját */

// 7. Az állapotváltozások után hívd meg a renderelő függvényt
