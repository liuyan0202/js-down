var mail = document.getElementById('mail');
var user = document.getElementById('user');
var psw = document.getElementById('psw');
var topsw = document.getElementById('topsw');
var war = document.getElementById('war');
var warn = document.getElementById('warn');
var pswVal = '';
var reg = {
    mail: /^\w+@\w{2,4}\.(com|cn|net)$/,
    user: /^(\w{1,6})$/,
    psw: /^(\w{6,16})$/
};
mail.onblur = function() {
    var val = this.value;
    if (reg.mail.test(val)) {
        war.style.display = 'none';
        return false;
    } else {
        war.style.display = 'block';
    }
}
user.onblur = function() {
    var val = this.value;
    console.log(val);
    console.log(reg.user.test(val));
    if (reg.user.test(val)) {
        return false;
    } else {
        alert('请输入1-32位');
    }
}
psw.onblur = function() {
    pswVal = this.value;
    if (reg.psw.test(pswVal)) {
        warn.style.display = 'none';
        return false;
    } else {
        warn.style.display = 'block';
    }
}
topsw.onblur = function() {
    var val = this.value;
    if (val === pswVal) {
        return false;
    } else {
        alert('俩次不一致');
    }
}