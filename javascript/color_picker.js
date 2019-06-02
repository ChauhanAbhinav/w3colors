var pp=document.getElementById("picker_pointer");
var hp=document.getElementById("hue_pointer");
var copy=document.getElementById("copy");
function get_color(picker,eve)
{var rect,x,v,l1,l2;
rect = picker.getBoundingClientRect(); 
x=eve.clientX - rect.left;
y=eve.clientY - rect.top;
if(x<0||x>505)
	if(x<0) x=0;
	else x=505;
if(y<0||y>403)
	if(y<0) y=0;
	else y=403;
var a=x-7,b=y-7;
pp.style.left=a;pp.style.top=b;
x=Math.round(x/5.05);y=Math.round(y/4.03);
l1=100-y;l2=Math.round(l1/2);
sat=x;
lit=l1-Math.round(l2/100*x);
if(lit>70) { pp.style.borderColor="black";
			 copy.style.color="black";}
	else   {pp.style.borderColor="white";
            copy.style.color="white";}
set_values();
copy.innerHTML="Copy";
}
function get_hue(hue_box,eve)
{ var rect,y;
rect = hue_box.getBoundingClientRect();
y=eve.clientY - rect.top;
if(y<0||y>403)
	if(y<0) y=0;
	else y=403;
var a=y-12;y=Math.round(y/403*360);
hue=y;
hp.style.top=a;
hp.style.backgroundColor="hsl("+hue+",100%,50%)";
create_picker(hue);
set_values();
copy.innerHTML="Copy";
}
function set_values()
{ var rgb=hsl_to_rgb(hue,sat,lit);
var hex=rgb_to_hex(rgb[0],rgb[1],rgb[2]);
document.getElementById("result_box").style.backgroundColor="hsl("+hue+","+sat+"%,"+lit+"%)";
document.getElementById("rgb_value").innerHTML=rgb[3];
document.getElementById("hex_value").innerHTML=hex[3];
document.getElementById("hsl_value").innerHTML="hsl("+hue+", "+sat+"%, "+lit+"%)";
}
function hue_to_rgb(a,b,h)
{ if (h<0) h+=6;
  if (h>=6) h-=6;
  if (h<1) return (b-a)*h+a;
  else if(h<3) return b;
  else if(h<4) return (b-a)*(4-h)+a;
  else return a;}
function hsl_to_rgb(h,s,l) 
{  var a,b,r,g,b;
  h=h/60;s/=100;l/=100;
  if (l<=0.5) 
  { b=l*(s+1);} 
  else 
  { b=l+s-(l*s);}
  a=l*2-b;
  r = Math.round(hue_to_rgb(a,b,h+2)*255);
  g = Math.round(hue_to_rgb(a,b,h)*255);
  b = Math.round(hue_to_rgb(a,b,h-2)*255);
  var rgb="rgb("+r+", "+g+", "+b+")";
  return [r,g,b,rgb];}
function rgb_to_hex(r,g,b) 
{var h1,h2,h3,h;h1=r.toString(16);h2=g.toString(16);h3=b.toString(16);
if(h1.length==1) h1+="0";if(h2.length==1) h2+="0";if(h3.length==1) h3+="0";		  
h="#"+h1+h2+h3;return [h1,h2,h3,h];}

function show_copy(){copy.style.opacity="1";}
function hide_copy(){copy.style.opacity="0";}
var cpy_btns = document.querySelectorAll('.cpy_btn');
var clipboard = new Clipboard(cpy_btns);
clipboard.on('success', function(e) {
e.clearSelection();
setTimeout(delay,130); 
function delay(){copy.innerHTML="Copied";};
});
clipboard.on('error', function(e) {
e.clearSelection();
function delay(){copy.innerHTML="Failed!";};
});

