var loki = require('lokijs'),
    db = new loki('todo.json');

/*
    todo: pass back html when requested via response.render()
*/ 

exports.findAll = function(request, response) {

    db.loadDatabase({}, function(){
        try{
            var data = db.getCollection('todo').data;
            response.send(data);
        }
        catch(err){
            response.status(500)
                    .send(err);
        }
    });
}

exports.findById = function(request, response){
    db.loadDatabase({}, function(){
        try{
            //request params is a string, must be int to lookup properly
            var item = db.getCollection('todo')
                         .findOne({'$loki': request.params.id * 1});

            if (!item) {
                response.sendStatus(404);
                return;
            }
            response.send(item);
        }
        catch(err){
            response.status(500)
                    .send(err);
        }
    });
}

exports.insert = function(request, response){
    db.loadDatabase({}, function(){
        try{
            var doc = db.getCollection('todo')
                        .insert(request.body);
            db.save();
            
            response.status(201)
                    .send(doc);
        }
        catch(err) {
            response.status(500)
                    .send(err);
        }
    });
}