const assert=require('assert');
const MarioChar=require('../models/mariochar');
//describe tests
describe("updating records",function(){
	var char;
	beforeEach(function(done){

 char= new MarioChar({
name:"harry",
weight:50
	});
char.save().then(function(){

done();
});
	});
//create tests
it("updates one record from db",function(done){
	
	MarioChar.findOneAndUpdate({name:'harry'},{name:'luigi'}).then(function(){
      MarioChar.findOne({_id:char._id}).then(function(result){
		assert(result.name === 'luigi');
		done();
      });  
});
});
it("increments the weight by 1",function(done){
	
	MarioChar.update({},{ $inc: { weight:1}}).then(function(){
      MarioChar.findOne({name:'harry'}).then(function(record){
		assert(record.weight === 51);
		done();
      });  
});
});

});
