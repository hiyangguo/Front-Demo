## HyperAnalytics邮件报告接口文档 ##
### 目录 ###
<hr/>
0..................................................................................................................总体结构
1..................................................................................................................报告列表
2..................................................................................................................单条报告获取
3..................................................................................................................本人订阅报告
4..................................................................................................................本人退订报告
5..................................................................................................................订阅管理

###0.总体结构###
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

### 1. 报告列表 ###
<pre>
  <code>
- URL：/api/email/reports
- 类型：Ajax请求
- 方法：GET
- 提交数据：channelId=1
- 返回结果：
	[
		{
			"id":"",
			"name":"",
			"frequency":"", //频率
			"count":"", //查看用户将不返回该字段
			"subscription":"1"//本人是否已订阅 （1：订阅，0：末订阅）
		}
		...
	]
 </code>
</pre>

### 2. 单条报告获取 ###
<pre>
  <code>
- URL：/api/email/reports/{id}
- 类型：Ajax请求
- 方法：GET
- 提交数据：channelId=1
- 返回结果：
	[
		{
			"id":"",
			"name":"",
			"frequency":"", //频率
			"userIdList":[3,4], //用户ID列表
			"customEmailList":["xiang.liu@hypers.com"] //email列表
		}
		...
	]
 </code>
</pre>


### 3. 本人订阅报告 ###
<pre>
  <code>
- URL：/api/email/reports/{id}/subscribe
- 类型：Ajax请求
- 方法：GET
- 提交数据：channelId=1
- 返回结果：
	正确：{"code":20000}
	错误：{"code":xxxxx,"message":"xxxxx"}
 </code>
</pre>

### 4. 本人退订报告 ###
<pre>
  <code>
- URL：/api/email/reports/{id}/unsubscribe
- 类型：Ajax请求
- 方法：GET
- 提交数据：channelId=1
- 返回结果：
	正确：{"code":20000}
	错误：{"code":xxxxx,"message":"xxxxx"}
 </code>
</pre>



### 5. 订阅管理 ###
<pre>
  <code>
- URL：/api/email/reports/{id}/subscribe/batch
- 类型：Ajax请求
- 方法：PUT
- 提交数据：
		{
			"id":"",
			"channelId":"",
			"userIdList":[3,4], //用户ID列表
			"customEmailList":["xiang.liu@hypers.com"] //email列表
		}
- 返回结果：
	{"code":20000} 
 </code>
</pre>