
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



function getSerialXML(xmlDoc){
    const s = new XMLSerializer();
    const d = xmlDoc;
    const str = s.serializeToString(d);
    return str;
   
}
function xmlDownload(xmlStr,fileName){
    var blob = new Blob([xmlStr], {type : 'text/plain'});
    saveAs(blob, fileName);
}
// randLowerBound: 0;
// randUpperBound: 20;
// randNum: randLowerBound+rand(randUpperBound);
// var1: 5 +randNum;
// var2: 7 +randNum
// ta: var1+var2







