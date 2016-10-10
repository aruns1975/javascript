var Box=function(w,h){
	this.width=w;
	this.height=h
}

var b1=new Box(10,20);
console.log(Box.prototype);
//console.log(b1.prototype);

Box.prototype.area=function(){
	return this.width * this.height;
}

console.log(b1);
console.log(Box.prototype);
console.log(b1.area());
