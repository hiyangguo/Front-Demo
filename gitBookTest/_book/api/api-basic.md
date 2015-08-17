## HyperAnalytics服务端接口文档 ##
### 目录（暂略） ###
<hr/>

**所有API接口父路径：/api**

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


### 1. 登录接口 ###
<pre>
  <code>
- URL：/security_check
- 类型：表单提交
- 方法：POST
- 提交数据：Form Data ( j_username , j_password )
- 返回结果：
	<font color='green'>SUCCESS  redirect to '/home'</font>
       <font color='red'> FAILURE  redirect to '/login?login_error=true'</font>
 </code>
</pre>

### 2. 验证码图片 ###
<pre>
  <code>
- URL：/generate_image?t=时间戳
- 类型：图片请求
- 方法：GET
- 提交数据：无
- 返回结果：验证码图片
 </code>
</pre>

### 3. 验证码校验 ###
<pre>
  <code>
- URL：/img_validate.json?captcha_value={填写的验证码}
- 类型：Ajax请求
- 方法：GET
- 提交数据：无
- 返回结果：
	<font color='green'>SUCCESS {"result":{"code":"200"}}</font>
        <font color='red'>FAILURE {"result":{"code":"200","message":"0001"}} </font>
 注：调用此接口一次后，必须重新刷新验证码图片
 </code>
</pre>

### 4. 频道 ###
<pre>
  <code>
#### ***按条件查询多条数据*** ####

- URL：/channels
- 类型：Ajax请求
- 方法：GET
- 提交数据：orderColumn=id&orderType=desc&page=1&pagesize=10&fields=id,name&isFuzzy=true&name=关键字
- (orderColumn:排序字段,orderType:排序类型,page:本页页码,pagesize:每页数据条数,查询字段:条件,isFuzzy:是否模糊查询)
- 返回结果：
	[
		{
			 "id":1,
			 "name":"",
			 "createTime":"",
			 "creater":{"id":1,"name":""},
			 "path":"",
			 "status":"ENABLE(DISABLE)",
			 "parent":{"name":"" ... },
			 "project":{"name":""...}
		}
		...
	]

#### ***按ID查询一条数据*** ####

- URL：/channels/{id}
- 类型：Ajax请求
- 方法：GET
- 提交数据：
- 返回结果：
	{
		 "id":1,
		 "name":"",
		 "createTime":"",
		 "creater":{"id":1,"name":""},
		 "channelFilters":[
				{
					"domainUrl":"xxx"
				}
				...
		 ],
		 "status":"ENABLE(DISABLE)",
		 "parent":{"name":"" ... },
		 "project":{"name":""...}
	}
           


#### ***插入数据（单条）*** ####

- URL：/channels
- 类型：Ajax请求
- 方法：POST
- 提交数据：
	{
		"data": {
			 "id": ,
			 "name":"",
			 "createTime":"",
			  "channelFilters":[
				{
					"domainUrl":"xxx"
				}
			 ],
			 "status":"ENABLE(DISABLE)",
			 "parent":{"name":"" ... },
		}

	}    
- 返回结果：在result中，返回原提交的数据（如插入成功则会返回ID）


#### ***修改单条数据（修改全部的字段，包含NULL）*** ####

- URL：/channels/{id}
- 类型：Ajax请求
- 方法：PUT
- 提交数据：
	{
		"data": {
			 "id":1,
			 "name":"",
			 "createTime":"",
			 "channelFilters":[
				{
					"domainUrl":"xxx"
				}
			],
			 "status":"ENABLE(DISABLE)",
		}
	}
- 返回结果：在result中返回提交的数据


#### ***修改单条数据（修改部分的不为空字段）*** ####

- URL：/channels/{id}
- 类型：Ajax请求
- 方法：PATCH
- 提交数据：
	{
		"data": {
			 "id":1,
			 "name":"",
			 "createTime":"",
			  "channelFilters":[
				{
					"domainUrl":"xxx"
				}
			],
			 "status":"ENABLE(DISABLE)",
		}
	}
