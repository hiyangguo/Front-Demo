# 视频 #
<br/>

## 一、数据库设计 ##
### 1.E-R图 ###
 <a href="./E-R图.vsdx">E-R图</a>
<br/>
## 二、API设计 ##
####1.首页报表####
<pre>
- URL：/api/video/projects/report
- 类型：Ajax请求
- 方法：GET
- 提交数据：orderColumn=id&orderType=desc&page=1&pagesize=10&fields=id,name&isFuzzy=true&name=关键字
- 返回结果：
	[
		{
			 "id":1,
			 "status":"ENABLE(DISABLE)",
			 "name":"土豆",
			 "owner":{  //该字段仅管理员可见,
				"name":"admin"	
			 },
			 "oldOwner":{  //该字段仅管理员可见,
				"name":"zodia"	
			 },
			 "playTimes":22,
			 "uniqueVisitors":12,
			 "independentIp":11
		}
		...
	]
</pre>

####2.项目信息（批量获取）####
<pre>
 
- URL：/api/video/projects
- 类型：Ajax请求
- 方法：GET
- 提交数据：orderColumn=id&orderType=desc&page=1&pagesize=10&fields=id,name&isFuzzy=true
- 返回结果：
	[
		{
			 "id":1,
			 "status":"ENABLE(DISABLE)",
			 "name":"",
			 "statusChgTime":""
		}
		...
	]
</pre>

####3.项目信息（获取单条）####
<pre>
 
- URL：/api/video/projects/{id}
- 类型：Ajax请求
- 方法：GET
- 提交数据：
- 返回结果：
	{
	 	 "id":1,
	 	 "status":"ENABLE(DISABLE)",
		 "name":"",
		 "statusChgTime":"",
		 "owner":{  //该字段仅管理员可见,
			"name":"admin"	
		 },
		 "oldOwner":{  //该字段仅管理员可见,
			"name":"zodia"	
		 },
		 "videoFilter":{// 白名单
		 	"regular":""
		 },
		 "members":{
			"userId":3,
			"userName":"nielsen",
			"roleName":"PROJECT_OWNER(PROJECT_READER/PROJECT_WRITER)"
		 }
	}
</pre>
####4.项目信息（插入数据）####
<pre>
  
- URL：/api/video/projects
- 类型：Ajax请求
- 方法：POST
- 提交数据：
	{
		"data": {
			 "name":"爱奇葩"
		}

	}    
- 返回结果：在result中，返回原提交的数据（如插入成功则会返回ID）

</pre>
####5.项目信息（部分修改）####
<pre>
 
- URL：/api/video/projects/{id}
- 类型：Ajax请求
- 方法：PATCH
- 提交数据：
	{
		"data": {
			 "name":"优酷",
			 "status":"ENABLE(DISABLE)"
		}

	}
- 返回结果：在result中，返回原提交的数据（如插入成功则会返回ID）


</pre>

####6.趋势####
<pre>
- URL：/api/video/trends
- 类型：Ajax请求
- 方法：GET
- 提交数据：orderColumn=id&orderType=desc&page=1&pagesize=10&fields=id,name&isFuzzy=true&terminal_id=终端ID
- 返回结果：
	[
		{
			 "reportDate"://时间戳,
			 "playTimes":22,
			 "uniqueVisitors":12,
			 "independentIp":11,
			 "finishTimes":12,
			 "avgDailyPlayTimes":12, //人均单日播放次数
			 "avgDailyDuration"::12, //人均单日播放时间
			 "avgOnceDuration":12 //人均单次播放时间
		}
		...
	]
</pre>

####7.趋势（汇总）####
<pre>

- URL：/api/video/trends/total
- 类型：Ajax请求
- 方法：GET
- 提交数据：terminal_id=终端ID
- 返回结果：
	{
		 "playTimes":22,
		 "uniqueVisitors":12,
		 "independentIp":11,
		 "finishTimes":12,
		 "avgDailyPlayTimes":12, //人均单日播放次数
		 "avgDailyDuration"::12, //人均单日播放时间
		 "avgOnceDuration":12 //人均单次播放时间
	}

</pre>

####8.趋势（报表）####
<pre>

- URL：/api/video/trends.csv
- 类型：
- 方法：GET
- 提交数据：orderColumn=id&orderType=desc&isFuzzy=true&terminal_id=终端ID
- 返回结果：

</pre>


####9.按播放器细分####
<pre>

