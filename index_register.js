window.addEventListener("DOMContentLoaded", function() {
    ////////////////////////////
    var date = new Date();
    var h = date.getHours();
    if (h < 12) {
        alert('早上好呀小老弟!');
    } else if (h < 18) {
        alert('下午好呀小老弟');
    } else if (h > 18) {
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
    // 点击下一步按钮获取元素
    var next = document.getElementsByClassName('next');
    var forms = document.getElementsByClassName('form');
    // 第三步中的立即登录按钮获取元素
    var btn = document.querySelector('.btn');
    var btns = btn.querySelectorAll('button');
    // console.log(btns);
    // console.log(btn);
    // 点击下一步按钮注册事件
    for (var i = 0; i < next.length; i++) {
        next[i].setAttribute('index', i + 1);
        next[i].setAttribute('index_before', i);
        next[i].addEventListener('click', function() {
            var index = this.getAttribute('index');
            var index_before = this.getAttribute('index_before');
            if (index == 1 && check()) {
                console.log(11);
                forms[index_before].style.display = 'none';
                forms[index].style.display = 'block';
            } else if (index == 2 && check_2()) {
                console.log(22);
                forms[index_before].style.display = 'none';
                forms[index].style.display = 'block';
            }
        })

    }
    //第三步中的立即登录按钮注册时间
    btns[1].onclick = function() {
            // console.log(22);
            window.location.href = "index_login.html";
        }
        /////////////////////////////
        // 对注册中的第一部分进行条件限制
    var usernameipt = document.querySelector('#username');
    // console.log(usernameipt);
    var passwordipt = document.querySelector('#password');
    var repasswordipt = document.querySelector('#repassword');

    function checkusername() {
        var p1 = document.querySelector('#p1_');
        var name = document.submit.username.value;
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
        } else {
            p1.innerHTML = '您的用户名合法!';
            p1.style.color = 'green';
        }

        return true;
        // console.log(22);
    }

    function checkpassword() {
        var p2 = document.querySelector('#p2');
        var password = document.submit.password.value;
        // 正则表达
        if (password == '') {
            p2.innerHTML = '请输入密码';
            return false;
        } else if (password.length < 6 || password.length > 18) {
            p2.innerHTML = '密码的长度应该大于等于6小于等于18';
            return false;
        }
        var passwordcheck = /^[a-zA-Z]\w{6,18}$/
        var strongpasswordcheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,18}$/
        var sstrongpasswordcheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,18}$/
        if (sstrongpasswordcheck.test(password)) {
            p2.innerHTML = '密码强度：很强';
            p2.style.color = 'green';
            return true;
        } else if (strongpasswordcheck.test(password)) {
            p2.innerHTML = '密码强度：强';
            p2.style.color = 'green';
            return true;
        } else if (passwordcheck.test(password)) {
            p2.innerHTML = '密码强度：中等';
            return true;
        } else if (!passwordcheck.test(password)) {
            p2.innerHTML = '密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线！';
            return false;
        }
    }

    function checkrepassword() {
        var p3 = document.querySelector('#p3');
        var repassword = document.submit.repassword.value;
        var password = document.submit.password.value;
        if (repassword != password) {
            p3.innerHTML = '两次密码输入不一致！';
            return false;
        }
        p3.innerHTML = '您输入的密码符合要求!';
        p3.style.color = 'green';
        return true;
    }

    // function checkyanzhengma() {}

    // function checkagreey() {}



    usernameipt.onblur = check;
    passwordipt.onblur = check;
    repasswordipt.onblur = check;

    /////////////////////////////////////////////
    // 密码框显现隐藏状态设置；
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
    var resuo = document.getElementById('review');
    var repassword = document.getElementById('repassword');
    var reflag = 0;
    resuo.onclick = function() {
        if (reflag == 0) {
            repassword.type = 'text';
            resuo.src = 'images/密码显现状态.png';
            reflag = 1;
        } else {
            repassword.type = 'password';
            resuo.src = 'images/密码隐藏状态.png';
            reflag = 0;
        }

    }

    //////////////////
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
            // alert('验证码正确');
            return true;
        }
    }
    checkcode.onclick = creatcode;
    checkbtn.onclick = valicode;

    ///////////
    // 我同意部分
    var agreey = document.querySelector('#agreey');

    function Iagreey() {
        if (agreey.checked) {
            // alert('yes');
            return true;

        } else {
            alert('请同意协议再注册');
            return false;
        }
    }

    ///////////////////////////////






    ///////
    // 下一步部分
    function check() {
        if (checkusername() && checkpassword() && checkrepassword() && valicode() && Iagreey()) {
            return true;
        } else {
            return false;
        }
    }


    ///////////
    // 第二部中的手机号判断
    var checkph = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9]|19[0|1|2|3|5|6|7|8|9])\d{8}$/
        ///^1[3|5|8|9|7][0-9]\d{4,8}$/
    var phoneipt = document.getElementById('phone');

    function checkphone() {
        var phonenumbur = document.getElementById('phone').value;
        if (checkph.test(phonenumbur)) {
            var phonenum = document.getElementById('phone');
            var pp = document.getElementById('pp');
            pp.innerHTML = phonenum.value;
            return true;
        } else {
            alert('请输入正确的手机号');
            // console.log(phonenumbur);
            return false;
        }
    }
    phoneipt.onblur = checkphone;
    /////////////////////
    // 第二步往下走
    function check_2() {
        if (checkphone()) {
            return true;
        } else {
            return false;
        }
    }
    /////////////////////////////////////////
    // 发送验证码
    var send = document.getElementById('sendmassage');
    var time = 5;
    send.addEventListener('click', function() {
            if (checkphone()) {
                send.disabled = true;
                var phonenum = document.getElementById('phone');
                var pp = document.getElementById('pp');
                pp.innerHTML = phonenum.value;
                var timer = setInterval(function() {
                    if (time == 0) {
                        clearInterval(timer);
                        send.disabled = false;
                        send.innerHTML = '发送验证码';
                        time = 5;
                    } else {
                        send.innerHTML = '还剩下' + time + '秒';
                        time--;
                    }
                }, 1000)

            } else {
                send.disabled = true;
                var timer = setInterval(function() {
                    if (time == 0) {
                        clearInterval(timer);
                        send.disabled = false;
                        send.innerHTML = '发送验证码';
                        time = 5;
                    } else {
                        time--;
                    }
                }, 1000)
            }
        })
        //再试一次
    var asend = document.getElementById('again');
    asend.addEventListener('click', function() {
        if (checkphone()) {
            asend.disabled = true;
            //改变pp的值
            var phonenum = document.getElementById('phone');
            var pp = document.getElementById('pp');
            pp.innerHTML = phonenum.value;
            //
            var timer = setInterval(function() {
                if (time == 0) {
                    clearInterval(timer);
                    send.disabled = false;
                    asend.disabled = false;
                    send.innerHTML = '发送验证码';
                    time = 5;
                } else {
                    send.innerHTML = '还剩下' + time + '秒';
                    time--;
                }
            }, 1000)
        } else {
            asend.disabled = true;
            var timer = setInterval(function() {
                if (time == 0) {
                    clearInterval(timer);
                    send.disabled = false;
                    asend.disabled = false;
                    send.innerHTML = '发送验证码';
                    time = 5;
                } else {
                    time--;
                }
            }, 1000)
        }
    })





    //立即充值部分
    var money = document.getElementById('money');
    money.onclick = function() {
        window.location.href = 'images/2dcode.png';
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