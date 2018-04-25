var $ = {
	ajax:function(obj){
		console.log(obj.success);
		//创建ajax对象
		var xhr = null;
		if(window.XMLHttpRequest){
			xhr = new XMLHttpRequest();
		}else{
			xhr = new ActiveXObject('Microsoft.XMLHTTP');
		}
		xhr.onreadystatechange = function(){
			if(xhr.readyState === 4){
				if(xhr.status === 200){
					//成功函数
					obj.success(xhr.responseText)
					//console.log();
				}
			}
		}
		//连接服务器
			//连接方式
		var method = obj.method,
			url = obj.url,
			data = obj.data,
			async = obj.async;
			if(typeof data === 'string'){
				data = obj.data
			}else{
				var str = "";
				for(var key in data){
					str += key+'='+data[key]+'&';
				}
				data = str.replace(/&$/,"");
			}
		if(method === 'get'){
			xhr.open(method,url+'?'+data,async);
			xhr.send(null);
		}else{
			xhr.open(method,url,async);
			xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
			xhr.send(data);
		}
		
	}
}

