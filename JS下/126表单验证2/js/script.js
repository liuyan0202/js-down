window.onload = function(){
	//var email = /^[a-z]\w{5,17}$/i;
	/*只能出现*和+数字字母下划线6，18位*/
	var pwd = /^[\w\*\+]{6,18}$/;
	var phone = /^1[3578]\d{9}$/;
	var check = {
		email:false,
		pwd:false,
		repwd:false,
		phone:false
	}
	//邮箱文本框
	var emailTag = document.getElementById('one'),
	//email错误提示信息
		emailTip = document.getElementById('h2');
	//验证邮箱
	events.addEvent(emailTag,'blur',function(){
		var val = this.value;
		var error = "";
		if(val.length > 18 || val.length < 6){
			error = "长度需在6~18位"
		}else if(!/^[a-z]/i.test(val)){
			error = "必须为字母开头"
		}else if(/\W/g.test(val)){
			error = "只能为字母数字下划线"
		}

		if(error){
			emailTip.innerHTML = error;
			emailTip.style.display = 'block';
			check.email = false;
		}else{
			emailTip.style.display = 'none';
			check.email = true;
		}
	})
	//验证密码
	//密码文本框
	//显示密码
	var pwdTag = document.querySelector('#two'),
		showTag = document.querySelector('.show'),
		rePwdTag = document.querySelector('#three');

	events.addEvent(pwdTag,'blur',function(){
		if(!pwd.test(this.value)){
			alert('您输入的密码格式不符');
			check.pwd = false;
		}else{
			check.pwd = true;
		}
	})
	events.addEvent(showTag,'click',function(){
		var inp = this.previousElementSibling;
		if(this.innerHTML === '显示'){
			inp.setAttribute('type','text');
			this.innerHTML = "隐藏";
		}else{
			inp.setAttribute('type','password');
			this.innerHTML = "显示";
		}
		
	})
	events.addEvent(rePwdTag,'blur',function(){
		if((pwdTag.value != rePwdTag.value) || rePwdTag.value == ""){
			alert('两次密码输入不一致')
			check.repwd = false;
		}else{
			check.repwd = true;
		}
	})

	//手机号
	var phoneTag = document.getElementById('four');
	events.addEvent(phoneTag,'blur',function(){
		if(!phone.test(this.value)){
			alert('手机号格式有误');
			check.phone = false;
		}else{
			check.phone = true;
		}
	})

	//点击立即注册
	var loginbtn = document.getElementById('login');
	var emailS = document.getElementById('emailS');
	events.addEvent(loginbtn,'click',function(e){
		events.preventDefaulte(e);
		var sum = 0;
		for(var key in check){
			if(check[key]){
				sum++;
			}
		}
		if(sum === 4){
			window.location.href = "首页.html?email="+emailTag.value+'@126.com&phone='+phoneTag.value
		}
	})



}
