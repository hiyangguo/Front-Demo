## HyperAnalytics外部来源接口文档 ##
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


### １. 外部来源类型 ###
<pre>
  <code>
#### ***按条件查询多条数据*** ####

- URL：/api/admin/source/external/type
- 类型：Ajax请求
- 方法：GET
- 提交数据：status=DISABLE&name=模糊查询的关键字
- 返回结果：
	[
		{
			 "id":1,
			 "name":"社交",
			 "status":"ENABLE"
		}
		...
	]

#### ***按条件查询多条数据（非管理员,无查询条件，只返回启用）*** ####

- URL：/api/common/source/external/type
- 类型：Ajax请求
- 方法：GET
- 提交数据：
- 返回结果：
	[
		{
			 "id":1,
			 "name":"社交",
			 "status":"ENABLE"
		}
		...
	]

#### ***按ID查询一条数据*** ####

- URL：/api/admin/source/external/type/{id}
- 类型：Ajax请求
- 方法：GET
- 提交数据：
- 返回结果：
	{
		 "id":1,
		 "name":"社交",
		 "status":"ENABLE"
	}
           


#### ***插入数据（单条）*** ####

- URL：/api/admin/source/external/type
- 类型：Ajax请求
- 方法：POST
- 提交数据：
	{
		"name":"社交",
	}   
- 返回结果：在result中，返回原提交的数据（如插入成功则会返回ID）


#### ***修改单条数据（修改只修改提交的字段）*** ####

- URL：/api/admin/source/external/type/{id}
- 类型：Ajax请求
- 方法：PATCH
- 提交数据：
	{
		"name":"社交",
		"status":"ENABLE"
	}
- 返回结果：在result中返回提交的数据
</code>
</pre>

### 2. 外部来源名称 ###
<pre>
  <code>
#### ***按条件查询多条数据*** ####

- URL：/api/admin/source/external/name
- 类型：Ajax请求
- 方法：GET
- 提交数据：status=DISABLE&name=模糊查询的关键字
- 返回结果：
	[
		{
			 "id":1,
			 "name":"QQ",
			 "status":"ENABLE"
			 "sourceExternalType":{
			 	"id":1,
				"name":"社交",
				"status":"ENABLE"
			 }
		}
		...
	]

#### ***按ID查询一条数据*** ####

- URL：/api/admin/source/external/name/{id}
- 类型：Ajax请求
- 方法：GET
- 提交数据：
- 返回结果：
	{
		 "id":1,
		 "name":"QQ",
		 "status":"ENABLE"
		 "sourceExternalType":{
		 	"id":1,
			"name":"社交",
			"status":"ENABLE"
		 }
	}
           


#### ***插入数据（单条）*** ####

- URL：/api/admin/source/external/name
- 类型：Ajax请求
- 方法：POST
- 提交数据：
	{
		"name":"QQ",
		"sourceExternalType":{
		 	"id":1
		}
	}   
- 返回结果：在result中，返回原提交的数据（如插入成功则会返回ID）


#### ***修改单条数据（修改只修改提交的字段）*** ####

- URL：/api/admin/source/external/name/{id}
- 类型：Ajax请求
- 方法：PATCH
- 提交数据：
	{
		"name":"QQ",
		"status":"ENABLE"
		"sourceExternalType":{
		 	"id":1
		}
	}
- 返回结果：在result中返回提交的数据
</code>
</pre>

### 3. 外部来源规则 ###
<pre>
  <code>
#### ***按条件查询多条数据*** ####

- URL：/api/admin/source/external/rules
- 类型：Ajax请求
- 方法：GET
- 提交数据：name=模糊查询参数&status=ENABLE
- 返回结果：
	[
		{
			 "id":1,
			 "sourceExternalName":{
				 "id":1,
				 "name":"QQ",
				 "status":"ENABLE"
				 "sourceExternalType":{
				 	"id":1,
					"name":"社交",
					"status":"ENABLE"
				 }
			 }
			 "domain":"www.sina.com.cn",
			 "type":"",//ACCURATE(精确), PREFIX(前缀), SUFFIX,(后缀) CONTAIN（包含）
			 "status":"ENABLE(DISABLE)",
			 "excludeRules":"*mm.xx.com" //(可能为Null)
		}
		...
	]

#### ***按ID查询一条数据*** ####

- URL：/api/admin/source/external/rules/{id}
- 类型：Ajax请求
- 方法：GET
- 提交数据：
- 返回结果：
	{
		 {
			 "id":1,
			 "sourceExternalName":{
				 "id":1,
				 "name":"QQ",
				 "status":"ENABLE"
				 "sourceExternalType":{
				 	"id":1,
					"name":"社交",
					"status":"ENABLE"
				 }
			 }
			 "domain":"www.sina.com.cn",
			 "type":"",//ACCURATE(精确), PREFIX(前缀), SUFFIX,(后缀) CONTAIN（包含）
			 "status":"ENABLE(DISABLE)",
			 "excludeRules":"*mm.xx.com" //(可能为Null)
		}
	}
           


#### ***插入数据（单条）*** ####

- URL：/api/admin/source/external/rules
- 类型：Ajax请求
- 方法：POST
- 提交数据：
	{
			 "sourceExternalName":{
				 "id":1
			 }
			 "domain":"www.sina.com.cn",
			 "type":"",//ACCURATE(精确), PREFIX(前缀), SUFFIX,(后缀) CONTAIN（包含）
			 "excludeRules":"*mm.xx.com" //(可能为Null)
	}   
- 返回结果：在result中，返回原提交的数据（如插入成功则返回ID）



#### ***修改单条数据（部分更新）*** ####

- URL：/api/admin/source/external/rules/{id}
- 类型：Ajax请求
- 方法：PATCH
- 提交数据：
	{
		 "status":"ENABLE"
	}
- 返回结果：在result中返回提交的数据



#### ***修改单条数据（修改全部字段）*** ####

- URL：/api/admin/source/external/rules/{id}
- 类型：Ajax请求
- 方法：PUT
- 提交数据：
	{
		 "sourceExternalName":{
			 "id":1
		 }
		 "status":"ENABLE"
		 "domain":"www.sina.com.cn",
		 "type":"",//ACCURATE(精确), PREFIX(前缀), SUFFIX,(后缀) CONTAIN（包含）
		 "excludeRules":"*mm.xx.com" //(可能为Null)
	}
- 返回结果：在result中返回提交的数据

</code>
</pre>