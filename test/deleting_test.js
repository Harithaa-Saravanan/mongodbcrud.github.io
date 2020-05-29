const assert=require('assert');
const MarioChar=require('../models/mariochar');
//describe tests
describe("deleting records",function(){
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
it("deletes one record from db",function(done){
	
	MarioChar.findOneAndRemove({name:'harry'}).then(function(){
      MarioChar.findOne({name:"harry"}).then(function(result){
		assert(result === null);
		done();
      });  
});
});

});
