window.onload=function(){
    function oft(tar){
        var T=0;L=0;
        while(tar.offsetParent){
            T+=tar.offsetTop;
            L+=tar.offsetLeft;
        }
        return {top:T,left:L};
    }
    var ul=document.getElementById("iw_thumbs"),
        mark=document.getElementById("iw_ribbon");

       ul.onclick=function(e){
            var ev=e||window.event;
            var tar=ev.target||ev.srcElement;
            if(tar.tagName==="IMG"){
              var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
          var T=oft(tar).top;
          var L=oft(tar).left;
          console.log(T);
          var tops=T-scrollTop;
          console.log(tops);
                mark.style.width="100%";
            }

        }
    }
