document.getElementById('button').onclick = function() {
	let lower = document.getElementById("lower").value;
	let upper = document.getElementById("upper").value;

	if (lower === '' || upper === '') {
		alert('Please enter a lower and upper range of numbers');
	}
	else if (document.getElementById('decimal').checked) {
		let outputNo = Math.random() * upper + lower;
		document.getElementById("outputbox").innerHTML= '<div id="output">' + outputNo + '</div>';
	}

	else {
		let outputNo = Math.floor(Math.random() * upper + lower);
		document.getElementById("outputbox").innerHTML= '<div id="output">' + outputNo + '</div>';
	}
}