- 返回结果：在result中返回提交的数据


#### ***删除数据*** ####

- URL：/channels/{id}
- 类型：Ajax请求
- 方法：DELETE
- 提交数据：
- 返回结果： 原数据


#### ***首页概述报表查询*** ####
- URL：/projects/report
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)
- 返回结果：
	[
		{
			"id":1,
			"name":"",
			"createTime":"",
			"owner":{
				"id":1,
				"name":""
			},
			"oldOwner":{
				"id":1,
				"name":""
			},
			"path":"",
			"status":"ENABLE(DISABLE)",
			"pageViews":14,
			"uniqueVisitors":10,
			"visitViews":12
		}
		...
	] 



#### ***项目频道树结构*** ####
- URL：/channels/tree
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)
- 返回结果：
	所有项目树（该项目及其所有子频道组成的树结构）组成的一座森林
	[
		{
			"id":1,
			"name":"",
			"children":{
				...
			}
		}
		...
	] 
 </code>
</pre>

### 5. 项目 ###
<pre>
  <code>
#### ***按条件查询多条数据*** ####

- URL：/projects
- 类型：Ajax请求
- 方法：GET
- 提交数据：orderColumn=id&orderType=desc&page=1&pagesize=10&fields=id,name&isFuzzy=true&name=关键字
- (orderColumn:排序字段,orderType:排序类型,page:本页页码,pagesize:每页数据条数,查询字段:条件,isFuzzy:是否模糊查询)
- 返回结果：
	[
		{
			 "id":1,
			 "name":"",
			 "createTime":"",
			 "creater":{"id":1,"name":""},
			 "path":"",
			 "status":"ENABLE(DISABLE)",
			 "parent":{"name":"" ... },
			 "project":{"name":""...}
		}
		...
	]

#### ***按ID查询一条数据*** ####

- URL：/projects/{id}
- 类型：Ajax请求
- 方法：GET
- 提交数据：
- 返回结果：
	{
		 "id":1,
		 "name":"",
		 "createTime":"",
		 "creater":{"id":1,"name":""},
		 "channelFilters":[
				{
					"domainUrl":"xxx"
				}
				...
		 ],
		 "status":"ENABLE(DISABLE)",
		 "parent":{"name":"" ... },
		 "project":{"name":""...},
		 "members":{
			"userName":"zodiac.ma",
			"roleName":"PROJECT_OWNER（PROJECT_WRITER,PROJECT_READER）"
		 }
		 "projectRelationWithHFA":{
			"id":3,
			"hfaUser"{"id":4,"username":"aa","verify":0}
		 }
	}
           


#### ***插入数据（单条）*** ####

- URL：/projects
- 类型：Ajax请求
- 方法：POST
- 提交数据：
	{
		"data": {
			 "id": ,
			 "name":"",
			 "createTime":"",
			  "channelFilters":[
				{
					"domainUrl":"xxx"
				}
			],
			 "status":"ENABLE(DISABLE)",
			 "parent":{"name":"" ... },
		}

	}    
- 返回结果：在result中，返回原提交的数据（如插入成功则会返回ID）


#### ***修改单条数据（修改全部字段,如状态有变更，发送邮件给项目拥有者）*** ####

- URL：/projects/{id}
- 类型：Ajax请求
- 方法：PUT
- 提交数据：
	{
		"data": {
			 "id":1,
			 "name":"",
			 "createTime":"",
			  "channelFilters":[
				{
					"domainUrl":"xxx"
				}
			 ],
			 "status":"ENABLE(DISABLE)",
		}
	}
- 返回结果：在result中返回提交的数据
- 

#### ***修改单条数据（修改全部字段,如状态有变更，发送邮件给项目中所有成员）*** ####

- URL：/projects/{id}/sendmail
- 类型：Ajax请求
- 方法：PUT
- 提交数据：
	{
		"data": {
			 "id":1,
			 "name":"",
			 "createTime":"",
			  "channelFilters":[
				{
					"domainUrl":"xxx"
				}
			 ],
			 "status":"ENABLE(DISABLE)",
		}
	}
