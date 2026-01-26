# 关于我和我的博客

> "记录与分享，让每一次探索都有迹可循。"

---

## 我是谁？

### 个人介绍

我是 **WanForY**，一名享受慢节奏生活的互联网爱好者，目前是一名大学生。在学业之余，我喜欢：

- 玩 **Minecraft** YYDS好吧╮(╯-╰)╭
- 折腾各种网络小工具和服务，闲的没边（
- 保持悠闲自在的生活节奏，享受思考与分享的乐趣

我相信生活与兴趣的结合，能碰撞出更多有意思的火花。

### 个人感情

<style>
  .couple-card {
    width: 66.67%;
    max-width: 500px;
    margin: 2rem auto;
    padding: 2.5rem;
    background: linear-gradient(135deg,
        rgba(255, 240, 245, 0.15) 0%,
        rgba(255, 228, 225, 0.2) 50%,
        rgba(230, 230, 250, 0.15) 100%);
    backdrop-filter: blur(25px) saturate(180%);
    -webkit-backdrop-filter: blur(25px) saturate(180%);
    border-radius: 24px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow:
      0 12px 40px rgba(255, 105, 180, 0.15),
      0 4px 20px rgba(147, 112, 219, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.4);
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    position: relative;
    overflow: hidden;
  }
  .couple-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg,
        transparent,
        rgba(255, 255, 255, 0.2),
        transparent);
    transition: left 0.6s ease;
  }
  .couple-card:hover::before {
    left: 100%;
  }
  .couple-card:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow:
      0 20px 50px rgba(255, 105, 180, 0.25),
      0 8px 30px rgba(147, 112, 219, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.5);
  }
  .love-time-counter {
    text-align: center;
    margin-bottom: 2rem;
    padding: 1.2rem;
    background: linear-gradient(45deg, rgba(255, 182, 193, 0.2), rgba(216, 191, 216, 0.2));
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 2;
  }
  .love-time-title {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.8rem;
    background: linear-gradient(45deg, #e84393, #c44569);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: 1px;
  }
  .time-display {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    gap: 0.5rem;
    font-size: 1.4rem;
    font-weight: 700;
    color: #333;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    line-height: 1.4;
  }
  .time-unit {
    display: flex;
    align-items: baseline;
    gap: 0.2rem;
    white-space: nowrap;
  }
  .time-value {
    color: #e84393;
    font-size: 1.6rem;
    min-width: 2rem;
    text-align: center;
    text-shadow: 0 1px 3px rgba(232, 67, 147, 0.3);
  }
  .time-label {
    color: #c44569;
    font-size: 1.2rem;
    font-weight: 600;
  }
  .avatar-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
    position: relative;
    z-index: 2;
  }
  .avatar-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  .avatar {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(45deg, #ffecd2, #fcb69f);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
  .avatar-glow {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: conic-gradient(from 0deg, #ff6b9d, #c44569, #e84393, #ff6b9d);
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: -1;
  }
  .avatar:hover .avatar-glow {
    opacity: 0.6;
    animation: rotate 2s linear infinite;
  }
  .avatar:hover {
    transform: scale(1.15) rotate(5deg);
    box-shadow: 0 12px 35px rgba(255, 105, 180, 0.3);
  }
  .avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    transition: transform 0.3s ease;
  }
  .avatar:hover img {
    transform: scale(1.05);
  }
  .connection-line {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    color: #e84393;
    filter: drop-shadow(0 0 10px rgba(232, 67, 147, 0.3));
  }
  .lightning {
    filter: drop-shadow(0 0 5px currentColor);
    animation: sparkle 1.8s ease-in-out infinite;
  }
  .heart {
    font-size: 2rem;
    animation: heartbeat 1.2s ease-in-out infinite;
    filter: drop-shadow(0 0 8px currentColor);
    background: linear-gradient(45deg, #ff6b9d, #e84393);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .name {
    font-size: 1.1rem;
    font-weight: 700;
    color: #c44569;
    text-align: center;
    opacity: 0.9;
    transition: all 0.3s ease;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background: linear-gradient(45deg, #c44569, #e84393);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: 0.5px;
  }
  .avatar-section:hover .name {
    opacity: 1;
    transform: translateY(-2px);
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
  @keyframes sparkle {
    0%,
    100% {
      opacity: 0.8;
      transform: scale(1) rotate(0deg);
    }
    50% {
      opacity: 1;
      transform: scale(1.15) rotate(5deg);
      filter: drop-shadow(0 0 8px currentColor);
    }
  }
  @keyframes heartbeat {
    0%,
    100% {
      transform: scale(1);
    }
    25% {
      transform: scale(1.3);
    }
    50% {
      transform: scale(1.1);
    }
    75% {
      transform: scale(1.25);
    }
  }
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @media (max-width: 768px) {
    .couple-card {
      width: 90%;
      padding: 2rem;
    }
    .time-display {
      font-size: 1.1rem;
      gap: 0.3rem;
    }
    .time-value {
      font-size: 1.3rem;
      min-width: 1.8rem;
    }
    .time-label {
      font-size: 1rem;
    }
    .avatar {
      width: 70px;
      height: 70px;
    }
    .avatar-container {
      gap: 2rem;
    }
    .connection-line {
      gap: 0.5rem;
    }
    .lightning {
      width: 45px;
      height: 22px;
    }
    .heart {
      font-size: 1.6rem;
    }
    .name {
      font-size: 1rem;
    }
  }
  @media (max-width: 480px) {
    .time-display {
      font-size: 0.95rem;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.2rem;
    }
    .time-value {
      font-size: 1.1rem;
      min-width: 1.5rem;
    }
    .time-label {
      font-size: 0.85rem;
    }
  }
</style>
<div class="couple-card">
  <div class="love-time-counter">
    <div class="love-time-title">我们已经相爱</div>
    <div class="time-display">
      <div class="time-unit">
        <span class="time-value" id="years">0</span>
        <span class="time-label">年</span>
      </div>
      <div class="time-unit">
        <span class="time-value" id="days">0</span>
        <span class="time-label">天</span>
      </div>
      <div class="time-unit">
        <span class="time-value" id="hours">0</span>
        <span class="time-label">小时</span>
      </div>
      <div class="time-unit">
        <span class="time-value" id="minutes">0</span>
        <span class="time-label">分钟</span>
      </div>
      <div class="time-unit">
        <span class="time-value" id="seconds">0</span>
        <span class="time-label">秒</span>
      </div>
    </div>
  </div>
  <div class="avatar-container">
    <div class="avatar-section">
      <div class="avatar left-avatar" oncontextmenu="return false" ondragstart="return false">
        <div class="avatar-glow"></div>
        <img src="https://q1.qlogo.cn/g?b=qq&nk=3399806248&s=640" alt="左头像" oncontextmenu="return false"
          ondragstart="return false" />
      </div>
      <div class="name">WanForY</div>
    </div>
    <div class="connection-line">
      <svg class="lightning" viewBox="0 0 100 50" width="60" height="30">
        <path d="M10,25 L40,15 L35,25 L90,25 L60,35 L65,25 Z" fill="currentColor" opacity="0.8" />
      </svg>
      <div class="heart">❤️</div>
    </div>
    <div class="avatar-section">
      <div class="avatar right-avatar" oncontextmenu="return false" ondragstart="return false">
        <div class="avatar-glow"></div>
        <img src="https://q1.qlogo.cn/g?b=qq&nk=239689209&s=640" alt="右头像" oncontextmenu="return false"
          ondragstart="return false" />
      </div>
      <div class="name">另一半</div>
    </div>
  </div>
</div>
<script>
  const startDate = new Date("2022-07-14 17:05:20");// 请修改这里的起始日期为你们的相爱日期
  function calculateLoveTime() {
    const now = new Date();
    let diff = now - startDate;
    let years = now.getFullYear() - startDate.getFullYear();
    let monthDiff = now.getMonth() - startDate.getMonth();
    let dayDiff = now.getDate() - startDate.getDate();
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      years--;
    }
    const adjustedStartDate = new Date(startDate);
    adjustedStartDate.setFullYear(startDate.getFullYear() + years);
    diff = now - adjustedStartDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    document.getElementById('years').textContent = years;
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
  }
  calculateLoveTime();
  setInterval(calculateLoveTime, 1000);
</script>
    


---

## 博客初衷

这个博客主要作为我的分享，用于：

- **技术分享**：记录和分享在互联网、建站、工具使用等方面的学习心得
- **游戏记录**：分享 Minecraft 及其他游戏中的有趣内容、建筑、红石机关等
- **生活随笔**：偶尔吹吹水~
- **项目展示**：我搭建和维护的一些小服务、工具的介绍和使用指南

希望这里不仅是我个人的记录空间，也能为偶然到访的你带来一些灵感和帮助。

---

## 博客技术栈

本站的搭建和使用到的服务如下：

| 组件     | 名称/技术                    | 备注                |
| -------- | ---------------------------- | ------------------- |
| 托管平台 | Cloudflare / EdgeOne         | 全球加速，安全防护  |
| 博客框架 | [Astro](https://astro.build) | 现代静态站点生成器  |
| 主题模板 | [Twilight](https://github.com/Spr-Aachen/Twilight) | 简约美观的Astro主题 |
| 版本控制 | Git + GitHub                 | 代码托管与协作      |
| 评论系统 | [giscus](https://giscus.app/) | 通过github登陆的评论系统  |

整个博客以**静态站点**形式部署，兼顾了访问速度、安全性与可维护性。

---

## 未来计划

1.  **持续分享**：定期更新技术心得、生活感悟、游戏趣事
2.  **持续维护**：保持博客内容更新，优化访问体验
3.  **提供服务**：逐步提供一些自建、自维护的小工具或服务
4.  **增进交流**：与更多志同道合的朋友互动、合作

---

## 💬 互动与联系

**本人特别悠闲，此博客的所有评论留言我都会高强度回复！！！欢迎大家留言！！！**

如果你：

- 对我的某篇文章有共鸣或疑问
- 有相似的兴趣爱好（尤其是Minecraft！）
- 想交流建站、技术相关的问题
- 单纯想打个招呼

都欢迎在文章下方留言，我会尽快回复！也欢迎通过以下方式找到我：

- 📧 邮箱：可通过评论区或后续添加的联系表单获取
- 🔗 友链：如果你也有个人博客/网站，欢迎[申请友链](https://blog.wanfory.top/friends/)！请确保你的站点也添加了本站链接哦~

---

> 最后，感谢你的到访！希望你能在这里找到一些有趣的内容，也欢迎常来逛逛。  
> 祝你有美好的一天！

---

_最后更新：2026年1月27日_  
_本博客采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 协议共享内容_
