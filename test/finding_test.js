const assert=require('assert');
const MarioChar=require('../models/mariochar');
//describe tests
describe("Finding records",function(){
	var char;
	beforeEach(function(done){

 char= new MarioChar({
name:"harry"

	});
char.save().then(function(){

done();
});
	});
//create tests
it("Finds one record from db",function(done){
	
	MarioChar.findOne({name:'harry'}).then(function(result){
assert(result.name==="harry")
done();
	});
});
it("Finds one record by id from db",function(done){
	
	MarioChar.findOne({_id:char._id}).then(function(result){
assert(result._id.toString()===char._id.toString());
done();
	});
});

});