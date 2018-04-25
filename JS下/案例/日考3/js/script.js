var data=[
	'技术：我们乐于和客户分享行业顶尖技术所带来的商业价值<br />价值：我们专注而不沉迷技术，注重技术的商业价值和应用<br />关注：我们为客户带来的是——低成本、高用户体验、快速响应、共同成长<br />分享：我们以自己的方式和客户分享技术成果——项目合作、人才培养',
	'智能社只做移动互联网。智能社只做移动互联网。 互联网上永远不缺诱惑，而我们只聚焦在移动互联网技术上，我们的所有目标都围绕这个核心展开。',
	'在这个时代，不做全平台是没有意义的。让用户可以自由的在各个平台间转换，并保持数据的平滑同步，这样才能让应用最大限度的服务用户，而不是限制用户。',
	'智能社为企业开发的专属APP，为企业提供手机上的展示空间，利用手机的移动特性，让用户将企业的“广告”随身携带，主动推荐给朋友，为企业节省大量广告费的同时收获更加精准的回报。'
];


window.onload = function(){
    var ul = document.getElementById('pics'),
        ullis = ul.children;
    //信息提示弹窗
    var message = document.getElementById('message'),
        p = message.getElementsByTagName('p')[0];

    //获取页面可视区域宽度
    var winw = document.documentElement.clientWidth || document.body.clientWidth;
    //每一个li绑定滑过事件
    for(var i=0;i<ullis.length;i++){
        ullis[i].index = i;
        ullis[i].onmousemove = function(e){
            var ev = e || window.event;
            var x = ev.pageX+20,
                y = ev.pageY+20;
            var ind = this.index;
            p.innerHTML = data[ind];
            message.style.display = 'block';
            var messagew = message.offsetWidth;
            if(winw - ev.clientX < messagew){
                message.classList.add('left');
            }else{
                message.classList.remove('left');
            }
            
            var num = message.offsetHeight - 16
            message.style.left = x+'px';
            message.style.top = y - num +'px';
        }
        ullis[i].onmouseout = function(){
            message.style.display = 'none';
        }
    }

}