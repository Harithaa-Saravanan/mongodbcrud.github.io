const assert=require('assert');
const mongoose=require('mongoose');
const Author=require('../models/author');
//describe our tests
describe('Nesting records',function(){
	beforeEach(function(done){

 mongoose.connection.collections.authors.drop(function(){
 	done();

 });
	});
	//create tests
	it("creates an author with sub documents",function(done){
	var pat=new Author({
	name:"patrick rothfuss",
	books:[{title:"name of the wind",pages:400}]
});

pat.save().then(function(){
	Author.findOne({name:'patrick rothfuss'}).then(function(record){
assert(record.books.length === 1);
done();
	});
});

});
	it('adds the book to the author',function(done){
var pat=new Author({
	name:"patrick rothfuss",
	books:[{title:"name of the wind",pages:400}]
});
pat.save().then(function(){
Author.findOne({name:'patrick rothfuss'}).then(function(record){
	//add book to books array
	record.books.push({title:"wise man's fear",pages:500});
	record.save().then(function(){
		Author.findOne({name:'patrick rothfuss'}).then(function(result){
			assert(result.books.length === 2);
			done();
	});

	});
	});
	});
});
});