var events={
    addEvent:function(tar,type,fun){
        if(tar.addEventListener){
            tar.addEventListener(type,fun,false);
        }else if(tar.attachEvent){
            tar.attachEvent("on"+type,fun);
        }else{
            tar["on"+type]=fun;
        }
    }
}
events.tag;