- URL：/api/video/trends/player
- 类型：Ajax请求
- 方法：GET
- 提交数据：orderColumn=id&orderType=desc&page=1&pagesize=10&fields=id,name&isFuzzy=true&time=yyyy-MM-dd
- 返回结果：
	[
		{
			 "terminal":"土豆",//播放器
			 "playTimes":22,
			 "uniqueVisitors":12,
			 "independentIp":11,
			 "finishTimes":12,
			 "avgDailyPlayTimes":12, //人均单日播放次数
			 "avgDailyDuration"::12, //人均单日播放时间
			 "avgOnceDuration":12 //人均单次播放时间
		}
		...
	]
</pre>

####10.地域 - 中国####
<pre>

- URL：/api/video/location/china
- 类型：Ajax请求
- 方法：GET
- 提交数据：orderColumn=id&orderType=desc&page=1&pagesize=10&fields=id,name&isFuzzy=true&terminal_id=终端ID&needTotal=true
- 返回结果：
	[
		{
			 "province":"江苏",
			 "city":"苏州",
 		 	 "playTimes":22,
			 "uniqueVisitors":12,
			 "independentIp":11,
			 "finishTimes":12,
			 "avgDailyPlayTimes":12, //人均单日播放次数
			 "avgDailyDuration"::12, //人均单日播放时间
			 "avgOnceDuration":12 //人均单次播放时间
		}
		...
	]
</pre>

####11.地域 - 中国 （汇总）####
<pre>

- URL：/api/video/location/china/total
- 类型：Ajax请求
- 方法：GET
- 提交数据：terminal_id=终端ID
- 返回结果：
	{
		 "playTimes":22,
		 "uniqueVisitors":12,
		 "independentIp":11,
		 "finishTimes":12,
		 "avgDailyPlayTimes":12, //人均单日播放次数
		 "avgDailyDuration"::12, //人均单日播放时间
		 "avgOnceDuration":12 //人均单次播放时间
	}
</pre>

####12.地域 - 中国（报表）####
<pre>

- URL：/api/video/location/china.csv
- 类型：
- 方法：GET
- 提交数据：orderColumn=id&orderType=desc&isFuzzy=true&terminal_id=终端ID
- 返回结果：

</pre>

####13 地域 - 省份（中国地图使用）####
<pre>

- URL：/api/video/location/province
- 类型：Ajax请求
- 方法：GET
- 提交数据：orderColumn=id&orderType=desc&page=1&pagesize=10&fields=id,name&isFuzzy=true&terminal_id=终端ID&needTotal=true
- 返回结果：
	[
		{
			 "province":"江苏",
		 	 "playTimes":22,
			 "uniqueVisitors":12,
			 "independentIp":11,
			 "finishTimes":12,
			 "avgDailyPlayTimes":12, //人均单日播放次数
			 "avgDailyDuration"::12, //人均单日播放时间
			 "avgOnceDuration":12 //人均单次播放时间
		}
		...
	]
</pre>


####14.地域 - 世界 ####
<pre>

- URL：/api/video/location/world
- 类型：Ajax请求
- 方法：GET
- 提交数据：orderColumn=id&orderType=desc&page=1&pagesize=10&fields=id,name&isFuzzy=true&terminal_id=终端ID&needTotal=true
- 返回结果：
	[
		{
			 "country":"中国",
			 "playTimes":22,
			 "uniqueVisitors":12,
			 "independentIp":11,
			 "finishTimes":12,
			 "avgDailyPlayTimes":12, //人均单日播放次数
			 "avgDailyDuration"::12, //人均单日播放时间
			 "avgOnceDuration":12 //人均单次播放时间
		}
		...
	]
</pre>

####15.地域 - 世界 （汇总）####
<pre>

- URL：/api/video/location/world/total
- 类型：Ajax请求
- 方法：GET
- 提交数据：terminal_id=终端ID
- 返回结果：
	{
		 "playTimes":22,
		 "uniqueVisitors":12,
		 "independentIp":11,
		 "finishTimes":12,
		 "avgDailyPlayTimes":12, //人均单日播放次数
		 "avgDailyDuration"::12, //人均单日播放时间
		 "avgOnceDuration":12 //人均单次播放时间
	}
</pre>

####16.地域 - 世界 （报表）####
<pre>

- URL：/api/video/location/world.csv
- 类型：
- 方法：GET
- 提交数据：orderColumn=id&orderType=desc&isFuzzy=true&terminal_id=终端ID
- 返回结果：

