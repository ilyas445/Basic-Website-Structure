const linkz = document.querySelectorAll('a[href*="#"]');
console.log(linkz);
linkz.forEach((el)=>{
    console.log(el);
    el.addEventListener('click',(e)=>{
       console.log(e); 
       e.preventDefault();
       let remover = document.querySelector('.active');
       if(remover !=null){
        remover.classList.remove('active');
       }
       el.classList.add('active');
       console.log(el.hash);
       let stopX = document.querySelector(el.hash).offsetTop;
       let startX = document.documentElement.scrollTop;
       console.log(stopX);
       console.log(startX);
       myMove(startX,stopX);
    })
})
function myMove(startX,stopX){
    const speed = 10;
    const pos = stopX > startX ? 1 : -1;
    let move = Math.floor((stopX - startX)*pos/speed);
    const adder = pos * speed;
    console.log(move,adder);
    let frame = setInterval(frame,1);
    function frame(){
        if(move<0){
            clearInterval();
        }
        else{
            move--;
            startX = startX + adder;
            document.documentElement.scrollTop = startX;
            console.log(startX);
        }
    }
}