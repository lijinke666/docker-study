import loadable from "react-loadable"; //异步加载  react-router3 可以使用getComponent react-router4没这个api了
import React from "react";
import { Spin } from "antd";
const Loading = () => <Spin />;

//按需加载路由
const loadRoute = loader => {
  return loadable({
    loader: () => loader,
    loading: Loading
  });
};

//这里引入你的路由
const Root = loadRoute(
  import(/* webpackChunkName: "root" */ "app/components/Root")
); //母版
const Home = loadRoute(import(/* webpackChunkName: "home" */ "Home")); //主页
const TestPage = loadRoute(
  import(/* webpackChunkName: "testPage" */ "app/testPage")
); //测试组件路由

export { Root, Home, TestPage };
