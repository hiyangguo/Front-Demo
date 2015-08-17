## HyperAnalytics仪表盘数据接口 ##
### 目录 ###
<hr/>
0..................................................................................................................自定义显示模块
1..................................................................................................................访问趋势
2..................................................................................................................地域分布
3..................................................................................................................关键词
4..................................................................................................................来源分布
5..................................................................................................................访问页面
6..................................................................................................................入口页面
7..................................................................................................................离开页面
8..................................................................................................................搜索引擎
9..................................................................................................................访问深度


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



### 0. 自定义显示模块 ###
<pre>
  <code>

<b>获取配置信息</b>
- URL：/api/dashboard/config
- 类型：Ajax请求
- 方法：GET
- 提交数据：channelId=1
- 返回结果：
	｛
		"channelId":"",
		"userId":"",
		"config":""
	｝

<b>添加或修改配置信息</b>
- URL：/api/dashboard/config
- 类型：Ajax请求
- 方法：POST
- 提交数据：
	 {
		"data":｛
			"channelId":"",
			"config":""
		}
	} 
- 返回结果：在result中，返回原提交的数据（如插入成功则会返回ID）
	
 </code>
</pre>


### 1. 访问趋势 ###
<pre>
  <code>
- URL：/api/overview/trends
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
			"independentIp":"",
			"timeRange":"2011-11-11 01:01:01 ~ xxx"
		}
		...
	]
 </code>
</pre>


### 2.地域分布 ###
<pre>
  <code>
- URL：/api/visitor/location_province
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

### 3.关键词 ###
<pre>
  <code>
- URL：/api/source/keywords
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)&channelId=1&pagesize=10&orderColumn=?&orderType=desc
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
 </code>
</pre>


### 4. 来源分布 ###
<pre>
  <code>
- URL：/api/source/all
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

### 5.访问页面 ###
<pre>
  <code>
- URL：/api/page/visit
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)&channelId=1&pagesize=10&orderColumn=?&orderType=desc
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

### 6.入口页面 ###
<pre>
  <code>
- URL：/api/page/portal
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)&channelId=1&pagesize=10&orderColumn=?&orderType=desc
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

### 7.离开页面 ###
<pre>
  <code>
- URL：/api/page/out
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)&channelId=1&pagesize=10&orderColumn=?&orderType=desc
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

### 8. 搜索引擎 ###
<pre>
  <code>
- URL：/api/source/search_engines
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)&channelId=1&pagesize=10&orderColumn=?&orderType=desc
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

### 9.访问深度 ###
<pre>
  <code>
- URL：/api/visitor/depth
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)&channelId=1&pagesize=10&orderColumn=?&orderType=desc
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