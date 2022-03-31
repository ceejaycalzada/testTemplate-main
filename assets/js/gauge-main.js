var opts = {
    angle: 0, // The span of the gauge arc
    lineWidth: 0.32, // The line thickness
    radiusScale: 1, // Relative radius
    pointer: {
      length: 0.4, // // Relative to gauge radius
      strokeWidth: 0.026, // The thickness
      color: '#000000' // Fill color
    },
    limitMax: false,     // If false, max value increases automatically if value > maxValue
    limitMin: false,     // If true, the min value of the gauge will be fixed
    colorStart: '#6FADCF',   // Colors
    colorStop: '#8FC0DA',    // just experiment with them
    strokeColor: '#E0E0E0',  // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true,     // High resolution support
    fontSize: 24,
    staticLabels: {
        font: "10px sans-serif",  // Specifies font
        labels: [0,10, 25, 50, 75, 100],  // Print labels at these values
        color: "#000000",  // Optional: Label text color
        fractionDigits: 0  // Optional: Numerical precision. 0=round off.
      },
    staticZones: [
        {strokeStyle: "#F03E3E", min: 0, max: 25}, // Green
        {strokeStyle: "#FFDD00", min: 25, max: 75}, // Yellow
        {strokeStyle: "#30B32D", min: 75, max: 100}  // Red
     ],
  }; 

  var opts2 = {
    angle: 0, // The span of the gauge arc
    lineWidth: 0.32, // The line thickness
    radiusScale: 1, // Relative radius
    pointer: {
      length: 0.4, // // Relative to gauge radius
      strokeWidth: 0.026, // The thickness
      color: '#000000' // Fill color
    },
    limitMax: false,     // If false, max value increases automatically if value > maxValue
    limitMin: false,     // If true, the min value of the gauge will be fixed
    colorStart: '#6FADCF',   // Colors
    colorStop: '#8FC0DA',    // just experiment with them
    strokeColor: '#E0E0E0',  // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true,     // High resolution support
    fontSize: 24,
    staticLabels: {
        font: "10px sans-serif",  // Specifies font
        labels: [0,10, 25, 50, 75, 100],  // Print labels at these values
        color: "#000000",  // Optional: Label text color
        fractionDigits: 0  // Optional: Numerical precision. 0=round off.
      },
    staticZones: [
        {strokeStyle: "#F03E3E", min: 0, max: 25}, // Green
        {strokeStyle: "#FFDD00", min: 25, max: 75}, // Yellow
        {strokeStyle: "#30B32D", min: 75, max: 100}  // Red
     ],
  };

  var opts3 = {
    angle: 0, // The span of the gauge arc
    lineWidth: 0.32, // The line thickness
    radiusScale: 1, // Relative radius
    pointer: {
      length: 0.4, // // Relative to gauge radius
      strokeWidth: 0.026, // The thickness
      color: '#000000' // Fill color
    },
    limitMax: false,     // If false, max value increases automatically if value > maxValue
    limitMin: false,     // If true, the min value of the gauge will be fixed
    colorStart: '#6FADCF',   // Colors
    colorStop: '#8FC0DA',    // just experiment with them
    strokeColor: '#E0E0E0',  // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true,     // High resolution support
    fontSize: 24,
    staticLabels: {
        font: "10px sans-serif",  // Specifies font
        labels: [0,10, 25, 50, 75, 100],  // Print labels at these values
        color: "#000000",  // Optional: Label text color
        fractionDigits: 0  // Optional: Numerical precision. 0=round off.
      },
    staticZones: [
        {strokeStyle: "#F03E3E", min: 0, max: 25}, // Green
        {strokeStyle: "#FFDD00", min: 25, max: 75}, // Yellow
        {strokeStyle: "#30B32D", min: 75, max: 100}  // Red
     ],
  };

  var opts4 = {
    angle: 0, // The span of the gauge arc
    lineWidth: 0.32, // The line thickness
    radiusScale: 1, // Relative radius
    pointer: {
      length: 0.4, // // Relative to gauge radius
      strokeWidth: 0.026, // The thickness
      color: '#000000' // Fill color
    },
    limitMax: false,     // If false, max value increases automatically if value > maxValue
    limitMin: false,     // If true, the min value of the gauge will be fixed
    colorStart: '#6FADCF',   // Colors
    colorStop: '#8FC0DA',    // just experiment with them
    strokeColor: '#E0E0E0',  // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true,     // High resolution support
    fontSize: 24,
    staticLabels: {
        font: "10px sans-serif",  // Specifies font
        labels: [0,10, 25, 50, 75, 100],  // Print labels at these values
        color: "#000000",  // Optional: Label text color
        fractionDigits: 0  // Optional: Numerical precision. 0=round off.
      },
    staticZones: [
        {strokeStyle: "#F03E3E", min: 0, max: 25}, // Green
        {strokeStyle: "#FFDD00", min: 25, max: 75}, // Yellow
        {strokeStyle: "#30B32D", min: 75, max: 100}  // Red
     ],
  };

    setInterval(function getValue1(){
        var getValuefxn1 = document.getElementById('val1').innerHTML;

        gauge1.setMinValue(0);  // Prefer setter over gauge.minValue = 0
        gauge1.maxValue = 100; // set max gauge value
        gauge1.animationSpeed = 50; // set an
        gauge1.set(getValuefxn1);

}),1000;

    setInterval(function getValue2(){
        var getValuefxn2 = document.getElementById('val2').innerHTML;

        gauge2.setMinValue(0);  // Prefer setter over gauge.minValue = 0
        gauge2.maxValue = 100; // set max gauge value
        gauge2.animationSpeed = 50; // set an
        gauge2.set(getValuefxn2);

}),1000;

    setInterval(function getValue3(){
        var getValuefxn3 = document.getElementById('val3').innerHTML;

        gauge3.setMinValue(0);  // Prefer setter over gauge.minValue = 0
        gauge3.maxValue = 100; // set max gauge value
        gauge3.animationSpeed = 50; // set an
        gauge3.set(getValuefxn3);

}),1000;

      setInterval(function getValue4(){
  var getValuefxn4 = document.getElementById('val4').innerHTML;

  gauge4.setMinValue(0);  // Prefer setter over gauge.minValue = 0
  gauge4.maxValue = 100; // set max gauge value
  gauge4.animationSpeed = 50; // set an
  gauge4.set(getValuefxn4);

}),1000;


    

  var target = document.getElementById('gauge1'); // your canvas element
  var target2 = document.getElementById('gauge2'); // your canvas element
  var target3 = document.getElementById('gauge3'); // your canvas element
  var target4 = document.getElementById('gauge4'); // your canvas element


  var gauge1 = new Gauge(target).setOptions(opts); // create sexy gauge!
  var gauge2 = new Gauge(target2).setOptions(opts2); // create sexy gauge!
  var gauge3 = new Gauge(target3).setOptions(opts3); // create sexy gauge!
  var gauge4 = new Gauge(target4).setOptions(opts4);
