var opts4 = {
    angle: 0, // The span of the gauge arc
    lineWidth: 0.2, // The line thickness
    radiusScale: 1, // Relative radius
    pointer: {
      length: 0.5, // // Relative to gauge radius
      strokeWidth: 0.035, // The thickness
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

  setInterval(function getValue4(){
        var getValuefxn4 = document.getElementById('val4').innerHTML;

        gauge4.setMinValue(0);  // Prefer setter over gauge.minValue = 0
        gauge4.maxValue = 100; // set max gauge value
        gauge4.animationSpeed = 50; // set an
        gauge4.set(getValuefxn4);

}),1000;


  var target4 = document.getElementById('gauge4'); // your canvas element

  var gauge4 = new Gauge(target4).setOptions(opts4); // create sexy gauge!