</pre>


####17.设备 - 操作系统####
<pre>

- URL：/api/video/equipment/os
- 类型：Ajax请求
- 方法：GET
- 提交数据：orderColumn=id&orderType=desc&page=1&pagesize=10&fields=id,name&isFuzzy=true&terminal_id=终端ID&needTotal=true
- 返回结果：
	[
		{
			 "systemEnv":"Windows7",
		 	 "playTimes":22,
			 "uniqueVisitors":12,
			 "independentIp":11,
			 "finishTimes":12,
			 "avgDailyPlayTimes":12, //人均单日播放次数
			 "avgDailyDuration"::12, //人均单日播放时间
			 "avgOnceDuration":12 //人均单次播放时间
		}
		...
	]
</pre>

####18.设备 - 操作系统 （汇总）####
<pre>

- URL：/api/video/equipment/os/total
- 类型：Ajax请求
- 方法：GET
- 提交数据：terminal_id=终端ID
- 返回结果：
	{
		 "playTimes":22,
		 "uniqueVisitors":12,
		 "independentIp":11,
		 "finishTimes":12,
		 "avgDailyPlayTimes":12, //人均单日播放次数
		 "avgDailyDuration"::12, //人均单日播放时间
		 "avgOnceDuration":12 //人均单次播放时间
	}
</pre>

####19.设备 - 操作系统  （报表）####
<pre>

- URL：/api/video/equipment/os.csv
- 类型：
- 方法：GET
- 提交数据：orderColumn=id&orderType=desc&isFuzzy=true&terminal_id=终端ID
- 返回结果：

</pre>


####20.设备 - 客户端####
<pre>

- URL：/api/video/equipment/client
- 类型：Ajax请求
- 方法：GET
- 提交数据：orderColumn=id&orderType=desc&page=1&pagesize=10&fields=id,name&isFuzzy=true&terminal_id=终端ID&needTotal=true
- 返回结果：
	[
		{
			 "client":"IE6.0",
		 	 "playTimes":22,
			 "uniqueVisitors":12,
			 "independentIp":11,
			 "finishTimes":12,
			 "avgDailyPlayTimes":12, //人均单日播放次数
			 "avgDailyDuration"::12, //人均单日播放时间
			 "avgOnceDuration":12 //人均单次播放时间
		}
		...
	]
</pre>

####21.设备- 客户端 （汇总）####
<pre>

- URL：/api/video/equipment/client/total
- 类型：Ajax请求
- 方法：GET
- 提交数据：terminal_id=终端ID
- 返回结果：
	{
		 "playTimes":22,
		 "uniqueVisitors":12,
		 "independentIp":11,
		 "finishTimes":12,
		 "avgDailyPlayTimes":12, //人均单日播放次数
		 "avgDailyDuration"::12, //人均单日播放时间
		 "avgOnceDuration":12 //人均单次播放时间
	}
</pre>

####22.设备 - 客户端 （报表）####
<pre>

- URL：/api/video/equipment/client.csv
- 类型：
- 方法：GET
- 提交数据：orderColumn=id&orderType=desc&isFuzzy=true&terminal_id=终端ID
- 返回结果：

</pre>

####23.日均播放次数####
<pre>

- URL：/api/video/frequence
- 类型：Ajax请求
- 方法：GET
- 提交数据：orderColumn=id&orderType=desc&page=1&pagesize=10&fields=id,name&isFuzzy=true&terminal_id=终端ID&needTotal=true
- 返回结果：
	[
		{
			 "frequence":"10~20",
			 "uniqueVisitors":12,
			 "uniqueVisitorsRate":0.12
		}
		...
	]
</pre>

####24.日均播放次数（汇总）####
<pre>

- URL：/api/video/frequence/total
- 类型：Ajax请求
- 方法：GET
- 提交数据：terminal_id=终端ID
- 返回结果：
	{
		 "uniqueVisitors":12,
		 "uniqueVisitorsRate":0.12
	}
</pre>

####25.日均播放次数（报表）####
<pre>

- URL：/api/video/frequence.csv
- 类型：
- 方法：GET
- 提交数据：orderColumn=id&orderType=desc&isFuzzy=true&terminal_id=终端ID
- 返回结果：

</pre>


####26.日均播放时间####
<pre>

