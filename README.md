# 重庆成都 7 日旅行攻略｜观音桥出发版

一份以重庆观音桥为重庆段出发中心、面向家庭出行的移动端私人旅行助手。页面使用原生 HTML、CSS、JavaScript 制作，没有框架和服务端依赖，可直接部署到 GitHub Pages。

## 已包含的内容

- 首屏的日期、观音桥住宿、天气提醒与“今日行程”入口
- 7 天可切换路线：出发 / 结束时间、耗时、交通、步行强度、家庭提示与用餐建议
- 可按“必去 / 推荐 / 备选”筛选的景点详情，以及家庭友好和步行强度信息
- 景点的交通、美食、拍照位置、避坑提醒、真实本地图片与来源备注
- 按路线安排的重庆、成都美食笔记和常用交通比较
- 本机持久化的景点收藏，以及可替换的旅行照片墙

## 项目结构

```text
love-trip/
├── index.html                 # 页面内容
├── style.css                  # 移动端优先的视觉样式
├── script.js                  # 页面渲染、筛选、收藏、弹窗与图片降级
├── assets/
│   ├── images/                # 照片占位图和未来旅行照片
│   ├── icons/                 # 如需要可放置本地图标
├── data/
│   ├── trip.js                # 出发点、天气、提醒、回忆照片
│   ├── routes.js              # 每日路线与交通比较
│   ├── attractions.js         # 景点详情、优先级、图片来源
│   └── food.js                # 美食笔记与图片来源
└── README.md
```

## 本地预览

这是静态网页。由于行程数据拆分在 `data/` 目录并由浏览器模块读取，请通过本地静态服务器预览，不建议直接双击 `index.html`。

若使用 VS Code，可以安装并使用 Live Server 扩展，在项目目录中启动本地预览。也可在项目目录运行 `python -m http.server 8000`，再访问 `http://localhost:8000`。

建议在浏览器开发者工具中选择 390px 宽度的手机视图，检查首屏、每日路线、景点详情、收藏列表和照片卡片。

## 替换照片和音乐

1. 将旅行照片放进 `assets/images/`，例如 `hongyadong.jpg`、`liziba.jpg` 或 `panda.jpg`。
2. 在 `data/attractions.js`、`data/food.js` 或 `data/trip.js` 中修改对应条目的 `image` 路径，并把 `imageSource.status` 改为“已替换”。
3. 在 `imageSource.note` 中保留图片来源或授权状态，方便以后检查素材来源。
4. 所有交通时间均为行程规划参考；请在出发当天使用导航、铁路购票和景区官方渠道核对。

## GitHub Pages 部署步骤

> 本项目尚未自动部署。请在确认页面效果后再执行以下步骤。

1. 在 GitHub 创建一个新的公开仓库，例如 `love-trip`。
2. 将本项目内的全部文件上传或推送到仓库根目录。
3. 打开仓库的 **Settings** → **Pages**。
4. 在 **Build and deployment** 中选择 **Deploy from a branch**。
5. 选择 `main` 分支和 `/ (root)` 文件夹，然后点击 **Save**。
6. 等待 GitHub 完成发布，Pages 页面会显示公开网址，通常为：

   ```text
   https://你的GitHub用户名.github.io/love-trip/
   ```

7. 在手机浏览器打开该网址，确认页面正常后即可把链接发送给她。

如果仓库名称不是 `love-trip`，请将网址最后一段替换为实际仓库名称。
