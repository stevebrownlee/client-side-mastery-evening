//this can refer to the "global object", in most web browsers this is window
// this.a = 37;
// console.log(window.a); // 37


/*
***************************************
  Example one: call site and call stack
    *  The original call site is the call to baz();
		*  The execution context is the Window object.
  	*  The same as calling window.baz(). THIS holds the execution context, which is always at the original call site.
***************************************
*/

// var fubar = "42";

// function baz() {
//   console.log( "baz" );
//   bar();
// }

// function bar() {
//   console.log( "bar" );
//   foo();
// }

// function foo() {
//   var fubar = "13";
//   console.log( "foo" );
//   console.log("this", this ); //window
//   console.log("this", this.fubar ); //42
// }

// baz();  //Origional call site






/*
***************************************
  Example two: context objects
		*  obj is the execution context.
		*  obj.foo() is the call site. 
		*  "foo: foo" holds a reference to the foo function (note that it's not in quotes, so we know it's a variable of some kind
***************************************
*/


// var a = 3;

// function foo() {
//   console.log("this", this ); // obj
//   console.log( "this.a", this.a ); // 2
// }

// var obj = {
//   a: 2,
//   monkey: foo
// };

// obj.monkey();







/*
***************************************
  Example three: context objects
		*  obj2 is the execution context.
		*  obj.foo() is the call site. 
***************************************
 */

// function foo() {
// 	console.log("this", this); //obj2
//   console.log("this.a", this.a); //42
// }

// var obj2 = {
//   a: 42,
//   foo: foo
// };

// var obj1 = {
//   a: 2,
//   obj2: obj2
// };

// obj1.obj2.foo();





/*
***************************************
  Example four: losing original binding
***************************************
 */

// function foo() {
//   console.log("this", this); //for obj.foo = obj; for bar() = window
//   console.log("this.a", this.a); //for obj.foo=2; for bar() = global warming
// }

// var obj = {
//   a: 2,
//   foo: foo
// };

// var bar = obj.foo;

// var a = "global warming";

// obj.foo(); // do this one first
// bar(); // do this one second 


/*
***************************************
  Example five: losing original binding with callbacks
***************************************
 */

// function foo() {
//   console.log("this", this); // window
//   console.log("this.a", this.a); //oops, global
// }

// function doFoo(fn) {
//   return fn();
// }

// var obj = {
//   a: 2,
//   foo: foo
// };

// var a = "oops, global";

// doFoo( obj.foo );



