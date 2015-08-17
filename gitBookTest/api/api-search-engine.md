## HyperAnalytics搜索引擎接口文档 ##
### 目录 ###
<hr/>

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


### １. 搜索引擎类型 ###
<pre>
  <code>
#### ***按条件查询多条数据*** ####

- URL：/api/admin/search_engines
- 类型：Ajax请求
- 方法：GET
- 提交数据：status=DISABLE&name=模糊查询的关键字
- 返回结果：
	[
		{
			 "id":1,
			 "name":"百度",
			 "status":"ENABLE"
		}
		...
	]

#### ***按ID查询一条数据*** ####

- URL：/api/admin/search_engines/{id}
- 类型：Ajax请求
- 方法：GET
- 提交数据：
- 返回结果：
	{
		 "id":1,
		 "name":"百度",
		 "status":"ENABLE"
	}
           


#### ***插入数据（单条）*** ####

- URL：/api/admin/search_engines
- 类型：Ajax请求
- 方法：POST
- 提交数据：
	{
		"name":"百度",
	}   
- 返回结果：在result中，返回原提交的数据（如插入成功则会返回ID）


#### ***修改单条数据（修改只修改提交的字段）*** ####

- URL：/api/admin/search_engines/{id}
- 类型：Ajax请求
- 方法：PATCH
- 提交数据：
	{
		"name":"百度",
		"status":"ENABLE"
	}
- 返回结果：在result中返回提交的数据
</code>
</pre>

### 2. 搜索引擎规则 ###
<pre>
  <code>
#### ***按条件查询多条数据*** ####

- URL：/api/admin/search_engine_rules
- 类型：Ajax请求
- 方法：GET
- 提交数据：searchEngineName=模糊查询参数&status=ENABLE
- 返回结果：
	[
		{
			 "id":1,
			 "searchEngineId":1,
			 "searchEngineName":"",
			 "searchEngineStatus":"ENABLE(DISABLE)",
			 "domain":"www.sina.com.cn",
			 "type":"",//ACCURATE(精确), PREFIX(前缀), SUFFIX,(后缀) CONTAIN（包含）
			 "status":"ENABLE(DISABLE)",
			 "params":"s,word",
			 "path":"search"
		}
		...
	]

#### ***按ID查询一条数据*** ####

- URL：/api/admin/search_engine_rules/{id}
- 类型：Ajax请求
- 方法：GET
- 提交数据：
- 返回结果：
	{
		 "id":1,
		 "searchEngineId":1,
		 "searchEngineName":"",
		 "searchEngineStatus":"ENABLE(DISABLE)",
		 "domain":"www.sina.com.cn",
		 "type":"",//ACCURATE(精确), PREFIX(前缀), SUFFIX,(后缀) CONTAIN（包含）
		 "status":"ENABLE(DISABLE)",
		 "params":"s,word",
		 "path":"search"
	}
           


#### ***插入数据（单条）*** ####

- URL：/api/admin/search_engine_rules
- 类型：Ajax请求
- 方法：POST
- 提交数据：
	{
		 "searchEngineId":1,
		 "domain":"www.sina.com.cn",
		 "type":"",//ACCURATE(精确), PREFIX(前缀), SUFFIX,(后缀) CONTAIN（包含）
		 "params":"s,word",
		 "path":"search" //可为空
	}    
- 返回结果：在result中，返回原提交的数据（如插入成功则会返回ID）


#### ***修改单条数据（修改全部字段）*** ####

- URL：/api/admin/search_engine_rules/{id}
- 类型：Ajax请求
- 方法：PUT
- 提交数据：
	{
		 "searchEngineId":1,
		 "domain":"www.sina.com.cn",
		 "type":"",//ACCURATE(精确), PREFIX(前缀), SUFFIX,(后缀) CONTAIN（包含）
		 "params":"s,word",
		 "path":"search" //可为空
	}
- 返回结果：在result中返回提交的数据

</code>
</pre>