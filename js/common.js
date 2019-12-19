var longitude = null;//经度
var latitude = null;//纬度
var altitude = null;//海拔
document.addEventListener('plusready', function(){
	//console.log("所有plus api都应该在此事件发生后调用，否则会出现plus is undefined。"
	
	//获取当前设备位置信息
	plus.geolocation.getCurrentPosition(function(p){
		//经度
		longitude = p.coords.longitude;
		//纬度
		latitude = p.coords.latitude;
		//海拔
		altitude = p.coords.altitude;
	}, function(e){
		alert('获取当前设备位置信息失败\n错误信息:\n ' + e.message);
	} );
	
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
				{name:'首页',url:'index.html'},
				{name:'天气',url:'weather.html'},
				{name:'随机',url:'random.html'}
			];
			this.list = list;
			this.$nextTick(function(){
				mui('#offvm').scroll({
					deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
				});
			})
	    },
	    methods:{
			clickItem:function(item){
				if(location.href.indexOf(item.url)>=0){
					mui('.mui-off-canvas-wrap').offCanvas().close();
				}else{
					location.href=item.url;
				}
			},
			sub:function(){
				
			}
	    }
	})
});