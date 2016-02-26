// Define our global function
var Coaster = function() {

	// Dataset object
	this.Dataset = function(data, options) {

		// set data if it has been supplied with the construct
		if (data !== undefined) this.data = data; 
		// set data variable otherwise
		else this.data = {}; 

		// a function for adding data to a Dataset object
		this.add = function(data) { 

			// get length of existing data
			var length = Object.keys(this.data).length; 

			// if data already exist append to it
			if (length > 0) {

				// loop through data being added
				for (var i = 0; i < data.length; i++) {

					// get position of existing data and add incrementer for continuation of data
					this.data[length + i] = data[i];
					console.log('data has been added');

				}

			// if no data exists
			} else { 

				for (var i = 0; i < data.length; i++) {

					this.data[i] = data[i]; 
					console.log('data has been added');

				}

			}

			return this.data;

		}

		// a function for retrieving a single data object
		this.get = function(id) {

			// if no argument is given get all data
			if (id == undefined) return this.data

			// get object that are associated with the given keys 
			if (Array.isArray(id)) {

				// store new objects here
				var objects = {};
				// will help with the iteration storing our new object
				var i = 0;
				
				// loop through the given keys
				for (givenKey in id) {

					// loop through our data 
					for (ourKey in this.data) { 

						if (id[givenKey] == this.data[ourKey].id) {

							objects[i] = this.data[ourKey];
							console.log('we have a match');

							i++;

						}

					}

				}

				return objects;

			}

			// just get a single data
			for (key in this.data) {
 
				if (this.data[key].id == id) {

					return this.data[key];
					console.log(data[key]);

				}

			}

		}

		this.update = function(data) {

			// get keys from input data
			var keys = _.keys(data);

			// get values from input data
			var values = _.values(data);

			// set the proper keys and values for ease of use
			var aKey = keys[0], bKey = keys[1];
			var aValue = values[0], bValue = values[1];

			// loop through data and check for any potential matches 
			for (x in this.data) {

				if (aValue == this.data[x][aKey]) {

					// clear the value 
					this.data[x][bKey] = '';
					// set new value
					this.data[x][bKey] = bValue;

				}

			}

			return this.data;
 
		}

		// static remove all data from a Dataset object
		this.removeAll = function() {

			for (var i = 0; Object.keys(this.data).length; i++) {

				delete this.data[i];
				console.log('data has been deleted');

			}

			return this.data;

		}

		// return Dataset Object
		return this;
	}

};