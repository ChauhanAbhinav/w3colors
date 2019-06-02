// JavaScript Document
var copy_status=0,i,copy=document.getElementsByClassName('copy');
function search_color() {
  var input,color,table,result_table,r_tr,r_td0,r_td1,tr,td_n,td_v,i,v,l,att;
  input = document.getElementById("search_color_input");
  color = input.value.toUpperCase();
  r_tr = document.getElementById("search_result_row");
  r_td0 = r_tr.getElementsByTagName("td")[0];
  r_td1 = r_tr.getElementsByTagName("td")[1];
  table = document.getElementById("color_table");
  tr = table.getElementsByTagName("tr");
  
 if(color!="") 
  {for (i = 1; i < tr.length; i++) {//alert(i);
    td_n = tr[i].getElementsByTagName("td")[1];
	td_v = tr[i].getElementsByTagName("td")[2];
      if (td_n.innerHTML.toUpperCase().indexOf(color)==0) 
	  { r_tr.style.display="block";v=td_v.getElementsByTagName("span")[0].innerHTML;
		r_td0.style.backgroundColor=v;
		r_td1.innerHTML=td_n.innerHTML;
		l=document.getElementById('result_color_link');
		att=document.createAttribute('href');att.value="#hex"+v.substr(1,6);
		l.setAttributeNode(att);break;
      } else {}
    }
  } else r_tr.style.display="none";
}

var c_btn=document.querySelectorAll('.copy_btn');
var clipboard = new Clipboard(c_btn);
clipboard.on('success', function(e) {
e.clearSelection();copy_status=1;
});
clipboard.on('error', function(e) {
e.clearSelection();
});
function copy_color(el){
setTimeout(delay,0);
function delay(){
if(copy_status==1){for(i=0;i<copy.length;i++)  copy[i].innerHTML="Copy";el.getElementsByTagName('span')[0].innerHTML="Copied";
 copy_status=0;}
else {el.getElementsByTagName('span')[0].innerHTML="Failed!";}}
}

function show_copy(el){el.getElementsByTagName('span')[0].style.opacity="1";}
function hide_copy(el){el.getElementsByTagName('span')[0].style.opacity="0";}
function jump_to_letter(el)
{var val=el.value;
if(!isNaN(val)) el.value="";
el.value=el.value.toUpperCase();val=el.value;
var a=document.getElementById('jump_anchor_tag');
var att=document.createAttribute('href');
if(val=="A") att.value="#hex0048ba"; else if(val=="B") att.value="#hex89cff0"; else if(val=="C") att.value="#hex536872"; else if(val=="D") att.value="#hexffff31"; else if(val=="E") att.value="#hexe1a95f"; else if(val=="F") att.value="#hexc29a6b"; else if(val=="G") att.value="#hexdcdcdc"; else if(val=="H") att.value="#hex663854"; else if(val=="I") att.value="#hex71a6d2"; else if(val=="J") att.value="#hex00a86b"; else if(val=="K") att.value="#hexe8000d"; else if(val=="L") att.value="#hex087830"; else if(val=="M") att.value="#hex18453b"; else if(val=="N") att.value="#hexf6adc6"; else if(val=="O") att.value="#hex0077be"; else if(val=="P") att.value="#hex1ca9c9"; else if(val=="Q") att.value="#"; else if(val=="R") att.value="#hex5d8ba8"; else if(val=="S") att.value="#hex00563f"; else if(val=="T") att.value="#hexd2b48c"; else if(val=="U") att.value="#hex0033aa"; else if(val=="V") att.value="#hexd3003f"; else if(val=="W") att.value="#hex004242"; else if(val=="X") att.value="#hex738678"; else 
if(val=="Y") att.value="#hex0f4d92"; else if(val=="Z") att.value="#hex0014a8";
a.setAttributeNode(att);
}
var top_botton=document.getElementById('top_botton').style;
function modify_top_botton()
{if(window.scrollY>550) top_botton.display="block";
 else top_botton.display="none";
 }





