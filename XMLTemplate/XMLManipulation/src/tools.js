// js
function getRandomStr(num){

    var numBuffer = '';
    var data = [];
    for(var j = 0;j<num;j++ ){
        var flag = 0;
        for (var i = 0; i < 10; i++) {
            if(i == 0){
                numBuffer += Math.floor(Math.random() * 9 + 1);
            }else{
                numBuffer += Math.floor(Math.random() * 10);
            }  
        }
        for(var k = 0;k<j;k++){
            if(data[k]==numBuffer){
                j--;
                flag = 1;
                break;
            }
        }
        if(flag!=1){
            data[j] = numBuffer;
        }
        numBuffer='';
    }
    let str="";
    for(var i = 0;i<num;i++){
        str+="<deployedseed>"+data[i]+"</deployedseed>"
    }


return str;
}
function getTableContent(id){
    var mytable = document.getElementById(id);
    var data = [];
    for(var i=0,rows=mytable.rows.length; i<rows; i++){
        for(var j=0,cells=mytable.rows[i].cells.length; j<cells; j++){
            if(!data[i]){
                data[i] = new Array();
            }
            data[i][j] = mytable.rows[i].cells[j].firstChild.value;
        }
    }
    return data;
}