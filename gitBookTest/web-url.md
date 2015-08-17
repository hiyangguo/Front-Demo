URL Path 设计
====================

###域名
域名：analytics.hypers.com.cn


###登录
-   mgt/login


###找回密码
-   发送邮件 mgt/forgot/sendmail
-   重置密码 mgt/forgot/reset/{sid}    //{sid}是随机生成的id
-   连接错误 mgt/forgot/error          //邮件点击连接失效的页面


###首页
-   mgt/home


###概览
-   mgt/overview/trend/p-{rid}-{pid}


###来源跟踪
-   全部来源　　mgt/source/all/p-{rid}-{pid}       
-   搜索引擎　　mgt/source/engine/p-{rid}-{pid}　  
-   关键字　　　mgt/source/keyword/p-{rid}-{pid}　  
-   关键词　　　mgt/source/keywords/p-{rid}-{pid}
-   外部连接  　mgt/source/link/p-{rid}-{pid}　　　
　　　


###页面分析
-   访问页面  　mgt/page/visit/p-{rid}-{pid}　  
-   入口页面  　mgt/page/portal/p-{rid}-{pid}　
-   离开页面  　mgt/page/out/p-{rid}-{pid}　　　
-   路径分析  　mgt/pae/path/p-{rid}-{pid}　　　


###访客图像
-   地域分析  　mgt/visitor/location/p-{rid}-{pid}　
-   设备分析  　mgt/visitor/device/p-{rid}-{pid}
-   忠诚度分析　mgt/visitor/loyalty/p-{rid}-{pid}  
-   深度分析　　 mgt/visitor/depth/p-{rid}-{pid}
-   频度分析　　 mgt/visitor/frequency/p-{rid}-{pid}


###高级功能
-	点击图列表   mgt/advanced/heatmap/p-{rid}-{pid}
-	点击图详细   mgt/heatmap/report/{id}
-	爬取中	    mgt/heatmap/wait
-	爬取失败		mgt/heatmap/error
-   订阅报表     mgt/advanced/subscribe
-   广告跟踪  　  mgt/advanced/ads/p-{rid}-{pid}　

###项目设置
-   网站信息　　mgt/setting/project/p-{rid}-{pid}
-   频道信息　　mgt/setting/channel/p-{rid}-{pid}
-   成员管理　　mgt/setting/member/p-{rid}-{pid}




###系统管理
-   项目管理   mgt/admin/project
-   用户管理   mgt/admin/user
-   用户详细   mgt/admin/user_detail/{uid}


##用户信息
- 基本信息  mgt/user/profile


##系统关联
- HFA关联-HFA账号  mgt/account/integrate/hfa
- HFA关联-关联项目  mgt/account/integrate/hfa/joint/project
