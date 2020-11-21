function doInputOutput() {
	let tempF = document.getElementById('temperature');
	let s = document.getElementById('wind-speed');
	
	let f = 35.74 + (0.6215 * tempF) - 35.75 * Math.pow(s,0.16) + 0.4275 * tempF * Math.pow(s, 0.16);
	return f;
}
