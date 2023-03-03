
//獲取box1
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
//獲取btn01
let btn01 = document.getElementById("btn01");
let btn02 = document.getElementById("btn02");
let btn03 = document.getElementById("btn03");
let btn04 = document.getElementById("btn04");

// btn01.onclick = function(){
//     clearInterval(timer);
//     //開啟定時器執行動畫效果
//     timer  = setInterval(function(){
        
//         //獲取box1原來的left值
//         //getComputedStyle獲得的值是有單位的(px),因此用parseInt來取整
//         let oldValue = parseInt(getComputedStyle(box1,null)["left"]);
//         let newValue = oldValue + 10;
//         if(newValue > 800){
//             newValue = 800;
//         }
//         box1.style.left = newValue + "px";
//         if(newValue >= 800){
//             clearInterval(timer)

//         }
        
//     },30)
   
// }

function move(element , speed , target , attr, callback){
    clearInterval(element.timer);
    //開啟定時器執行動畫效果
    //替element添加timer方法已開啟各自的定時器,而不會相衝
    element.timer  = setInterval(function(){
        
        //獲取box1原來的left值
        //getComputedStyle獲得的值是有單位的(px),因此用parseInt來取整
        let oldValue = parseInt(getComputedStyle(element,null)[attr]);
        let newValue = oldValue + speed;
        if((speed < 0 && newValue < target) || (speed > 0 && newValue > target)){
            newValue = target;
        }
        element.style[attr] = newValue + "px";
        if(newValue == target){
            clearInterval(element.timer);
            callback && callback(); //如果有callback才調用 沒有不調

        }
        
    },30)
}


btn01.onclick = function(){
    move(box1, 10 , 800, "left")
}
   
btn02.onclick  = function(){
    move(box1 , -10 , 0, "left");
};

btn03.onclick = function(){
    move(box2,10,800, "left")
}

btn04.onclick = function(){
    move(box2,10,800,"width",function(){
        move(box2,-10,0,"height",function(){
            alert("動畫執行完畢");
        })
    })
}