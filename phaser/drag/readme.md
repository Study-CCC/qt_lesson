- 命名空间  name space
    Phaser { } 
    1. 申明领地
    取名字 var MIUI={}
    MIUI.version='10.1';
    MIUI.openSystem=function(){ }
    游戏框架 最小化入侵我们的window
    2. var Phaser={}直接挂载到window上
     作用域 scope
     window=>
    3. es5 类的构造 function(){}
       函数名首字母大写就是类 构造函数
       方法 Phaser.Game.prototype.getName