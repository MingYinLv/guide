# CentOS 7安装Mysql

首先使用 yum下载mysql和mysql-devel

```shell
yum install mysql
yum install mysql-devel
```



> CentOS 7 版本将MySQL数据库软件从默认的程序列表中移除，用mariadb代替了。

所以不能直接`yum install mysql`,有两种解决办法，第一种是安装mariadb，第二种是从官网下载安装[mysql-server](https://dev.mysql.com/downloads/repo/yum/)

进入[https://dev.mysql.com/downloads/repo/yum/](https://dev.mysql.com/downloads/repo/yum/)，翻到下面的列表中选择第一项，点击download获得下载地址，然后通过wget下载到服务器上。

```shell
wget https://dev.mysql.com/get/mysql57-community-release-el7-9.noarch.rpm	# 下载
rpm -ivh mysql57-community-release-el7-9.noarch.rpm
yum install mysql-community-server
# 安装成功后重启mysql
service mysqld restart
# 进入mysql，默认密码为空
mysql -u root	
```

但是到了这一步提示密码错误，默认密码不为空，查资料去看mysqld的日志文件/var/log/mysqld.log

```shell
# 查找密码
cat /var/log/mysqld.log | grep password
# 在日志文件中找到了这样一行：
#2017-01-11T13:28:18.104091Z 1 [Note] A temporary password is generated for root@localhost: i;Yw0D6z(d0i, 密码也就是 i;Yw0D6z(d0i
mysql -u root -p	# 登录
Enter password:i;Yw0D6z(d0i # 输入密码
# 登录成功
show databases; # 查看数据库
# 但是不管输入任何命令都报错You must reset your password using ALTER USER statement before executing this statement
# 提示必须重置密码
#修改密码为root
set password for 'root'@'localhost'=password('root');
# 然后报错ERROR 1819 (HY000): Your password does not satisfy the current policy requirements，原因是密码太简单了，需要修改validate_password_policy的值
set global validate_password_policy=0;
set global validate_password_length=1;
# 然后再执行修改密码的命令就能修改成功了。
```



***

#### 参考资料

[centos7 mysql数据库安装和配置](http://www.cnblogs.com/starof/p/4680083.html)

[ERROR 1819 (HY000): Your password does not satisfy the current policy requirements](http://www.cnblogs.com/ivictor/p/5142809.html)

