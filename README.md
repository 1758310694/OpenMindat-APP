# OneMineralogy App
用于从OpenMindat Data API检索获取Mindat开放数据的APP

### 概述
`OneMineralogy APP`是是一个应用软件，用于通过OpenMindat Data API提供的实时数据服务来检索和处理开放数据。

### 开始

**编译软件下载**

HBuilderX是通用的前端开发工具，但为uni-app做了特别强化。HBuilderX内置相关环境，开箱即用，无需配置nodejs。工具获取地址：https://www.dcloud.io/hbuilderx.html

**代码获取**

代码获取有以下两种方式：

1.直接下载源码ZIP文件

2.使用Git克隆仓库

```coffee
git clone https://github.com/1758310694/OneMineralogy-App.git
```

**运行**

1、将源码加载至HBuilderX工具中(可直接将文件拉入)

2、在HBuilderX选择`运行`-->`运行到浏览器`即可在浏览器使用

3、选择`发行`-->`云打包`即可打包为安装包，在移动端使用

**OpenMindat Data API token获取**

首先该APP在Mindat连接需要token作为权限访问服务器，代码中的token是可用的，但每天访问次数存在限制。若限制时，用户可自行替换自己获取的token。

1、token获取步骤：https://www.mindat.org/a/how_to_get_my_mindat_api_key

2、源码中token替换：`/pages` `/tabBar` `/search` `/Search.vue`中
```coffee
header: {
            'Authorization': 'Token ******************'
          }
```







