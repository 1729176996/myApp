var vm,loading;
$(function(){
    FastClick.attach(document.body);
    vm = new Vue({
        el: "#main",
        data:{
			types:[],
			type:'',
			list:[]
        },
        mounted:function(){
            this.types = [
				{name:'美食',code:'food'},
				{name:'电影',code:'film'},
				{name:'数字',code:'number'}
			];
			this.random();
        },
        methods:{
			selectType:function(item){
				if(item.code==this.type){
					this.type = '';
				}else{
					this.type = item.code;
				}
				this.random();
			},
			random:function(){
				var _this = this;
				var _list = data.filter(function(item) {
					return _this.type?(item.type==_this.type):true;
				});
				this.list = _list;
			},
			sub:function(){
				
            }
        }
    })
});
