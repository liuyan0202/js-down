var $ = {

	ajax:function(obj){
		var defaults = {
			async:true,
			method:'get',
			//data:{time:new Date()*1}
		};
		var ops = $.extend({},defaults,obj),
			url = ops.url,
			async = ops.async,
			method = ops.method,
			data = typeof ops.data === 'string' ? ops.data : $.setOptions(ops.data),
			success = ops.success;
		var xml = null;
		if(window.XMLHttpRequest){
			xml = new XMLHttpRequest()
		}else{
			xml = new ActiveXObject('Microsoft.XMLHTTP');
		}
		xml.onreadystatechange = function(){
			if(xml.readyState === 4){
				if(xml.status === 200){
					success(xml.responseText);
				}
			}
		}
		if(method === 'get'){
			xml.open(method,url+'?'+data,async);
			xml.send(null)
		}else{
			xml.open(method,url,async);
			xml.setRequestHeader('content-type','application/x-www-form-urlencoded');
			xml.send(data)
		}
		
	},
	extend:function(){
		var c = arguments[0];
		for(var i=1;i<arguments.length;i++){
			for(var key in arguments[i]){
				c[key] = arguments[i][key];
			}
		}
		return c;
	},
	setOptions:function(obj){
		var str = "";
		for(var key in obj){
			str += key+'='+obj[key] + '&';
		}
		str = str.replace(/&$/,'');
		return str;
	}
}

