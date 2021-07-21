let audio = document.querySelector('.audio audio')
function opOn(){
  const op = document.querySelector(".opcoes")
  op.classList.toggle('opOn')
}
const lampadas = document.querySelector('#lampadas');

function toggle(id){
  const luz = document.querySelector(`#luz${id}`);
  luz.classList.toggle("on");
  audio.play();
}

function on(id){
  const luz = document.querySelector(`#luz${id}`);
  luz.classList.add("on");
  audio.play();
}
function off(id){
  const luz = document.querySelector(`#luz${id}`);
  luz.classList.remove("on");
  audio.play();
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