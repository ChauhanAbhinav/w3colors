function change_sat_lit(el)
{	 var i,h,id=el.id;
	h=id.slice(24);
	for(i=0;i<=100;i++)
	{	document.getElementById('sat_hsl_slider_small_div'+i).style.backgroundColor='hsl('+h+','+i+'%,50%)';
		document.getElementById('lit_hsl_slider_small_div'+i).style.backgroundColor='hsl('+h+',100%,'+i+'%)';
	}
}
function edit_value(el)
{	el.value=parseInt(el.value);	
		var a=el.value;
		if(a=="") el.value=0;
		if(el.id=="hue_hsl_input_field")
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
    document.getElementById(key+"_hsl_pointer_value").innerHTML=value;
    document.getElementById(key+"_hsl_input_field").value=value;
    var box=document.getElementById(key+"_hsl_box_pointer");
    var tri=document.getElementById(key+"_hsl_triangle_pointer");
   
    if(key=="hue")
   			 m=1.8*value;
   else if(key=="sat")	m=6.47*value-647;
   		 else          m=6.47*value-326;
     box.style.marginLeft=m;
     tri.style.marginLeft=m;
}
	function input_to_bars(el)
{		var key,m,h,id=el.id;
		key=id.slice(0,id.indexOf("_"));
		var value=document.getElementById(key+"_hsl_pointer_value").innerHTML=el.value;
		var box=document.getElementById(key+"_hsl_box_pointer");
   	    var tri=document.getElementById(key+"_hsl_triangle_pointer");
		if(key=="hue")
   			{ m=1.8*value;h=value
   			for(i=0;i<=100;i++)
			{	document.getElementById('sat_hsl_slider_small_div'+i).style.backgroundColor='hsl('+h+','+i+'%,50%)';
				document.getElementById('lit_hsl_slider_small_div'+i).style.backgroundColor='hsl('+h+',100%,'+i+'%)';}
			}
   else if(key=="sat")	m=6.47*value-647;
   		 else          m=6.47*value-326;
     box.style.marginLeft=m;
     tri.style.marginLeft=m;
}
function write_colors()
{ var h=document.getElementById("hue_hsl_pointer_value").innerHTML;
  var s=document.getElementById("sat_hsl_pointer_value").innerHTML;
  var l=document.getElementById("lit_hsl_pointer_value").innerHTML;
document.getElementById("hsl_result_color_box").style.backgroundColor="hsl("+h+","+s+"%,"+l+"%)";
var rgb=hsl_to_rgb(h,s,l);
hex=rgb_to_hex(rgb[0],rgb[1],rgb[2]);	
hsv=rgb_to_hsv(rgb[0],rgb[1],rgb[2]);
hwb=rgb_to_hwb(rgb[0],rgb[1],rgb[2]);
cmyk=rgb_to_cmyk(rgb[0],rgb[1],rgb[2]);
document.getElementById("hex_value").innerHTML=hex[3];
document.getElementById("rgb_value").innerHTML=rgb[3];
document.getElementById("hsl_value").innerHTML="hsl("+h+", "+s+", "+l+")";
document.getElementById("hsv_value").innerHTML=hsv[3];
document.getElementById("hwb_value").innerHTML=hwb[3];
document.getElementById("cmyk_value").innerHTML=cmyk[4];
}
