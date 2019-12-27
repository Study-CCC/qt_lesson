parseToMoney(1234.54)    //1.234.56
parseToMoney(123456789)    //123.456.789
parseToMoney(1234342645756)   //1.234.342.645.756

// 方法1
function parseToMoney(num){
    num = parseFloat(num.toFixed(3))
    // console.log(num)
    let [integer,decimal]=String.prototype.split.call(num,'.')
    // console.log(integer,decimal)
    integer = integer.replace(/\d(?=(\d{3})+$)/g,'$&,')
    // console.log(integer)
    console.log(integer +(decimal?`,${decimal}`:''))
    return integer +(decimal?`,${decimal}`:'')
}