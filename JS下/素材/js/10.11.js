window.onload = function(){
	function offset(tar){
		var t = 0,l = 0;
		while(tar.offsetParent){
			t += tar.offsetTop;
			l += tar.offsetLeft;
			tar = tar.offsetParent;
		}
		return {top:t,left:l};
	}
	var ul = document.querySelector('#iw_thumbs');
	//弹窗
	var dialog = document.querySelector('.iw_ribbon');
	//关闭按钮
	var close = document.querySelector('.iw_close');
	//浏览器窗口可视区域宽度
	var cliw = document.documentElement.clientWidth || document.body.clientWidth;
	ul.onclick = function(e){
		var ev = e || window.event;
		var tar = ev.target || ev.srcElement;
		if(tar.tagName === "IMG"){
			//滚动条滚走的距离
			var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
			//每张图片距页面最顶部的距离
			var t = offset(tar).top;
			var l = offset(tar).left;
			//取每张图片距浏览器顶部的距离 图片距页面-滚走的距离
			var tops = t - scrollT
			console.log('距页面的距离'+t+'----距浏览器窗口的距离'+tops); 
			dialog.style.top = tops+'px';
			dialog.style.width = cliw +'px';
			//创建放置图片的结构放进dialog
			var dimg = dialog.getElementsByTagName('img')[0];
			if(dimg){
				dialog.removeChild(dimg);
			}
			var imgs = new Image();
				imgs.src = tar.src;
				imgs.style.top = '0px';
				imgs.style.left = l+'px';
			dialog.appendChild(imgs);

		}
	}
	close.onclick = function(){
		dialog.style.width = '0px';
	}

}