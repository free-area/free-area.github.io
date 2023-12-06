---
title: Markdown 测试
icon: fab fa-markdown
order: 2
category:
  - 使用指南
tag:
  - Markdown
---

## 提示容器

### 信息容器

````
::: info 自定义标题

信息容器，包含 `代码` 与 [链接](#提示容器)。

```js
const a = 1;
```
:::
````



::: info 自定义标题

信息容器，包含 `代码` 与 [链接](#提示容器)。

```javascript
const a = 1;
```

:::

### 提示容器

```
::: tip 自定义标题

提示容器

:::
```



::: tip 自定义标题

提示容器

:::

### 警告容器



```
::: warning 自定义标题

警告容器

:::
```



::: warning 自定义标题

警告容器

:::

### 危险容器

```
::: caution 自定义标题

危险容器

:::
```





::: caution 自定义标题

危险容器

:::



### 重要容器

```
::: important

重要信息

:::
```

::: important

重要信息

:::

### 详情容器

```
::: details 自定义标题

详情容器

:::
```



::: details 自定义标题

详情容器

:::

## 选项卡

````
::: code-tabs

@tab pnpm

```bash
pnpm add -D vuepress-theme-hope
```

@tab yarn

```bash
yarn add -D vuepress-theme-hope
```

@tab:active npm

```bash
npm i -D vuepress-theme-hope
```

:::
````

::: code-tabs

@tab pnpm

```bash
pnpm add -D vuepress-theme-hope
```

@tab yarn

```bash
yarn add -D vuepress-theme-hope
```

@tab:active npm

```bash
npm i -D vuepress-theme-hope
```

:::

## 对齐

```
::: center

我是居中的

:::

::: right

我在右对齐

:::
```

::: center

我是居中的

:::

::: right

我在右对齐

:::

## 属性支持

### id

```
一个拥有 ID 的 **单词**{#word}。
```

一个拥有 ID 的 **单词**{#word}。



\\

\\

\

\





```
<a href="#word">跳转单词</a>
```

<a href="#word">跳转单词</a>

##  脚注

此文字有脚注[^first].



\

\

\\

[^first]: 这是脚注内容

## 任务列表



- [ ] 计划1
- [x] 计划二

\- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/tasklist.html)



