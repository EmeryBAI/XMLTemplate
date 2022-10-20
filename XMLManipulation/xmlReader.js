
function getXMLDOM(filePath){
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    xmlhttp.open("GET",filePath,false);
    xmlhttp.send();
    xmlDoc=xmlhttp.responseXML;
    return xmlDoc;

}

function getTableContent(id){
    var mytable = document.getElementById(id);
    var data = [];
    for(var i=0,rows=mytable.rows.length; i<rows; i++){
        for(var j=0,cells=mytable.rows[i].cells.length; j<cells; j++){
            if(!data[i]){
                data[i] = new Array();
            }
            data[i][j] = mytable.rows[i].cells[j].innerHTML;
        }
    }
    return data;
}

function getSerialXML(xmlDoc){
    const s = new XMLSerializer();
    const d = xmlDoc;
    const str = s.serializeToString(d);
    return str;
   
}
// randLowerBound: 0;
// randUpperBound: 20;
// randNum: randLowerBound+rand(randUpperBound);
// var1: 5 +randNum;
// var2: 7 +randNum
// ta: var1+var2







