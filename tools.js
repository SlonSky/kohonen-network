

function sign(val) {
	var res = 0;
	if(val < 0) {
		res = -1;
	} else if (val > 0) {
		res = 1;
	}
	return res;
}

function Matrix(array, width, height) {

	var _matrix;
	if(width === undefined && height === undefined) {
		_matrix = array;
	} else {

		_matrix = [];
		for(var i = 0; i < width; i++) {
			for(var j = 0; j < height; j++) {
				_matrix[i][j] = 0;
			}
		}
	}


	this.add = function(mat) {
		var res = new Matrix(undefined, mat.length(), mat.height());

		for(var i = 0; i < width; i++) {
			for(var j = 0; j < height; j++) {
				res.set(i, j, (_matrix[i][j] + mat.get(i,j)));
			}
		}
		return res;
	};

	this.column = function(i) {
		return _matrix[i];
	};

	this.transposed = function() {
		var res = [];
		for(var i = 0; i < width; i++) {
			for(var j = 0; j < height; j++) {
				res[j][i] = _matrix[i][j];
			}
		}
	};

	this.set = function(i, j, val) {
		_matrix[i][j] = val;
	};

	this.get = function(i, j) {
		return _matrix[i][j];
	};

	this.toVector = function() {
		var res = [];
		var n = 0;
		for(var i = 0; i < width; i++) {
			for(var j = 0; j < height; j++, n++) {
				res[n] = _matrix[i][j];
			}
		}
	};

	this.length = function() {
		console.log('test' + _matrix.length);
		return _matrix.length;

	};

	this.height = function() {
		return _matrix[0].length;
	};
}

function Vector(array, length) {
	var _vector;
	{
		if(length === undefined) {
			_vector = array;
		} else {
			_vector = [];
			for (var i = 0; i < length; i++) {
				_vector[i] = 0;
			}
		}	
	}

	this.set = function(i, val) {
		_vector[i] = val;
	};

	this.get = function(il) {
		return _vector[i];
	};

	this.mult = function(vec) {
		var res = new Matrix(undefined, _vector.length, vec.length);
		for (var i = 0; i < _vector.length; i++) {
			for (var j = 0; j < vec.length; j++) {
				res.set(i, j) = _vector[i] * vec.get(j);
			}
		}
		return res;
	};

	this.multScalar = function(vec) {
		var res = 0;
		for (var i = 0; i < _vector.length; i++) {
			res += _vector[i] * vec.get(i);
		}
		return res;
	};
	
	this.toMatrix = function(size) {
		var res = new Matrix(undefined, size, size);
		var n = 0;
		for(var i = 0; i < size; i++) {
			for(var j = 0; j < size; j++, n++) {
				res.set(i,j, _vector[n]);
			}
		}
	};

	this.toArray = function() {
		return _vector;
	}
	
}


