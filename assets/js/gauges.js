
// fix proper ratio value:100
// fix color proper ration as well
var guaugeOption1 = {
		  values: {
    0 : '400',
    20: '420',
    40: '440',
    60: '460',
    80: '480',
    100: '500'
  },
  colors: {
    0 : '#666',
    60: '#ffa500',
    80: '#f00'
  },
  angles: [
    180,
    360
  ],
  lineWidth: 10,
  arrowWidth: 20,
  arrowColor: '#ccc',
  value: 0
}


// fix proper ratio value:100
// fix color proper ration as well

var guaugeOption2 = {
		  values: {
    0 : '1200',
    10: '1201',
    20: '1202',
    30: '1203',
    40: '1204',
    50: '1205',
    60: "1206",
    70: "1207",
    80: "1208",
    90: "1209",
    100: "1210"
  },
  colors: {
    0 : '#666',
    60: '#ffa500',
    80: '#f00'
  },
  angles: [
    180,
    360
  ],
  lineWidth: 10,
  arrowWidth: 20,
  arrowColor: '#ccc',
  value: 0

}



var guaugeOption3 = {
		  values: {
    0 : '1200',
    10: '1201',
    20: '1202',
    30: '1203',
    40: '1204',
    50: '1205',
    60: "1206",
    70: "1207",
    80: "1208",
    90: "1209",
    100: "1210"
  },
  colors: {
    0 : '#666',
    60: '#ffa500',
    80: '#f00'
  },
  angles: [
    180,
    360
  ],
  lineWidth: 10,
  arrowWidth: 20,
  arrowColor: '#ccc',
  value: 0

}





function updateGauge(gauge, value) {
	switch (gauge) {
		case '1':
			guaugeOption1.value = value
			new Gauge($('.gauge1'), guaugeOption1);
			document.getElementById("valueField1").value = value;
			break
		case '2':
			guaugeOption2.value = value
			console.log(guaugeOption2.value)
			new Gauge($('.gauge2'), guaugeOption2);
			 document.getElementById("valueField2").value =value;
			break
		case '3':
			guaugeOption1.value = value
			new Gauge($('.gauge3'), guaugeOption1);
			document.getElementById("valueField3").value = value;
			break
		default:
		 break
	}
		
}

$(document).ready(() => {
	// updateGauge('1', 0)
	// updateGauge('2', 0)
})