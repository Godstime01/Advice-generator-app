const icon = document.querySelector('.round');
const content = document.querySelector('.content');
const number = document.querySelector('#number');

icon.onclick = ()=>{
    generateApi()
}

function generateApi(){
    res = new XMLHttpRequest();
    res.onreadystatechange = function() {
        if (res.readyState == 4 && res.status == 200) {
            var obj = JSON.parse(res.responseText);
            console.log(obj.slip)
            number.innerHTML = obj.slip['id']
            content.innerHTML = obj.slip['advice']
        }
      };
    res.open('GET', 'https://api.adviceslip.com/advice', true);
    res.send();
}
generateApi()