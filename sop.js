//discovers all HREF/form actions the FORM elements in the page, 
//enumerates the ACTION attribute, and checks if the resource 
//is same-origin –r or cross-origin. 
function getFormActions(doc){ 
	var formsarray = []; 
	var forms = doc.getElementsByTagName("form"); 
	for (var i=0; i < forms.length; i++){ 
		var action = forms[i].getAttribute('action'); 
		formsarray = formsarray.concat(action); 
		// emulates an A element: in this way isSameOrigin() 
		// can be called in the same way for both A and FORM elements 
		var a = doc.createElement('a'); 
		a.href = action; 
		console.log("Discovered form action: " + action + ". SameOrigin: " + isSameOrigin(a));
		
		} 
		
		return formsarray; 
		
} 

// discovers all the A elements in the current page, 
// enumerates the HREF attribute, and checks if the resource 
// is same or cross-origin 
function getLinks(doc){ 
	var linksarray = []; 
	var links = doc.links; 
	for(var i=0; i<links.length; i++) { 
		var link = links[i]; 
		linksarray = linksarray.concat(link) 
		console.log("Discovered link: " + link.href + ". SameOrigin: " + isSameOrigin(link)); 
		
	}; 
	return linksarray; 
	
} 

// checks if the resource is SameOrigin checking 
// protocol, hostname and port 
function isSameOrigin(url){ 
	var sameOrigin = false; 
	if(url.hostname.toString() === location.hostname.toString() && url.port === location.port && url.protocol === location.protocol)
	{ 
		sameOrigin = true;
	
	} 
	console.log("url host=" + url.hostname.toString() + ", location host=" + location.hostname.toString()  + 
				", url port=" +  url.port  + ", location port=" + location.port +
				", url protocol=" + url.protocol + ", location protocol=" +  location.protocol);
	return sameOrigin; 
	
} 

getLinks(document); 
getFormActions(document);
	
	
	
	