window.addEventListener("DOMContentLoaded", function() {
    ///////////////////////////
    // 分时问候
    var date = new Date();
    var h = date.getHours();
    if (h < 12) {
        alert('早上好呀小老弟!');
    } else if (h < 18) {
        alert('下午好呀小老弟');
    } else if (h >= 18) {
        alert('夜深了,别卷了,摸大鱼');
    }
    /////////////////////////
    // 换肤效果
    var skins = document.querySelector('.skin').querySelectorAll('img');
    // console.log(skins);
    var mainbody = document.querySelector('.main');
    for (var i = 0; i < skins.length; i++) {
        skins[i].setAttribute('index', i);
        skins[i].onclick = function() {
            // console.log(this.src);
            var index = this.index;
            document.body.style.backgroundImage = 'url(' + this.src + ')';
            var header = document.querySelector('.header');
            // console.log(header);
            header.style.backgroundColor = 'rgba(255,255,255,.3)';
            // var mainbody = document.querySelector('.container');
            mainbody.style.backgroundColor = 'rgba(255,255,255,.0)';
            var footer = document.querySelector('.footer');
            footer.style.backgroundColor = 'rgba(255,255,255,.0)';
        }

    }
    ////////////////////////
    // 验证码模块
    var code;
    var checkcode = document.getElementById('code');
    var checkbtn = document.getElementById('check_');

    function creatcode() {
        code = "";
        var checkcode = document.getElementById('code');
        var randon = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
            'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
        for (var i = 0; i < 4; i++) {
            var index = Math.floor(Math.random() * 36);
            code += randon[index];
        }
        checkcode.value = code;
    }
    creatcode();

    function valicode() {
        var inputcode = document.getElementById('input').value.toUpperCase();
        if (inputcode.length == 0) {
            alter("请输入验证码！");
            return false;
        } else if (inputcode != code) {
            alert("验证码错误！");
            return false;
        } else {
            alert('验证码正确');
            return true;
        }
    }
    checkcode.onclick = creatcode;
    checkbtn.onclick = valicode;
    /////////////////////////////////////////
    // 密码锁显现隐藏状态
    var suo = document.getElementById('view');
    var password = document.getElementById('password');
    var flag = 0;
    suo.onclick = function() {
        if (flag == 0) {
            password.type = 'text';
            suo.src = 'images/密码显现状态.png';
            flag = 1;
        } else {
            password.type = 'password';
            suo.src = 'images/密码隐藏状态.png';
            flag = 0;
        }

    }

    /////////////////////////////////
    // 用户名正确与否
    //如果是名字
    function checkusername() {
        var name = document.getElementById('username').value;
        if (name == '') {
            p1.innerHTML = "用户名不能为空！";
            return false;
        }
        if (name.length < 4 || name.length > 16) {
            p1.innerHTML = '用户名的长度为4-16个字符！';
            return false;
        }
        var usernamecheck = /^[\u4E00-\u9FA5A-Za-z0-9_]+$/;
        if (!usernamecheck.test(name)) {
            p1.innerHTML = '用户名由数字、字母和下划线组成！';
            return false;
        }
        return true;
    }

    function checkname() {
        var name = document.getElementById('username').value;
        var email = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        var checkph = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9]|19[0|1|2|3|5|6|7|8|9])\d{8}$/
        if (email.test(name) || checkph.test(name) || checkusername()) {
            return true;
        } else {
            return false;
        }
    }


    // 密码正确与否
    function checkpassword() {
        var passwordcheck = /^[a-zA-Z]\w{6,18}$/
        var strongpasswordcheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,18}$/
        var sstrongpasswordcheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,18}$/
        var password = document.getElementById('password').value;
        if (passwordcheck.test(password) || strongpasswordcheck.test(password) || sstrongpasswordcheck.test(password)) {
            // alert('正确的');
            return true;
        } else {
            // alert('错误的');
            return false;
        }
    }
    /////////////////////////////////////
    // 忘记密码部分
    var forget = document.getElementById('forget');
    forget.onclick = function() {
        alert('这边是建议您直接去重新注册哦!亲!');
        window.location.href = 'index_register.html';
    }






    ///////////////////////////////////
    // 登录部分
    var login = document.querySelector('.login_')
        // console.log(login);
    login.onclick = function() {
        if (checkname() && checkpassword() && valicode()) {
            alert('恭喜您，登陆成功！！！在洛谷快乐的敲代码吧！！');
        } else if (!checkname()) {
            alert('用户名输入有误');
        } else if (!checkpassword()) {
            alert('密码错误或者不符合规范');
        } else if (!valicode()) {
            alert('验证码错误');
        }
    }
});

$(function() {
    var list = document.querySelector('.skin').querySelector('.list');
    var images = document.querySelector('.skin').querySelectorAll('div');
    var skinbox = document.querySelector('.skin');
    list.addEventListener('mouseover', function() {
        for (var i = 0; i < images.length; i++) {
            $(images[i]).fadeIn(500);
            // setTimeout(function() {}, 5000)
        }
    })

    function fadeout() {
        for (var i = 1; i < images.length; i++) {
            $(images[i]).fadeOut(500);
            // setTimeout(function() { console.log(12); }, 3000);
        }
    }
    skinbox.addEventListener('mouseleave', function() {
        fadeout();
    })





})