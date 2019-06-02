var pre_color_1=document.getElementById("smd_12");
var pre_color_2=document.getElementById("smd_213");
var html_color_1=document.getElementById("html_color_1");
var html_color_2=document.getElementById("html_color_2");
var input_color_text_1=document.getElementById("input_color_text_1");
var input_color_text_2=document.getElementById("input_color_text_2");
var selected_color_1=document.getElementById("selected_color_1");
var selected_color_2=document.getElementById("selected_color_2"); 
function show_cpp(key)
{var html_pp_box=document.getElementById('html_pp_box');
 var html_pp_tri=document.getElementById('html_pp_tri');
if(key==1)
{html_pp_box.style.cssText="display:block;top:-314px;";
html_pp_tri.style.cssText="display:block;top:-316px;transform:rotate(0deg);";
}
else
{html_pp_box.style.cssText="display:block;top:3px;";
html_pp_tri.style.cssText="display:block;top:-36px;transform:rotate(180deg);";
}
}
function hide_cpp()
{ html_pp_box.style.display="none";html_pp_tri.style.display="none";
}
function set_selecting_color(el,key)
{var bg=window.getComputedStyle(el, null).backgroundColor;
var rgb=rgb_extracter(bg);
var hex=rgb_to_hex(rgb[0],rgb[1],rgb[2]);
if(key==1)
{ pre_color_1.style.cssText="border:none;height:50px;width:55px";
html_color_1.value=hex[3];input_color_text_1.value=hex[3];
selected_color_1.style.backgroundColor=hex[3];pre_color_1=el;
}
else 
{pre_color_2.style.cssText="border:none;height:50px;width:55px";
html_color_2.value=hex[3];input_color_text_2.value=hex[3];
selected_color_2.style.backgroundColor=hex[3];pre_color_2=el;
}
el.style.cssText="border:1px solid black;height:48px;width:53px"; show_color_shade();
}
function rgb_extracter(rgb)
{var r,g,b,i1=rgb.indexOf(","),i2=rgb.lastIndexOf(",");
 r=parseInt(rgb.slice(4,i1));
 g=parseInt(rgb.slice(i1+1,i2));
 b=parseInt(rgb.slice(i2+1,rgb.indexOf(")")));
 return [r,g,b];
}	
function rgb_to_hex(r,g,b) 
{var h1,h2,h3,h;
h1=r.toString(16);h2=g.toString(16);h3=b.toString(16);
if(h1.length==1) h1+="0";if(h2.length==1) h2+="0";if(h3.length==1) h3+="0";		  
h="#"+h1+h2+h3;return [h1,h2,h3,h];
}
function html_colors(el,key)
{if(key==1)
{input_color_text_1.value=el.value;
selected_color_1.style.backgroundColor=el.value;
pre_color_1.style.cssText="border:none;height:50px;width:55px";}
else
{input_color_text_2.value=el.value;
selected_color_2.style.backgroundColor=el.value;
pre_color_2.style.cssText="border:none;height:50px;width:55px";} show_color_shade();
}
function edit_input(el,key)
{if((el.value).length==0) el.value="#";
var value=el.value;lc=value.substr(-1);
if(value.length>1)
if(!(lc==0||lc==1||lc==2||lc==3||lc==4||lc==5||lc==6||lc==7||lc==8||lc==9||lc=='a'||lc=='b'||lc=='c'||lc=='d'||lc=='e'||lc=='f'))
{el.value=value.slice(0,value.lastIndexOf(lc));}
if(el.value.substr(0,1)!="#") el.value="#"+el.value;
if(el.value.length==7)
{input_to_box(el.value,key); show_color_shade();}
}
function input_focus_out(el,key)
{if(el.value.length!=7)
	if(key==1) el.value=html_color_1.value;
	else el.value=html_color_2.value;
}
function input_to_box(val,key)
{	if(key==1)
	{selected_color_1.style.backgroundColor=val;
	html_color_1.value=val;
	pre_color_1.style.cssText="border:none;height:50px;width:55px";}
else 
	{selected_color_2.style.backgroundColor=val;
	html_color_2.value=val;
	pre_color_2.style.cssText="border:none;height:50px;width:55px";}
}
var copy_target=-1,pre_copy_target=-1;
function show_color_shade()
{ var i,hex1,hex2,r1,r2,g1,g2,b1,b2,x,r,g,b,hex;
hex1=input_color_text_1.value;hex2=input_color_text_2.value;
r1=parseInt(hex1.substr(1,2),16);g1=parseInt(hex1.substr(3,2),16);b1=parseInt(hex1.substr(5,2),16);
r2=parseInt(hex2.substr(1,2),16);g2=parseInt(hex2.substr(3,2),16);b2=parseInt(hex2.substr(5,2),16);
x='<table id="color_shade_table" cellpadding="0" cellspacing="0" >';
for(i=0;i<=20;i++)
{ r=Math.round(r1+(r2-r1)/20*i);
g=Math.round(g1+(g2-g1)/20*i);
b=Math.round(b1+(b2-b1)/20*i);
hex=rgb_to_hex(r,g,b);
x+='<tr><td width="65"><span class="color_shade_value" id="color_shade_value_'+i+'">'+hex[3]+'</span></td>';
x+='<td align="center"><div onmouseover="show_copy('+i+');change_copy_target('+i+');" onmouseout="hide_copy('+i+')" id="color_shade_'+i+'" class="color_shade cpy_btn" data-clipboard-target="#color_shade_value_'+i+'" style="background-color:'+hex[3]+'"><span onmouseover="show_copy('+i+');change_copy_target('+i+');" id="copy_'+i+'" class="copy" >Copy</span></div></td></tr>';
}
x+='</table>';
document.getElementById("shade_frame").innerHTML=x;
copy_colors();
}
show_color_shade();
function change_copy_target(k)
{copy_target=k;}
function copy_colors(){
var cpy_btns = document.querySelectorAll('.cpy_btn');
var clipboard = new Clipboard(cpy_btns);
clipboard.on('success', function(e) {
if(copy_target!=-1)
{ if(pre_copy_target!=-1) document.getElementById('copy_'+pre_copy_target).innerHTML="Copy";
setTimeout(delay,80);
function delay(){document.getElementById('copy_'+copy_target).innerHTML="Copied";
pre_copy_target=copy_target;}
}
e.clearSelection();
});
clipboard.on('error', function(e) {
if(copy_target!=-1) document.getElementById('copy_'+copy_target).innerHTML="Failed";
e.clearSelection();
});}
copy_colors();
function show_copy(k)
{var copy=document.getElementById("copy_"+k),bg,shade_box;
 shade_box=document.getElementById("color_shade_"+k);
 copy.style.opacity="1";
 bg=window.getComputedStyle(shade_box,null).backgroundColor;
 bg=rgb_extracter(bg); bg[0]/=255, bg[1]/=255, bg[2]/=255;
    var max=Math.max(bg[0],bg[1],bg[2]),min=Math.min(bg[0],bg[1],bg[2]);
    var l=(max + min)/2*100;
if(l>76) copy.style.color="black";
else 	copy.style.color="white";
}
function hide_copy(k)
{var copy=document.getElementById("copy_"+k);
 copy.style.opacity="0";
}
