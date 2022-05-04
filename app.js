const canvas = document.getElementById("jsCanvas");

//그림을 그리는 상태값
let painting = false;

function stopPainting(){
    painting = false;
}

// offset 캔버스 부분과 관련있는 값
// clientX,Y 윈도우 전체의 범위 내에서 마우스 위치값
function onMouseMove(event){
    
    const x = event.offsetX;
    const y = event.offsetY;
    
}

function onMouseDown(event){
    painting = true;
    console.log(event);

}

function onMouseUp(event){
    stopPainting();
}

if(canvas){
    canvas.addEventListener("mousemove",onMouseMove);
    canvas.addEventListener("mousedown",onMouseDown);
    canvas.addEventListener("mouseup",onMouseUp);
    canvas.addEventListener("mouseleave", stopPainting);
}