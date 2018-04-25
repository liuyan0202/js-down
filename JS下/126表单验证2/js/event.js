var events = {
	addEvent:function(tar,type,fun){
		if(tar.addEventListener){
			tar.addEventListener(type,fun,false);
		}else if(tar.attachEvent){
			tar.attachEvent('on'+type,fun);
		}else{
			tar['on'+type] = fun;
		}
	},
	getEvent:function(e){
		return e || window.event;
	},
	preventDefaulte:function(e){
		var ev = events.getEvent(e);
		if(ev.preventDefaulte){
			ev.preventDefaulte()
		}else{
			ev.returnValue = false;
		}
	}
}


