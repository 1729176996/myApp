var vm,loading;
var hftqKey = '7de1704af18f40b1b7060fe19dbcaca8';
$(function(){
    FastClick.attach(document.body);
    vm = new Vue({
        el: "#main",
        data:{
			basic:{},
			now:null,
			forecast:null,
			hourly:null,
			lifestyle:null,
			tab:''
        },
        mounted:function(){
            //获取实况天气
			this.getWeather_now();
        },
        methods:{
			//获取实况天气
			getWeather_now:function(){
				var _this = this;
				var location = '重庆';
				if(longitude&&latitude){
					location = longitude+','+latitude
				}
				var url = 'https://free-api.heweather.net/s6/weather/now?location='+location+'&key='+hftqKey;
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
								mui('#weatherwrapper').scroll({
									deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
								});
							})
						}
					},
					error:function(xhr, errorType, error,msg){
						console.log(msg);
					}
				})
			},
			//获取3-10天预报
			getWeather_forecast:function(){
				var _this = this;
				var location = '重庆';
				if(longitude&&latitude){
					location = longitude+','+latitude
				}
				var url = 'https://free-api.heweather.net/s6/weather/forecast?location='+location+'&key='+hftqKey;
				$.ajax({
					url:url,
					type:'GET',
					dataType:'json',
					timeout:800,
					success:function(data){
						console.log(data);
						if(data.HeWeather6&&data.HeWeather6.length>0&&data.HeWeather6[0]&&data.HeWeather6[0].status=='ok'){
							_this.basic = data.HeWeather6[0].basic?data.HeWeather6[0].basic:{};
							_this.forecast = data.HeWeather6[0].daily_forecast?data.HeWeather6[0].daily_forecast:[];
							_this.tab = 'forecast';
							_this.$nextTick(function(){
								mui('#weatherwrapper').scroll({
									deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
								});
							})
						}
					},
					error:function(xhr, errorType, error,msg){
						console.log(msg);
					}
				})
			},
			//获取逐小时预报
			getWeather_hourly:function(){
				var _this = this;
				var location = '重庆';
				if(longitude&&latitude){
					location = longitude+','+latitude
				}
				var url = 'https://free-api.heweather.net/s6/weather?location='+location+'&key='+hftqKey;
				$.ajax({
					url:url,
					type:'GET',
					dataType:'json',
					timeout:800,
					success:function(data){
						console.log(data);
						if(data.HeWeather6&&data.HeWeather6.length>0&&data.HeWeather6[0]&&data.HeWeather6[0].status=='ok'){
							_this.basic = data.HeWeather6[0].basic?data.HeWeather6[0].basic:{};
							_this.hourly = data.HeWeather6[0].hourly?data.HeWeather6[0].hourly:{};
							_this.tab = 'hourly';
							_this.$nextTick(function(){
								mui('#weatherwrapper').scroll({
									deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
								});
							})
						}
					},
					error:function(xhr, errorType, error,msg){
						console.log(msg);
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
							_this.lifestyle = data.HeWeather6[0].lifestyle?data.HeWeather6[0].lifestyle:{};
							_this.tab = 'lifestyle';
							_this.$nextTick(function(){
								mui('#weatherwrapper').scroll({
									deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
								});
							})
						}
					},
					error:function(xhr, errorType, error,msg){
						console.log(msg);
					}
				})
			},
			sub:function(){
				
            }
        }
    })
});