- URL：/api/video/duration
- 类型：Ajax请求
- 方法：GET
- 提交数据：orderColumn=id&orderType=desc&page=1&pagesize=10&fields=id,name&isFuzzy=true&terminal_id=终端ID&needTotal=true
- 返回结果：
	[
		{
			 "duration":"00:15:01 - 00:30:00",
			 "uniqueVisitors":12,
			 "uniqueVisitorsRate":0.12
		}
		...
	]
</pre>

####27.日均播放时间（汇总）####
<pre>

- URL：/api/video/duration/total
- 类型：Ajax请求
- 方法：GET
- 提交数据：terminal_id=终端ID
- 返回结果：
	{
		 "uniqueVisitors":12,
		 "uniqueVisitorsRate":0.12
	}
</pre>

####28.日均播放时间（报表）####
<pre>

- URL：/api/video/duration.csv
- 类型：
- 方法：GET
- 提交数据：orderColumn=id&orderType=desc&isFuzzy=true&terminal_id=终端ID
- 返回结果：

</pre>


####29.视频排名 - 频道####
<pre>

- URL：/api/video/ranking/channel
- 类型：Ajax请求
- 方法：GET
- 提交数据：orderColumn=id&orderType=desc&page=1&pagesize=10&fields=id,name&isFuzzy=true&terminal_id=终端ID&needTotal=true
- 返回结果：
	[
		{
			 "channel":"电影",
		 	 "playTimes":22,
			 "uniqueVisitors":12,
			 "independentIp":11,
			 "finishTimes":12,
			 "avgDailyPlayTimes":12, //人均单日播放次数
			 "avgDailyDuration"::12, //人均单日播放时间
			 "avgOnceDuration":12 //人均单次播放时间
		}
		...
	]
</pre>

####30.视频排名 - 频道（汇总）####
<pre>

- URL：/api/video/ranking/channel/total
- 类型：Ajax请求
- 方法：GET
- 提交数据：terminal_id=终端ID
- 返回结果：
	{
		 "playTimes":22,
		 "uniqueVisitors":12,
		 "independentIp":11,
		 "finishTimes":12,
		 "avgDailyPlayTimes":12, //人均单日播放次数
		 "avgDailyDuration"::12, //人均单日播放时间
		 "avgOnceDuration":12 //人均单次播放时间
	}
</pre>

####31.视频排名 - 频道（报表）####
<pre>

- URL：/api/video/ranking/channel.csv
- 类型：
- 方法：GET
- 提交数据：orderColumn=id&orderType=desc&isFuzzy=true&terminal_id=终端ID
- 返回结果：

</pre>


####32.视频排名 - 专辑####
<pre>

- URL：/api/video/ranking/album
- 类型：Ajax请求
- 方法：GET
- 提交数据：orderColumn=id&orderType=desc&page=1&pagesize=10&fields=id,name&isFuzzy=true&terminal_id=终端ID&needTotal=true
- 返回结果：
	[
		{
			 "channel":"电影",
			 "album":"越狱第一季",
		 	 "playTimes":22,
			 "uniqueVisitors":12,
			 "independentIp":11,
			 "finishTimes":12,
			 "avgDailyPlayTimes":12, //人均单日播放次数
			 "avgDailyDuration"::12, //人均单日播放时间
			 "avgOnceDuration":12 //人均单次播放时间
		}
		...
	]
</pre>

####33.视频排名 - 专辑（汇总）####
<pre>

- URL：/api/video/ranking/album/total
- 类型：Ajax请求
- 方法：GET
- 提交数据：terminal_id=终端ID
- 返回结果：
	{
		 "playTimes":22,
		 "uniqueVisitors":12,
		 "independentIp":11,
		 "finishTimes":12,
		 "avgDailyPlayTimes":12, //人均单日播放次数
		 "avgDailyDuration"::12, //人均单日播放时间
		 "avgOnceDuration":12 //人均单次播放时间
	}
</pre>

####34.视频排名 - 专辑（报表）####
<pre>

- URL：/api/video/ranking/album.csv
- 类型：
- 方法：GET
- 提交数据：orderColumn=id&orderType=desc&isFuzzy=true&terminal_id=终端ID
- 返回结果：

</pre>

####35.视频排名 - 视频####
<pre>