- 返回结果：在result中返回提交的数据


#### ***修改单条数据（修改部分不为空的字段,如状态有变更，发送邮件给项目拥有者）*** ####

- URL：/projects/{id}
- 类型：Ajax请求
- 方法：PATCH
- 提交数据：
	{
		"data": {
			 "id":1,
			 "name":"",
			 "createTime":"",
			 "channelFilters":[
				{
					"domainUrl":"xxx"
				}
			 ],
			 "status":"ENABLE(DISABLE)",
		}
	}
- 返回结果：在result中返回提交的数据

#### ***修改单条数据（修改部分不为空的字段,如状态有变更，发送邮件给项目内所有成员）*** ####

- URL：/projects/{id}/sendmail
- 类型：Ajax请求
- 方法：PATCH
- 提交数据：
	{
		"data": {
			 "id":1,
			 "name":"",
			 "createTime":"",
			 "channelFilters":[
				{
					"domainUrl":"xxx"
				}
			 ],
			 "status":"ENABLE(DISABLE)",
		}
	}
- 返回结果：在result中返回提交的数据


#### ***删除项目（仅发送邮件给项目拥有者）*** ####

- URL：/projects/{id}
- 类型：Ajax请求
- 方法：DELETE
- 提交数据：
- 返回结果： 提交数据
	注：调用该接口系统将对项目拥有者发送项目删除邮件。



#### ***删除项目（发送邮件给项目中所有成员）*** ####

- URL：/projects/{id}/sendmail
- 类型：Ajax请求
- 方法：DELETE
- 提交数据：
- 返回结果： 提交数据
	注：调用该接口系统将对项目中所有成员发送项目删除邮件。
</code>
</pre>

### 6. 网站趋势 ###
<pre>
  <code>
- URL：/overview/trends
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)&channelId=1
- 返回结果：
	[
		{
			"pageViews":"",
			"uniqueVisitors":"",
			"visitViews":"",
			"avPageResidenceTime":"",
			"avgVisitResidenceTime":"",
			"avgVisitFreq":"",
			"bounceRate":"",
			"independentIp":"",
			"timeRange":"2011-11-11 01:01:01 ~ xxx"
		}
		...
	]
 </code>
</pre>


### 7. 所有来源 ###
<pre>
  <code>
- URL：/source/all
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)&channelId=1
- 返回结果：
	[
		{
			"pageViews":"",
			"uniqueVisitors":"",
			"visitViews":"",
			"avPageResidenceTime":"",
			"avgVisitResidenceTime":"",
			"avgVisitFreq":"",
			"sourceType":"",
			"date":""
		}
		...
	]
 </code>
</pre>

### 8. 搜索引擎 ###
<pre>
  <code>
- URL：/source/search_engines
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)&channelId=1
- 返回结果：
	[
		{
			"pageViews":"",
			"uniqueVisitors":"",
			"visitViews":"",
			"avPageResidenceTime":"",
			"searchEngine":"Google"
		}
		...
	]
 </code>
</pre>

### 9.关键词 ###
<pre>
  <code>
- URL：/source/keywords
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)&channelId=1
- 返回结果：
	[
		{
			"pageViews":"",
			"uniqueVisitors":"",
			"visitViews":"",
			"avPageResidenceTime":"",
			"keywords":"Google"
		}
		...
	]


- URL：/source/keywords_search_engines
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)&channelId=1&searchEngines=Google&searchEngines=Yahoo&.....(百度，360搜索，搜狗，微软必应，网易有道，Google,Yahoo)
- 返回结果：
	[
		{
			"pageViews":"",
			"uniqueVisitors":"",
			"visitViews":"",
			"avPageResidenceTime":"",
			"keywords":"oh",
			"searchEngine":"Google"
		}
		...
	]


 </code>
</pre>



### 10.搜索引擎列表 ###
<pre>
  <code>
