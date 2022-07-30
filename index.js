 let  myform = document.getElementById('myform');

 let targetimg = document.getElementById('targetimg');
 let inputrange = document.querySelectorAll('.slider'); 
 myform.addEventListener('submit',function(e){
    let urlimg = document.getElementById('onlineurl');
    let urlvalue = urlimg.value;
    if(urlvalue.length){
      targetimg.setAttribute('src',urlvalue);
      urlimg.value = ''; 
    }
    e.preventDefault();
   // console.log('done');
});
for(let i = 0; i<=inputrange.length-1; i++){
   inputrange[i].addEventListener('input',editimage);
}
function editimage(){
   let gs = document.getElementById('gs');
   let blur = document.getElementById('Blur');
   let huerotate = document.getElementById('Hue-Rotate');
   let sepia = document.getElementById('Sepia');

   let gsval = gs.value;
   let blurval = blur.value;
   let huerotateval = huerotate.value;
   let sepiaval  = Sepia.value;

   targetimg.style.filter = 'grayscale('+gsval+'%) blur('+blurval+'px) hue-rotate('+huerotateval+'deg) sepia('+sepiaval+'%)';
}
let sliderform = document.getElementById('slider-form');
sliderform.addEventListener('reset',function(){
   sliderform.reset();
   setTimeout(function(){
      editimage()
   },0);
})