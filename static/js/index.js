//https://www.eclipse.org/paho/clients/js/

function Sensor1_(){
	//alert("led on");
	console.log("Estado sensor 1");
	//document.getElementById("sensor").innerHTML="led on";
	message = new Paho.MQTT.Message("estado1");
    	message.destinationName = "alexfra2015@gmail.com/test1";
    	client.send(message);
  
}
function Sensor2_(){	
	//alert("led off");
	console.log("EStado sensor 2");
	message = new Paho.MQTT.Message("estado22");
    	message.destinationName = "alexfra2015@gmail.com/test1";
    	client.send(message);
	//document.getElementById("sensor").innerHTML="led off";
}

function historial(){	
	//alert("led off");
	console.log("Historial led ");
	message = new Paho.MQTT.Message("h");
    	message.destinationName = "alexfra2015@gmail.com/test1";
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
    userName: "alexfra2015@gmail.com",
    password: "1020alex**",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("alexfra2015@gmail.com.com/test");
    client.subscribe("alexfra2015@gmail.com.com/test2");
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "alexfra2015@gmail.com.com/test1";
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
	 y= message.payloadString;
	 if(y=="sensor 1 encendido"){
	  document.getElementById("r").innerHTML=y;
	  document.getElementById("historial").innerHTML="";
	  } 
	  else if(y=="sensor 1 apagado"){
	  document.getElementById("r").innerHTML=y;
	  document.getElementById("historial").innerHTML="";	  
	  }
	  else if(y=="sensor 2 encendido") {
	  document.getElementById("r").innerHTML=y;
	  document.getElementById("historial").innerHTML="";
	  }
	  else if(y=="sensor 2 apagado"){
	  document.getElementById("r").innerHTML=y;
	  document.getElementById("historial").innerHTML="";	 
	  } else {
	  document.getElementById("r").innerHTML="";
	  document.getElementById("historial").innerHTML=y;
	  }
  }
  
