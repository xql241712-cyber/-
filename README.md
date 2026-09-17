# Qili Xu / 徐啟笠 — 个人作品集网站

这是徐啟笠（Qili Xu）的双语摄影与艺术作品集网站，用于展示项目作品、日常片段，以及个人简介与联系信息。网站为纯静态网站：不需要数据库、后台或安装额外软件，直接用浏览器即可预览。

## 网站页面

| 页面 | 文件 | 用途 |
| --- | --- | --- |
| 首页 | `index.html` | 全屏主视觉、姓名、创作方向与主导航 |
| 项目集合 | `projects.html` | 六个项目的封面与入口 |
| 项目详情 | `project.html?work=项目slug` | 由 `script.js` 根据项目资料自动显示的双语详情页 |
| 全部片段 | `fragments.html` | 不规则瀑布流式片段图片墙 |
| 按日期片段 | `fragments-by-date.html` | 按年月排列的片段归档；可点开大图、使用左右方向键浏览 |
| 关于与联系入口 | `about-contact.html` | About 与 Contact 的入口页 |
| 关于 | `about.html` | 教育经历与影展放映信息 |
| 联系 | `contact.html` | 邮箱、Instagram 等联系方式 |

## 目录结构

```text
portfolio-site/
├── index.html                    # 首页
├── projects.html                 # 项目集合页
├── project.html                  # 项目详情页模板
├── fragments.html                # 全部片段页
├── fragments-by-date.html        # 按日期片段页
├── about-contact.html            # About / Contact 入口
├── about.html                    # 个人简介、教育与放映
├── contact.html                  # 联系方式
├── styles.css                    # 全站视觉、排版、响应式与项目布局
├── script.js                     # 中英文切换、项目资料、图片生成与片段大图浏览
├── README.md                     # 本说明文件
├── AGENTS.md                     # 给后续 AI 的维护规范
└── assets/                       # 所有网站资源（本项目不使用 images/ 文件夹）
    ├── home-hero.jpg             # 首页主视觉图
    ├── adobe-*.otf / *.ttf       # 已加入网站的字体文件
    ├── fragments/                # 日常片段图片，按 YYYY-MM-NN 命名
    └── projects/
        ├── covers/               # 项目集合页封面图
        └── gallery/<项目slug>/    # 各项目详情页图片
```

> 图片统一放在 `assets/` 中，而不是 `images/`。网页内使用的路径均从网站根目录开始写，例如 `assets/fragments/2026-08-01.jpg`。

## 本地预览

1. 在终端进入网站根目录：

   ```bash
   cd /Users/niantu/Documents/Codex/2026-09-16/wo/outputs/portfolio-site
   ```

2. 启动本地预览服务：

   ```bash
   python3 -m http.server 4173
   ```

3. 在浏览器打开：<http://127.0.0.1:4173/>

若 4173 已被占用，可将命令中的 `4173` 换成其他端口，例如 `4174`，并在浏览器中使用相同端口。要停止预览服务，在终端按 `Control + C`。

## 如何添加或替换照片

### 首页主视觉

- 将新图片替换为 `assets/home-hero.jpg`，保持这个文件名不变；首页会自动读取它。
- 如果想保留旧图或使用不同文件名，再在 `index.html` 中修改对应的 `src` 路径。

### 新增 Fragments（片段）照片

1. 将照片放入 `assets/fragments/`。
2. 建议命名为 `YYYY-MM-NN.jpg`，例如 `2026-09-01.jpg`；同月的第二张可命名为 `2026-09-02.jpg`。
3. 在 `script.js` 的 `fragmentImages` 中添加一项，写入图片路径、月份和节奏编号，例如：

   ```js
   { src: 'assets/fragments/2026-09-01.jpg', month: '2026-09', rhythm: 13 }
   ```

4. 如果是新的月份，在 `fragmentMonths` 最前面加入该月份的英文与中文标题。这样它会在“按日期”页面中按从新到旧显示。
5. 想从网站隐藏一张片段图时，优先从 `fragmentImages` 移除该条目；这不会删除原始图片文件。

### 新增项目图片

1. 在 `assets/projects/gallery/` 下新建或使用对应项目的 slug 文件夹，例如：

   ```text
   assets/projects/gallery/new-project/01.jpg
   ```

2. 按展示顺序使用 `01.jpg`、`02.jpg`、`03.jpg` 这类连续文件名。
3. 在 `script.js` 的 `projectCatalogue` 中，为该项目的 `images`、`galleryGroups` 或 `postTextGallery` 填入这些路径。
4. 如果要修改项目集合页封面，将封面放进 `assets/projects/covers/`，再在 `projects.html` 中更换该项目卡片的图片路径。

## 如何修改文字、语言与排版

- 项目标题、媒介信息、作品介绍、YouTube 链接与详情页图片顺序：修改 `script.js` 中的 `projectCatalogue`。
- 项目集合页上的封面、编号与简短媒介文字：修改 `projects.html`。
- 首页文案、About、Contact 的固定内容：修改各自的 HTML 文件。
- 每一处可见文字都应同时维护英文与中文：静态内容使用 `data-en` 和 `data-zh`；项目详情使用 `title` / `titleZh`、`meta.en` / `meta.zh`、`description.en` / `description.zh`。
- 字体、留白、图片尺寸、响应式规则、项目图片的特殊摆放：修改 `styles.css`。

修改 `styles.css` 或 `script.js` 后，如果浏览器仍显示旧效果，请强制刷新页面（macOS：`Command + Shift + R`）。也可以将页面中引用文件后的 `?v=...` 版本号改大，以避免缓存。

## 日常维护建议

- 保持图片原始比例；网页已针对横图和竖图分别处理展示。
- 新图片建议先压缩到适合网页的尺寸，再放入 `assets/`，以保持加载速度。
- 修改前先备份重要照片；从页面移除图片时，除非确认不再需要，否则只删除代码引用，不删除素材文件。
- 完成修改后，至少检查首页、项目集合页、对应项目详情页、Fragments 两个页面的英文和中文版本。

