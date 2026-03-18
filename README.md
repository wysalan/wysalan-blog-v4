# WySalan's Blog - 沙連四坊

我的第四代個人網站

## 特色

+ 極簡風格
+ 支援 Astro 6
+ 支援 Markdown & MDX 格式
+ 支援深色模式
+ 響應式設計
+ PhotoSwipe 圖片燈箱

## 使用技術

### 網站

+ [Astro](https://astro.build)
+ [TypeScript](https://www.typescriptlang.org/)
+ [TailwindCSS](https://tailwindcss.com/)

### 格式化

+ ESLint
+ Prettier

### 主題

以 [Saral Theme](https://github.com/yashjawale/saral-theme-astro) 為基礎進行修改，使其更適合個人網站用途

與原版的差異點：

+ 重新設計的 `首頁`、`文章`、`文章檢視`、`404` 頁面
+ 新增 `分類`、`標籤` 頁面
+ `文章`、`分類`、`標籤` 頁面新增分頁功能
+ 新增圖片檢視功能
+ 改善文章目錄使用體驗（目前章節標記、自動捲動至目前檢視的章節）
+ 完善 Open Graph 標籤資訊
+ 等等…

### 非官方套件整合

+ [PhotoSwipe](https://github.com/dimsemenov/photoswipe)
+ [astro-umami](https://github.com/yeskunall/astro-umami)

### 部署

+ 網站：AWS Amplify
+ 圖床：AWS S3

## 結構

```
/
├─ public/
├─ src/
│  ├─ assets/
│  ├─ components/
│  │  ├─ common/
│  │  ├─ libs/
│  │  ├─ mdx/
│  │  └─ toc/
│  ├─ content/
│  │  └─ blogPosts/
│  ├─ layouts/
│  ├─ pages/
│  ├─ plugins/
│  ├─ styles/
│  ├─ utils/
│  └─ site.config.ts
└─ astro.config.mjs
```

## 未來規劃

### 頁面

- [ ] 新增 `Uses` 頁面

### 功能

- [ ] 重構深色模式
- [ ] 手機版顯示文章目錄（瀏覽文章時在側邊欄切換）
- [ ] 動態產生 Open Graph 封面圖片
- [ ] 轉移至 UnoCSS
- [ ] 格式化工具改用 Biome
- [ ] 新增搜尋功能