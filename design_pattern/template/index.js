// 咖啡机
// OO 面向对象 属性和方法
var Coffee=function(){
}
Coffee.prototype.boilwater=function(){
    console.log('把水烧开');
}
Coffee.prototype.brewCofferGriends=function(){
    console.log('用水泡咖啡');
}
Coffee.prototype.pourInCup=function(){
    console.log("把咖啡倒进杯子");
}
Coffee.prototype.addSugarAndMilk=function(){
    console.log('加糖和牛奶');
}
Coffee.prototype.cook=function(){
    this.boilwater();
    this.brewCofferGriends();
    this.pourInCup();
    this.addSugarAndMilk();
}
var coffee=new Coffee();
coffee.cook();
