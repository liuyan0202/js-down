window.onload = function(){
	//添加按钮
	var add = document.querySelector('.add'),
		//文本框
		inp = document.querySelector('.inp'),
		//h3
		tagBox = document.querySelector('.tag'),
		//bottom
		bottom = document.querySelector('.bottom'),
		//span标签
		tagSpan = tagBox.children;
	var textArr = [];
	//添加医院
	add.onclick = function(){
		var val = inp.value.trim();
		if(val != ""){
			//创建医院节点
			addSpan(val);

		}
	}
	//点击span添加医院
	for(var i=0,len=tagSpan.length;i<len;i++){
		tagSpan[i].onclick = function(){
			//console.log(this.classList.contains('on'));
			if(this.classList.contains('on')){
				return false;
			}
			if(textArr.length == 5){
				alert('已经添加过该医院或已经超过五个');
				return false;
			}
			this.classList.add('on');
			addSpan(this.innerHTML);
		}
	}

	function addSpan(val) {
		if(textArr.indexOf(val) == -1 && textArr.length < 5){
			textArr.push(val);
			var str = '<p><span>'+val+'</span><em>删除</em></p>';
			bottom.innerHTML = str + bottom.innerHTML;
			var em = bottom.querySelectorAll('em');
			//绑定删除事件
			for(var k=0;k<em.length;k++){
				em[k].onclick = function(){
					bottom.removeChild(this.parentNode);
					var text = this.previousElementSibling.innerHTML;
					textArr.splice(textArr.indexOf(text),1);
					for(var j=0;j<len;j++){
						if(tagSpan[j].innerHTML === text){
							tagSpan[j].classList.remove('on');
						}
					}
				}
			}
		}else{
			alert('已经添加过该医院或已经超过五个');
		}
	}
}