- URL：/api/video/ranking/video
- 类型：Ajax请求
- 方法：GET
- 提交数据：orderColumn=id&orderType=desc&page=1&pagesize=10&fields=id,name&isFuzzy=true&terminal_id=终端ID&needTotal=true
- 返回结果：
	[
		{
			 "channel":"电影",
			 "album":"越狱第一季",
		 	 "playTimes":22,
			 "uniqueVisitors":12,
			 "independentIp":11,
			 "finishTimes":12,
			 "avgDailyPlayTimes":12, //人均单日播放次数
			 "avgDailyDuration"::12, //人均单日播放时间
			 "avgOnceDuration":12 //人均单次播放时间
		}
		...
	]
</pre>

####36.视频排名 - 视频（汇总）####
<pre>

- URL：/api/video/ranking/video/total
- 类型：Ajax请求
- 方法：GET
- 提交数据：terminal_id=终端ID
- 返回结果：
	{
		 "playTimes":22,
		 "uniqueVisitors":12,
		 "independentIp":11,
		 "finishTimes":12,
		 "avgDailyPlayTimes":12, //人均单日播放次数
		 "avgDailyDuration"::12, //人均单日播放时间
		 "avgOnceDuration":12 //人均单次播放时间
	}
</pre>

####37.视频排名 - 视频（报表）####
<pre>

- URL：/api/video/ranking/video.csv
- 类型：
- 方法：GET
- 提交数据：orderColumn=id&orderType=desc&isFuzzy=true&terminal_id=终端ID
- 返回结果：

</pre>

####38.播放器信息（批量获取）####
<pre>

- URL：/api/video/terminals
- 类型：Ajax请求
- 方法：GET
- 提交数据：orderColumn=id&orderType=desc&page=1&pagesize=10&fields=id,name&isFuzzy=true
- 返回结果：
	[
		{
			 "id":1,
			 "status":"ENABLE(DISABLE)",
			 "name":"优酷-PC网页",
			 "typeId":1,
			 "videoProject":{
				"id":1,
				"name":"爱奇葩",
				"status":"DISABLE"
			 }
		}
		...
	]
</pre>

####39.播放器信息（获取单条）####
<pre>

- URL：/api/video/terminals/{id}
- 类型：Ajax请求
- 方法：GET
- 提交数据：
- 返回结果：
	{
		 "id":1,
		 "status":"ENABLE(DISABLE)",
		 "name":"优酷-PC网页",
		 "typeId":1,
		 "videoProject":{
			"id":1,
			"name":"爱奇葩",
			"status":"DISABLE"
		 }
	}
</pre>
####40.播放器信息（插入数据）####
<pre>

- URL：/api/video/terminals
- 类型：Ajax请求
- 方法：POST
- 提交数据：
	{
		"data": {
			 "name":"优酷-PC网页",
			 "typeId":1,
			 "videoProject":{
				"id":1
			 }
		}

	}    
- 返回结果：在result中，返回原提交的数据（如插入成功则会返回ID）

</pre>
####41.播放器信息（部分修改）####
<pre>

- URL：/api/video/terminals/{id}
- 类型：Ajax请求
- 方法：PATCH
- 提交数据：
	{
		"data": {
			 "status":"ENABLE(DISABLE)",
			 "name":"优酷-PC网页"
		}

	}
- 返回结果：在result中，返回原提交的数据（如插入成功则会返回ID）
</pre>

####42.播放器类型####
<pre>

- URL：/api/video/terminal/types
- 类型：Ajax请求
- 方法：GET
- 提交数据：
- 返回结果：
	[
		{
			 "id":1,
			 "name":"网页"
		}
		...
	]
</pre>

####43.播放器报表####
<pre>

- URL：/api/video/terminals/report
- 类型：Ajax请求
- 方法：GET
- 提交数据：orderColumn=id&orderType=desc&page=1&pagesize=10&fields=id,name&isFuzzy=true&name=关键字
- 返回结果：
	[
		{
			 "id":1,
			 "status":"ENABLE(DISABLE)",
			 "name":"优酷-PC网页",
			 "playTimes":12,
			 "heartbeatTimes":12,
			 "finishTimes":22
		}
		...
	]

</pre>

####44.代码管理####
<pre>

- URL：/api/video/terminals/code
- 类型：Ajax请求
- 方法：GET
- 提交数据：id=1
- 返回结果：
	[
		{
			 "name":"START(HEARTBEAT,FINISH)",
			 "code":""
		}
		...
	]

</pre>

####45.布码下载####
<pre>

- URL：/api/video/terminals/code.csv
- 类型：Ajax请求
- 方法：GET
- 提交数据：
- 返回结果：
</pre>

