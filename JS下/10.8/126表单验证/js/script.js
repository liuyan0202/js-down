window.onload=function(){
    /*var email=/^[a-z]\w{5,17}$/i;*/
    var pwd=/^\w{5,15}$/;
    var phone=/^1[3578]\d{9}/;
    var check={
        email:false,
        pwd:false,
        repwd:false,
        phone:false
    }
    var emailTag=document.getElementById("one"),
        blo=document.getElementById("blo");
    events.addEvent(emailTag,"blur",function(){
        var str='';
        var val=this.value;
        if(val.length>18||val.length<6){
            str="长度需在6~18位";
        }else if(!/^[a-z]/.test(val)){
            str="必须以字母开头";
        }
        else if(/\w/g.test(val)){
            str="只能为字母数字下划线";
        }
        if(str){
            blo.innerHTML=str;
            blo.style.display="block";
            check.email=false;
        }else{
            blo.style.display="none";
            check.email=true;
        }

    })

    var pwdTag=document.getElementById("pwd"),
        htwo=document.getElementById("htwo"),
        ptwo=document.getElementById("ptwo");
    events.addEvent(pwdTag,"blur",function(){
        if(!pwd.test(this.value)){
            htwo.style.display="block";
            ptwo.style.display="none";
            check.pwd=false;
        }
        else{
            htwo.style.display="none";
            check.pwd=true;
        }
    })

    var look=document.getElementById("look");
    events.addEvent(look,"click",function(){
        var prev=this.previousElementSibling;
        if(this.innerHTML==="显示"){
            prev.setAttribute("type","text");
            this.innerHTML="隐藏";
        }
        else{
            prev.setAttribute("type","password");
            this.innerHTML="显示";
        }
    })
    var rePwd=document.getElementById("rePwd");
    events.addEvent(rePwd,"blur",function(){
        if(pwdTag.value!=rePwd.value||rePwd.value==""){
            alert("两次密码输入不一致");
            check.repwd=false;
        }
        else{
            check.repwd=true;
        }
    })
    var tel=document.getElementById("tel"),
        hthree=document.getElementById("hthree"),
        pthree=document.getElementById("pthree");
    events.addEvent(tel,"blur",function(){
        if(!phone.test(this.value)){
            hthree.style.display="block";
            pthree.style.display="none";
            check.phone=false;
        }
        else{
            pthree.style.display="block";
            hthree.style.display="none";
            check.phone=true;
        }
    })
    var box=document.getElementById("box"),
        ran=document.getElementById("ran");
        var arr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    events.addEvent(ran,"click",function(){
        var str="";
        for(var i=0;i<4;i++){
           var n=random(0,arr.length-1);
           str+=arr[n].toUpperCase();
        }
        box.innerHTML=str;
    })
    var yan=document.getElementsByClassName("yan")[0];
    var reg1=/[a-z][A-Z]/i;
    events.addEvent(yan,'blur',function(){
        if(this.value!=box.innerHTML){
            alert("验证码输入有误");
        }
    })
    var btn=document.getElementById("btn");
    var flag=true;
    var timer;
    events.addEvent(btn,'click',function(){
        if(flag){
            var num=10;
            flag=false;
            timer=setInterval(function(){
                num--;
                btn.value=num+"秒后重发";
                if(num<=0){
                    flag=true;
                    clearInterval(timer);
                    btn.value="发送验证码";
                }
            },1000)
        }

    })

    var obtn=document.getElementById("obtn");
    events.addEvent(obtn,'click',function(){
        var sum=0;
        for(var key in check){
            if(check[key]){
                sum++;
            }
        }
        if(sum===4){
            window.location.href = "首页.html?email="+emailTag.value+'@126.com&phone='+phoneTag.value
        }
    })

    function random(n,m){
        return Math.floor(Math.random()*(m-n+1)+n);
    }
}