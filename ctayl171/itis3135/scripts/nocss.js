let headerbar = document.getElementsByTagName('header')[0]
headerbar.innerHTML+=`<button type = "button" style="background-color:#FFA69E;color: #2A4977;margin-left: auto;
margin-right: auto;
max-width: fit-content;
display: block;" onclick = 	"document.querySelectorAll('link[rel=stylesheet]').forEach(function(e)	{e.setAttribute('href', '');});">No CSS</button>`