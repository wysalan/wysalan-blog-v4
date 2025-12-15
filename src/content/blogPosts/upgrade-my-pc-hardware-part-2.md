---
title: '主力電腦升級計畫 #1：R7 5800X + 利民 PA120'
description: '再次升級 CPU，並且同步更換散熱器'
categories: '開箱'
tags: ['PC Upgrade']
pubDate: '2024-06-29 20:54:55'
updatedDate: '2025-11-22 15:48:30'
coverImage: 'https://storage.googleapis.com/salan_blog/upgrade-my-pc-hardware-part-2.webp'
coverImageCredit: ''
---

## 前言

繼上次更新硬體之後，最近又升級了 CPU 和散熱，寫篇文章記錄一下。

## 開箱

### AMD Ryzen 7 5800X

從 PTT HardwareSale 徵到的，保固內、完整盒裝而且還是 B2 步進的

![AMD Ryzen 7 5800X 包裝盒](https://i.imgur.com/2lokGoR.jpg)

內容物是這些

![AMD Ryzen 7 5800X 包裝內容物](https://i.imgur.com/NLLLVzh.jpg)

驗明真身

![AMD Ryzen 7 5800X 本體](https://i.imgur.com/87CW5rY.jpg)

### 利民 Peerless Assassin 120

換完 CPU 後發現原本的塔散有點壓不住，所以就跑去買 PA120

![利民 Peerless Assassin 120 盒裝](https://i.imgur.com/0pPFYFM.jpg)

詳細規格

![利民 Peerless Assassin 120 詳細規格](https://i.imgur.com/lvBkvwo.jpg)

內容物一覽，有散熱器本體、兩個風扇、配件盒和說明書

![利民 Peerless Assassin 120 包裝內容](https://i.imgur.com/9QmVSJC.jpg)

![利民 Peerless Assassin 120 本體及配件](https://i.imgur.com/fZ83rzY.jpg)

跟原本的比一比，從單塔單扇升級成雙塔雙扇、風扇尺寸從 9 公分變成 12 公分，熱管也多了兩根

![https://i.imgur.com/ZMEVtjr.jpg](https://i.imgur.com/ZMEVtjr.jpg)

CPU 接觸面都是鍍鎳銅底

![https://i.imgur.com/YhrRTtB.jpg](https://i.imgur.com/YhrRTtB.jpg)

更換前與更換後，PA120 真的很大顆

![https://i.imgur.com/gnqnZCA.jpg](https://i.imgur.com/gnqnZCA.jpg)

![https://i.imgur.com/kKkwM6v.jpg](https://i.imgur.com/kKkwM6v.jpg)

## 溫度測試

使用 AIDA 64 的 FPU 單烤來比較 True Spirit 90M 和 Peerless Assassin 120 的溫度表現

先看原本壓 R5 3600 的表現，雖然已經撞溫度牆，但頻率還能穩定跑在 3.9~4.0 Ghz

![https://i.imgur.com/iaRDAAf.png](https://i.imgur.com/iaRDAAf.png)

把 CPU 換成 R7 5800X 後，只要 20 秒溫度就會跑到 90 度以上，並且頻率也從 4.2 Ghz 降到 4.05 Ghz 左右

![https://i.imgur.com/MnD0H6L.png](https://i.imgur.com/MnD0H6L.png)

![https://i.imgur.com/iqfwcFf.png](https://i.imgur.com/iqfwcFf.png)

接著把散熱器換成 PA120，就算跑 20 分鐘也只有 83 度，並且頻率穩定在 4.3 Ghz

![https://i.imgur.com/8sbcD01.png](https://i.imgur.com/8sbcD01.png)

## 跑分測試

### 體質分數

找了一款能夠測出 CPU 體質分的軟體，我這顆是 113 分，查一下好像是普通偏小雷

![https://i.imgur.com/AufoIQv.png](https://i.imgur.com/AufoIQv.png)

### CPU-Z

AMD Ryzen 5 3600

![https://i.imgur.com/ab3NWyW.png](https://i.imgur.com/ab3NWyW.png)

AMD Ryzen 7 5800X

![https://i.imgur.com/hNvpUY2.png](https://i.imgur.com/hNvpUY2.png)

#### 詳細測試

關閉 PBO

| Model  | R7 5800X | R7 5800X  | R7 5800X | R7 5800X | R7 5800X  | R7 5800X |
| ------ | -------- | --------- | -------- | -------- | --------- | -------- |
| 室溫   | Unknown  | Unknown   | Unknown  | 27       | Unknown   | Unknown  |
| 電壓   | 1.15v    | 1.2v      | 1.2v     | 1.2v     | 1.2v      | 1.25v    |
| 防掉壓 | High     | Turbo     | Turbo    | Turbo    | Turbo     | Turbo    |
| 頻率   | 4.4 Ghz  | 4.425 Ghz | 4.45 Ghz | 4.45 Ghz | 4.475 Ghz | 4.5 Ghz  |
| 單核心 | 555.8    | 599.8     | 598.0    | 602.3    | 602       | 598.5    |
| 多核心 | 5780.3   | 6319.8    | 6243.1   | 6412.4   | 6348.0    | 6382.1   |
| 倍率   | 10.40    | 10.54     | 10.44    | 10.65    | 10.54     | 10.66    |

開啟 PBO

| Model  | R5 3600 | R7 5800X | R7 5800X | R7 5800X 早 | R7 5800X 晚 | R7 5800X |
| ------ | ------- | -------- | -------- | ----------- | ----------- | -------- |
| 散熱器 | TS90M   | TS90M    | PA120    | PA120       | PA120       | PA120    |
| PBO    | Auto    | Enable   | Enable   | Auto        | Auto        | Disable  |
| 單核心 | 470.7   | 611.9    | 612.5    | 621.6       | 635.7       | 625.0    |
| 多核心 | 3944.9  | 6270.0   | 6168.8   | 6407.3      | 6405.8      | 6407.1   |
| 倍率   | 8.38    | 10.25    | 10.07    | 10.31       | 10.08       | 10.25    |

### 3DMark CPU Profile

AMD Ryzen 5 3600

![https://i.imgur.com/ESXYrKr.png](https://i.imgur.com/ESXYrKr.png)

AMD Ryzen 7 5800X

![https://i.imgur.com/oaL7pka.png](https://i.imgur.com/oaL7pka.png)

#### 詳細測試

| Model      | R5 3600 | R7 5800X | R7 5800X | R7 5800X | R7 5800X        |
| ---------- | ------- | -------- | -------- | -------- | --------------- |
| 散熱器     | TS90M   | PA120    | PA120    | PA120    | PA120           |
| 室溫       | 27~30   | 29       | 30       | 26       | 26              |
| PBO        | Auto    | Enable   | Auto     | Auto     | 1.2v / 4.45 Ghz |
| 1 thread   | 689     | 906      | 922      | 950      | 882             |
| 2 threads  | 1384    | 1783     | 1804     | 1865     | 1746            |
| 4 threads  | 2731    | 3455     | 3493     | 3521     | 3420            |
| 8 threads  | 4053    | 5877     | 5978     | 5831     | 5887            |
| 16 threads | 4777    | 7362     | 7479     | 7838     | 7537            |
| Max thread | 4756    | 7375     | 7493     | 7833     | 7552            |

### Cinebench R23

AMD Ryzen 5 3600

![https://i.imgur.com/Kfw8skZ.png](https://i.imgur.com/Kfw8skZ.png)

AMD Ryzen 7 5800X

![https://i.imgur.com/5ghVNWf.png](https://i.imgur.com/5ghVNWf.png)

#### 詳細測試

| Model        | R5 3600 | R7 5800X | R7 5800X | R7 5800X        |
| ------------ | ------- | -------- | -------- | --------------- |
| 散熱器       | TS90M   | PA120    | PA120    | PA120           |
| 室溫         | 27      | 29       | 26       | 25              |
| PBO          | Auto    | Enable   | Auto     | 1.2v / 4.45 Ghz |
| CPU (Multi)  | 9142    | 14026    | 14703    | 13981           |
| CPU (Single) | 1159    | 1484     | 1548     | 1433            |
| MP Ratio     | 7.89x   | 9.45x    | 9.50x    | 9.75x           |

### Cinebench 2024

AMD Ryzen 5 3600

![https://i.imgur.com/9qFqATW.png](https://i.imgur.com/9qFqATW.png)

AMD Ryzen 7 5800X

![https://i.imgur.com/330BI95.png](https://i.imgur.com/330BI95.png)

#### 詳細測試

| Model        | R5 3600 | R7 5800X | R7 5800X | R7 5800X        |
| ------------ | ------- | -------- | -------- | --------------- |
| 散熱器       | TS90M   | TS90M    | PA120    | PA120           |
| 室溫         | 27      | 29       | 30       | 25              |
| PBO          | Auto    | Enable   | Auto     | 1.2v / 4.45 Ghz |
| GPU          | 5500    | 5606     | 5636     | N/A             |
| CPU (Multi)  | 539     | 792      | 849      | 812             |
| CPU (Single) | 70      | 91       | 95       | 88              |
| MP Ratio     | 7.72x   | 8.86x    | 8.97x    | 9.22x           |

### Super PI

AMD Ryzen 5 3600

![https://i.imgur.com/jvUep9m.png](https://i.imgur.com/jvUep9m.png)

AMD Ryzen 7 5800X

![https://i.imgur.com/uIdnVDM.png](https://i.imgur.com/uIdnVDM.png)

#### 詳細測試

| Model  | R5 3600   | R7 5800X | R7 5800X |
| ------ | --------- | -------- | -------- |
| 散熱器 | TS90M     | TS90M    | PA120    |
| 室溫   | Unknown   | Unknown  | 30       |
| PBO    | Auto      | Enable   | Enable   |
| 32M    | 12:58.125 | 6:28.953 | 6:44.656 |

### 7-Zip 效能測試

AMD Ryzen 5 3600

![https://i.imgur.com/TpliEz3.png](https://i.imgur.com/TpliEz3.png)

AMD Ryzen 7 5800X

![https://i.imgur.com/ZdTpPI3.png](https://i.imgur.com/ZdTpPI3.png)

### 小結

單核心平均提升 33%、多核心則是 58.8%，提升幅度還蠻大的

## 降壓定頻

因為塔散風扇會忽快忽慢，測試一下發現是 CPU 電壓變高的時候風扇轉速就會增加

雖然不影響使用，但因為電腦擺在桌上，加上機殼隔音不好，有什麼動靜就會聽得一清二楚，因此只好嘗試用降壓定頻讓電壓不要那麼高（有試過 PBO 2，但調了一下發現好麻煩，因此作罷）

最後測試的結果是使用 1.2v / 4.45 Ghz 能夠兼顧溫度和效能，風扇也不再頻繁飆高速了，可喜可賀

以下附上降壓定頻後的跑分成績：

### CPU-Z

![https://i.imgur.com/FpdZKMD.png](https://i.imgur.com/FpdZKMD.png)

### 3DMark CPU Profile

![https://i.imgur.com/9ggh8mB.png](https://i.imgur.com/9ggh8mB.png)

### Cinebench R23

![https://i.imgur.com/DDuCwtt.png](https://i.imgur.com/DDuCwtt.png)

### Cinebench 2024

![https://i.imgur.com/49QJMKI.png](https://i.imgur.com/49QJMKI.png)

## 超頻

除此之外也試著超頻，不過最好的設定也只能跑在 1.25v / 4.55 Ghz，而且跑測試沒幾秒就黑畫面了

我猜是主機板供電數和散熱不足的原因，不然上 4.6 Ghz 應該也不是問題

![https://i.imgur.com/gruTmlA.png](https://i.imgur.com/gruTmlA.png)

## 結論

經過這次升級後，目前的效能已經足夠用到換換病發作了，之後再考慮換個機殼或顯卡吧。
