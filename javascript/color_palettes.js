// JavaScript Document
function show_copy(el)
{var key; if(el.id.length==3) key=el.id.substr(1,2); else key=el.id.substr(1,3);
setTimeout(delay,150);
function delay(){document.getElementById("name"+key).style.fontSize="0px";
document.getElementById("copy"+key).style.fontSize="16px";
document.getElementById("color"+key).style.fontSize="0px";}change_copy_target(key);
}
function hide_copy(el)
{var key; if(el.id.length==3) key=el.id.substr(1,2); else key=el.id.substr(1,3);
setTimeout(delay,150);
function delay(){document.getElementById("name"+key).style.fontSize="16px";
document.getElementById("copy"+key).style.fontSize="0px";
document.getElementById("color"+key).style.fontSize="16px";}
}
var copy_target,pre_copy_target=0;
function change_copy_target(key){copy_target=key;}
var cpy_btns = document.querySelectorAll('.palette');
var clipboard = new Clipboard(cpy_btns);
clipboard.on('success', function(e) {
e.clearSelection();
setTimeout(delay,130); 
function delay(){if(pre_copy_target!=0) document.getElementById("copy"+pre_copy_target).innerHTML="Copy";
document.getElementById("copy"+copy_target).innerHTML="Copied";pre_copy_target=copy_target;}
});
clipboard.on('error', function(e) {
e.clearSelection();
function delay(){document.getElementById("copy"+copy_target).innerHTML="Failed!";}
});
