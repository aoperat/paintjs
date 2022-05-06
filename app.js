const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext('2d');

ctx.strokeStyle ="#2c2c2c"
ctx.lineWidth = 2.5;

//그림을 그리는 상태값
let painting = false;

function stopPainting(){
    painting = false;
}

function startPainting(){
    painting = true;
}


// offset 캔버스 부분과 관련있는 값
// clientX,Y 윈도우 전체의 범위 내에서 마우스 위치값
function onMouseMove(event){
    
    const x = event.offsetX;
    const y = event.offsetY;
    
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
    } else{
        console.log(x,y)
        ctx.lineTo(x,y)
        ctx.stroke()
    }

}

function onMouseDown(event){
    painting = true;
}

if(canvas){
    canvas.addEventListener("mousemove",onMouseMove);
    canvas.addEventListener("mousedown",startPainting);
    canvas.addEventListener("mouseup",stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}