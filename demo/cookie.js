var request=require("request");

//带cookie的访问方式

function myget(url,cookie,fn){
    var headers = {
        'Accept':'application/json, text/javascript, */*; q=0.01',
       // 'Accept': 'text/html, application/xhtml+xml, */*',
       'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
       'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.84 Safari/537.36',
       'Connection': 'Keep-Alive',
       // 'Accept-Encoding': 'gzip,deflate',
       'Cookie': cookie,
       'X-Requested-With':"XMLHttpRequest",
    };
    request({
            url: url,
            headers: headers,
            timeout: 15000,
            // encoding: null //用null会返回buffer
        },function(err,res,data){
            if(err){
                console.log(err);
            }else{
                var d=res.body;
                fn(d);
                
            }
        })
}

/* 
若返回的数据是 Buffer,可能的原因是：
  // 'Accept-Encoding': 'gzip,deflate', 这个设置应该取消
  // encoding: null //取消这个
*/