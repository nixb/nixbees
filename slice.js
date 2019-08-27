// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCY2EDnD-PhHoaZtEj1TBUySXHRAU6qK-g",
    authDomain: "security-716ec.firebaseapp.com",
    databaseURL: "https://security-716ec.firebaseio.com",
    projectId: "security-716ec",
    storageBucket: "security-716ec.appspot.com",
    messagingSenderId: "1082328327231"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
var database = firebase.database();

    //function to save file
var file ;
function stlView(path){
    
}
var firstFile;
document.getElementById('inputUpload').onchange = function (evt) {


  var storageRef = firebase.storage().ref("folderName/file1.stl");
  firstFile = evt.target.files[0];
  



  var tgt = evt.target || window.event.srcElement,
      files = tgt.files;

  // FileReader support
  if (FileReader && files && files.length) {
      var fr = new FileReader();
      
      fr.onload = function () {
          console.log("gs");
          localStorage.setItem("stl",fr.result);
          document.getElementById("stl_view").innerHTML="<iframe width=\"100%\" height=\"100%\" src=\"stl1.html\"  allowfullscreen></iframe>";
      }
      fr.readAsDataURL(files[0]);

    }
}

function upload(){
  var storage = firebase.storage();

  var time = new Date().getTime();
  
  var storageRef = firebase.storage().ref("stls");
  
  //dynamically set reference to the file name
  var thisRef = storageRef.child(time+".stl");

  var metadata = {
    contentType: 'stl',
  };

  //put request upload file to firebase storage
  thisRef.put(firstFile).then(function(snapshot) {
    console.log('Uploaded a blob or file!');
    //get request to get URL for uploaded file
    thisRef.getDownloadURL().then(function(url) {
//            console.log(url);
        database.ref("files/"+time+"/name").set(time+".stl");
//            database.ref("files/"+time+"/url").set(url);
         database.ref("gcodes/"+time+"/name/url").set("temp");
        var starCountRef = database.ref('gcodes/' + time+"/name");
//            database.ref("gcodes/"+time+"/name/url").set("temp");
        starCountRef.on('value', function(snapshot) {
         console.log(snapshot.val().url);
            console.log("gsking");
            console.log(snapshot);
             console.log(snapshot.val().url);
            localStorage.setItem("gcode", snapshot.val().url);
            if(snapshot.val().url!=="temp"){
              document.getElementById("gcode_view").innerHTML="<iframe width=\"100%\" height=\"100%\" src=\"gcode.html\"  allowfullscreen></iframe>";
              
             window.open(snapshot.val().url);
            }

        });
    })
  });
      
  


}
function upload1(){
  var storage = firebase.storage();

    var time = new Date().getTime();

  var storageRef = firebase.storage().ref("stls");

  //dynamically set reference to the file name
  var thisRef = storageRef.child(time+".stl");

  //put request upload file to firebase storage
  thisRef.put(localStorage.getItem("stl")).then(function(snapshot) {
        console.log('Uploaded a blob or file!');
        //get request to get URL for uploaded file
        thisRef.getDownloadURL().then(function(url) {
//            console.log(url);
            database.ref("files/"+time+"/name").set(time+".stl");
//            database.ref("files/"+time+"/url").set(url);
             database.ref("gcodes/"+time+"/name/url").set("temp");
            var starCountRef = database.ref('gcodes/' + time+"/name");
//            database.ref("gcodes/"+time+"/name/url").set("temp");
            starCountRef.on('value', function(snapshot) {
             console.log(snapshot.val().url);
                console.log("gsking");
                console.log(snapshot);
                 console.log(snapshot.val().url);
                localStorage.setItem("gcode", snapshot.val().url);
                if(snapshot.val().url!=="temp")
                document.getElementById("gcode_view").innerHTML="<iframe width=\"200\" height=\"520px\" src=\"gcode.html\"  allowfullscreen></iframe>";

            });
        })
  });

}
