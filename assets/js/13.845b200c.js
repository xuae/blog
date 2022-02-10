(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{496:function(s,t,a){s.exports=a.p+"assets/img/gitea-config-database.3527ca12.png"},497:function(s,t,a){s.exports=a.p+"assets/img/gitea-config.25410426.png"},556:function(s,t,a){"use strict";a.r(t);var e=a(5),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("Boxx"),s._v(" "),e("h2",{attrs:{id:"系统环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#系统环境"}},[s._v("#")]),s._v(" 系统环境")]),s._v(" "),e("ul",[e("li",[s._v("操作系统：Ubuntu Server 20.04 LTS 64bit")]),s._v(" "),e("li",[s._v("Gitea版本：1.6.1")])]),s._v(" "),e("h2",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("p",[s._v("官方安装文档："),e("a",{attrs:{href:"https://docs.gitea.io/zh-cn/install-from-binary/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://docs.gitea.io/zh-cn/install-from-binary/"),e("OutboundLink")],1)])]),e("p",[s._v("在此使用的是二进制安装，也可使用官方文档中的其他安装方式")]),s._v(" "),e("p",[s._v("所有下载均包括 SQLite, MySQL 和 PostgreSQL 的支持，同时所有资源均已嵌入到可执行程序中，这一点和老版本有所不同。 基于二进制的安装非常简单，只要从 "),e("a",{attrs:{href:"https://dl.gitea.io/gitea",target:"_blank",rel:"noopener noreferrer"}},[s._v("下载页面"),e("OutboundLink")],1),s._v(" 选择对应平台，拷贝下载URL，执行以下命令即可")]),s._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用 wget 下载 gitea 到 /usr/local/bin/ 目录下")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -O /usr/local/bin/gitea https://dl.gitea.io/gitea/1.16.1/gitea-1.16.1-linux-amd64\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入 /usr/local/bin 文件夹")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/bin\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加 gitea 可执行权限")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x gitea\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h2",{attrs:{id:"测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[s._v("#")]),s._v(" 测试")]),s._v(" "),e("p",[s._v("安装完成后，你将会获得 "),e("code",[s._v("gitea")]),s._v(" 的二进制文件，在你复制到部署的机器之前可以先测试一下。")]),s._v(" "),e("p",[s._v("命令行执行完后，按住 "),e("code",[s._v("Ctrl + C")]),s._v(" 可关掉程序")]),s._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("./gitea web\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"以-service-方式运行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#以-service-方式运行"}},[s._v("#")]),s._v(" 以 Service 方式运行")]),s._v(" "),e("p",[s._v("执行以下命令：")]),s._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/systemd/system/gitea.service\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("接着拷贝示例代码 "),e("a",{attrs:{href:"https://gitee.com/gitea/gitea/blob/main/contrib/systemd/gitea.service",target:"_blank",rel:"noopener noreferrer"}},[s._v("gitea.service"),e("OutboundLink")],1),s._v(" 并取消对任何需要运行在主机上的服务部分的注释，譬如 MySQL。")]),s._v(" "),e("p",[s._v("我这儿使用的是 "),e("code",[s._v("Postgresql")]),s._v("，所以打开了 "),e("code",[s._v("postgresql.service")]),s._v(" 的注释")]),s._v(" "),e("p",[s._v("Postgresql 安装教程请看："),e("RouterLink",{attrs:{to:"/articles/server/postgresql-install.html"}},[s._v("Postgresql 安装文档")])],1),s._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unit"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Description")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Gitea "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Git with a cup of tea"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("After")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("syslog.target\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("After")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("network.target\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("###")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Don't forget to add the database service dependencies")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("###")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Wants=mysql.service")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#After=mysql.service")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Wants=mariadb.service")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#After=mariadb.service")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Wants")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("postgresql.service\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("After")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("postgresql.service\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Wants=memcached.service")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#After=memcached.service")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Wants=redis.service")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#After=redis.service")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("###")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# If using socket activation for main http/s")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("###")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#After=gitea.main.socket")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Requires=gitea.main.socket")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("###")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# (You can also provide gitea an http fallback and/or ssh socket too)")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# An example of /etc/systemd/system/gitea.main.socket")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("###")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## [Unit]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Description=Gitea Web Socket")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## PartOf=gitea.service")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## [Socket]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Service=gitea.service")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## ListenStream=<some_port>")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## NoDelay=true")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## [Install]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## WantedBy=sockets.target")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("###")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Service"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Modify these two values and uncomment them if you have")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# repos with lots of files and get an HTTP error 500 because")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# of that")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("###")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#LimitMEMLOCK=infinity")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#LimitNOFILE=65535")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("RestartSec")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("2s\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Type")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("simple\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("User")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("git\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Group")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("git\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WorkingDirectory")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/lib/gitea/\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# If using Unix socket: tells systemd to create the /run/gitea folder, which will contain the gitea.sock file")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# (manually creating /run/gitea doesn't work, because it would not persist across reboots)")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#RuntimeDirectory=gitea")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/bin/gitea web --config /etc/gitea/app.ini\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Restart")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("always\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Environment")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("git "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("HOME")])]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/home/git "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GITEA_WORK_DIR")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/lib/gitea\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# If you install Git to directory prefix other than default PATH (which happens")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# for example if you install other versions of Git side-to-side with")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# distribution version), uncomment below line and add that prefix to PATH")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Don't forget to place git-lfs binary on the PATH below if you want to enable")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Git LFS support")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Environment=PATH=/path/to/git/bin:/bin:/sbin:/usr/bin:/usr/sbin")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# If you want to bind Gitea to a port below 1024, uncomment")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# the two values below, or use socket activation to pass Gitea its ports as above")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("###")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#CapabilityBoundingSet=CAP_NET_BIND_SERVICE")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#AmbientCapabilities=CAP_NET_BIND_SERVICE")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("###")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Install"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WantedBy")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("multi-user.target\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br"),e("span",{staticClass:"line-number"},[s._v("53")]),e("br"),e("span",{staticClass:"line-number"},[s._v("54")]),e("br"),e("span",{staticClass:"line-number"},[s._v("55")]),e("br"),e("span",{staticClass:"line-number"},[s._v("56")]),e("br"),e("span",{staticClass:"line-number"},[s._v("57")]),e("br"),e("span",{staticClass:"line-number"},[s._v("58")]),e("br"),e("span",{staticClass:"line-number"},[s._v("59")]),e("br"),e("span",{staticClass:"line-number"},[s._v("60")]),e("br"),e("span",{staticClass:"line-number"},[s._v("61")]),e("br"),e("span",{staticClass:"line-number"},[s._v("62")]),e("br"),e("span",{staticClass:"line-number"},[s._v("63")]),e("br"),e("span",{staticClass:"line-number"},[s._v("64")]),e("br"),e("span",{staticClass:"line-number"},[s._v("65")]),e("br"),e("span",{staticClass:"line-number"},[s._v("66")]),e("br"),e("span",{staticClass:"line-number"},[s._v("67")]),e("br"),e("span",{staticClass:"line-number"},[s._v("68")]),e("br"),e("span",{staticClass:"line-number"},[s._v("69")]),e("br"),e("span",{staticClass:"line-number"},[s._v("70")]),e("br"),e("span",{staticClass:"line-number"},[s._v("71")]),e("br"),e("span",{staticClass:"line-number"},[s._v("72")]),e("br"),e("span",{staticClass:"line-number"},[s._v("73")]),e("br"),e("span",{staticClass:"line-number"},[s._v("74")]),e("br"),e("span",{staticClass:"line-number"},[s._v("75")]),e("br"),e("span",{staticClass:"line-number"},[s._v("76")]),e("br"),e("span",{staticClass:"line-number"},[s._v("77")]),e("br"),e("span",{staticClass:"line-number"},[s._v("78")]),e("br"),e("span",{staticClass:"line-number"},[s._v("79")]),e("br"),e("span",{staticClass:"line-number"},[s._v("80")]),e("br"),e("span",{staticClass:"line-number"},[s._v("81")]),e("br"),e("span",{staticClass:"line-number"},[s._v("82")]),e("br"),e("span",{staticClass:"line-number"},[s._v("83")]),e("br")])]),e("p",[s._v("修改 user，home 目录以及其他必须初始化参数，如果使用自定义端口，则需修改 PORT 参数，反之如果使用默认端口则需删除 -p 标记。")]),s._v(" "),e("p",[s._v("激活 gitea 并将它作为系统自启动服务（设置开机启动）：")]),s._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动 gitea 服务")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" gitea\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行结果")]),s._v("\nCreated symlink /etc/systemd/system/multi-user.target.wants/gitea.service → /etc/systemd/system/gitea.service.\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h3",{attrs:{id:"重载-daemon"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重载-daemon"}},[s._v("#")]),s._v(" 重载 daemon")]),s._v(" "),e("p",[s._v("重载daemon，让新的服务文件生效：")]),s._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl daemon-reload\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"开启服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开启服务"}},[s._v("#")]),s._v(" 开启服务")]),s._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打开 gitea 服务")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start gitea\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h3",{attrs:{id:"关闭服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关闭服务"}},[s._v("#")]),s._v(" 关闭服务")]),s._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭 gitea 服务")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl stop gitea\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h3",{attrs:{id:"查看状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看状态"}},[s._v("#")]),s._v(" 查看状态")]),s._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl status gitea\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"title"}),e("p",[e("strong",[s._v("注意")]),s._v("：")]),s._v(" "),e("p",[s._v("若是无法访问，启动失败，记得创建以上（和配置页面中）所用到的文件夹并且打开权限")])]),e("h2",{attrs:{id:"配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("p",[s._v("默认端口是 "),e("code",[s._v("3000")])])]),e("p",[s._v("访问网址 "),e("code",[s._v("ip:3000")]),s._v("，按照页面说明完成配置即可\n"),e("img",{attrs:{src:a(496),alt:"数据库配置"}}),s._v(" "),e("img",{attrs:{src:a(497),alt:"一般配置"}})])],1)}),[],!1,null,null,null);t.default=n.exports}}]);