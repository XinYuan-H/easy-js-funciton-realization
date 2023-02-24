let areaDiv = document.getElementById("areaDiv");
let showMsg = document.getElementById("showMsg");
let box = document.getElementById("box");
//鼠標移動事件 onmousemove

//當響應函數的事件被觸發時，瀏覽器每次都會將一個事件對象作為實參傳進函數

areaDiv.onmousemove = function(e){
    let x = e.clientX;
    let y = e.clientY;
    //直接在showMsg裡面用innerHTML加入XY座標
    showMsg.innerHTML = "X = " + x + "," + "Y = " + y;

    

};


document.onmousemove = function(event){
    let x = event.pageX; //client為可見視窗相對位置 用page則是整個頁面
    let y = event.pageY;
    box.style.left = x + "px";
    box.style.top = y + "px";


}