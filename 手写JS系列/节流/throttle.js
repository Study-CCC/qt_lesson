const throttle = (fn,delay) =>{
    let flag = true
    return (...args)=>{
        if(!flag) return
        flag = false
        setTimeout(()=>{
            fn.apply(this,...args)  //防止fn方法里面的this指向改变
            flag = true
        },delay)
    }
}