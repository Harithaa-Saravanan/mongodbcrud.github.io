const mongoose=require('mongoose');
//ES6 promises
mongoose.Promise=global.Promise;
//connect to db befor test run
before(function(done){
//connect to mongodb
mongoose.connect('mongodb://localhost/testaroo');

mongoose.connection.once('open',function(){
console.log("connection has been made,now make fireworks");
done();
}).on('error',function(error){
	console.log('connection error:',error);
});
});

//drop the characters collection before each test
beforeEach(function(done){
	//drop collection
	mongoose.connection.collections.mariochars.drop(function(){
done();
	});
});

