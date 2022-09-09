var temp ;

function fnPostNew_CUSTOM(){
appendData();
var prevgAction=gAction;
gAction='VALUATE';
fcjRequestDOM=buildUBSXml();
    debugs('FCZ req',fcjRequestDOM);
fcjResponseDOM=fnPost(fcjRequestDOM,servletURL,functionId);
debugs('FCZ req',fcjRequestDOM);
debugs('FCZ resp',fcjResponseDOM);
if(!fnProcessResponse())
{
return true;
}
debugs('FCZ final',fcjRequestDOM);
gAction=prevgAction;
};



function fnPreCopy_CUSTOM(){
temp = document.getElementById("BLK_MASTER__REFER").value;
return true;
};



function fnPostCopy_CUSTOM(){
	
	
document.getElementById("BLK_MASTER__REFER").value = temp + 'C';
return true;
};