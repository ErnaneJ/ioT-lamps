const luzLigada = 'Lon.png';
const luzDesligada = 'Loff.png'

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