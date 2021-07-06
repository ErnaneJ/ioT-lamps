const lampadas = document.querySelector('#lampadas');

function toggle(id){
  const luz = document.querySelector(`#luz${id}`);
  luz.classList.toggle("on");
}

function on(id){
  const luz = document.querySelector(`#luz${id}`);
  luz.classList.add("on");
}
function off(id){
  const luz = document.querySelector(`#luz${id}`);
  luz.classList.remove("on");
}
function sendAPI(state){
  const http = new XMLHTTPRequest(state);
  http.open("GET", `https://api.thingspeak.com/update?api_key=WBBE3WYXUWDA6OZJ&field1=0${state}`)
  http.send();
  http.onload = console.log(`${http.responseText} ${state}`);
}

function random(min, max){
  return Math.floor(Math.random()*(max-min+1))+min;
}

function addLamps(){
	for(let i=0; i<6;i++){
    lampadas.innerHTML += `
      <div class="lampada">
        <div class="bg" onclick="toggle(${i})">
          <div id="luz${i}"class="image"></div>
        </div>
        <div class="btngroup">
            <button id="ligar" onclick="on(${i})">Ligar</button>
            <button id="desligar" onclick="off(${i})">Desligar</button>
        </div>
      </div>
    `;
  }
}

addLamps();