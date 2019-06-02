// JavaScript
function openSideNav()
{var sideNav=document.getElementById("side-nav");
sideNav.classList.toggle("toggle-side-nav");
var icon=document.getElementById("nav-icon");
var span=icon.getElementsByTagName("span");
span[0].classList.toggle("alter-nav-stick1");
span[1].classList.toggle("alter-nav-stick2");
span[2].classList.toggle("alter-nav-stick3");
}
/*window.onclick = function(event) {
  if (!event.target.matches(".collapse")){
 	var sideNav=document.getElementById('side-nav'); 	
	if(window.innerWidth<=991)
		if(window.getComputedStyle(sideNav,null).display=="block"){	  
	  	//sideNav.style.display="none";
	  alert();
		} //alert("hell"+window.getComputedStyle(sideNav,null).display+"hell");
	}
}
*/


