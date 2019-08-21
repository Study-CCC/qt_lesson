const Singleton=(function(){
    //闭包  closure
    let instance=null; //闭包区域
    console.log('------闭包区域');
    return function(){
        //constructor
        console.log('------new');
        if(instance){
            console.log('------1');
            return instance;
        }
        console.log('------2');
        return instance=this;
    }
})();
console.log(Singleton,typeof Singleton);
//实例 return  单例模式
const a=new Singleton();
const b=new Singleton();
console.log(a==b);