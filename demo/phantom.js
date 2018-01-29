
//注意，这里使用的命令是：phantomjs phantom.js，不是node phantom.js，需要先安装phantomjs.exe，下载地址：http://phantomjs.org/
var page = require('webpage').create();

//设置：可选
page.settings = {
    javascriptEnabled: true,
    loadImages: true,
    webSecurityEnabled: false,
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1'
};


//  var url="http://www.baidu.cn";
var url="https://m.intl.taobao.com/";//淘宝手机版是通过 ajax 返回数据后渲染的页面
//var url="http://element.eleme.io/#/zh-CN"; //这是 vue.js 开发的，解析会出错

page.open(url,function(d){
    
    if(d=="success"){

    // 解析页面,可以通过判断页面中某个元素是否存在来判断页面加载的进度，这里简单一点，直接用setTimeout  
      setTimeout(function(){
        var time=page.evaluate(function() {
            var h=document.querySelector(".zebra-oversea-timecount-wrapper");
            var time=h?h.innerText:"";
            return time;
        });
        console.log("time:",time);
        page.render("dd.png");
        phantom.exit();
      },5000)
        
    }else{
        console.log("err:",d);
    }
    
})