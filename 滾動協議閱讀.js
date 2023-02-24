// onscroll 滾動事件  當用戶滾動

let info = document.getElementById("info");
let agree = document.getElementById("agree");
let submit = document.getElementById("submit");
info.onscroll = function(){
    if(this.scrollHeight - Math.floor(this.scrollTop) == this.clientHeight){
        //scrollTop在google裡會有浮點數 因此要用Math來將值取整
        //disabled 返回true為禁用 false為不禁用
           agree.disabled = false;    
    };
};


agree.onclick = function(){
    submit.disabled = false;
    if(!agree.checked){
        submit.disabled = true;
    }
};

