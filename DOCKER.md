# docker基础指令
<a href="http://www.runoob.com/docker/docker-command-manual.html">详情请见</a>
## docker images
```bash
# 查看docker的镜像有哪些，参数：-a 显示全部镜像包括无tag的镜像，
docker images
```

## docker pull
```bash
# 拉取镜像
docker pull <image name> 
```

## docker push
```bash
# 上传镜像
docker push <image name> 
```

## docker tag
```bash
# 给镜像添加标签
docker tag <image ID> <image tagname> 
```

## docker run
```bash
# 运行容器  -itd带命令行的后台运行 -p 端口映射 宿主机port：container：port -v 文件夹映射 宿主机：folder：container：folder
docker run -itd --name <name> -p 880:80 -v your/path/to:/path <image name>
```

## docker exec
```bash
# 进入容器  -it 命令行shell 结尾是使用什么shell命令行 暂时知道/bin/bash /bin/sh
docker exec -it <container name> /bin/bash
```

## docker stop
```bash
# 停止容器
docker stop <container name>
```

## docker rm
```bash
# 删除容器 -f 强制删除
docker rm <container name>
```

## docker rmi
```bash
# 删除镜像 -f 强制删除
docker rmi <image name>
```

## docker ps
```bash
# 查看容器 -a 查看全部容器包括停止的容器
docker ps -a
```

## docker build
```bash
docker build -t <images tag> .
```

## docker save load
```bash
#镜像导出导入，和export的区别是 历史数据不消失，能做到层回滚 docker tag <LAYER ID> <IMAGE NAME>
docker save -o my_ubuntu_v3.tar runoob/ubuntu:v3
docker load my_ubuntu_v3.tar
```

## docker export import
```bash
#容器导出导入，和save的区别是 历史数据消失，不能做到层回滚
docker export -o my_ubuntu_v3.tar runoob/ubuntu:v3
docker import my_ubuntu_v3.tar
```