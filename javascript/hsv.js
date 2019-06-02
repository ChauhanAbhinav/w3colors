function change_sat_val(hue)
{	var i,rgb;
	for(i=0;i<=100;i++)
	{	rgb=hsv_to_rgb(hue,100,i) ;
		document.getElementById('sat_hsv_slider_small_div'+i).style.backgroundColor='hsl('+hue+','+i+'%,50%)';
		document.getElementById('val_hsv_slider_small_div'+i).style.backgroundColor=rgb[3];
	}
}
function edit_value(el)
{	el.value=parseInt(el.value);	
		var a=el.value;
		if(a=="") el.value=0;
		if(el.id=="hue_hsv_input_field")
		{	if(!(a>=0&&a<=360))
			if(a<0) el.value=0;
			else 
			 el.value=360;
		}
		else{
			if(!(a>=0&&a<=100))
			if(a<0) el.value=0;
			else 
			 el.value=100;
		}
}
function get_pointer_value(element,value)
{	var	c=element.className,i,m;
		i=c.indexOf("_"),key=c.substr(0,i);
    document.getElementById(key+"_hsv_pointer_value").innerHTML=value;
    document.getElementById(key+"_hsv_input_field").value=value;
    var box=document.getElementById(key+"_hsv_box_pointer");
    var tri=document.getElementById(key+"_hsv_triangle_pointer");
   
    if(key=="hue") m=1.8*value;
    else  m=6.47*value;
     box.style.left=m;
     tri.style.left=m+11;
}
	function input_to_bars(el)
{		var key,m,hue,id=el.id;
		key=id.slice(0,id.indexOf("_"));
		var value=document.getElementById(key+"_hsv_pointer_value").innerHTML=el.value;
		var box=document.getElementById(key+"_hsv_box_pointer");
   	    var tri=document.getElementById(key+"_hsv_triangle_pointer");
		if(key=="hue")
   			{ m=1.8*value;hue=value; 
   		for(i=0;i<=100;i++)
		{rgb=hsv_to_rgb(hue,100,i) ;
		document.getElementById('sat_hsv_slider_small_div'+i).style.backgroundColor='hsl('+hue+','+i+'%,50%)';
		document.getElementById('val_hsv_slider_small_div'+i).style.backgroundColor=rgb[3];
		} }
   else m=6.47*value;
     box.style.left=m;
     tri.style.left=m+11;
}
function write_colors()
{ var h=document.getElementById("hue_hsv_pointer_value").innerHTML;
  var s=document.getElementById("sat_hsv_pointer_value").innerHTML;
  var v=document.getElementById("val_hsv_pointer_value").innerHTML;
var rgb=hsv_to_rgb(h,s,v);
document.getElementById("hsv_result_color_box").style.backgroundColor=rgb[3];
hex=rgb_to_hex(rgb[0],rgb[1],rgb[2]);	
hsl=rgb_to_hsl(rgb[0],rgb[1],rgb[2]);
hwb=rgb_to_hwb(rgb[0],rgb[1],rgb[2]);
cmyk=rgb_to_cmyk(rgb[0],rgb[1],rgb[2]);
document.getElementById("hex_value").innerHTML=hex[3];
document.getElementById("rgb_value").innerHTML=rgb[3];
document.getElementById("hsv_value").innerHTML="hsv("+h+", "+s+", "+v+")";
document.getElementById("hsl_value").innerHTML=hsl[3];
document.getElementById("hwb_value").innerHTML=hwb[3];
document.getElementById("cmyk_value").innerHTML=cmyk[4];
}
