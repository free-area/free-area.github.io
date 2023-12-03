import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "如何使用",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "文章",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
    "intro",
    "slides",
  ],
  "/dl/neural_de/":[
    {
      text: "神经微分方程",
      icon: "book",
      children: ["绪论.md","node/","cnf/","irs/"],

    }
  ],
});
