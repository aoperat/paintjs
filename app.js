const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext('2d');
//No7. 색변경 기능 추가
const colors = document.getElementsByClassName("jsColor");
//No8. 크기변경 기능 추가
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");

const saveBtn = document.getElementById("jsSave");

const INITIAL_COLOR = "2c2c2c";
const CANVAS_SIZE = 700;


//사이즈입력
canvas.width = 700;
canvas.height = 700;


ctx.fillStyle="white";
ctx.fillRect(0,0,CANVAS_SIZE,CANVAS_SIZE);


ctx.strokeStyle =INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;



//그림을 그리는 상태값
let painting = false;
let filling = false;

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

function handleCanvasClick(){
    if(filling){
        ctx.fillRect(0,0,CANVAS_SIZE,CANVAS_SIZE);
    }
}

function handleCM(event){
    event.preventDefault();
    
}

if(canvas){
    canvas.addEventListener("mousemove",onMouseMove);
    canvas.addEventListener("mousedown",startPainting);
    canvas.addEventListener("mouseup",stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click",handleCanvasClick);
    canvas.addEventListener("contextmenu",handleCM);
}

function handleColorClick(event){
    //console.log(event.target.style);

    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;

}

function handleRangeChange(event){
    size = event.target.value;
    ctx.lineWidth = size;

}


function handleModeClick(){
    if(filling === true){
        filling = false;
        mode.innerHTML = "Fill";
    }else{
        
        filling = true;
        mode.innerHTML = "Paint";

        //No9.
        // ctx.fillStyle ="green"; 
        // ctx.fillRect(50,20,100,49);
        // ctx.fillStyle ="purple"; 
        // ctx.fillRect(80,100,100,49);
    } 
}

function handleSaveClick(){
    const image = canvas.toDataURL("image/png");
    //console.log(image);
    const link = document.createElement("a");
    link.href = image;
    link.download = "PaintJS.png";
    link.click();
}

//get canvas data 


Array.from(colors).forEach(color =>
    color.addEventListener("click", handleColorClick)
);

if(range){
    range.addEventListener("input", handleRangeChange)
}


if(mode){
    mode.addEventListener("click",handleModeClick );
}

if(saveBtn){
    saveBtn.addEventListener("click", handleSaveClick)
}