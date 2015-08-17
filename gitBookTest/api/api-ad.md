####1.HA与HFA账户关联####
<pre>
#### ***批量获取数据*** ####
- URL：/api/account/integrate/hfa
- 类型：Ajax请求
- 方法：GET
- 提交数据：orderColumn=id&orderType=desc&page=1&pagesize=10&fields=id,name&isFuzzy=true&name=关键字
- 返回结果：
	[
		{
			 "id":1,
			 "status":"ENABLE(DISABLE)",
			 "haUser":{  //该字段仅管理员可见
				"id":1,
				"name":""	
			 },
			 "hfaUser":{
				"id":1,
				"username":"",
				"verify":"0(1)"
			 },
			 "startTime":"",
			 "operator":{"name":""}  //该字段仅管理员可见
		}
		...
	]


#### ***获取单条数据*** ####
- URL：/api/account/integrate/hfa/{id}
- 类型：Ajax请求
- 方法：GET
- 提交数据：
- 返回结果：
		{
			 "id":1,
			 "status":"ENABLE(DISABLE)",
			 "haUser":{	 //该字段仅管理员可见
				"id":1,
				"name":""	
			 },
			 "hfaUser":{
				"id":1,	
				"username":"",
				"password":"",
				"verify":"ENABLE(DISABLE)"
			 }
			 "startTime":"",
			 "operator":{"name":""}  //该字段仅管理员可见
		}


#### ***插入数据*** ####

- URL：/api/account/integrate/hfa
- 类型：Ajax请求
- 方法：POST
- 提交数据：
	{
		"data": {
			 "haUser":{
				"id":1		//仅管理员填写有效 
			 },
			 "hfaUser":{
				"username":"",
				"password":""
			 }
		}

	}    
- 返回结果：在result中，返回原提交的数据（如插入成功则会返回ID）


#### ***修改数据（部分修改）*** ####

- URL：/api/account/integrate/hfa/{id}
- 类型：Ajax请求
- 方法：PATCH
- 提交数据：
	{
		"data": {
			 "status":"",
			 "haUser":{
				"id":1		//仅管理员填写有效 	 
			 },
			 "hfaUser":{
				"username":"",
				"password":""
			 }
		}

	}    
- 返回结果：在result中，返回原提交的数据（如插入成功则会返回ID）


</pre>

<br/>

####2.HA与HFA项目关联####
<pre>
#### ***批量获取数据*** ####
- URL：/api/account/integrate/hfa/joint/project
- 类型：Ajax请求
- 方法：GET
- 提交数据：orderColumn=id&orderType=desc&page=1&pagesize=10&fields=id,name&isFuzzy=true&name=关键字
- 返回结果：
	[
		{
			 "id":1,
			 "project":{
				"id":1,
			 	"name":""
			 },
			 "haUser":{  //该字段仅管理员可见
				"id":1,
				"name":""	
			 },
			 "hfaUser":{
				"id":1,
				"username":"",
				"verify":"ENABLE(DISABLE)"
			 },
			 "createTime":"",
			 "operator":{"name":""}  //该字段仅管理员可见
		}
		...
	]



#### ***根据用户和系统权限获取未被关联的项目*** ####
- URL：/api/account/integrate/hfa/nojoint/project
- 类型：Ajax请求
- 方法：GET
- 提交数据：
- 返回结果：
	[
		{
			 "id":1,
			 "projects":[
				{
					"id":1,
			 		"name":""
				}
				...
			 ]
		}
		...
	]

#### ***获取单条数据*** ####
- URL：/api/account/integrate/hfa/joint/project/{id}
- 类型：Ajax请求
- 方法：GET
- 提交数据：
- 返回结果：
		{
			 "id":1,
			 "project":{
				"id":1,
			 	"name":""
			 },
			 "haUser":{	 //该字段仅管理员可见
				"id":1,
				"name":""	
			 },
			 "hfaUser":{
				"id":1,	
				"username":"",
				"password":"",
				"verify":"ENABLE(DISABLE)"
			 }
			 "startTime":"",
			 "operator":{"name":""}  //该字段仅管理员可见
		}


#### ***插入数据*** ####

- URL：/api/account/integrate/hfa/joint/project
- 类型：Ajax请求
- 方法：POST
- 提交数据：
	{
		"data": {
			 "haUser":{
				"id":1		//仅管理员填写有效 
			 },
			 "project":{
				"id":1
			 }
			 "hfaUser":{
				"id":1
			 }
		}

	}    
- 返回结果：在result中，返回原提交的数据（如插入成功则会返回ID）


#### ***删除数据*** ####

- URL：/api/account/integrate/hfa/joint/project/{id}
- 类型：Ajax请求
- 方法：DELETE
- 提交数据：   
- 返回结果：


</pre>


### 3. 广告创意(adcreative) ###
<pre>
  <code>
