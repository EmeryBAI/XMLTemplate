let bt = document.getElementsByClassName("demoTrigger");
for(let i = 0 ;i<bt.length;i++){
   bt[i].addEventListener("click",function(){
    document.getElementsByClassName("demoOperator")[i].style.display="block";
   });
}

let bt1 = document.getElementsByClassName("demoHidder");
for(let i = 0 ;i<bt1.length;i++){
    bt1[i].addEventListener("click",function(){
        let maxi= document.getElementsByClassName("demoOperator").length-1;
        console.log(maxi);
        console.log(i);
        if(i>maxi) {
            document.getElementsByClassName("demoOperator")[maxi].style.display="none";
            document.getElementsByClassName("demoOperator")[maxi].classList.add("inactive");
        }  
        else document.getElementsByClassName("demoOperator")[i].style.display="none";
     
    });
}

let nextbtns = document.getElementsByClassName("nextSlide");
let prebtns = document.getElementsByClassName("preSlide");
let slide = document.getElementsByClassName("slide");

for(let i = 0 ;i<nextbtns.length;i++){
    nextbtns[i].addEventListener("click",function(){
    slide[i+1].style.display="block";
    slide[i+1].classList.remove("inactive");
    slide[i].style.display="none";
    slide[i].classList.add("inactive");

    });
}

for(let i = 0 ;i<nextbtns.length;i++){
    prebtns[i].addEventListener("click",function(){
    slide[i].style.display="block";
    slide[i].classList.remove("inactive");

    slide[i+1].style.display="none";
    slide[i+1].classList.add("inactive");

    });
}




//检测数字合法性
let tNums = document.getElementsByClassName("tNum");

// table加行
//------------------------------------------------------------统一table, add, delete 操作
// 前提：满足第一个thead的第一子元素为add按钮，
// tr的第一子元素为delete按钮，
// 有一行tr 的class 有hidden
// 操作： 
// 为 add按钮添加class为add
// 为 delete按钮添加class为add

//---------------------------------------------------------------
let addBtn = document.getElementsByClassName("add");
let dltBtns = document.getElementsByClassName("delete");

 function AddRowToTable(e){
    let table = e.currentTarget.parentNode.parentNode.parentNode.parentNode;
    var oldDom = table.querySelector('.hidden');


    var newDom = oldDom.cloneNode(true);

    newDom.style.display= "table-row";
    newDom.childNodes[1].childNodes[1].addEventListener("click",deleteData,true);


    let tbody = table.getElementsByTagName("tbody")[0];

    tbody.appendChild(newDom);

 }
//dlt绑事件
function deleteData(e){
    btn = e.currentTarget;
    var childTd = btn.parentNode;
    var childTr = childTd.parentNode;
    var parentTbody = childTr.parentNode;
    parentTbody.removeChild(childTr);
} 
for(let i = 0;i<dltBtns.length;i++){
    dltBtns[i].addEventListener("click",deleteData,true);
}

 //add绑事件
 addBtn[0].addEventListener("click",AddRowToTable,true);



  