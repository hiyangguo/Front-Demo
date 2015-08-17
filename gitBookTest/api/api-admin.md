## HyperAnalytics管理员数据接口 ##
### 目录 ###
<hr/>
0..................................................................................................................恢复项目
1..................................................................................................................管理员首页列表
2..................................................................................................................用户列表
3..................................................................................................................添加用户
4..................................................................................................................编辑用户
5..................................................................................................................停用账户
6..................................................................................................................启用账户
7..................................................................................................................密码重置
8..................................................................................................................用户所属项目列表
9..................................................................................................................邮件报告(针对所有项目频道)
10..................................................................................................................邮件报告(针对单个项目频道)

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


###0 恢复项目###
<pre>
<code>

#### ***恢复项目（仅发送邮件给项目拥有者）*** ####

- URL：/api/admin/projects/recovery/{projectId}
- 类型：Ajax请求
- 方法：PUT
- 提交数据：
- 返回结果： 提交数据
	注：调用该接口系统将对项目拥有者发送项目恢复邮件。



#### ***恢复项目（发送邮件给项目中所有成员）*** ####

- URL：/api/admin/projects/recovery/{projectId}/sendmail
- 类型：Ajax请求
- 方法：PUT
- 提交数据：
- 返回结果： 提交数据
	注：调用该接口系统将对项目中所有成员发送项目恢复邮件。
</pre>
</code>


###1 管理员首页列表###
<pre>
<code>
- URL：/api/admin/projects/report
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)
- 返回结果：
	[
		{
			"id":1,
			"name":"",
			"owner":"",
			"oldOwner":"",
			"createTime":"",
			"creater":{"id":1,"name":""},
			"status":"ENABLE(DISABLE)",
			"state":"DELETED(INUSE)",
			"pageViews":"",
			"uniqueVisitors":"",
			"visitViews":""
		}
		...
	] 
</pre>
</code>


###2 用户列表###
<pre>
<code>
- URL：/api/admin/users
- 类型：Ajax请求
- 方法：GET
- 提交数据：
- 返回结果：
	[
		{
			"id":1,
			"name":""
			"status":"ENABLE,DISABLE",
			"email":"xx@qq.com",
			"creater":{
				"name"
			},
			"systemRole":{
				"name":"ROLE_ADMIN(ROLE_USER)"
			},
			"modules":[
				{"id":1,"name":"SITE(VIDEO)"}
			],
			createTime:"",
			lastLoginTime:""
		}
		...
	] 
</pre>
</code>


###3 添加用户###
<pre>
<code>
- URL：/api/admin/users
- 类型：Ajax请求
- 方法：POST
- 提交数据：
		{
			"name":"",
			"email":"xx@qq.com",
			"systemRole":{
				"name":"ROLE_ADMIN(ROLE_USER)"
			},
			"modules":[
				{"id":1}
			]
		}
- 返回结果：提交的数据
</pre>
</code>

###4 编辑用户###
<pre>
<code>
- URL：/api/admin/users
- 类型：Ajax请求
- 方法：POST
- 提交数据：
		{
			"name":"",
			"email":"xx@qq.com",
			"systemRole":{
				"name":"ROLE_ADMIN(ROLE_USER)"
			},
			"modules":[
				{"id":1}
			]
		}
- 返回结果：提交的数据
</pre>
</code>


###5 停用账户###
<pre>
<code>
- URL：/api/admin/users/{id}/enable
- 类型：Ajax请求
- 方法：PUT
- 提交数据：
- 返回结果：提交的数据

- URL：/api/admin/users/{id}/enable/sendmail
- 类型：Ajax请求
- 方法：PUT
- 提交数据：
- 返回结果：提交的数据
</pre>
</code>


###6 启用账户###
<pre>
<code>
- URL：/api/admin/users/{id}/disable
- 类型：Ajax请求
- 方法：PUT
- 提交数据：
- 返回结果：提交的数据

- URL：/api/admin/users/{id}/disable/sendmail
- 类型：Ajax请求
- 方法：PUT
- 提交数据：
- 返回结果：提交的数据
</pre>
</code>


###7 密码重置###
<pre>
<code>
- URL：/api/users/{id}/passreset
- 类型：Ajax请求
- 方法：PUT
- 提交数据：
- 返回结果：提交的数据
</pre>
</code>


###8 用户所属项目列表###
<pre>
<code>
- URL：/api/admin/projects/{userId}
- 类型：Ajax请求
- 方法：GET
- 提交数据：
- 返回结果：
	[
		{
			"id":1,
			"name":"",
			"owner":{
				"name":"Zodiac.Ma"
			},
			"projectRole":{
				"roleName":"PROJECT_OWNER(PROJECT_WRITER,PROJECT_READER)"
			},
			"createTime":"",
			"creater":{
				"name":""
			},
			"status":"ENABLE(DISABLE)",
			"state":"DELETED(INUSE)",
			"memberCount":3
		}
		...
	] 
</pre>
</code>


###9 发送邮件报告(针对所有项目频道)###
<pre>
<code>
- URL：/api/admin/report/email/channels/execute
- 类型：Ajax请求
- 方法：GET
- 提交数据：reportDate(报表日期:yyyy-MM-dd HH:mm:ss),dateType(报表类型:DAY,WEEK,MONTH)
- 返回结果：标准格式
</pre>
</code>

###10 发送邮件报告(针对单个项目频道)###
<pre>
<code>
- URL：/api/admin/report/email/channels/{id}/execute
- 类型：Ajax请求
- 方法：GET
- 提交数据：reportDate(报表日期:yyyy-MM-dd HH:mm:ss),dateType(报表类型:DAY,WEEK,MONTH)
- 返回结果：标准格式
</pre>
</code>



