let a = document.getElementsByTagName("a");
//首先獲取所有a標籤

function deleteA(){  //創建一個函數方便之後調用
    
        let tr = this.parentNode.parentNode; //在響應函數中this即綁定事件的對象，parentNode為獲取父節點的方法
        if(confirm("確定刪除" + tr.firstElementChild.innerText + "嗎?")){ /*使用firstElementChild屬性獲取子元素
                                                                              *firstChild為獲取子節點 */
                //confirm為windows對象方法，顯示帶有確認或取消的消息提示框
                //點擊確認返回true  點擊取消返回false
                tr.parentNode.removeChild(tr);
        };
    
}

for(let i =0; i < a.length; i++)/*將a標籤遍歷*/{
    a[i].onclick = deleteA;
};





//先獲取submit提交按鈕
let submit = document.getElementById("addEmpButton");
submit.onclick= function (){
    //當submit被點擊後找到Name Email Salary對象
    let name = document.getElementById("empName").value; //使用value屬性獲得input裡的內容
    let email = document.getElementById("empEmail").value;
    let salary = document.getElementById("empSalary").value;

    //之後將獲取到的內容以此種格式傳到table裡
    /*    <tr>
            <td></td>
            <td></td>
            <td></td>
            <td><a href="javascript:;">delete</a></td>
          </tr>*/

    //創建tr, td , a標籤
    let tr = document.createElement("tr");
    let tdName = document.createElement("td");
    let tdMail = document.createElement("td");
    let tdSalary = document.createElement("td");
    let tda = document.createElement("td");
    let an = document.createElement("a");
    //添加a的屬性href
    an.href = "javascript:;" ;
    //創建文本節點
    let nameText = document.createTextNode(name);
    let mailText = document.createTextNode(email);
    let salaryText = document.createTextNode(salary);
    let aText = document.createTextNode("delete");
    //組合  將文本節點加進td中
    tdName.appendChild(nameText);
    tdMail.appendChild(mailText);
    tdSalary.appendChild(salaryText);
    an.appendChild(aText);
    //將a添加到<td>中
    tda.appendChild(an);
    //組合 將td節點加進tr中
    tr.appendChild(tdName);
    tr.appendChild(tdMail);
    tr.appendChild(tdSalary);
    tr.appendChild(tda);
    

    //獲取table並將tr加進table中
    let table = document.getElementById("employeeTable");
    // table.appendChild(tr);

    //但是新加入的標籤會被加在瀏覽器創建的tbody標籤外面，因此要獲取tbody元素並將tr加進裡面
    let tbody = table.getElementsByTagName("tbody")[0]; 
    tbody.appendChild(tr);
    
    for(let i =0; i < a.length; i++)/*將a標籤遍歷*/{
        a[i].onclick = deleteA;
    };
    
}


