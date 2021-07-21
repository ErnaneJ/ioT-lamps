let audio = document.querySelector('.audio audio')

function opOn(){
  const op = document.querySelector(".opcoes")
  op.classList.toggle('opOn')
}
function toggle(id, status){
  const luz = document.querySelector(`#luz${id}`);
  luz.classList.toggle("on");
  audio.play();
  sendToServer(random(0, 100), status)
}

function on(id){
  const luz = document.querySelector(`#luz${id}`);
  luz.classList.add("on");
  audio.play();
  sendToServer(random(0, 100), true)
}
function off(id){
  const luz = document.querySelector(`#luz${id}`);
  luz.classList.remove("on");
  audio.play();
  sendToServer(random(0, 100), true)
}

function sendToServer(state, status){
  let i 
  const http = new XMLHttpRequest(state);
  http.open("GET", `https://api.thingspeak.com/update?api_key=WBBE3WYXUWDA6OZJ&field1=0${state}`)
  http.send();
  http.onload = ()=>{
    console.log(`${http.responseText} ${state}`);
    const menssagem = document.querySelector(".menssagem")
    menssagem.innerHTML = `<p style="color:green;">Eviando dados.. {State: ${state}}</p>`
    if(status){
      setTimeout(() => {
        menssagem.innerHTML = ""
      }, 3000);
    }
  }
}

function random(min, max){
  return Math.floor(Math.random()*(max-min+1))+min;
}

function ocilar(){
  const ocilador = document.getElementById('ocilar');
  const classe = ocilador.classList.value
  if(classe == "parado"){
    ocilador.classList.remove('parado');
    ocilador.classList.add('ocilando');
    ocilador.innerHTML = "Parar"
    intervalo = setInterval(()=>{
      toggle(1, false);
    },1000);
    console.log("Ocilador iniciado.")
  }else{
    toggle(1, true);
    ocilador.classList.remove('ocilando');
    ocilador.classList.add('parado');
    ocilador.innerHTML = "Ocilar"
    clearInterval(intervalo)
    console.log("Ocilador parado.")
  }
}

