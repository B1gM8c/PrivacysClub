# PrivacysClub
受到[Kallydev](https://github.com/kallydev/privacy)启发，结合[vant UI](https://youzan.github.io/vant/#/zh-CN/)，设计了个人隐私泄露检测项目UI界面，不提供数据和接口，有兴趣的自己可以部署在内网进行研究，用于hvv黑客溯源等专业领域场景。

## 界面展示

![1](https://github.com/B1gM8c/PrivacysClub/blob/main/img/image-20211115112631071.png?raw=true)





## 源码部署

首先需要安装Node，建议使用[LTS稳定版本](https://npm.taobao.org/mirrors/node/v14.18.1/node-v14.18.1-x64.msi)。

然后，在vscode的终端运行下面命令，下载npm组件。

```
npm install
```

然后可以使用以下命令，进行本地测试。

```
npm run serve
```

![image-20211115113124750](https://github.com/B1gM8c/PrivacysClub/blob/main/img/image-20211115113056568.png?raw=true)

测试完成后，便可以进行打包。

```
npm run build
```



![image-20211115113214736](https://github.com/B1gM8c/PrivacysClub/blob/main/img/image-20211115113214736.png?raw=true)

打包完成后在`dist`目录中，可以看到项目打包好的版本。上传到web服务器便可以访问。

![image-20211115113359943](https://github.com/B1gM8c/PrivacysClub/blob/main/img/image-20211115113359943.png?raw=true)

## 常见问题

### 如何修改代码中的接口？

在`src/request/api.js`文件中，第二行需要设置接口网址。

```
let instance = axios.create({
    baseURL: 'https://www.privacys.club/api',
    headers: {
        'content-type': 'application/json; charset=utf-8'
    }
})
```

然后在`src/components`相应的`.vue`文件中，需要修改对应的文件路径。

### 有没有相关接口/数据分享？

建议自行Google搜索`Q绑`、`8eqq`、`微博5e`等关键词，理论上可以搜索到。

### 我被人骗了，能不能告诉我在哪里可以查询？

FancyPig博主在社工篇`TOP1`中有专门的讲解，可以参考[2021史上最全的社工思路分享](https://www.iculture.cc/sg/pig=1034)

当然，如果你有一定的技术基础，我们推荐使用Telegram免费的社工机器人（需要先[科学上网](https://hello-shudong.com/auth/register?code=ekmH)哦）

访问链接https://www.privacys.club/

里面提供了一些隐私查询的方法

在hvv溯源场景中，我们通常会使用到以下场景

- 社交平台绑定QQ、贴吧、手机号查询
- 企业邮箱账户密码
- 使用相同密码的人查询

## 相关法律声明

本项目仅提供漂亮的UI界面，由此界面可以衍生出很多其他的项目，比方说

- 学生成绩系统查询
- 域名/代理授权查询系统
- 疑似诈骗QQ/手机查询

本界面不承担任何由界面可能带来的法律风险，使用本代码代表你认同并愿意承担由此带来的一切法律风险。

