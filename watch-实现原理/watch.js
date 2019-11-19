class watcher{
    constructor(opts){
        this.$data = this.getBaseType(opts.data) === 'Object' ? opts.data : {}
        this.$watch = this.getBaseType(opts.watch) === 'Object' ? opts.watch : {    }
        for(let key in opts.data) {
            this.setData(key,opts.data[key])
        }
    }
    getBaseType (target) {
        const typeStr = Object.prototype.toString.call(target)
        return typeStr.slice(8,-1)
    }
    setData (_key,_val) {
        Object.defineProperty(this,_key,{ // Object.defineProperty(this)把上下文指向当前的对象
            get:function(){
                return this.$data[_key]
            },
            set:function(_val){
                const oldVal = this.$data[_key]
                if(oldVal === _val) return _val
                this.$data[_key] = _val
                this.$watch[_key] && typeof this.$watch[_key] === 'function' && (
                    this.$watch[_key].call(this,_val,oldVal)
                )
                console.log(this)
                return _val
            }
        })
    }
}


let vm = new watcher({
    data:{
        a:0,
        b:'hello'
    },
    watch: {
        a (newVal,oldVal) {
            console.log(oldVal,newVal)
        }
    }
})
setTimeout(()=>{
    vm.a=29
},1000)