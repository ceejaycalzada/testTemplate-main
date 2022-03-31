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
  }


// Called when the client connects
function onConnect() {
    console.log("Connected");
    // Fetch the MQTT topic from the form
    topic1 = "SP/mmsu/esp32/binong/feedslevel1";
    topic2 = "SP/mmsu/esp32/binong/feedslevelresponse1";
    topic3 = "SP/mmsu/esp32/binong/feedslevel2";
    topic4 = "SP/mmsu/esp32/binong/feedslevelresponse2";
    topic5 = "SP/mmsu/esp32/binong/waterlevel";
    topic6 = "SP/mmsu/esp32/binong/waterlevelresponse";

    // Print output for the user in the messages div
    document.getElementById("messages").innerHTML += '<span>Subscribing to: ' + topic1 + '</span><br/>';
    document.getElementById("messages").innerHTML += '<span>Subscribing to: ' + topic2 + '</span><br/>';
    document.getElementById("messages").innerHTML += '<span>Subscribing to: ' + topic3 + '</span><br/>';
    document.getElementById("messages").innerHTML += '<span>Subscribing to: ' + topic4 + '</span><br/>';
    document.getElementById("messages").innerHTML += '<span>Subscribing to: ' + topic5 + '</span><br/>';
    document.getElementById("messages").innerHTML += '<span>Subscribing to: ' + topic6 + '</span><br/>';
    //Subscribe to the requested topic
    client.subscribe(topic1);
    client.subscribe(topic2);
    client.subscribe(topic3);
    client.subscribe(topic4);
    client.subscribe(topic5);
    client.subscribe(topic6);

}

// Called when the client loses its connection
function onConnectionLost(responseObject) {
    document.getElementById("messages").innerHTML += '<span>ERROR: Connection lost</span><br/>';
    if (responseObject.errorCode !== 0) {
        document.getElementById("messages").innerHTML += '<span>ERROR: ' + + responseObject.errorMessage + '</span><br/>';
    }
}
// Called when a message arrives
function onMessageArrived(message) {
    if (message.destinationName == topic1){
    console.log("onMessageArrived: " + message.payloadString);
    document.getElementById("messages").innerHTML +=  message.payloadString + '<br/>';
    document.getElementById("val1").innerHTML = message.payloadString;

}
    if (message.destinationName == topic3){
    console.log("onMessageArrived: " + message.payloadString);
    document.getElementById("messages").innerHTML +=  message.payloadString + '<br/>';
    document.getElementById("val2").innerHTML = message.payloadString;

}
    if (message.destinationName == topic5){
    console.log("onMessageArrived: " + message.payloadString);
    document.getElementById("messages").innerHTML +=  message.payloadString + '<br/>';
    document.getElementById("val4").innerHTML = message.payloadString;

}
        // first example
    else if (message.destinationName == topic2){
    console.log("onMessageArrived: " + message.payloadString);
    document.getElementById("messages").innerHTML +=  message.payloadString + '<br/>';
}
    else if (message.destinationName == topic4){
    console.log("onMessageArrived: " + message.payloadString);
    document.getElementById("messages").innerHTML +=  message.payloadString + '<br/>';
}
    else if (message.destinationName == topic6){
    console.log("onMessageArrived: " + message.payloadString);
    document.getElementById("messages").innerHTML +=  message.payloadString + '<br/>';
}

}

/*function randNumber(){
    var randNumber1 = Math.floor((Math.random()*50)+ 1);
    document.getElementById("val1").innerHTML = randNumber1;

    var randNumber2 = Math.floor((Math.random()*50)+ 1);
    document.getElementById("val2").innerHTML = randNumber2;

    var randNumber3 = Math.floor((Math.random()*50)+ 1);
    document.getElementById("val3").innerHTML = randNumber3;
}setInterval(randNumber,1000);
*/
// Called when the disconnection button is pressed
function startDisconnect() {
    client.disconnect();
    document.getElementById("messages").innerHTML += '<span>Disconnected</span><br/>';
}
//<!FX to update 
function updateScroll(){
    var element = document.getElementById("messages");
    element.scrollTop = element.scrollHeight;
}
setInterval(updateScroll,1000);
