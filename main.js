var key  = "OBSNINJAFORLIFE";

function process(event=false){
	var input = document.getElementById("urlInpput").value;
	
	if (input.startsWith("https://app.rtbs.in/")){
		input = input.replace('https://com.rtbs.in/', '');
	} else if (input.startsWith("http://app.rtbs.in/")){
		input = input.replace('http://com.rtbs.in/', '');
	} else if (input.startsWith("app.rtbs.in/")){
		input = input.replace('com.rtbs.in/', '');
	} else if (input.startsWith("https://com.rtbs.in/")){
		input = input.replace('https://com.rtbs.in/', 'com.rtbs.in/');
	} else if (input.startsWith("http://com.rtbs.in/")){
		input = input.replace('http://com.rtbs.in/', 'com.rtbs.in/');
	} 
	
	input = input.replace('&view=', '&v=');
	input = input.replace('&view&', '&v&');
	input = input.replace('?view&', '?v&');
	input = input.replace('?view=', '?v=');
	
	input = input.replace('&videobitrate=', '&vb=');
	input = input.replace('?videobitrate=', '?vb=');
	input = input.replace('&bitrate=', '&vb=');
	input = input.replace('?bitrate=', '?vb=');
	
	input = input.replace('?audiodevice=', '?ad=');
	input = input.replace('&audiodevice=', '&ad=');
	
	input = input.replace('?label=', '?l=');
	input = input.replace('&label=', '&l=');
	
	input = input.replace('?stereo=', '?s=');
	input = input.replace('&stereo=', '&s=');
	input = input.replace('&stereo&', '&s&');
	input = input.replace('?stereo&', '?s&');
	
	input = input.replace('?webcam&', '?wc&');
	input = input.replace('&webcam&', '&wc&');
	
	input = input.replace('?remote=', '?rm=');
	input = input.replace('&remote=', '&rm=');
	
	input = input.replace('?password=', '?p=');
	input = input.replace('&password=', '&p=');
	
	input = input.replace('&maxvideobitrate=', '&mvb=');
	input = input.replace('?maxvideobitrate=', '?mvb=');
	
	input = input.replace('&maxbitrate=', '&mvb=');
	input = input.replace('?maxbitrate=', '?mvb=');
	
	input = input.replace('&height=', '&h=');
	input = input.replace('?height=', '?h=');
	
	input = input.replace('&width=', '&w=');
	input = input.replace('?width=', '?w=');
	
	input = input.replace('&quality=', '&q=');
	input = input.replace('?quality=', '?q=');
	
	input = input.replace('&cleanoutput=', '&clean=');
	input = input.replace('?cleanoutput=', '?clean=');
	
	input = input.replace('&maxviewers=', '&clean=');
	input = input.replace('?maxviewers=', '?clean=');
	
	input = input.replace('&framerate=', '&fr=');
	input = input.replace('?framerate=', '?fr=');
	
	input = input.replace('&fps=', '&fr=');
	input = input.replace('?fps=', '?fr=');
	
	input = input.replace('&permaid=', '&push=');
	input = input.replace('?permaid=', '?push=');
	
	input = input.replace('&roomid=', '&r=');
	input = input.replace('?roomid=', '?r=');
	
	input = input.replace('&room=', '&r=');
	input = input.replace('?room=', '?r=');
	
	var encrypted = CryptoJS.AES.encrypt(input, key);
	document.getElementById("urloutput").innerHTML = "<a href='https://invite.rtbs.in/"+ encrypted.toString()+"'>https://invite.rtbs.in/"+encrypted.toString()+"</a>";
	copyFunction("https://invite.rtbs.in/"+encrypted.toString());
	
	popupMessage(event);
	
	var decrypted = CryptoJS.AES.decrypt(encrypted.toString(), key);
}
var confirm1 = false;
if (window.location.pathname.length>20){
	
	var decrypted = CryptoJS.AES.decrypt(window.location.pathname.split(/\/(.+)/)[1], key);
	
	decrypted = decrypted.toString(CryptoJS.enc.Utf8);
	decrypted = decrypted.replace("obs.ninja","vdo.ninja");
	
	if (!decrypted){
		decrypted = "https://com.rtbs.in/";
	}
	
	if (decrypted.includes("perfectwatch")){
		document.write("The person who sent you this link is trying to trick you into a phishing attack. It has been blocked.");
		decrypted = false;
	} else if (decrypted.includes("kiteracy")){ // To the person exploiting this domain, WHY ?????  You've just got my domain blacklist - it's a free community site that's just trying to do some good in this world, but you're destroying it. 
			// if you find an exploit, please report it to me instead. I'll be grateful.
		document.write("The person who sent you this link is trying to trick you into a phishing attack. It has been blocked.");
		decrypted = false;
	} else if (decrypted.startsWith("http://75.59.233.87/") || 
				decrypted.startsWith("http://75.59.233.87:") ||
				decrypted.startsWith("https://75.59.233.87:") ||
				decrypted.startsWith("https://75.59.233.87/")){
		// skip
	} else if (!(decrypted.includes("?") || decrypted.includes("&") || decrypted.includes("com.rtbs.in") || !decrypted.startsWith("http"))){
		decrypted = false;
		document.write("This link is not approved to be accessed. Please contact the site's administrator if this is a new issue.");
	} 
	
	if (decrypted){
	
		if (decrypted.startsWith("http://")){
			// generic link
		} else if (decrypted.startsWith("https://")){
			// generic link
		} else if (decrypted.startsWith("obs.ninja/")){
			decrypted = "https://"+decrypted;
			if (decrypted.includes("?")){
				decrypted+="&noheader";
			} else {
				decrypted+="?noheader";
			}
		} else if (decrypted.startsWith("vdo.ninja/")){
			decrypted = "https://"+decrypted;
			if (decrypted.includes("?")){
				decrypted+="&noheader";
			} else {
				decrypted+="?noheader";
			}
		} else {
			decrypted = "https://com.rtbs.in/"+decrypted;
			if (decrypted.includes("?")){
				decrypted+="&noheader";
			} else {
				decrypted+="?noheader";
			}
		}
		
		if (!(decrypted.startsWith("https://com.rtbs.in/") || 
			decrypted.startsWith("https://com.rtbs.in?") || 
			decrypted.startsWith("https://versus.cam/") || 
			decrypted.startsWith("http://75.59.233.87/") || 
			decrypted.startsWith("https://75.59.233.87/") ||
			decrypted.startsWith("http://75.59.233.87:") || 
			decrypted.startsWith("https://75.59.233.87:") || 
			decrypted.startsWith("https://backup.vdo.ninja/") || 
			decrypted.startsWith("https://player.clevercast.com/") || 
			decrypted.startsWith("https://socialstream.ninja/") || 
			decrypted.startsWith("https://comms.cam/") || 
			decrypted.startsWith("https://rtc.ninja/"))){
			document.write("This link is not approved to be accessed. Please contact the site's administrator is this is a new issue.");
			decrypted = false;
		} else if (decrypted){
		
			var iframe = document.createElement("iframe");
			if (decrypted.startsWith("https://com.rtbs.in/alpha/?")){
				iframe.src = "https://com.rtbs.in/alpha/?i="+encodeURIComponent(location.pathname.split(/\/(.+)/)[1]);
			} else if (decrypted.startsWith("https://vdo.ninja/beta/?")){
				iframe.src = "https://com.rtbs.in/beta/?i="+encodeURIComponent(location.pathname.split(/\/(.+)/)[1]);
			} else if (decrypted.startsWith("https://com.rtbs.in/?")){
				iframe.src = "https://com.rtbs.in/?i="+encodeURIComponent(location.pathname.split(/\/(.+)/)[1]);
			} else {
				iframe.src = decrypted;
			}
			iframe.allow="autoplay;camera;microphone;midi;encrypted-media;geolocation;fullscreen;picture-in-picture;display-capture;"; 
			document.getElementById("body").appendChild(iframe);
			try {
				if (decrypted.split("?").length>1){
					decrypted = decrypted.split("?");
					decrypted.shift();
					decrypted =  "?" + decrypted.join("?");
					
				} else if (decrypted.split("/&").length>1){
					decrypted = decrypted.split("/&");
					decrypted.shift();
					decrypted = "?" + decrypted.join("/&");
				}
				if (decrypted){
					var urlEdited = decrypted.replace(/\?\?/g, "?");
					urlEdited = urlEdited.replace(/\?/g, "&");
					urlEdited = urlEdited.replace(/\&/, "?");
					var urlParams = new URLSearchParams(urlEdited);
					if (urlParams.has('headertitle')){
						let pageTitle = urlParams.get('headertitle') || "";
						pageTitle = decodeURIComponent(pageTitle) || "";
						document.title = pageTitle
					}
					if (urlParams.has('favicon')){
						let favicon = "";
						if (urlParams.get('favicon')){
							favicon = decodeURIComponent(urlParams.get('favicon')) || "";
						}
						document.getElementById("favicon1").href = favicon;
						document.getElementById("favicon2").href = favicon;
						document.getElementById("favicon3").href = favicon;
					}
				}
				
			} catch(e){
				console.error(e);	
			}
			decrypted="";
		}
	}
} else {

	var container = document.createElement("div");
	container.style.margin="15% 0";
	document.getElementById("body").appendChild(container);

	var title = document.createElement("h3");
	title.innerHTML = "URL Obfuscator for RTBS.in<br />";
	container.appendChild(title);

	var input = document.createElement("input");
	input.placeholder = "Paste the RTBS invite URL here";
	input.id = "urlInpput";
	input.style.padding = "10px";
	input.style.width = "500px";
	input.style.maxWidth = "90%";
	input.title = "Put an RTBS invite link here";
	input.alt = "Put an RTBS invite link here";
	container.appendChild(input);
	
	var button = document.createElement("button");
	button.innerHTML = "Obfuscate!";
	button.style.padding = "10px";
	button.style.margin = "0 0 0 5px";
	button.addEventListener("click", process);
	button.title = "Encode and Copy the result";
	button.alt = "Encode and Copy the result";
	container.appendChild(button);
	
	var div = document.createElement("div");
	div.id = "urloutput";
	div.style.margin = "20px";
	container.appendChild(div);
	
	var div = document.createElement("a");
	div.style.margin = "20px";
	div.href= "https://invite.rtbs.in";
	div.innerHTML = "or create a new Invite Link here";
	container.appendChild(div);
	
	var div = document.createElement("h5");
	div.style.margin = "20px";
	div.innerHTML = "<br /><br />Notice: Due to abuse, only RTBS and white-listed domains are allowed now.<br />Contact me here to report abuse: <i>rtcslive@gmail.com</i>"
	container.appendChild(div);
}

