

function addObraz() {
	var loacalW = currentMatrix.toVector().mult(currentMatrix.toVector());
	W = W.add(loacalW);
	for(var i = 0; i < W.length; i++) {
		W.set(i, i, 0);
	}
}

function checkObraz() {
	
	var outputVector = currentMatrix.toVector();
	
	for(var i = 0; i < (currentMatrix.toVector().toArrray().length * 10); i++) {
		var randIndex = getRandomInt(0, currentMatrix.toVector().toArrray().length);
		var net = currentMatrix.toVector().multScalar(W.column(randIndex));
		switch(sign(net)) {
			case 1:
			outputVector.set(randIndex, 1);
			break;
			case -1:
			outputVector.set(randIndex, -1);
			break;
			case 0:
			break;
			default:
			break;
		}
	}

	return outputVector;
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}