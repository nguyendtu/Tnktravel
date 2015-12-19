var search = document.getElementById("nav_search");
search.onclick = function(e){
	var curActive = search.getElementsByClassName("active")[0];

	if(e.target != curActive){
		curActive.setAttribute("class", "");
		e.target.parentElement.setAttribute("class", "active");
		if(e.target.getAttribute("href") == "#tour"){
			document.getElementById("tour").style.display = "block";
			document.getElementById("hotel").style.display = "none";
		}else{
			document.getElementById("tour").style.display = "none";
			document.getElementById("hotel").style.display = "block";
		}
	}
}
/*
var thums = document.getElementsByClassName("thumbnail");
for(var i = 0; i < thums.length; i++){
	var thum = thums[i];
	
	thum.onmouseover = function(e){
		var cur = e.target;
		if(cur == hover){
			
			hover.setAttribute("class", "hover");
		}
	}
	thum.onmouseout = function(e){
		var cur = e.target;
		if(cur == hover){
			defaults.style.opacity = '0';
			defaults.style.top = "100px";
			hover.setAttribute("class", "");
		}
	}
}*/

function mouseOver(e){
	var defaults = e.parentElement;
	defaults = defaults.nextSibling.nextSibling;
	defaults.style.opacity = '1';
	defaults.style.top = "0px";
	e.setAttribute("class", "hover");
}

