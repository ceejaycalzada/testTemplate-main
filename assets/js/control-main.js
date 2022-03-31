// Called after form input is processed

function startConnect() {
    // Generate a random client ID
    clientID = "clientID-" + parseInt(Math.random() * 100);

    // Fetch the hostname/IP address and port number from the form
    host = "hairdresser.cloudmqtt.com";
    port = 35724;

    // Initialize new Paho client connection
    client = new Paho.MQTT.Client(host, Number(port), clientID);

    // Set callback handlers
    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;

    // Connect the client, if successful, call onConnect function
    client.connect({
        timeout : 3,
        useSSL : true,
        onSuccess: onConnect,
        userName : "bcyhfmfh",
        password : "NIoeDVTojuQd",
        onFailure : doFail
    });
    console.log("Attempting to connect ...");
}

  function doFail(e){
    console.log(e);
    window.alert("Cannot connect to MQTT Broker client. Please reload the page.");
  }

// Called when the client connects
function onConnect() {
    console.log("Connected");
    window.alert("Connection Successful!");
    // Fetch the MQTT topic from the form 
}

// Called when the client loses its connection
function onConnectionLost(responseObject) {
    document.getElementById("messages").innerHTML += '<span>ERROR: Connection lost</span><br/>';
    if (responseObject.errorCode !== 0) {
        document.getElementById("messages").innerHTML += '<span>ERROR: ' + + responseObject.errorMessage + '</span><br/>';
    }
}
var feedValue;
var feedValue2;
// Called when a message arrives
function onMessageArrived(message) {
    if (message.destinationName == topic1){
    console.log("onMessageArrived: " + message.payloadString);
    document.getElementById("messages").innerHTML += '<span>Topic: ' + message.destinationName + '  | ' + message.payloadString + '</span><br/>';
    document.getElementById("valueField1").value = message.payloadString;
    feedValue = parseInt(message.payloadString);
    var gauge = new Gauge($('.gauge1'), {value: feedValue});
}
        // first example
    else if (message.destinationName == topic2){
    console.log("onMessageArrived: " + message.payloadString);
    document.getElementById("messages").innerHTML += '<span>Topic: ' + message.destinationName + '  | ' + message.payloadString + '</span><br/>';
    document.getElementById("valueField2").value = message.payloadString;
    feedValue2 = parseFloat(message.payloadString);
    var gauge = new Gauge($('.gauge2'), {value: feedValue2})
}
}
var globalVar;
function getValueLight(){
    var isChecked = document.getElementById("myCheckBox1").checked;

    if (isChecked){;
        document.getElementById("statusField1").value = "On";
    var msgResponse = new Paho.MQTT.Message("0");
    msgResponse.destinationName = "SP/mmsu/esp32/binong/responseLight"
    client.send(msgResponse);
    console.log(msgResponse);
    }
    else{
        document.getElementById("statusField1").value = "Off";
    var msgResponse = new Paho.MQTT.Message("1");
    msgResponse.destinationName = "SP/mmsu/esp32/binong/responseLight"
    client.send(msgResponse);
    console.log(msgResponse);
    }
}
function getValueManure(){
    var isChecked = document.getElementById("myCheckBox2").checked;

    if (isChecked){;
        document.getElementById("statusField2").value = "On";
    var msgResponse = new Paho.MQTT.Message("2");
    msgResponse.destinationName = "SP/mmsu/esp32/binong/responseManure"
    client.send(msgResponse);
    console.log(msgResponse);
    }
    else{
        document.getElementById("statusField2").value = "Off";
    var msgResponse = new Paho.MQTT.Message("3");
    msgResponse.destinationName = "SP/mmsu/esp32/binong/responseManure"
    client.send(msgResponse);
    console.log(msgResponse);
    }
}



