# 视频排名 #
<br/>

## 一、API设计 ##


####1.视频排名 - 频道####
<pre>

- URL：/api/video/ranking/channel
- 类型：Ajax请求
- 方法：GET
- 提交数据：orderColumn=id&orderType=desc&page=1&pagesize=10&begin=2015-12-12&end=2015-12-21&projectId=项目ID&terminal_id=终端ID&needTotal=true&word=关键字
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

####2.视频排名 - 频道（汇总）####
<pre>

- URL：/api/video/ranking/channel/total
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=2015-12-12&end=2015-12-21&projectId=项目ID&terminal_id=终端ID
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

####3.视频排名 - 频道（报表）####
<pre>

- URL：/api/video/ranking/channel.csv
- 类型：
- 方法：GET
- 提交数据：同1
- 返回结果：

</pre>


####4.视频排名 - 专辑####
<pre>

- URL：/api/video/ranking/album
- 类型：Ajax请求
- 方法：GET
- 提交数据：orderColumn=id&orderType=desc&page=1&pagesize=10&begin=2015-12-12&end=2015-12-21&projectId=项目ID&terminal_id=终端ID&needTotal=true&word=关键字
- 返回结果：
	[
		{
			 "channel":"电影",
			 "album":"WALKING DEAD",
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

####5.视频排名 - 专辑（汇总）####
<pre>

- URL：/api/video/ranking/album/total
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=2015-12-12&end=2015-12-21&projectId=项目ID &terminal_id=终端ID
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

####6.视频排名 - 专辑（报表）####
<pre>

- URL：/api/video/ranking/album.csv
- 类型：
- 方法：GET
- 提交数据：同4
- 返回结果：

</pre>

####7.视频排名 - 视频####
<pre>

- URL：/api/video/ranking/video
- 类型：Ajax请求
- 方法：GET
- 提交数据：orderColumn=id&orderType=desc&page=1&pagesize=10&begin=2015-12-12&end=2015-12-21&projectId=项目ID&terminal_id=终端ID&needTotal=true&word=关键字
- 返回结果：
	[
		{
			 "channel":"电影",
			 "album":"WALKING DEAD",
			 "video":"WALKING DEAD I"
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

####8.视频排名 - 视频（汇总）####
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

####9.视频排名 - 视频（报表）####
<pre>

- URL：/api/video/ranking/video.csv
- 类型：
- 方法：GET
- 提交数据：同7
- 返回结果：

</pre>

####10.视频信息上传接口 - 数据获取####
<pre>

- URL：/api/video/interface/upload/{mediaId}
- 类型：
- 方法：GET
- 提交数据：
- 返回结果：
	{
		"key":"GD3I38IL", //识别码
		"url":"http://t.hypers.com.cn/hvt/video_info/?media_key=N3FVRU23I3OP...", //视频信息上传接口
		"describe":"", //描述
		"requestMethod":"", //请求类型
		"requestParam":"", //请求参数描述
		"response":"" //响应格式
	}
</pre>

####11.视频信息上传接口 - 文档导出####
<pre>

- URL：/api/video/interface/upload/{mediaId}.csv
- 类型：
- 方法：GET
- 提交数据：
- 返回结果：csv文件

</pre>

####12.视频信息获取接口 - 数据获取####
<pre>

- URL：/api/video/interface/download/{mediaId}
- 类型：
- 方法：GET
- 提交数据：
- 返回结果：
	{
		"url":"http://api.youku.com/video/info?auth_key={auth_key}&vid={vid}",
		"describe":"",
		"authKey":"OIDI3434I",
		"updateFrequence":0,//0：永不，1:1天，7:7天，30:30天
		"status":"",//运行状态
		"requestMethod":"",//请求类型
		"requestParam":"",//请求参数
		"response":"" //响应参数格式
	}
</pre>

####13.视频信息获取接口 - 编辑####
<pre>

- URL：/api/video/interface/download/{mediaId}
- 类型：
- 方法：PATCH
- 提交数据：
- 返回结果：
	{
		"url":"http://api.youku.com/video/info?auth_key={auth_key}&vid={vid}",
		"authKey":"OIDI3434I",
		"updateFrequence":0,//0：永不，1:1天，7:7天，30:30天
	}
</pre>

####14.视频信息获取接口 - 文档导出####
<pre>

- URL：/api/video/interface/download/{mediaId}.csv
- 类型：
- 方法：GET
- 提交数据：
- 返回结果：csv文件

</pre>

####15.视频信息查询####
<pre>

- URL：/api/video/search
- 类型：
- 方法：GET
- 提交数据：id=1&word=xxx
- 返回结果：
	[
		{
			"videoId":"", 
			"videoName":"", //视频名称
			"albumId":"",
			"albumName":"", //专辑名称
			"channelId":"",
			"channelName":"", //频道名称
			"url":"", //网址
			"area":"", //地区
			"actors":["",""],
			"directors":["",""],
			"duration":30, //时长
			"intro":"", //介绍
			"episode":23 //集数
		}
		...
	]
</pre>


####16.媒体-批量查询####
<pre>

- URL：/api/video/media
- 类型：
- 方法：GET
- 提交数据：orderColumn=id&orderType=desc&page=1&pagesize=10&word=关键字&status=ENABLE/DISABLE
- 返回结果：
	{
		"name":"",
		"status":"",
		"accessMode":"API_DOWNLOAD/API_UPLOAD/TRACKING_UPLOAD", //获取方式
		"createTime":"",
		"user":{ //只有管理员可见
			"id":1,
			"name":""
		},
		"operator":{ //只有管理员可见
			"id":1,
			"name":""
		}
	}

</pre>


####17.媒体-单条查询####
<pre>

- URL：/api/video/media/{id}
- 类型：
- 方法：GET
- 提交数据：
- 返回结果：
	{
		"name":"",
		"status":"",
		"accessMode":"API_DOWNLOAD/API_UPLOAD/TRACKING_UPLOAD", //获取方式
		"createTime":"",
		"user":{ //只有管理员可见
			"id":1,
			"name":""
		}
	}

</pre>

####18.媒体-添加####
<pre>

- URL：/api/video/media
- 类型：
- 方法：POST
- 提交数据：
- 返回结果：
	{
		"user":{ //只有管理员可用
			"id":1
		}, 
		"name":"",
		"accessMode":"API_DOWNLOAD/API_UPLOAD/TRACKING_UPLOAD" //获取方式
	}

</pre>

####19.媒体-修改####
<pre>

- URL：/api/video/media/{id}
- 类型：
- 方法：PATCH
- 提交数据：
	{
		"user":{ //只有管理员可用
			"id":1
		}, 
		"name":"",
		"status":"",
		"accessMode":"API_DOWNLOAD/API_UPLOAD/TRACKING_UPLOAD" //获取方式
	}
- 返回结果：


</pre>



####20.媒体项目关联-批量查询####
<pre>

- URL：/api/video/media/project/relation
- 类型：
- 方法：GET
- 提交数据：orderColumn=id&orderType=desc&page=1&pagesize=10&word=关键字
- 返回结果：
	{
		"project":{
			"id":1,
			"name":""
		},
		"media":{
			"name":"",
			"accessMode":"API_DOWNLOAD/API_UPLOAD/TRACKING_UPLOAD"
		}
		"createTime":"",
		"user":{ //只有管理员可见
			"id":1,
			"name":""
		},		
		"operator":{ //只有管理员可见
			"id":1,
			"name":""
		}
	}

</pre>


####21.媒体项目关联-单条查询####
<pre>

- URL：/api/video/media/project/relation/{id}
- 类型：
- 方法：GET
- 提交数据：
- 返回结果：
	{
		"project":{
			"id":1,
			"name":""
		},
		"media":{
			"name":"",
			"accessMode":"API_DOWNLOAD/API_UPLOAD/TRACKING_UPLOAD"
		}
		"createTime":"",
		"user":{ //只有管理员可见
			"id":1,
			"name":""
		},		
		"operator":{ //只有管理员可见
			"id":1,
			"name":""
		}
	}

</pre>

####22.媒体项目关联-添加####
<pre>

- URL：/api/video/media/project/relation
- 类型：
- 方法：POST
- 提交数据：
	{
		"user":{ //只有管理员可用
			"id":1
		}, 
		"media":{
			"id":1
		},
		"project":{
			"id":1
		}
	}
- 返回结果：


</pre>

####23.媒体项目关联-删除####
<pre>

- URL：/api/video/media/project/relation/{id}
- 类型：
- 方法：DELETE
- 提交数据：

- 返回结果：


</pre>

####24.用户下级联项目####
<pre>

- URL：/api/video/media/projects
- 类型：
- 方法：GET
- 提交数据：user.id=x&status=ENABLE/DISABLE

- 返回结果：


</pre>