- URL：/api/ad/creative
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)&channelId=1&word=搜索关键字
- 返回结果：
	[
		{
			"impressions",
			"clicks",
			"pageViews":"",
			"uniqueVisitors":"",
			"landingTimes":"",
			"bounceRate":"",
			"secondBounceRate":"",
			"newUniqueVisitorsRate":"",
			"avgVisitResidenceTime":"",
			"avgVisitDepth":"",
			"adCampaign":"",
			"adGroup":"",
			"adCreative"
			
		}
		...
	]
 </code>
</pre>

### 4. 推广组(adgroup) ###
<pre>
  <code>
- URL：/api/ad/group
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)&channelId=1&word=搜索关键字
- 返回结果：
	[
		{
			"impressions",
			"clicks",
			"pageViews":"",
			"uniqueVisitors":"",
			"landingTimes":"",
			"bounceRate":"",
			"secondBounceRate":"",
			"newUniqueVisitorsRate":"",
			"avgVisitResidenceTime":"",
			"avgVisitDepth":"",
			"adCampaign":"",
			"adGroup":""
		}
		...
	]
 </code>
</pre>

### 5. 推广计划(adcampaign) ###
<pre>
  <code>
- URL：/api/ad/campaign
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)&channelId=1&word=搜索关键字
- 返回结果：
	[
		{
			"impressions",
			"clicks",
			"pageViews":"",
			"uniqueVisitors":"",
			"landingTimes":"",
			"bounceRate":"",
			"secondBounceRate":"",
			"newUniqueVisitorsRate":"",
			"avgVisitResidenceTime":"",
			"avgVisitDepth":"",
			"adCampaign":""
		}
		...
	]
 </code>
</pre>


### 6.广告创意汇总(adcreative) ###
<pre>
  <code>
- URL：/api/ad/creative/total
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)&channelId=1
- 返回结果：
		{
			"impressions",
			"clicks",
			"pageViews":"",
			"uniqueVisitors":"",
			"landingTimes":"",
			"bounceRate":"",
			"secondBounceRate":"",
			"newUniqueVisitorsRate":"",
			"avgVisitResidenceTime":"",
			"avgVisitDepth":""			
		}
 </code>
</pre>

### 7. 推广组汇总(adgroup) ###
<pre>
  <code>
- URL：/api/ad/group/total
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)&channelId=1
- 返回结果：
		{
			"impressions",
			"clicks",
			"pageViews":"",
			"uniqueVisitors":"",
			"landingTimes":"",
			"bounceRate":"",
			"secondBounceRate":"",
			"newUniqueVisitorsRate":"",
			"avgVisitResidenceTime":"",
			"avgVisitDepth":""
		}
 </code>
</pre>

### 8. 推广计划汇总(adcampaign) ###
<pre>
  <code>
- URL：/api/ad/campaign/total
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)&channelId=1
- 返回结果：
		{
			"impressions",
			"clicks",
			"pageViews":"",
			"uniqueVisitors":"",
			"landingTimes":"",
			"bounceRate":"",
			"secondBounceRate":"",
			"newUniqueVisitorsRate":"",
			"avgVisitResidenceTime":"",
			"avgVisitDepth":""
		}
 </code>
</pre>


### 9.广告创意按时间细分(adcreative) ###
<pre>
  <code>
- URL：/api/ad/creative/time
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)&channelId=1
- 返回结果：
		{
			"impressions",
			"clicks",
			"pageViews":"",
			"uniqueVisitors":"",
			"landingTimes":"",
			"bounceRate":"",
			"secondBounceRate":"",
			"newUniqueVisitorsRate":"",
			"avgVisitResidenceTime":"",
			"avgVisitDepth":"",
			"reportDate":""			
		}
 </code>
</pre>

### 10. 推广组按时间细分(adgroup) ###
<pre>
  <code>
- URL：/api/ad/group/time
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)&channelId=1
- 返回结果：
		{
			"impressions",
			"clicks",
			"pageViews":"",
			"uniqueVisitors":"",
			"landingTimes":"",
			"bounceRate":"",
			"secondBounceRate":"",
			"newUniqueVisitorsRate":"",
			"avgVisitResidenceTime":"",
			"avgVisitDepth":"",
			"reportDate":""
		}
 </code>
</pre>

### 11. 推广计划按时间细分(adcampaign) ###
<pre>
  <code>
- URL：/api/ad/campaign/time
- 类型：Ajax请求
- 方法：GET
- 提交数据：begin=yyyy-MM-dd&end=yyyy-MM-dd&dateType=HOUR(DAY,WEEK,MONTH)&channelId=1
- 返回结果：
		{
			"impressions",
			"clicks",
			"pageViews":"",
			"uniqueVisitors":"",
			"landingTimes":"",
			"bounceRate":"",
			"secondBounceRate":"",
			"newUniqueVisitorsRate":"",
			"avgVisitResidenceTime":"",
			"avgVisitDepth":"",
			"reportDate":""
		}
 </code>
</pre>