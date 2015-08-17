## HyperAnalytics热图数据接口 ##
### 目录 ###
<hr/>
0..................................................................................................................热图查询、修改、添加
1..................................................................................................................热图页面
2..................................................................................................................热图数据获取
3..................................................................................................................热图汇总数据获取

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


### 0. 热图查询、修改、添加###
<pre>
  <code>
#按ID获取单条信息#

- URL：/api/heatmap/{id}
- 类型：Ajax请求
- 方法：GET
- 提交数据：
- 返回结果：
	｛
		"name":"",
		"statisticsUrl":"",
		"crawlingUrl":"",
		"status":"ENABLE(DISABLE)",
		"matchingType":"ACCURATE(FUZZY)",
		"enableTime":"",
		"user":{
			"id":
			"name":""
		}
	｝


#按条件批量获取#

- URL：/api/heatmap
- 类型：Ajax请求
- 方法：GET
- 提交数据：channelId=1(&status=ENABLE&name=jd)
- 返回结果：
	[
		｛
			"name":"",
			"statisticsUrl":"",
			"crawlingUrl":"",
			"status":"ENABLE(DISABLE)",
			"matchingType":"",
			"enableTime":"",
			"user":{
				"id":
				"name":""
			}
		｝,
		...
	]


#添加#

- URL：/api/heatmap
- 类型：Ajax请求
- 方法：POST
- 提交数据：
	｛
		"name":"",
		"channelId":"",
		"statisticsUrl":"",
		"crawlingUrl":"",
		"status":"ENABLE(DISABLE)", //可不提交，默认为ENABLE
		"matchingType":"",
	｝
- 返回结果：在result中，返回原提交的数据（如插入成功则会返回ID）


#部分更新#

- URL：/api/heatmap/{id}
- 类型：Ajax请求
- 方法：PATCH
- 提交数据：
	｛
		"name":"",
		"status":"ENABLE(DISABLE)",
	｝
- 返回结果：在result中，返回原提交的数据


#全部更新#

- URL：/api/heatmap/{id}
- 类型：Ajax请求
- 方法：PUT
- 提交数据：
	｛
		"name":"",
		"status":"ENABLE(DISABLE)", //可不提交，默认为ENABLE
	｝
- 返回结果：在result中，返回原提交的数据

</code>
</pre>

### 1. 抓取页面版本号列表获取 ###
<pre>
  <code>
- URL：/api/crawlpage/version
- 类型：Ajax请求
- 方法：GET
- 提交数据：heatmapId=1
- 返回结果：
	[
		{
			"version":""
		}
	]

 </code>
</pre>


### 2. 抓取页面内容获取 ###
<pre>
  <code>
- URL：/api/crawlpage/contents.page
- 类型：Ajax请求
- 方法：GET
- 提交数据：heatmapId=1&version=2012-12-12 10:01:21
- 返回结果：
	抓取的网页

 </code>
</pre>



### 3. 热图数据获取 ###
<pre>
  <code>
- URL：/api/advanced/clickmap
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)&heatmapId=1
- 返回结果：
	[
		{
			"clickTimes":",
			"heatmapSeq":"84-12-1"
		}
		...
	]
 </code>
</pre>


### 4. 热图汇总数据获取 ###
<pre>
  <code>
- URL：/api/advanced/clickmap/total
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)&heatmapId=1
- 返回结果：
	{
		"pageViews":"",
		"uniqueVisitors":"",
		"visitViews":"",
		"avgVisitResidenceTime":"",
		"clickTimes":"",
		"clickUniqueVisitors":""
	}
 </code>
</pre>