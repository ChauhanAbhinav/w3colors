function edit_value(el)
{	el.value=parseInt(el.value);
	var a=el.value;	
		if(a=="") el.value=0;
		if(!(a>=0&&a<=255))
			if(a<0)
		    el.value=0;
			else 
		   el.value=255;
}	function input_to_bars(el)
{		var x,key,id=el.id;
		key=id.slice(0,id.indexOf("_"))
		document.getElementById(key+"_input_bar").value=el.value;
}
	function bars_to_input(el)
	{  var x,key,id=el.id;
		key=id.slice(0,id.indexOf("_"))
		document.getElementById(key+"_rgb_input_field").value=el.value;
	}
	function write_colors()
	{	var r,g,b;
		r=parseInt(document.getElementById("red_input_bar").value);
		g=parseInt(document.getElementById("green_input_bar").value);
		b=parseInt(document.getElementById("blue_input_bar").value);
document.getElementById("rgb_result_color_box").style.backgroundColor="rgb("+r+","+g+","+b+")";
hex=rgb_to_hex(r,g,b);	
hsl=rgb_to_hsl(r,g,b);
hsv=rgb_to_hsv(r,g,b);
hwb=rgb_to_hwb(r,g,b);
cmyk=rgb_to_cmyk(r,g,b);
document.getElementById("rgb_value").innerHTML="rgb("+r+", "+g+", "+b+")";
document.getElementById("hex_value").innerHTML=hex[3];
document.getElementById("hsl_value").innerHTML=hsl[3];
document.getElementById("hsv_value").innerHTML=hsv[3];
document.getElementById("hwb_value").innerHTML=hwb[3];
document.getElementById("cmyk_value").innerHTML=cmyk[4];
	}