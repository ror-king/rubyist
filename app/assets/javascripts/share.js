function postToQqWeibo(url, title){
    var _t = encodeURI(title);
    var _url = encodeURIComponent(url);
    var _appkey = encodeURI('03acaf417aa94e22ae4956e9c980514a');//你从腾讯获得的appkey
    var _pic = encodeURI('');//（例如：var _pic='图片url1|图片url2|图片url3....）
    var _site = 'http://rubyeye.heroku.com';//你的网站地址
    var _u = 'http://v.t.qq.com/share/share.php?url='+_url+'&appkey='+_appkey+'&site='+_site+'&pic='+_pic+'&title='+_t;
    openWindow(_u);
    delayUp(url);
}

function postToSinaWeibo(url, title){
    var _t = encodeURI(title);
    var _url = encodeURIComponent(url);
    var _appkey = encodeURI('403062089');
    var _pic = encodeURI('');
    var _relatedUid = "";
    var _u = "http://service.t.sina.com.cn/share/share.php?url=" + _url +  "&appkey=" + _appkey + "&title=" + _t + "&pic=" + _pic + "&ralateUid=" + _relatedUid;
    openWindow(_u);
    delayUp(url);
}

function shareToDouban(url, title){
    var _t   = encodeURI(title);
    var _url = encodeURIComponent(url);
    var _u   = "http://www.douban.com/recommend/?url=" + _url + "&title=" + _t;
    openWindow(_u);
}


function openWindow(url){
    window.open(url, 'Rubyist', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no');
}
