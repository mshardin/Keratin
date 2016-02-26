Keratin.js
====================

Karatin.js is a Dataset Manipulation Library, allowing you to handle large amounts of dynamic data.

Dependencies

	$ bower install underscorejs


To use the component, include first the underscorejs library and then the javascript of karatin in your web page:

````html
<!DOCTYPE html>
<html>
<head>
	<title>Basic Demo</title>
</head>
<body>

<script src="bower_components/underscore/underscore-min.js"></script>
<script src="karatin.js"></script>

</body>
</html>
````

Examples

```javascript

var data = new Keratin().Dataset();

data.add([
  {id: 1, text: 'item 1', date: new Date(2013, 6, 20), group: 1, first: true},
  {id: 2, text: 'item 2', date: '2013-06-23', group: 2},
  {id: 3, text: 'item 3', date: '2013-06-25', group: 2},
  {id: 4, text: 'item 4'}
]);

data.add([
  {id: 5, text: 'item 5', date: new Date(2013, 6, 20), group: 1, first: true},
  {id: 6, text: 'item 6', date: '2013-06-23', group: 2},
  {id: 7, text: 'item 7', date: '2013-06-25', group: 2},
  {id: 8, text: 'item 8'}
]);

data.update({id: 2, text: 'Testing this again.'});

```

Methods

	add(data)

	update(data)

	get(data)
	get(id, [,data])
	get(ids, [,data])


	remove(id)
	removeAll()