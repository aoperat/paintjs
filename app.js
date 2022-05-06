const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext('2d');

//No7. 색변경 기능 추가
const colors = document.getElementsByClassName("jsColor");



//사이즈입력
canvas.width = 700;
canvas.height = 700;


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
        ctx.lineTo(x,y)
        ctx.stroke()
    }

}

if(canvas){
    canvas.addEventListener("mousemove",onMouseMove);
    canvas.addEventListener("mousedown",startPainting);
    canvas.addEventListener("mouseup",stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}

function handleColorClick(event){
    //console.log(event.target.style);

    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;

}

Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));