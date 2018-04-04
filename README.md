# node-spider
## node爬虫的基本配置
### http请求
* request 推荐
* http 原生的 http 模块，写起来比较麻烦
* 其它，很多

### 解析 html 页面
* cheerio 推荐，比jquery.js要轻
* jquery.js 
* jsdom 包涵 http 模块

### 解析 ajax 请求后的页面
* phantomjs 客户端，推荐，[文档](http://phantomjs.org/api/webpage/method/evaluate.html)
* phantom node.js的模块，功能弱一些，写起来麻烦一些
* phantom-prebuilt 配合 webdriverio.js 
* 使用 chrome 的程序

### 使用代理 IP 
* .....

### 解决乱码问题
* he node.js 模块，解析形如\x3453 \x54 这种编码的数据(用 he.decode(str)),一般是jquery中的html()返回的字符串可能需要使用
* 存数据库时，建议使用html_encode,推荐库：html-entities [链接](https://www.npmjs.com/package/html-entities)

### 保存数据
* mksql 在 mysql 模块的基础上做了一些字符串拼接的工作
* mongoose
* 其它

## 需要解决的几类问题
* 登录后才能访问的：  
  可以考虑手动登录后，把 cookie 写到 http 请求中

* ajax 返回后渲染的页面  
  使用 phantomjs
  存在的问题：vue.js 写的页面不能正确渲染

* 应对反爬虫策略
1. 设置和浏览器一样的请求头，比如 User-agent 等
2. 更换用户，不要总用同一个用户的 cookie 去爬
3. 控制请求频率，让它更向真人的操作
4. 使用代理 IP ，即使被反爬虫封了 IP ，也可以换新的
5. 其它...

* 数据库读写与网络请求比较耗时


