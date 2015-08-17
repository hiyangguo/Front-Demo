## HyperAnalytics仪表盘数据接口 ##
### 目录 ###
<hr/>
0..................................................................................................................注册


###总体结构###
后端系统对所有Ajax请求都将返回统一的JSON格式数据，如下：
<pre>
<code>
	{
		"code":"200",	
		"message":"......",
	 	"result":[{...},{...},{...}],
		"page":{"current":1,"pagesize":10,"total":16},
		"fields":{
	        	"field1":[{"code":"","message":""}]
				"field2":[{"code":"","message":""}]
	     }
	}

</code>
</pre>


对系统的所有Ajax请求附带的数据都要遵循以下JSON数据格式：
<pre>
<code>
	{
		"data": ...
	}
</code>
</pre>



### 0. 注册 ###
<pre>
  <code>
- URL：/api/home/regist
- 类型：Ajax请求
- 方法：POST
- 提交数据：
		{
			"name":"",
			"companyName":"",
			"email":"",
			"telNumber":""
		}
- 返回结果：提交的数据
 </code>
</pre>