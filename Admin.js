var express=require("express"); 
var bodyParser=require("body-parser"); 
  
const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost:27017/gfg'); 
var db=mongoose.connection; 

const JeepAdd = require('./model/Add.js');
const JeepGet = require('./model/Get.js');
const JeepUpdate = require('/model/Update.js');
const JeepDelete = require('./model/Delete.js');

db.on('error', console.log.bind(console, "connection error")); 
db.once('open', function(callback){ 
    console.log("connection succeeded"); 
}) 
  
var app=express() 
  
  
app.use(express.json()); 
app.use(express.static('public')); 
app.use(bodyParser.urlencoded({ 
    extended: true
})); 

//insert
app.post('/jeepneys', function(req,res){ 
    let route = new JeepAdd({
        jeepney: req.body.jeepney,
        places: req.body.places
    })

    route.save((err, jeep) => {
        if(err) {
            res.send(err);
        }
        res.send(jeep);
    });

});
  
//get
app.get('/jeepneys',function(req,res){ 

    JeepGet.find({}, (err, jeep) => {
        if(err) {
            res.send(err);
        }
        res.send({jeep:jeep});
    });
}).listen(3000) 

//update

app.put('/jeepneys', function(req,res) {
    const elementsUpdate = {
        jeepney: "",
        places: ""
    }
    JeepUpdate.findByIdAndUpdate(id,elementsUpdate, (err,updateElement) => {
        if(err) {
            res.send(err);
        }
        res.send(updateElement);
    });
});
  
//delete
app.delete('/jeepneys', function(req,res) {
    const {id} = req.body;
    JeepDelete.findIdAndRemove(id, (err) => {
        if(err) {
            res.send(err);
        }
        res.json({ success: true});
    })

})

app.listen(3001, () =>
  console.log('Express server is running on localhost: 3001')
);