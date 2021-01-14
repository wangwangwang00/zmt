var that;
class Tab{  
    constructor(id){
        that = this;
        this.Box = document.querySelector(id);
        //li的父元素
        this.ul = this.Box.querySelector('ul:first-child');
        //section的父元素
        this.contents = this.Box.querySelector('.content');
        this.add = this.Box.querySelector('.tabadd');
        this.init()
    }
    //初始化
    init(){
       this.updateNode()  
        //初始化操作让相关的元素完成绑定
        this.add.onclick = this.addTab;
        for(var i = 0;i<this.lis.length; i++){
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab;
            this.removes[i].onclick = this.removeTab;
            this.spans[i].ondblclick = this.editTab;
            this.sections[i].ondblclick = this.editTab;
        }
    }
    updateNode(){
        this.lis = this.Box.querySelectorAll('li');
        this.sections = this.Box.querySelectorAll('section');
        this.removes = this.Box.querySelectorAll('.remove');
        this.spans = this.Box.querySelectorAll('.header li span:first-child');
    }
    //清除样式
    clearClass(){
        for(var j = 0;j<this.lis.length; j++){
            this.lis[j].className = '';
            this.sections[j].className = '';
        }
    }
    //1.切换功能
    toggleTab(){
        // console.log(this.index);
        that.clearClass();
        this.className = 'activeTab';
        that.sections[this.index].className = 'activeContent';
    }
    //2.添加功能
    addTab(){
        that.clearClass()
        var number = Math.random()
        //创建li和section元素
        var li = '<li  class="activeTab"><span>新选项卡</span><span  class="remove">×</span></li>';
        var section = '<section class="activeContent">新选项卡'+number+'</section>';
        //将元素追加到对应的父元素里面
        that.ul.insertAdjacentHTML('beforeend',li);
        that.contents.insertAdjacentHTML('beforeend',section);
        that.init()
    }
    //3.删除功能
    removeTab(e){
        e.stopPropagation(); //阻止事件冒泡
        let index = this.parentNode.index;
        that.lis[index].remove()
        that.sections[index].remove();
        that.init()
        if(that.Box.querySelector('.activeTab')) return;
        //最后一个未选中状态
        index --;
        that.lis[index] && that.lis[index].click();
        
    }
    //4.修改功能
    editTab(){
        var str = this.innerHTML;
        // 双击禁止选中文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        this.innerHTML = '<input type="text" />';
        var input = this.children[0];
        input.value = str;
        input.select();
        input.onblur = function(){
            this.parentNode.innerHTML = this.value;
        }
        input.onkeyup = function(e){
            if(e.keyCode === 13){
                this.blur()
            }
        }
    }
}
new Tab('#tab')