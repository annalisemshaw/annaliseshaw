	function doInputOutput() {
		let tempF = parseFloat(document.getElementById('temperature').value);
		let s = parseFloat(document.getElementById('wind-speed').value);
		let result = windChill(tempF, s);
	
		document.getElementById('wind-chill').innerHTML = result;
	}	

	function windChill(tempF, s) {
		let f = 35.74 + (0.6215 * tempF) - 35.75 * Math.pow(s,0.16) + 0.4275 * tempF * Math.pow(s, 0.16);
		return f;
	}
