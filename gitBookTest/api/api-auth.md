## HyperAnalytics权限系统数据接口 ##
### 目录 ###
<hr/>
0..................................................................................................................发送找回密码邮件
1..................................................................................................................
修改密码
2..................................................................................................................获取所有项目成员
3..................................................................................................................添加新的项目成员
4..................................................................................................................变更项目成员角色
5..................................................................................................................变更项目拥有者
6..................................................................................................................退出项目

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


###0 发送找回密码邮件###
<pre>
<code>
- URL：/api/forgot/sendmail
- 类型：Ajax请求
- 方法：POST
- 提交数据：
	｛
		"receiverMail":"xx@yy.com",
	 ｝
- 返回结果：正确返回{"code":"20000"}，错误则返回错误消息（按照统一的格式）

</pre>
</code>


###1 修改密码###
<pre>
<code>
- URL：/api/forgot/reset/{sid}
- 类型：Ajax请求
- 方法：POST
- 提交数据：
	｛
		"password":"aaa",
		"passwordReply":"aaa"
	 ｝
- 返回结果：正确返回{"code":"20000"}，错误则返回错误消息（按照统一的格式）

</pre>
</code>


###2 获取所有项目成员###
<pre>
<code>
- URL：/api/auth/prouser
- 类型：Ajax请求
- 方法：GET
- 提交数据：projectId=1(该项目必须为用户所拥有的项目，否则无权限)
- 返回结果：
	[
		{
			"name":"Zodiac.Ma",
			"email":"xx@qq.com",
			"creater":{
				"name":""
			},
			"projectRole":{
				"roleName":"(PROJECT_OWNER,PROJECT_READER,PROJECT_WRITER)",//项目角色，需转为中文
				"joinTime",""//加入时间，时间截
			}
		}
		...
	]
</pre>
</code>


###3 添加新的项目成员###
<pre>
<code>
- URL：/api/auth/prouser
- 类型：Ajax请求
- 方法：POST
- 提交数据：
		{
			"projectId":1,
			"email":"xx@qq.com",
			"roleName":"(PROJECT_READER,PROJECT_WRITER)",//项目角色
		}

- 返回结果：
</pre>
</code>

###4 变更项目成员角色###
<pre>
<code>
- URL：/api/auth/prouser/{projectId}
- 类型：Ajax请求
- 方法：PUT
- 提交数据：
		{
			"userId":1,
			"roleName":"(PROJECT_READER,PROJECT_WRITER)",//项目角色
		}

- 返回结果：
</pre>
</code>

###5 变更项目拥有者###
<pre>
<code>
- URL：/api/auth/prouser/{projectId}/owner
- 类型：Ajax请求
- 方法：PUT
- 提交数据：
		{
			"userId":1,//新拥有者
			"roleName":"(PROJECT_READER,PROJECT_WRITER)",//原owner的新项目角色
		}

- 返回结果：
</pre>
</code>

###6 退出项目###
<pre>
<code>
- URL：/api/auth/prouser/{projectId}?userId={projectId}
- 类型：Ajax请求
- 方法：DELETE
- 提交数据：
- 返回结果：
</pre>

### 7. 用户个人信息 ###
<pre>
  <code>
- URL：/api/user/profile
- 类型：Ajax请求
- 方法：GET
- 提交数据：
- 返回结果：
		{
			"name":"Zodiac.Ma",
			"email":"xx@qq.com",
			"createTime":"",
			"lastLoginTime":""
		}
 </code>
</pre>
</code>