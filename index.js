
var firebaseConfig = {
    apiKey: "AIzaSyCY2EDnD-PhHoaZtEj1TBUySXHRAU6qK-g",
    authDomain: "security-716ec.firebaseapp.com",
    databaseURL: "https://security-716ec.firebaseio.com",
    projectId: "security-716ec",
    storageBucket: "security-716ec.appspot.com",
    messagingSenderId: "1082328327231",
    appId: "1:1082328327231:web:cb0545051aa36466"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function fun(){
	var timestamp = Number(new Date());
	var str = firebase().storage();

	var storageRef = str.child(timestamp.toString());
	var $ = jQuery;
	var file_data = $("#uploadZip").prop("files")[0];
	storageRef.put(file_data).then(function(snapshot) {
	  console.log('Uploaded a blob or file!');
	});
}