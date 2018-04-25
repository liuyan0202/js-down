window.onload=function(){
    var lis=document.getElementsByClassName("lis")[0],
        span=lis.children,
        txt=document.getElementsByClassName("txt")[0],
        tst=document.getElementsByClassName("tst")[0],
        pwd=document.querySelector("#pwd"),
        htwo=document.querySelector("#htwo"),
        ptwo=document.querySelector("#ptwo"),
        hthree=document.querySelector("#hthree"),
        pthree=document.querySelector("#pthree"),
        yan=document.querySelector(".yan")[0],
        box=document.getElementById("box"),
        ran=document.getElementById("ran"),
        btn=document.getElementById("btn");
    var arr=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q"];
    for(let i=0;i<span.length;i++){
        span[i].onclick=function(){
            for(var i=0;i<span.length;i++){
                span[i].className="";
            }
            this.className="span";
        }
    };
    txt.onblur=function(){
        if(txt.value.length<6||txt.value.length>18){
            tst.style.display="block";
        }else{
            tst.style.display="none";
        }

    }
    pwd.onblur=function(){
        var a=pwd.value,
            b=txt.value;
        if(a===b){
            pwd.style.border="1px solid red";
            ptwo.style.display="none";
            htwo.style.display="block";
        }
    }
    tel.onblur=function(){
        if(tel.value.length !=11||(typeof(tel.value)!=="number")){
            pthree.style.display="none";
            hthree.style.display="block";
        }
    }
    ran.onclick=function(){
        var str="";
        for(var i=0;i<4;i++){
           var n=random(0,arr.length-1);
           str+=arr[n];
        }
        box.innerHTML=str;
    }

    function random(n,m){
        return Math.floor(Math.random()*(m-n+1)+n);
    }
}