- URL：/common/search_engine_types
- 类型：Ajax请求
- 方法：GET
- 提交数据：
- 返回结果：
	｛
		1:"百度",
		2:"Google",
		3:"360搜索",
		...	
	｝
 </code>
</pre>


### 11.关键字 ###
<pre>
  <code>
- URL：/source/keyword
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)&channelId=1
- 返回结果：
	[
		{
			"pageViews":"",
			"uniqueVisitors":"",
			"visitViews":"",
			"keyword":""
		}
		...
	]
 </code>
</pre>

### 12.外部链接（Domain） ###
<pre>
  <code>
- URL：/source/external_links_domain
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)&channelId=1&sourceExternalTypeId=1(外部链接类型)
- 返回结果：
	[
		{
			"pageViews":"",
			"uniqueVisitors":"",
			"visitViews":"",
			"source_domain":""，
			"sourceExternalId":1,  
			"sourceExternalName":"QQ空间" //提交sourceExternalTypeId查询条件时，会返回该字段
		}
		...
	]
 </code>
</pre>


### 13.外部链接（Url） ###
<pre>
  <code>
- URL：/source/external_links_url
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)&channelId=1&sourceExternalTypeId=1(外部链接类型)
- 返回结果：
	[
		{
			"pageViews":"",
			"uniqueVisitors":"",
			"visitViews":"",
			"source_url":""，
			"sourceExternalId":1,  
			"sourceExternalName":"QQ空间" //提交sourceExternalTypeId查询条件时，会返回该字段
		}
		...
	]
 </code>
</pre>

### 13-2.外部链接（按来源类型-系统中用于饼图） ###
<pre>
  <code>
- URL：/source/external_links_type
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)&channelId=1
- 返回结果：
	[
		{
			"pageViews":"",
			"uniqueVisitors":"",
			"visitViews":""
		}
		...
	]
 </code>
</pre>

### 13-3.外部链接（按来源名称-系统中用于饼图） ###
<pre>
  <code>
- URL：/source/external_links_name
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)&channelId=1&sourceExternalTypeId=1(外部链接类型)
- 返回结果：
	[
		{
			"pageViews":"",
			"uniqueVisitors":"",
			"visitViews":""
		}
		...
	]
 </code>
</pre>

### 14.趋势图表接口 ###
<pre>
  <code>
- URL：/overview/trends/time
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)&channelId=1
- 返回结果：
{
    column: ['2014-07-05', '2014-07-06', '2014-07-07'],
    data: [{
            name: "页面访问量",
            value: [120, 132, 101]
        }, {
            name: "独立用户数",
            value: [220, 182, 191],
        }
    ]
}
 </code>
</pre>

### 15.所有来源图表接口 ###
<pre>
  <code>
- URL：/source/all/time
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)&channelId=1&targetType=(PV,UV,VV)
- 返回结果：
{
    column: ['2014-07-05', '2014-07-06', '2014-07-07'],
    data: [{
            name: "搜索引擎",
            value: [120, 132, 101]
        }, {
            name: "外部链接",
            value: [220, 182, 191],
        }, {
            name: "直接访问",
            value: [220, 182, 191],
        }, {
            name: "站内链接",
            value: [220, 182, 191],
        }
    ]
}
 </code>
</pre>

### 16.搜索引擎饼图接口(<font color="red">废除</font>) ###
<pre>
  <code>
- URL：/source/search_engines
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)&channelId=1&targetType=(PV,UV,VV)
- 返回结果：
{
    data: [{
        value: 735,
        name: '百度'
    }, {
        value: 310,
        name: '谷歌'
    }, {
        value: 234,
        name: '360搜索'
    }, {
        value: 135,
        name: '搜狗'
    }, {
        value: 548,
        name: '必应'
    }, {
        value: 148,
        name: '雅虎'
    }, {
        value: 114,
        name: '网易有道'
    }]
}
 </code>
</pre>

### 17.访问页面 ###
<pre>
  <code>
