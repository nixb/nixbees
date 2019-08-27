
import os
import pyrebase
config = {
    "apiKey": "AIzaSyCY2EDnD-PhHoaZtEj1TBUySXHRAU6qK-g",
    "authDomain": "security-716ec.firebaseapp.com",
    "databaseURL": "https://security-716ec.firebaseio.com",
    "projectId": "security-716ec",
    "storageBucket": "security-716ec.appspot.com",
    "messagingSenderId": "1082328327231" }
firebase = pyrebase.initialize_app(config)
db = firebase.database()
storage = firebase.storage()
#storage.child("stls/1558531595152.stl").download('1558531595152.stl')
#storage.child("slicer/output.gcode").put("out.gcode")
#storage.child("cura/settings.json").download("settings.json");
i=0
def listner(event):
    try:
        print(event)
        print(event["data"])
        storage.child("stls/"+event['data']).download(event['data'])
        print("CuraEngine slice -v -p -j /opt/curaengine/fdmprinter.def.json -o" + event['data']+".gcode -l ~/website/slicer/file.STL --next")
        os.system("CuraEngine slice -v -p -j /opt/curaengine/fdmprinter.def.json -o " + event['data']+".gcode -l "+event['data']+" --next")
        print('done')
        os.system("rm "+event['data'])
        print("gcodes/"+event['data']+".gcode")
        va=storage.child("gcodes/"+event['data']+".gcode").put(event['data']+".gcode")
        print('gs')
        ur=storage.child("gcodes/"+event['data']+".gcode").get_url(va['downloadTokens'])
        print(ur)
        db.child('gcodes/'+event['path']+'/url').set(ur)
    except:
        print("dict found")

db.child('files').stream(listner)
#while(True):
 #   x=23

