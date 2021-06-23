const luzLigada = 'https://uc2ac0301ecee85b151e8f536261.previews.dropboxusercontent.com/p/thumb/ABPlSFljUkwTzZsTlP6fk6fwo3r-y3A9DRLPyFkcFSYa_7mmpaKvO_cYKHIWK3ReQYhdLF8t0G-gmB2Tjlns27HzmBjrfFPm2IEHOlkpNXxEuZYdRJ-Yp-2xfZRA1oMHZksvtq300aUvo6Kdtpy9mQzMUz8Yjmz1-24mi6XB0pzsmmydQWUej9FGurbJiZAs6wZOLslMqSA3daJv7A2ZQcYUEByHaUypOuSgluH0qj2N7g_YveHckPpFXO1ZN9cO0GvTIW6DGiXwaaVm4BmOi9C9OpJC-wURff0mj0SdKLl7AGZjdKs9DF_6SOevy25HN6DoWIjQrbPtoJZnP3vOECIEideD8k5qWL_XpPYgjRSAqWvaYCPN6hopU5K8mKQK8vk/p.png?fv_content=true&size_mode=5';

const luzDesligada = 'https://uc1150eff1bdcd7c4e4889f2c8f6.previews.dropboxusercontent.com/p/thumb/ABNUxdDjp4kd7NfS08_KBW0aEgoSIyxaJ1GESgol--4Ttqy3t1v4RTR6z72fdniW-fX7EhUu-gAetyyId2g391Wi0ErDNfohnkZ778gXsL0p2212NqELThJxk90M6qo7vMJuefD-f1wGzc5lklAmZgfk-zONag4x0pnQwtGrcXSy2x0fy1Xwkb8gYPRrqhqKukN8s7rTm3Tx_wdGitOobYY-YmDH5RVQU3OOV-aiMjQXeVfu0Kuh0YLsl3drXTct3NbYCZzvu1T-U2LbLUqqggbRRMjy8xQVYCnA8hnE6NqdRgNRnuQVulP_RyfMgjxqTFuVi3V8U74LSJt4IT-J-E3PFEG_NX1Yj4EV7_wU4dGEfL3wcPVUgy5xFvlR0TkFqWg/p.png?size=2048x1536&size_mode=3';

const lampadas = document.querySelector('#lampadas');

function on(id){
  const luz = document.querySelector(`#luz${id}`);
  luz.classList.add("ligada");
  luz.setAttribute('src', luzLigada);
}
function off(id){
	const luz = document.querySelector(`#luz${id}`);
  luz.classList.remove("ligada");
  luz.setAttribute('src', luzDesligada);
}

function addLamps(){
	for(let i=0; i<6;i++){
        lampadas.innerHTML += `
            <div class="lampada">
            <img id="luz${i}" src="https://uc1150eff1bdcd7c4e4889f2c8f6.previews.dropboxusercontent.com/p/thumb/ABNUxdDjp4kd7NfS08_KBW0aEgoSIyxaJ1GESgol--4Ttqy3t1v4RTR6z72fdniW-fX7EhUu-gAetyyId2g391Wi0ErDNfohnkZ778gXsL0p2212NqELThJxk90M6qo7vMJuefD-f1wGzc5lklAmZgfk-zONag4x0pnQwtGrcXSy2x0fy1Xwkb8gYPRrqhqKukN8s7rTm3Tx_wdGitOobYY-YmDH5RVQU3OOV-aiMjQXeVfu0Kuh0YLsl3drXTct3NbYCZzvu1T-U2LbLUqqggbRRMjy8xQVYCnA8hnE6NqdRgNRnuQVulP_RyfMgjxqTFuVi3V8U74LSJt4IT-J-E3PFEG_NX1Yj4EV7_wU4dGEfL3wcPVUgy5xFvlR0TkFqWg/p.png?size=2048x1536&size_mode=3" /><br/>
            <div class="btngroup">
                <button id="ligar" onclick="on(${i})">Ligar</button>
                <button id="desligar" onclick="off(${i})">Desligar</button>
            </div>
        </div>
        `;
  }
}

addLamps();