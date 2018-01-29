var phantomjs = require('phantomjs-prebuilt')
var webdriverio = require('webdriverio')
var wdOpts = { desiredCapabilities: { browserName: 'phantomjs' } }

var url="http://www.baidu.com";


phantomjs.run('--webdriver=4444').then(program => {
//   webdriverio.remote(wdOpts).init()
var browser=webdriverio.remote(wdOpts).init();

//   browser.url('https://www.baidu.com/')
//     .getTitle().then(title => {
//       console.log(title) // 'Mozilla Developer Network'
//       program.kill() // quits PhantomJS
//     })

var baidu=browser.url(url);



//直接用getValue是不行的，不知道为什么官网是这样写
baidu.setValue("#kw","哈哈").then(()=>{
    baidu.getAttribute("#kw","value").then((d)=>{
        console.log("value",d)
    })
});

//登录中这样写，但brower不用使用url怎么知道访问的是哪个页面？
//console.log(browser.getTagName("#su"));//getText()或者getTagName()总是返回{state:pending};
//getAttribute

baidu.getText("#setf").then(function(d){
    console.log("text",d);
})


baidu.getUrl().then(function(d){
    console.log("url",d) //可以返回url
})

baidu.getAttribute("#su","value").then((d)=>{
    console.log("attr",d)
})

baidu.setCookie({name:"zeng",age:22}).then(()=>{
    console.log("cookie",baidu.getCookie())//获取不了 cookie ，为什么呢？
})
console.log("cookie",baidu.getCookie())







})

