//https://www.eclipse.org/paho/clients/js/

function LED1_On() {
	//alert("led on");
	console.log("led on");
	//document.getElementById("sensor").innerHTML="led on";
	message = new Paho.MQTT.Message("ON");
    	message.destinationName = "luisrod-234@hotmail.com/test1";
    	client.send(message);
  
}
function LED1_Off(){	
	//alert("led off");
	console.log("led off");
	message = new Paho.MQTT.Message("OFF");
    	message.destinationName = "luisrod-234@hotmail.com/test1";
    	client.send(message);
	//document.getElementById("sensor").innerHTML="led off";
}

function EncendidoApagado(){
      var elem = document.getElementById("sensor");
      elem.style.color = elem.style.color == "green" ? "red" : "green";
	if(elem.style.color=="green"){
	document.getElementById("sensor").innerHTML="ON";
	message = new Paho.MQTT.Message("ON");
    	message.destinationName = "luisrod-234@hotmail.com/test1";
    	client.send(message);	
	}else{
	document.getElementById("sensor").innerHTML="OFF";
	message = new Paho.MQTT.Message("OFF");
    	message.destinationName = "luisrod-234@hotmail.com/test1";
    	client.send(message);	
	}
    }

function historial(){	
	//alert("led off");
	console.log("Historial led ");
	message = new Paho.MQTT.Message("HISTORIAL LED");
    	message.destinationName = "luisrod-234@hotmail.com/test1";
    	client.send(message);
	//document.getElementById("sensor").innerHTML="led off";
}

function E_actual(){	
	//alert("led off");
	console.log("Estado Actual ");
	message = new Paho.MQTT.Message("conocer estado");
    	message.destinationName = "luisrod-234@hotmail.com/test1";
    	client.send(message);
	//document.getElementById("sensor").innerHTML="led off";
}


// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  

  var options = {
   useSSL: false,
    userName: "luisrod-234@hotmail.com",
    password: "Embebidos2021",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("luisrod-234@hotmail.com/test");
    client.subscribe("luisrod-234@hotmail.com/test2");
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "luisrod-234@hotmail.com/test1";
    client.send(message);
	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
	  y=message.payloadString;
	  if(y=="hola, el LED se encuentra encendido"){
	  document.getElementById("sensor").innerHTML=y;
	  document.getElementById("historial").innerHTML="";
	  }
	  else if(y=="hola, el LED se encuentra apagado"){
	  document.getElementById("sensor").innerHTML=y;
	  document.getElementById("historial").innerHTML="";	  
	  }
	  else if(y=="ESTADO ACTUAL ENCENDIDO"){
	  document.getElementById("estadoactual").innerHTML=y;
	  document.getElementById("sensor").innerHTML="";
	  document.getElementById("historial").innerHTML="";
          }
          else if(y="ESTADO ACTUAL APAGADO"){
	  document.getElementById("estadoactual").innerHTML=y;
	  document.getElementById("sensor").innerHTML="";
	  document.getElementById("historial").innerHTML="";
	  }else {
	  document.getElementById("historial").innerHTML=y;
	  document.getElementById("sensor").innerHTML="";
	  document.getElementById("estadoactual").innerHTML=""	  
	  }
	  
  }


  
