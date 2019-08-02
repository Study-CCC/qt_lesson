function Block() {
    this.upDivWrap = null
    this.downDivwrap = null
    this.downHeight = baseObj.randomNum(0, 150)
    this.gapHeight = baseObj.randomNum(150, 160)
    this.upHeight = 312 - this.downHeight - this.gapHeight

    //用来生成div的方法    函数的封装
    this.createDiv = function(url, height, positionType, left, top) {
        var newDiv = document.createElement('div')
        newDiv.style.width = '62px'
        newDiv.style.height = height
        newDiv.style.position = positionType
        newDiv.style.left = left
        newDiv.style.top = top
        newDiv.style.backgroundImage = url
        return  newDiv
    } 

    this.createBlock = function() {
        var upDiv1 = this.createDiv('url(img/up_mod.png)', this.upHeight + 'px')
        var upDiv2 = this.createDiv('url(img/up_pipe.png)', '60px')
        this.upDivWrap = this.createDiv(null, null, 'absolute', '450px')
        this.upDivWrap.appendChild(upDiv1)
        this.upDivWrap.appendChild(upDiv2)   //上方管道


        var downDiv1 = this.createDiv('url(img/down_pipe.png)', '60px')   
        var downDiv2 = this.createDiv('url(img/down_mod.png)',  this.downHeight + 'px') 
        this.downDivWrap = this.createDiv(null, null, 'absolute', '450px', 363 - this.downHeight + 'px')
        this.downDivWrap .appendChild(downDiv1)
        this.downDivWrap .appendChild(downDiv2) //下方管道

        jsWrapBg.appendChild(this.upDivWrap)
        jsWrapBg.appendChild(this.downDivWrap )
    }

    //管道移动的方法
    this.moveBlock = function() {
        this.upDivWrap.style.left = this.upDivWrap.offsetLeft - 7 + 'px'
        this.downDivWrap.style.left = this.downDivWrap.offsetLeft - 7+ 'px'
    }

}