function copyFunction(copyText) {

		var dummy = document.createElement('input');
		document.body.appendChild(dummy);
		dummy.value = copyText;
		dummy.select();
		document.execCommand('copy');
		document.body.removeChild(dummy);
	
}

function popupMessage(e, message = "Copied to Clipboard") { // right click menu

	var posx = 0;
	var posy = 0;

	if (!e) var e = window.event;

	if (e.pageX || e.pageY) {
		posx = e.pageX;
		posy = e.pageY;
	} else if (e.clientX || e.clientY) {
		posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
		posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
	}

	posx += 10;

	var menu = document.createElement("div");
	
	menu.className = "popup-message";
	menu.innerHTML = "<center>" + message + "</center>";
	var menuState = 0;
	var menuWidth;
	var menuHeight;
	var menuPosition;
	var menuPositionX;
	var menuPositionY;

	var windowWidth;
	var windowHeight;

	
	menuWidth = menu.offsetWidth + 4;
	menuHeight = menu.offsetHeight + 4;

	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;

	if ((windowWidth - posx) < menuWidth) {
		menu.style.left = windowWidth - menuWidth + "px";
	} else {
		menu.style.left = posx + "px";
	}

	if ((windowHeight - posy) < menuHeight) {
		menu.style.top = windowHeight - menuHeight + "px";
	} else {
		menu.style.top = posy + "px";
	}
	
	document.body.appendChild(menu);

	setTimeout(function(menuE) {
		menuE.remove();
	}, 1000, menu);
}
