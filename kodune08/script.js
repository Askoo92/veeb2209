let nuppElement = document.getElementById('nupp')
let nimiElement = document.getElementById('nimi')
let hinnangElement = document.getElementById('hinnang')
let piltElement = document.getElementById('pilt1')
let pilt2Element = document.getElementById('pilt2')

nuppElement.addEventListener('click', hindaNime);

function hindaNime() {
     let nimePikkus = nimiElement.value.length;
      hinnangElement.style.display = 'inline';
      piltElement.style.display = 'none';

     if (nimePikkus == 0) {
      hinnangElement.style.display = 'none';
      } 

     else if (nimePikkus < 6) {
      hinnangElement.innerHTML = "Küll on sul ilus lühike nimi.";
      piltElement.style.display = 'inline';
       pilt2Element.style.display = 'none';
      } 

     else {
      hinnangElement.innerHTML = "Küll sul on suurepärane pikk nimi.";
      pilt2Element.style.display = 'inline';
      }
    } 

var yourImg = document.getElementById('pilt1');
if(yourImg && yourImg.style) {
      yourImg.style.height = '300px';
      yourImg.style.width = '420px';
}

var yourImg = document.getElementById('pilt2');
     if(yourImg && yourImg.style) {
      yourImg.style.height = '300px';
      yourImg.style.width = '420px';
}
 
function changeBackground(color) {
      document.body.style.background = color;
 }

 window.addEventListener("load",function() { changeBackground('#FFFFE0') });


 const btn = document.getElementById('nupp');
      let index = 0;
       const colors = ['salmon', 'green'];
 
 btn.addEventListener('click', function onClick() {
       btn.style.backgroundColor = colors[index];
       btn.style.color = 'white';
       index = index >= colors.length - 1 ? 0 : index + 1;
 });