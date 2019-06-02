function change_white_black(hue)
{	for(i=0;i<=100;i++)
	{	var r1=hwb_to_rgb(hue,i,0),r2=hwb_to_rgb(hue,0,i);;
		document.getElementById('white_hwb_slider_small_div'+i).style.backgroundColor=r1[3];
		document.getElementById('black_hwb_slider_small_div'+i).style.backgroundColor=r2[3];
	}
}
function edit_value(el)
{	el.value=parseInt(el.value);	
		var a=el.value;
		if(el.value=="") el.value=0;
		if(el.id=="hue_hwb_input_field")
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
{	var	c=element.className,v1,v2,i,m,key;
		i=c.indexOf("_"),key=c.substr(0,i);
	if(key!="hue")
	{ 	m=6.48*value;
		v1=parseInt(document.getElementById("white_hwb_pointer_value").innerHTML);
		v2=parseInt(document.getElementById("black_hwb_pointer_value").innerHTML);
		   if(key=="white")
			{  if((value+v2)>100) {v2=100-value;
				document.getElementById("black_hwb_box_pointer").style.marginLeft=6.48*v2;
			   	document.getElementById("black_hwb_triangle_pointer").style.marginLeft=6.48*v2;
				document.getElementById("black_hwb_pointer_value").innerHTML=v2;
				document.getElementById("black_hwb_input_field").value=v2;}
			}
			else{  if((value+v1)>100) {v1=100-value;
				    document.getElementById("white_hwb_box_pointer").style.marginLeft=6.48*v1;
			     	document.getElementById("white_hwb_triangle_pointer").style.marginLeft=6.48*v1;
	   			    document.getElementById("white_hwb_pointer_value").innerHTML=v1;
	   			    document.getElementById("white_hwb_input_field").value=v1;}
	   			}
	}
	else  m=1.8*value;
    document.getElementById(key+"_hwb_pointer_value").innerHTML=value;
    document.getElementById(key+"_hwb_input_field").value=value;
    var box=document.getElementById(key+"_hwb_box_pointer");
    var tri=document.getElementById(key+"_hwb_triangle_pointer");
     box.style.marginLeft=m;
     tri.style.marginLeft=m;
}
	function input_to_bars(el)
{		var key,m,hue,id=el.id;
		key=id.slice(0,id.indexOf("_"));
		var value=parseInt(document.getElementById(key+"_hwb_pointer_value").innerHTML=el.value);
		var box=document.getElementById(key+"_hwb_box_pointer");
   	    var tri=document.getElementById(key+"_hwb_triangle_pointer");
	if(key!="hue")
	{ 	m=6.48*value;
		v1=parseInt(document.getElementById("white_hwb_pointer_value").innerHTML);
		v2=parseInt(document.getElementById("black_hwb_pointer_value").innerHTML);
		   if(key=="white")
			{  if((value+v2)>100) { v2=100-value;
				document.getElementById("black_hwb_box_pointer").style.marginLeft=6.48*v2;
			   	document.getElementById("black_hwb_triangle_pointer").style.marginLeft=6.48*v2;
				document.getElementById("black_hwb_pointer_value").innerHTML=v2;
				document.getElementById("black_hwb_input_field").value=v2;}
			}
			else {  if((value+v1)>100) {v1=100-value;
				    document.getElementById("white_hwb_box_pointer").style.marginLeft=6.48*v1;
			     	document.getElementById("white_hwb_triangle_pointer").style.marginLeft=6.48*v1;
	   			    document.getElementById("white_hwb_pointer_value").innerHTML=v1;
	   			    document.getElementById("white_hwb_input_field").value=v1;}
	   			}
	}
else 
   		{ m=1.8*value;hue=value
   			for(i=0;i<=100;i++)
			{	var r1=hwb_to_rgb(hue,i,0),r2=hwb_to_rgb(hue,0,i);;
				document.getElementById('white_hwb_slider_small_div'+i).style.backgroundColor=r1[3];
				document.getElementById('black_hwb_slider_small_div'+i).style.backgroundColor=r2[3];
			}	
		}
     box.style.marginLeft=m;
     tri.style.marginLeft=m;
}
function write_colors()
{ var h=document.getElementById("hue_hwb_pointer_value").innerHTML;
  var w=document.getElementById("white_hwb_pointer_value").innerHTML;
  var b=document.getElementById("black_hwb_pointer_value").innerHTML;
var rgb=hwb_to_rgb(h,w,b);
document.getElementById("hwb_result_color_box").style.backgroundColor=rgb[3];
hex=rgb_to_hex(rgb[0],rgb[1],rgb[2]);	
hsl=rgb_to_hsl(rgb[0],rgb[1],rgb[2]);
hsv=rgb_to_hsv(rgb[0],rgb[1],rgb[2]);
cmyk=rgb_to_cmyk(rgb[0],rgb[1],rgb[2]);
document.getElementById("hex_value").innerHTML=hex[3];
document.getElementById("hwb_value").innerHTML="hwb("+h+", "+w+", "+b+")";
document.getElementById("hsl_value").innerHTML=hsl[3];
document.getElementById("hsv_value").innerHTML=hsv[3];
document.getElementById("rgb_value").innerHTML=rgb[3];
document.getElementById("cmyk_value").innerHTML=cmyk[4];
}
