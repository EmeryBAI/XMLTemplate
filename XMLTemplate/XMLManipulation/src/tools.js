// js
function getRandomSequence(num){

    var num = '';
    var data = [];
    for(var j = 0;j<num;j++ ){
        var flag = 0;
        for (var i = 0; i < 10; i++) {
            if(i == 0){
                num += Math.floor(Math.random() * 9 + 1);
            }else{
                num += Math.floor(Math.random() * 10);
            }  
        }
        for(var k = 0;k<j;k++){
            if(data[k]==num){
                j--;
                flag = 1;
                break;
            }
        }
        if(flag!=1){
            data[j] = num;
        }
    }

return data;
}