var uploader = document.getElementById('uploader')
var fileButton = document.getElementById('fileButton')

fileButton.addEventListener('change', function(e){
	e.preventDefault();
var file = e.target.files[0]

var storage = firebase.storage();
var storageRef = storage.ref();
var imagesRef = storageRef.child('arquivos');
var spaceRef = storageRef.child('arquivos/+' file.name);

var task = spaceRef.put(file)

task.on('state_changed',
	function progress(snapshot){
		var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
		uploader = percentage
	},
	function error (err){
		console.log(err)
	},
	function complete(){
		alert('Envio Completo!!!')
	}
)}
})