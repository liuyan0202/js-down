
var data=
[
	'技术：我们乐于和客户分享行业顶尖技术所带来的商业价值<br />价值：我们专注而不沉迷技术，注重技术的商业价值和应用<br />关注：我们为客户带来的是——低成本、高用户体验、快速响应、共同成长<br />分享：我们以自己的方式和客户分享技术成果——项目合作、人才培养',
	'智能社只做移动互联网。智能社只做移动互联网。 互联网上永远不缺诱惑，而我们只聚焦在移动互联网技术上，我们的所有目标都围绕这个核心展开。',
	'在这个时代，不做全平台是没有意义的。让用户可以自由的在各个平台间转换，并保持数据的平滑同步，这样才能让应用最大限度的服务用户，而不是限制用户。',
	'智能社为企业开发的专属APP，为企业提供手机上的展示空间，利用手机的移动特性，让用户将企业的“广告”随身携带，主动推荐给朋友，为企业节省大量广告费的同时收获更加精准的回报。'
];
window.onload=function(){
    var pics=document.getElementById("pics"),
    oli=pics.children,
    p=document.querySelector("p"),
    span=document.querySelector("span"),
    message=document.getElementById("message");

    //获取浏览器窗口的可视宽度
var zwidth=document.documentElement.clientWidth||document.body.clientWidth;

    for(var i=0;i<oli.length;i++){
        oli[i].index=i;
        oli[i].onmousemove=function(event){
            var evt=event||window.event;
            message.style.display="block";
            var num=this.index;
            p.innerHTML=data[num];
            var x=evt.pageX,
                y=evt.pageY;
            //top盒子本身的高度减尖角距下面的距离，小手的位置会上移到尖角的位置
            var top=message.offsetHeight-16;
            //盒子距离左边的位置是鼠标距左边的位置+20px间隙
            message.style.left=x+20+"px";
            //盒子从尖角开始距离上边的位置
            message.style.top=y+20-top+"px";
            //盒子的宽度
            var newmes=message.offsetWidth;
            //console.log(zwidth-evt.clientX);
            console.log(newmes);
            //如果浏览器窗口的可视宽度-鼠标距浏览器的距离小于盒子的宽度
            if(zwidth-evt.clientX<newmes){
                message.classList.add("right");
            }
            else{
                message.classList.remove("right");
            }
       }
       oli[i].onmouseout=function(){
            message.style.display="none";
       }
    }
}

