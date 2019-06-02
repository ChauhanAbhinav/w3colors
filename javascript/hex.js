function input_to_bars(el)
{  var a1,a2,a=el.value,value,box,tri,i=(el.id).indexOf("_"),key=(el.id).slice(0,i);
		if(a.length==1)
		{  if(isNaN(a))
			{if(!(a=="a"||a=="b"||a=="c"||a=="d"||a=="e"||a=="f"))
				a=el.value="";
			}
		}
		else
		  	{if(a.length==2)
			  { a2=a.slice(1);
				a1=a.substr(0,1);
				if(isNaN(a2))
				{if(!(a2=="a"||a2=="b"||a2=="c"||a2=="d"||a2=="e"||a2=="f"))
				a=el.value=a1;
				}
			  }
			 } 
		
	 value=parseInt(a,16);
	 if(isNaN(value)) 
	 {value=0;a="00";}  //this will prevent pointer to stop at last loc, but this is not working
	 if(a.length==1) a="0"+a;
	 
	 document.getElementById(key+"_hex_pointer_value").innerHTML=a;
	 box=document.getElementById(key+"_hex_box_pointer");
     tri=document.getElementById(key+"_hex_triangle_pointer");
     var m=2.5*value;
    box.style.marginLeft=m;
    tri.style.marginLeft=m;
}
function input_focus_out(el)
{ 
	if(el.value=="")
   el.value="00";
}
function get_pointer_value(element,value)
	{var	c=element.className,i,hex;
			i=c.indexOf("_"),key=c.substr(0,i);
	 		hex=value.toString(16);
	if(hex.length==1)
	hex="0"+hex;
    document.getElementById(key+"_hex_pointer_value").innerHTML=hex;
    document.getElementById(key+"_hex_input_field").value=hex;
    var box=document.getElementById(key+"_hex_box_pointer");
    var tri=document.getElementById(key+"_hex_triangle_pointer");
    var m=2.5*value;
    box.style.marginLeft=m;
    tri.style.marginLeft=m;
	}		
function write_colors()
{	var r,g,b,h1,h2,h3,hsl,hsv,hwb,cmyk;
	 h1=document.getElementById("red_hex_pointer_value").innerHTML;
	 h2=document.getElementById("green_hex_pointer_value").innerHTML;
	 h3=document.getElementById("blue_hex_pointer_value").innerHTML;
	 r=parseInt(h1,16);
 	 g=parseInt(h2,16);
 	 b=parseInt(h3,16);
 	 document.getElementById("hex_result_color_box").style.backgroundColor="rgb("+r+","+g+","+b+")";
hsl=rgb_to_hsl(r,g,b);
hsv=rgb_to_hsv(r,g,b);
hwb=rgb_to_hwb(r,g,b);
cmyk=rgb_to_cmyk(r,g,b);
document.getElementById("hex_value").innerHTML="#"+h1+h2+h3;
document.getElementById("rgb_value").innerHTML="rgb("+r+","+g+","+b+")";
document.getElementById("hsl_value").innerHTML=hsl[3];
document.getElementById("hsv_value").innerHTML=hsv[3];
document.getElementById("hwb_value").innerHTML=hwb[3];
document.getElementById("cmyk_value").innerHTML=cmyk[4];
}