- URL：/page/visit
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)&channelId=1
- 返回结果：
	[
		{
			"pageUrl":"",
			"pageViews":"",
			"uniqueVisitors":"",
			"avgPageResidenceTime":"",
		}
		...
	]
 </code>
</pre>

### 18.入口页面 ###
<pre>
  <code>
- URL：/page/portal
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)&channelId=1
- 返回结果：
	[
		{
			"pageUrl":"",
			"entryTimes":"",
			"uniqueVisitors":"",
			"avgPageResidenceTime":"",
			"bounceRate":""
		}
		...
	]
 </code>
</pre>

### 19.离开页面 ###
<pre>
  <code>
- URL：/page/out
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)&channelId=1
- 返回结果：
	[
		{
			"pageUrl":"",
			"leaveTimes":"",
			"uniqueVisitors":"",
		}
		...
	]
 </code>
</pre>

### 20.路径分析 ###
<pre>
  <code>
- URL：/page/path
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)&channelId=1
- 返回结果：
	[
		{
			"pageUrls":"",
			"visitPathTimes":"",
			"uniqueVisitors":"",
			"avgVisitTime":""
		}
		...
	]
 </code>
</pre>


### 21.地域分布（Province） ###
<pre>
  <code>
- URL：/visitor/location_province
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)&channelId=1
- 返回结果：
	[
		{
			"province":"",
			"uniqueVisitors":"",
			"pageViews":"",
			"visitViews":"",
		}
		...
	]
 </code>
</pre>

### 22.地域分布（City） ###
<pre>
  <code>
- URL：/visitor/location_city
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)&channelId=1
- 返回结果：
	[
		{
			"province":"",
			"city":"",
			"uniqueVisitors":"",
			"pageViews":"",
			"visitViews":"",
		}
		...
	]
 </code>
</pre>

### 23.设备分析 ###
<pre>
  <code>
- URL：/visitor/devices
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)&channelId=1
- 返回结果：
	[
		{
			"systemEnv":"",
			"client":"",
			"uniqueVisitors":"",
			"pageViews":"",
			"visitViews":"",
		}
		...
	]
 </code>
</pre>

### 24.忠诚度分析 ###
<pre>
  <code>
- URL：/visitor/loyalty
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)&channelId=1
- 返回结果：
	[
		{
			"timeRange":"",
			"newUniqueVisitors":"",
			"reviewUniqueVisitors":"",
			"lossUniqueVisitors":""
		}
		...
	]
 </code>
</pre>

### 25.访问深度 ###
<pre>
  <code>
- URL：/visitor/depth
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)&channelId=1
- 返回结果：
	[
		{
			"pageViewNumber":"",
			"uniqueVisitors":"",
			"uniqueVisitorsProportion":"",
		}
		...
	]
 </code>
</pre>

### 26.访问频度 ###
<pre>
  <code>
- URL：/visitor/frequency
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)&channelId=1
- 返回结果：
	[
		{
			"uniqueVisitFrequence":"",
			"uniqueVisitors":"",
			"uniqueVisitorsProportion":"",
		}
		...
	]
 </code>
</pre>

<br/>


## <font color='red'>以下为汇总数据接口</font> ##


### 27. 网站趋势汇总 ###
<pre>
  <code>
- URL：/overview/trends/total
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)&channelId=1
- 返回结果：
		{
			"pageViews":"",
			"uniqueVisitors":"",
			"visitViews":"",
			"avPageResidenceTime":"",
			"avgVisitResidenceTime":"",
			"avgVisitFreq":"",	
			"bounceRate":"",
			"independentIp":"",
		}
 </code>
</pre>


### 28. 所有来源汇总 ###
<pre>
  <code>
- URL：/source/all/total
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)&channelId=1
- 返回结果：
		{
			"pageViews":"",
			"uniqueVisitors":"",
			"visitViews":"",
			"avPageResidenceTime":"",
			"avgVisitResidenceTime":"",
			"avgVisitFreq":"",
		}
 </code>
</pre>

