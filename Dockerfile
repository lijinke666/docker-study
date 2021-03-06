# 继承 官方node image
FROM node:8.9.0  

# 安装 nginx
RUN apt-get update \    
    && apt-get install -y nginx

# 拷贝 所有文件 到 app目录
COPY . /app/

# 指定 app目录 为工作目录
WORKDIR /app

# 安装依赖
# 执行打包命令
# 拷贝dist
RUN yarn \ 
    && yarn build \
    && cp -r dist/* /var/www/html \
    && rm -rf /app

# 允许外部连接这个端口
EXPOSE 80

# 关闭守护进程
CMD ['nginx',"-g"]

CMD ["daemon off;"]
