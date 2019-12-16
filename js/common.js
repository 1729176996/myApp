document.addEventListener('plusready', function(){
	//console.log("所有plus api都应该在此事件发生后调用，否则会出现plus is undefined。"
	
});
mui.init();
var offvm,loading;
$(function(){
    offvm = new Vue({
	    el: "#offvm",
	    data:{
			list:[]
	    },
	    mounted:function(){
	        var list = [
				{name:'11'},
				{name:'22'}
			];
			this.list = list;
			this.$nextTick(function(){
				mui('.mui-scroll-wrapper').scroll({
					deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
				});
			})
	    },
	    methods:{
			clickItem:function(item){
				
			},
			sub:function(){
				
			}
	    }
	})
});
