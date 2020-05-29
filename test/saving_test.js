
const assert=require('assert');
const MarioChar=require('../models/mariochar');
//describe tests
describe("saving records",function(){
//create tests
it("saves records to db",function(done){
	var char= new MarioChar({
name:"harry"

	});
char.save().then(function(){
assert(char.isNew === false);
done();
});

});

});