# AI 维护规范：Qili Xu / 徐啟笠个人作品集网站

本文件供后续维护此网站的 AI 使用。目标是在不破坏既有视觉语言、双语内容和图片编排的前提下，安全地增删照片、更新文字与调整网页布局。

## 1. 项目范围与技术栈

- 项目是一个双语（English / 中文）摄影与艺术作品集网站。
- 技术栈仅为原生 **HTML + CSS + JavaScript**。
- 没有框架、构建步骤、包管理器、数据库或后端。
- 所有页面均位于网站根目录；本地预览使用静态 HTTP 服务。
- 不要在没有明确用户请求时引入 React、Vue、构建工具、CSS 框架、后端、追踪脚本或外部组件库。
- 不要在没有用户明确授权时上传素材至 Cloudinary 或其他第三方平台，也不要部署或发布网站。

## 2. 关键文件与职责

| 文件 | 职责 |
| --- | --- |
| `index.html` | 首页结构与首页文案 |
| `projects.html` | 项目集合页卡片、封面、短媒介信息 |
| `project.html` | 项目详情页的通用 HTML 外壳 |
| `script.js` | `projectCatalogue` 项目内容、中英文切换、Fragments 渲染、片段大图浏览与键盘导航 |
| `styles.css` | 全局风格、字体、留白、响应式与项目特定图片布局 |
| `fragments.html` | 全部片段入口与不规则图片墙容器 |
| `fragments-by-date.html` | 按日期归档容器与大图查看入口 |
| `about-contact.html` | About / Contact 的总入口 |
| `about.html` | Education / Screenings 内容 |
| `contact.html` | 联系信息、Instagram 链接 |

## 3. 图片与字体路径规范

网站的资源目录是 `assets/`，**不是** `images/`。所有网页都在根目录，因此 HTML 和 JavaScript 中统一使用不以 `/` 开头的相对路径。

| 资源类型 | 标准路径 | 例子 |
| --- | --- | --- |
| 首页主视觉 | `assets/home-hero.jpg` | `assets/home-hero.jpg` |
| 项目集合页封面 | `assets/projects/covers/<project>-cover.jpg` | `assets/projects/covers/the-calling-cover.jpg` |
| 项目详情图 | `assets/projects/gallery/<slug>/<filename>` | `assets/projects/gallery/between-tongues/01.jpg` |
| 片段图 | `assets/fragments/YYYY-MM-NN.<ext>` | `assets/fragments/2026-08-01.jpg` |
| 本地字体 | `assets/<font-file>.<ext>` | `assets/adobe-kaiti-std.otf` |

### 命名规则

- 项目 slug 使用小写英文与连字符，例如 `still-forward-looking-back`。
- 同一项目内按照展示顺序命名：`01.jpg`、`02.jpg`、`03.jpg`；如需要主视觉，可使用 `00-main.jpg`。
- Fragments 使用 `YYYY-MM-NN`，这样文件名本身能表达日期与同月顺序。
- 路径、大小写、扩展名必须与实际文件完全一致。不要猜测文件名，也不要把本地电脑绝对路径写进网页。
- 仅从展示中删除照片时，删除或注释代码中的引用即可；不要删除源文件，除非用户明确要求永久删除。

## 4. 项目详情页数据模型

所有项目详情均由 `script.js` 的 `projectCatalogue` 渲染，并通过：

```text
project.html?work=<slug>
```

访问。新增项目时，必须同时完成以下内容：

1. 在 `projectCatalogue` 新建唯一 slug 条目。
2. 写入 `number`、`title`、`titleZh`。
3. 同时补充 `meta.en` / `meta.zh` 与 `description.en` / `description.zh`。
4. 如有外部影片，填写 `link`、`videoPreview` 与 `videoPreviewFallback`；YouTube 预览路径遵循既有 `https://i.ytimg.com/vi/<video-id>/...` 写法。
5. 按现有项目选择 `images`（顺序单图）、`galleryGroups`（多图组合）或 `postTextGallery`（说明文字之后的图组）。
6. 在 `projects.html` 手动添加集合页卡片，包含正确的链接、封面、英文/中文媒介文字与编号。
7. 为新布局添加有范围的 CSS 选择器，避免影响其他项目。

