# docker-study
学习一下 docker

## 参考链接
[http://www.ruanyifeng.com/blog/2018/02/docker-wordpress-tutorial.html](http://www.ruanyifeng.com/blog/2018/02/docker-wordpress-tutorial.html)

[http://www.ruanyifeng.com/blog/2018/02/docker-tutorial.html](http://www.ruanyifeng.com/blog/2018/02/docker-tutorial.html)

## 常用命令

>1. image 仓库镜像
```
打开 `/etc/default/docker` 文件（需要`sudo`权限），在文件的底部加上一行。
DOCKER_OPTS="--registry-mirror=https://registry.docker-cn.com"
//重启
sudo service docker restart
```

> 2. 启动相关
```
// 查看版本
docker version

// 添加sudo 权限
sudo usermod -aG docker $USER

//启动
sudo service docker start
```

> 3. image 相关
```
// image 列表
docker image ls

// 删除 image
docker image rm [imageName]

// 拉取 image , library 是docker 默认的 文件组 可以省略
docker image pull library/[imageName]

// 运行 image 生成容器实例
docker container run [imageName]

// 终止 容器
docker container kill [容器ID containerID]

// 删除 容器
docker container rm [容器ID containerID]

// 正在运行的容器列表
docker container ls

// 所有的容器列表
docker container ls --all
```
