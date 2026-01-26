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

<div class="couple-card">
  <div class="avatar-container">
    <div class="avatar-section">
      <div class="avatar left-avatar" oncontextmenu="return false" ondragstart="return false">
        <img src="https://q1.qlogo.cn/g?b=qq&nk=3399806248&s=640" alt="左头像" 
             oncontextmenu="return false" ondragstart="return false" />
      </div>
      <div class="name">WanForY</div>
    </div>
    
    <div class="connection-line">
      <svg class="lightning" viewBox="0 0 100 50" width="60" height="30">
        <path d="M10,25 L40,15 L35,25 L90,25 L60,35 L65,25 Z" fill="currentColor" opacity="0.8"/>
      </svg>
      <div class="heart">❤️</div>
    </div>
    
    <div class="avatar-section">
      <div class="avatar right-avatar" oncontextmenu="return false" ondragstart="return false">
        <img src="https://q1.qlogo.cn/g?b=qq&nk=239689209&s=640" alt="右头像" 
             oncontextmenu="return false" ondragstart="return false" />
      </div>
      <div class="name">另一半</div>
    </div>
  </div>
</div>

<style>
.couple-card {
  width: 66.67%;
  max-width: 500px;
  margin: 2rem auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.couple-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.avatar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

.avatar-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid currentColor;
  transition: transform 0.3s ease;
}

.avatar:hover {
  transform: scale(1.1);
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.connection-line {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: currentColor;
}

.lightning {
  filter: drop-shadow(0 0 2px currentColor);
  animation: sparkle 2s ease-in-out infinite;
}

.heart {
  font-size: 1.5rem;
  animation: heartbeat 1.5s ease-in-out infinite;
  filter: drop-shadow(0 0 3px currentColor);
}

.name {
  font-size: 1rem;
  font-weight: 600;
  color: currentColor;
  text-align: center;
  opacity: 0.9;
  transition: opacity 0.3s ease;
}

.avatar-section:hover .name {
  opacity: 1;
}

@keyframes sparkle {
  0%, 100% { opacity: 0.7; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.1); }
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .couple-card {
    width: 90%;
    padding: 1.5rem;
  }
  
  .avatar {
    width: 60px;
    height: 60px;
  }
  
  .connection-line {
    gap: 0.3rem;
  }
  
  .lightning {
    width: 40px;
    height: 20px;
  }
  
  .heart {
    font-size: 1.2rem;
  }
}
</style>

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
| 主题模板 | Twilight                     | 简约美观的Astro主题 |
| 版本控制 | Git + GitHub                 | 代码托管与协作      |
| 评论系统 | 待定/可配置                  | 支持多种第三方评论  |

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
