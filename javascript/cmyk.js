function edit_value(el)
{	el.value=parseInt(el.value);
	var a=el.value;	
		if(a=="") el.value=0;
		if(!(a>=0&&a<=100))
			if(a<0)
		    el.value=0;
			else 
		   el.value=100;
}
function get_pointer_value(element,value)
{	var	c=element.className,i,m;
		i=c.indexOf("_"),key=c.substr(0,i);
    document.getElementById(key+"_cmyk_pointer_value").innerHTML=value;
    document.getElementById(key+"_cmyk_input_field").value=value;
    var box=document.getElementById(key+"_cmyk_box_pointer");
    var tri=document.getElementById(key+"_cmyk_triangle_pointer");
      m=6.47*value;
     box.style.marginLeft=m;
     tri.style.marginLeft=m;
}
	function input_to_bars(el)
{		var key,m,h,id=el.id;
		key=id.slice(0,id.indexOf("_"));
		var value=document.getElementById(key+"_cmyk_pointer_value").innerHTML=el.value;
		var box=document.getElementById(key+"_cmyk_box_pointer");
   	    var tri=document.getElementById(key+"_cmyk_triangle_pointer");
			m=6.47*value;
     box.style.marginLeft=m;
     tri.style.marginLeft=m;
}
function write_colors()
{ var c=document.getElementById("cyan_cmyk_pointer_value").innerHTML;
  var m=document.getElementById("mag_cmyk_pointer_value").innerHTML;
  var y=document.getElementById("yel_cmyk_pointer_value").innerHTML;
  var k=document.getElementById("black_cmyk_pointer_value").innerHTML;
var rgb=cmyk_to_rgb(c,m,y,k);
document.getElementById("cmyk_result_color_box").style.backgroundColor=rgb[3];
hex=rgb_to_hex(rgb[0],rgb[1],rgb[2]);	
hsv=rgb_to_hsv(rgb[0],rgb[1],rgb[2]);
hwb=rgb_to_hwb(rgb[0],rgb[1],rgb[2]);
hsl=rgb_to_hsl(rgb[0],rgb[1],rgb[2]);
document.getElementById("hex_value").innerHTML=hex[3];
document.getElementById("rgb_value").innerHTML=rgb[3];
document.getElementById("cmyk_value").innerHTML="cmyk("+c+", "+m+", "+y+", "+k+")";
document.getElementById("hsv_value").innerHTML=hsv[3];
document.getElementById("hwb_value").innerHTML=hwb[3];
document.getElementById("hsl_value").innerHTML=hsl[3];
}
