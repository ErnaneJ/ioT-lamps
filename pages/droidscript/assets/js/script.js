let audio = document.querySelector('.audio audio')
let value;
function opOn(){
  const op = document.querySelector(".opcoes")
  op.classList.toggle('opOn')
}

function on(){
  const luz = document.querySelector(`#luz1`);
  luz.classList.add("on");
  audio.play();
}
function off(){
  const luz = document.querySelector(`#luz1`);
  luz.classList.remove("on");
  audio.play();
}


function get(){
  fetch(`https://api.thingspeak.com/channels/1457178/fields/1.json?results=1`)
    .then(res => {
        return res.json();
    })
    .then(json => {
        console.log(json);
        value = parseFloat(json.feeds[0].field1); 
        console.log("valor",value)
        if (value<1){
          on();
        }
        if(value>1){
          off();
        }
    })
    .catch(error=>{
        console.error("Error: ", error);
    });
}

setInterval(() => {
  get();
}, 10000);