### 29. 搜索引擎汇总 ###
<pre>
  <code>
- URL：/source/search_engines/total
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)&channelId=1
- 返回结果：
		{
			"pageViews":"",
			"uniqueVisitors":"",
			"visitViews":"",
			"avgPageResidenceTime":"",
		}
 </code>
</pre>

### 30.关键词汇总 ###
<pre>
  <code>
- URL：/source/keywords/total
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)&channelId=1
- 返回结果：
		{
			"pageViews":"",
			"uniqueVisitors":"",
			"visitViews":"",
			"avPageResidenceTime":"",
		}


- URL：/source/keywords_search_engines/total
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)&channelId=1&searchEngines=Google&searchEngines=Yahoo&.....(百度，360搜索，搜狗，微软必应，网易有道，Google,Yahoo)
- 返回结果：
		{
			"pageViews":"",
			"uniqueVisitors":"",
			"visitViews":"",
			"avPageResidenceTime":"",
		}
 </code>
</pre>


### 31.关键字汇总 ###
<pre>
  <code>
- URL：/source/keyword/total
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)&channelId=1
- 返回结果：
		{
			"pageViews":"",
			"uniqueVisitors":"",
			"visitViews":"",
		}
 </code>
</pre>

### 32.外部链接汇总 ###
<pre>
  <code>
- URL：/source/external_links/total
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)&channelId=1&sourceExternalTypeId=1(外部链接类型)
- 返回结果：
		{
			"pageViews":"",
			"uniqueVisitors":"",
			"visitViews":"",
		}
 </code>
</pre>

### 33.访问页面汇总 ###
<pre>
  <code>
- URL：/page/visit/total
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)&channelId=1
- 返回结果：
		{
			"pageViews":"",
			"uniqueVisitors":"",
			"avgPageResidenceTime":"",
		}
 </code>
</pre>

### 34.入口页面汇总 ###
<pre>
  <code>
- URL：/page/portal/total
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)&channelId=1
- 返回结果：
		{
			"entryTimes":"",
			"uniqueVisitors":"",
			"avgPageResidenceTime":"",
			"bounceRate":""
		}
 </code>
</pre>

### 35.离开页面汇总 ###
<pre>
  <code>
- URL：/page/out
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)&channelId=1
- 返回结果：
		{
			"leaveTimes":"",
			"uniqueVisitors":"",
		}
 </code>
</pre>

### 36.路径分析汇总 ###
<pre>
  <code>
- URL：/page/path/total
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)&channelId=1
- 返回结果：
		{
			"visitPathTimes":"",
			"uniqueVisitors":"",
			"avgVisitTime":""
		}
 </code>
</pre>


### 37.地域分布汇总 ###
<pre>
  <code>
- URL：/visitor/location/total
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)&channelId=1
- 返回结果：
		{
			"uniqueVisitors":"",
			"pageViews":"",
			"visitViews":"",
		}
 </code>
</pre>

### 38.设备分析汇总 ###
<pre>
  <code>
- URL：/visitor/devices/total
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)&channelId=1
- 返回结果：
		{
			"uniqueVisitors":"",
			"pageViews":"",
			"visitViews":"",
		}
 </code>
</pre>

### 39.忠诚度分析汇总 ###
<pre>
  <code>
- URL：/visitor/loyalty/total
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)&channelId=1
- 返回结果：
		{
			"newUniqueVisitors":"",
			"reviewUniqueVisitors":"",
			"lossUniqueVisitors":""
		}
 </code>
</pre>

### 40.访问深度汇总 ###
<pre>
  <code>
- URL：/visitor/depth/total
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)&channelId=1
- 返回结果：
		{
			"uniqueVisitors":"",
			"uniqueVisitorsProportion":"",
		}
 </code>
</pre>

### 41.访问频度汇总 ###
<pre>
  <code>
- URL：/visitor/frequency/total
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)&channelId=1
- 返回结果：
		{
			"uniqueVisitors":"",
			"uniqueVisitorsProportion":"",
		}
 </code>
</pre>