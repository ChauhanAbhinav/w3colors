function rgb_extracter(rgb)
{ 	 	  var r,g,b,i1=rgb.indexOf(","),i2=rgb.lastIndexOf(",");
	      r=parseInt(rgb.slice(4,i1));
	      g=parseInt(rgb.slice(i1+1,i2));
	      b=parseInt(rgb.slice(i2+1,rgb.indexOf(")")));
	      return [r,g,b];
}	
function rgb_to_hex(r,g,b) 
{	var h1,h2,h3,h;
h1=r.toString(16);h2=g.toString(16);h3=b.toString(16);
if(h1.length==1) h1+="0";if(h2.length==1) h2+="0";if(h3.length==1) h3+="0";		  
			h="#"+h1+h2+h3;
			return [h1,h2,h3,h];
}
function rgb_to_hsl(r,g,b)
{    r/=255, g/=255, b/=255;
    var max=Math.max(r,g,b),min=Math.min(r,g,b);
    var h,s,l=(max + min)/2;
    if(max==min)
    h=s=0; // achromatic
    else {
        var d=max-min;
        s=l>0.5?d/(2-max-min):d/(max+min);
        switch(max)
        {
            case r:h=(g-b)/d+(g<b?6:0); break;
            case g:h=(b-r)/d+2; break;
            case b:h=(r-g)/d+4; break;
        }
        h=h*60;//convert to degree
    }
		h=Math.round(h);
        s=Math.round(s*100);
        l=Math.round(l*100);
 		var hsl="hsl("+h+", "+s+"%, "+l+"%)";
 		return [h,s,l,hsl]
  
}
 function rgb_to_hsv(r,g,b)
 {   r/=255, g/=255, b/=255;
    var max=Math.max(r,g,b), min=Math.min(r,g,b);
    var h,s,d = max - min;
    var v=max;
    if(max==min)
     h=0; // achromatic  }
    else{
        switch(max)
        {
            case r:h=(g-b)/d+(g<b?6:0); break;
            case g:h=(b-r)/d+2; break;
            case b:h=(r-g)/d+4; break;
        }
        h=h*60;//convert to degree
        }
        if(max==0) s=0;
        else s=d/max;
		h=Math.round(h);
        s=Math.round(s*100);
        v=Math.round(v*100);
		var hsv="hsv("+h+", "+s+"%, "+v+"%)";
 		return [h,s,v,hsv]
  }
   function rgb_to_hwb(r,g,b) 
{	r/=255, g/=255, b/=255;
    var max=Math.max(r,g,b),min=Math.min(r,g,b);
    var h,d = max - min;
    if(max==min)
    {
        h=0; // achromatic
    }
    else{
        switch(max)
        {
            case r:h=(g-b)/d+(g<b?6:0); break;
            case g:h=(b-r)/d+2; break;
            case b:h=(r-g)/d+4; break;
        }
        h=h*60;//convert to degree
        }
        var w=min;
        var b=1-max;
		h=Math.round(h);
        w=Math.round(w*100);
        b=Math.round(b*100);
        var hwb="hwb("+h+", "+w+"%, "+b+"%)";
 		return [h,w,b,hwb];
}
function rgb_to_cmyk(r,g,b)
{  	r/=255, g/=255, b/=255;
    var max=Math.max(r,g,b);
    var c,m,y,k;
    k=1-max;
    if(k==1)
    { c=m=y=0;}
    else{
    c=(1-r-k)/(1-k);
    m=(1-g-k)/(1-k);
    y=(1-b-k)/(1-k);
    }
    c=Math.round(c*100);m=Math.round(m*100);
    y=Math.round(y*100);k=Math.round(k*100);
  	var cmyk="cmyk("+c+"%, "+m+"%, "+y+"%, "+k+"%)";
 		return [c,m,y,k,cmyk];
  } 
function hue_to_rgb(a,b,h)
{ if (h<0) h+=6;
  if (h>=6) h-=6;
  if (h<1) return (b-a)*h+a;
  else if(h<3) return b;
  else if(h<4) return (b-a)*(4-h)+a;
  else return a;
}
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
  return [r,g,b,rgb];
}
function cmyk_to_rgb(c,m,y,k)
{ var r, g, b;c/=100;m/=100;y/=100;k/=100;
  r=Math.round(255-((Math.min(1,c*(1-k)+k))*255));
  g=Math.round(255-((Math.min(1,m*(1-k)+k))*255));
  b=Math.round(255-((Math.min(1,y*(1-k)+k))*255));
  var rgbs="rgb("+r+", "+g+", "+b+")";
  return [r,g,b,rgbs];
}
function hwb_to_rgb(h,w,b) {
  var i,rgb;w/=100;b/=100; //w+b<=100
  rgb=hsl_to_rgb(h,100,50);
  rgb[0]/=255;
  rgb[1]/=255;
  rgb[2]/=255;
  for (i=0;i<3;i++) {
    rgb[i]*=(1-w-b);
    rgb[i]+=w;
    rgb[i]=Math.round(rgb[i] * 255);
  }
  var rgbs="rgb("+rgb[0]+", "+rgb[1]+", "+rgb[2]+")";
  return [rgb[0],rgb[1],rgb[2],rgbs];
}
function hsv_to_rgb(h,s,v) 
{    var h = Math.round(h);
    var s = Math.round(s * 255 / 100);
    var v = Math.round(v * 255 / 100);
        if (s == 0) {
        r = g = b = v;
        } else {
        var t1 = v;
        var t2 = (255 - s) * v / 255;
        var t3 = (t1 - t2) * (h % 60) / 60;
            if (h == 360) h = 0;
                if (h < 60) { r = t1; b = t2;g = t2 + t3 }
                else if (h < 120) { g = t1; b = t2; r = t1 - t3 }
                else if (h < 180) { g = t1; r = t2; b = t2 + t3 }
                else if (h < 240) { b = t1; r = t2; g = t1 - t3 }
                else if (h < 300) { b = t1; g = t2; r = t2 + t3 }
                else if (h < 360) { r = t1; g = t2; b = t1 - t3 }
                else { r = 0; g = 0; b = 0 }
        } r=Math.round(r);g=Math.round(g);b=Math.round(b); 
         var rgbs="rgb("+r+", "+g+", "+b+")";  
return [r,g,b,rgbs];
}
