# Fetch跨域请求的配置
今天在自己做一个项目的时候，使用Fetch跨域请求后台的接口,在服务器端对header进行了配置:

```
res.set({
    'Access-Control-Allow-Origin': 'client.lvmingyin.com',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'x-requested-with,content-type',
  });
```

一直返回错误信息：

<font color='red'>

```
Fetch API cannot load http://api.lvmingyin.com/list. The 'Access-Control-Allow-Origin' header contains the invalid value 'client.lvmingyin.com'. Origin 'http://client.lvmingyin.com' is therefore not allowed access. Have the server send the header with a valid value, or, if an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
```

</font>

根据提示说明，服务端响应头中的```Access-Control-Allow-Origin```值为```client.lvmingyin.com```,而我的地址是```http://client.lvmingyin.com```,原来```Access-Control-Allow-Origin```必须的响应中必须包含协议名称，之前一直没有注意这一点，加上```http://```之后继续访问，还是报错：

<font color='red'>

```
Fetch API cannot load http://api.lvmingyin.com/list. The value of the 'Access-Control-Allow-Credentials' header in the response is '' which must be 'true' when the request's credentials mode is 'include'. Origin 'http://client.lvmingyin.com' is therefore not allowed access.
```

</font>

提示因为我请求中设置了```credentials: include```，所以服务端必须设置```Access-Control-Allow-Credentials:true```，然后在响应中加上了这个，客户端就可以正常访问了。

```
res.set({
    'Access-Control-Allow-Origin': 'client.lvmingyin.com',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'x-requested-with,content-type',
    'Access-Control-Allow-Credentials': true
  });
```

之前在跨域访问的时候都是在网上直接把代码复制过来修改一下，这次遇到这两个问题，正好又有时间，正要研究一下Fetch跨域请求中服务端和客户端的设置都有什么用。

查找了mdn的[CORS](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS#Access-Control-Allow-Credentials)和github的[fetch](https://github.github.io/fetch/)文章，总结了一些配置。

在跨域请求中，浏览器会先发送一个OPTIONS的预检请求，根据一些关键字段来获得当前URL访问服务器的权限信息。

服务端响应字段：

##### Access-Control-Allow-Origin
> Access-Control-Allow-Origin: origin | *
> 
> origin参数指定一个允许向该服务器提交请求的URI.对于一个不带有credentials的请求,可以指定为'*',表示允许来自所有域的请求.

 如果客户端请求配置了```credentials```为```same-origin```或```include```，origin需要指定为一个特定的URI，该URI必须和客户端完全一致(包括协议)，客户端才能访问成功。

如果指定为通配符'*'，客户端配置```credentials```必须为默认值```omit``才能请求成功。

##### Access-Control-Allow-Methods
> 指明资源可以被请求的方式有哪些(一个或者多个). 这个响应头信息在客户端发出预检请求的时候会被返回. 

这个字段是用来告诉客户端可以使用哪些http方法来请求接口(POST | GET)。

##### Access-Control-Allow-Headers
> 也是在响应预检请求的时候使用.用来指明在实际的请求中,可以使用哪些自定义HTTP请求头.

比如响应中配置了 ```Access-Control-Allow-Headers': 'content-type'```，这样在客户端请求中就可以配置```'Content-Type': 'application/x-www-form-urlencoded'``。

##### Access-Control-Allow-Credentials
> 告知客户端,当请求的credientials属性是true的时候,响应是否可以被得到.当它作为预请求的响应的一部分时,它用来告知实际的请求是否使用了credentials.注意,简单的GET请求不会预检,所以如果一个请求是为了得到一个带有credentials的资源,而响应里又没有Access-Control-Allow-Credentials头信息,那么说明这个响应被忽略了.

当设置为true时，允许客户端配置```credientials```为```same-origin```或```include```，否则客户端只能使用默认值```omit```。

客户端配置字段：

##### method
请求的http方法，通常为get或post
##### body（String，body types） - HTTP请求主体
##### headers（Object，Headers） - 默认值：{}
#### credentials
> 认证凭证模式。默认："omit"
> 
> 		"omit" - 不要在请求中包含身份验证凭证（例如Cookie）
> 
>		"same-origin" - 在同一网站的请求中包含凭据
>	
>		"include" - 在所有网站的请求中包含凭据