不要删除已有项目的自定义布局字段（如 `galleryLayout`、`detailLayout`、`galleryGroups`），除非用户明确要求重排该项目。`project.html` 是所有项目共用的模板；视觉差异应由数据字段和 `styles.css` 中的项目特定类实现。

## 5. 双语规则

- 默认语言为英文；语言按钮会通过 `setLanguage()` 切换页面内容。
- 静态 HTML 的双语文本使用 `data-en` 与 `data-zh` 属性；两个属性应始终成对更新。
- 项目数据使用 `title` / `titleZh`、`meta.en` / `meta.zh`、`description.en` / `description.zh`。
- 新增或替换可见文本时，除非用户只提供一种语言，否则需要同步维护两种语言；不要用机器翻译覆盖用户已经确认过的艺术家文案。
- 中文字体与英文 Athelas 风格的字体设置位于 `styles.css` 顶部；不要随意改动 `@font-face` 或 CSS 自定义变量。

## 6. Fragments 维护规则

- 图片清单在 `script.js` 的 `fragmentImages`，按 `src`、`month`、`rhythm` 记录。
- `fragments.html` 的“全部片段”排放由 `rhythm` 和 CSS 控制，顺序可以是有节奏的非日期顺序。
- `fragments-by-date.html` 的查看顺序由 `fragmentMonths` 决定：月份从新到旧；每个月内部按 `fragmentImages` 中的排列从左到右。
- 新月份必须添加到 `fragmentMonths` 的合适位置；通常放在数组最前面。
- 片段大图查看器支持点击、左右方向键与 Escape。修改归档排序后，须测试这些键盘操作。
- `assets/fragments/2026-05-03.jpg` 目前保留在素材目录但不在 `fragmentImages` 中，因此不会显示；除非用户要求，不要重新加入。

## 7. 布局与视觉维护原则

- 维持克制、极简、留白充足的视觉方向；不添加渐变装饰、花哨图形或无关动画。
- 作品图必须保留原始纵横比，使用 `object-fit: contain` 或已有规则；不要用固定高度裁切艺术作品，除非用户明确要求。
- 改一件作品的布局时，优先使用该项目专属的类（例如 `.project-detail--calling`），不要修改全局规则后让所有项目一起变动。
- 保留横构图、竖构图及并列组之间已经确认的关系。用户特别要求的“节奏感”应通过宽度、边距、对齐和组别变化实现，而不是随机摆放。
- 两张或多张图并列时，明确检查总宽、间距、上下对齐和移动端折行。
- 项目详情标题、正文和媒体宽度之间已存在用户确认的关系；修改一处尺寸前，先检查对应项目的 CSS 覆盖规则。

## 8. 安全的编辑流程

1. 先读取要修改的 HTML、`script.js` 和相关 `styles.css` 区域，确认现有项目 slug 与资源路径。
2. 只改与用户请求有关的内容，保留其他用户已确认的排版和文字。
3. 通过 `apply_patch` 进行文本修改；不要用破坏性 Git 命令恢复或清理用户文件。
4. 检查 JavaScript 语法：

   ```bash
   node --check script.js
   ```

5. 使用静态服务预览：

   ```bash
   python3 -m http.server 4173
   ```

   然后在 Google Chrome 打开 `http://127.0.0.1:4173/`，并检查相关页面的英文和中文状态。
6. 变更 `styles.css` 或 `script.js` 后，如页面没有刷新到新样式，递增相应 HTML 中 `?v=...` 的版本号或使用强制刷新。

## 9. 交付与沟通

- 每次完成网页调整后，向用户给出 Google Chrome 的本地查看链接。
- 对视觉变更，用简短中文说明改动的页面和效果，不要用技术术语替代结果说明。
- 如果图片来源、图像顺序、文案语言、YouTube 链接或部署行为存在关键歧义，先询问用户；不要自行替换艺术品素材或发布网站。
- 除非用户明确要求，否则不删除原始资源、不上传素材、不创建账号、不部署上线。

