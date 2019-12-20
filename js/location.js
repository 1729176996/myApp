var vm,loading;
$(function(){
    FastClick.attach(document.body);
    vm = new Vue({
        el: "#main",
        data:{
			searchValue:''
        },
        mounted:function(){
            
        },
        methods:{
			//搜索城市
			searchCity:function(){
				var _this = this;
				var location = _this.searchValue;
				if(!location){
					return;
				}
				var url = 'https://search.heweather.net/find?location='+location+'&key='+hftqKey+'&group=cn&number=20';
				$.ajax({
					url:url,
					type:'GET',
					dataType:'json',
					timeout:800,
					success:function(data){
						console.log(data);
						if(data.HeWeather6&&data.HeWeather6.length>0&&data.HeWeather6[0]&&data.HeWeather6[0].status=='ok'){
							_this.basic = data.HeWeather6[0].basic?data.HeWeather6[0].basic:{};
							_this.now = data.HeWeather6[0].now?data.HeWeather6[0].now:{};
							_this.tab = 'now';
							_this.$nextTick(function(){
								mui('#locationwrapper').scroll({
									deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
								});
							})
						}
					},
					error:function(xhr, errorType, error,msg){
						mui.alert(msg,'提示','确定',null,'div');
					}
				})
			},
			//获取生活指数
			getWeather_lifestyle:function(){
				var _this = this;
				var location = '重庆';
				if(longitude&&latitude){
					location = longitude+','+latitude
				}
				var url = 'https://free-api.heweather.net/s6/weather/lifestyle?location='+location+'&key='+hftqKey;
				$.ajax({
					url:url,
					type:'GET',
					dataType:'json',
					timeout:800,
					success:function(data){
						console.log(data);
						if(data.HeWeather6&&data.HeWeather6.length>0&&data.HeWeather6[0]&&data.HeWeather6[0].status=='ok'){
							_this.basic = data.HeWeather6[0].basic?data.HeWeather6[0].basic:{};
							_this.lifestyle = data.HeWeather6[0].lifestyle?data.HeWeather6[0].lifestyle:[];
							_this.tab = 'lifestyle';
							_this.$nextTick(function(){
								mui('#weatherwrapper').scroll({
									deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
								});
							})
						}
					},
					error:function(xhr, errorType, error,msg){
						mui.alert(msg,'提示','确定',null,'div');
					}
				})
			},
			sub:function(){
				
            }
        }
    })
});
