var that;
class Tabs{
    constructor(id){
        that = this;
        this.Box = document.querySelector(id);
        //li的父容器
        this.Flis = this.Box.querySelector('.header ul');
        //section的父容器
        this.Fsections = this.Box.querySelector('.content');
        this.add = this.Box.querySelector('.tabadd');
        
        this.init()
    }
    updateNode(){
        this.lis = this.Box.querySelectorAll('.header li');
        this.sections = this.Box.querySelectorAll('.content section');
        this.remove = this.Box.querySelectorAll('.remove');
        this.spans = this.Box.querySelectorAll('.header li span:first-child');
    }
    init(){
        this.updateNode()
        this.add.onclick = this.addTabs;
        for(var i = 0; i<this.lis.length;i++){
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab;
            this.remove[i].onclick = this.removeTabs;
            this.spans[i].ondblclick = this.editTabs;
            this.sections[i].ondblclick = this.editTabs;
        }
    }
    removeClass(){
        for(var i = 0; i<this.lis.length;i++){
            this.lis[i].className = '';
            this.sections[i].className = '';
        }
    }
    toggleTab(){
        that.removeClass()
        this.className = 'activeTab';
        that.sections[this.index].className = 'activeContent';
    }
    addTabs(){
        that.removeClass()
        var number = Math.random()
        var li = '<li class="activeTab"><span>新选项</span><span class="remove">×</span></li>'
        var section = '<section class="activeContent">测试'+number+'</section>';
        that.Flis.insertAdjacentHTML('beforeend',li);
        that.Fsections.insertAdjacentHTML('beforeend',section);
        that.init()
    }
    removeTabs(e){
        e.stopPropagation(); //阻止事件冒泡
        var index = this.parentNode.index;
        this.parentNode.remove();
        that.sections[index].remove()
        that.init()
        if(that.Box.querySelector('.activeTab')) return;
        index--;
        that.lis[index] && that.lis[index].click()
    }
    editTabs(){
        var str = this.innerHTML;
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        this.innerHTML = '<input type="text" />'
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
new Tabs('#tab')