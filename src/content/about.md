# 关于我和我的博客

> "记录与分享，让每一次探索都有迹可循。"

---

## 我是谁？

#### 个人介绍

我是 **WanForY**，一名享受慢节奏生活的互联网爱好者，目前是一名大学生。在学业之余，我喜欢：

- 玩 **Minecraft** YYDS好吧╮(╯-╰)╭
- 折腾各种网络小工具和服务，闲的没边（
- 保持悠闲自在的生活节奏，享受思考与分享的乐趣

我相信生活与兴趣的结合，能碰撞出更多有意思的火花。

#### 情感信息

<div>
<script>
  // 情侣卡片脚本
(function() {
  // 等待页面加载完成
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createCoupleCard);
  } else {
    createCoupleCard();
  }
  
  function createCoupleCard() {
    // 避免重复创建
    if (document.getElementById('couple-card-container')) {
      return;
    }
    
    // 创建样式
    const style = document.createElement('style');
    style.textContent = `
      @keyframes heartbeat {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
      }
      
      @keyframes pulse {
        0%, 100% { opacity: 0.7; }
        50% { opacity: 1; }
      }
      
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
      
      @keyframes float2 {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-15px); }
      }
      
      @keyframes lightningGlow {
        0%, 100% { filter: drop-shadow(0 0 8px rgba(255, 105, 180, 0.7)); }
        50% { filter: drop-shadow(0 0 15px rgba(255, 105, 180, 0.9)); }
      }
      
      #couple-card-container {
        position: relative;
        width: 100%;
        max-width: 800px;
        height: 450px;
        margin: 40px auto;
        border-radius: 25px;
        background: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1), 0 1px 8px rgba(255, 255, 255, 0.3) inset;
        border: 1px solid rgba(255, 255, 255, 0.3);
        padding: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        font-family: 'Segoe UI', Arial, sans-serif;
      }
      
      #couple-card-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        border-radius: 25px;
        z-index: 0;
      }
      
      #couple-card-decoration {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle at 30% 30%, rgba(255, 105, 180, 0.1) 0%, transparent 50%),
                    radial-gradient(circle at 70% 70%, rgba(30, 144, 255, 0.1) 0%, transparent 50%);
        border-radius: 25px;
        z-index: 0;
      }
      
      .couple-avatars {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        position: relative;
        z-index: 2;
        margin-bottom: 30px;
      }
      
      .couple-avatar {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        background-size: cover;
        background-position: center;
        border: 5px solid rgba(255, 255, 255, 0.8);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.5) inset;
        position: relative;
        z-index: 3;
        transition: transform 0.3s ease;
      }
      
      .couple-avatar:hover {
        transform: scale(1.05);
      }
      
      #couple-lightning-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 400px;
        height: 120px;
        z-index: 1;
      }
      
      #couple-title {
        color: #ff4081;
        font-size: 2.5rem;
        font-weight: 700;
        margin-top: 20px;
        text-shadow: 0 2px 10px rgba(255, 64, 129, 0.3);
        z-index: 2;
        position: relative;
        letter-spacing: 2px;
        animation: pulse 2s infinite;
        text-align: center;
      }
      
      #couple-subtitle {
        color: #666;
        font-size: 1.2rem;
        font-weight: 300;
        margin-top: 10px;
        z-index: 2;
        position: relative;
        letter-spacing: 1px;
        font-style: italic;
        text-align: center;
      }
      
      .couple-names {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 20px;
        z-index: 2;
        position: relative;
      }
      
      .couple-name {
        font-size: 1.5rem;
        font-weight: 600;
        text-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      }
      
      .couple-buttons {
        display: flex;
        gap: 20px;
        margin-top: 30px;
        z-index: 2;
        position: relative;
      }
      
      .couple-button {
        background: linear-gradient(45deg, #ff4081, #ff80ab);
        color: white;
        border: none;
        padding: 12px 24px;
        border-radius: 50px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        box-shadow: 0 5px 15px rgba(255, 64, 129, 0.4);
        transition: all 0.3s ease;
        letter-spacing: 1px;
      }
      
      .couple-button:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 20px rgba(255, 64, 129, 0.6);
      }
      
      .couple-button.share {
        background: linear-gradient(45deg, #2196f3, #03a9f4);
        box-shadow: 0 5px 15px rgba(33, 150, 243, 0.4);
      }
      
      .couple-button.share:hover {
        box-shadow: 0 8px 20px rgba(33, 150, 243, 0.6);
      }
      
      @media (max-width: 768px) {
        #couple-card-container {
          height: auto;
          padding: 30px 20px;
          margin: 20px auto;
        }
        
        .couple-avatar {
          width: 120px;
          height: 120px;
        }
        
        #couple-lightning-container {
          width: 300px;
        }
        
        #couple-title {
          font-size: 2rem;
        }
        
        .couple-buttons {
          flex-direction: column;
          align-items: center;
        }
      }
    `;
    
    // 创建卡片容器
    const container = document.createElement('div');
    container.id = 'couple-card-container';
    
    // 创建背景
    const bg = document.createElement('div');
    bg.id = 'couple-card-bg';
    
    // 创建装饰
    const decoration = document.createElement('div');
    decoration.id = 'couple-card-decoration';
    
    // 创建头像容器
    const avatarsContainer = document.createElement('div');
    avatarsContainer.className = 'couple-avatars';
    
    // 创建左侧头像
    const leftAvatar = document.createElement('div');
    leftAvatar.className = 'couple-avatar';
    leftAvatar.style.backgroundImage = 'url("https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80")';
    
    // 创建右侧头像
    const rightAvatar = document.createElement('div');
    rightAvatar.className = 'couple-avatar';
    rightAvatar.style.backgroundImage = 'url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80")';
    
    // 创建闪电连接线容器
    const lightningContainer = document.createElement('div');
    lightningContainer.id = 'couple-lightning-container';
    
    // 创建闪电连接线SVG
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    svg.setAttribute("viewBox", "0 0 400 120");
    
    // 创建闪电路径
    const lightningPath = document.createElementNS(svgNS, "path");
    lightningPath.setAttribute("d", "M20,60 Q80,30 100,60 Q120,90 180,60 Q200,30 250,60 Q280,90 330,60");
    lightningPath.setAttribute("fill", "none");
    lightningPath.setAttribute("stroke", "rgba(255, 105, 180, 0.7)");
    lightningPath.setAttribute("stroke-width", "8");
    lightningPath.setAttribute("stroke-linecap", "round");
    lightningPath.setAttribute("stroke-dasharray", "1, 10");
    lightningPath.style.animation = "lightningGlow 2s infinite";
    
    // 创建爱心
    const heart = document.createElementNS(svgNS, "path");
    heart.setAttribute("d", "M200,60 C210,50 220,50 225,55 C235,65 235,75 225,85 C215,95 200,105 200,105 C200,105 185,95 175,85 C165,75 165,65 175,55 C180,50 190,50 200,60 Z");
    heart.setAttribute("fill", "#ff4081");
    heart.setAttribute("stroke", "#fff");
    heart.setAttribute("stroke-width", "3");
    heart.style.filter = "drop-shadow(0 0 12px rgba(255, 64, 129, 0.9))";
    heart.style.animation = "heartbeat 1.5s ease-in-out infinite";
    
    // 添加标题
    const title = document.createElement('h1');
    title.id = 'couple-title';
    title.textContent = 'Forever Together';
    
    // 添加副标题
    const subtitle = document.createElement('p');
    subtitle.id = 'couple-subtitle';
    subtitle.textContent = 'Connected by fate, bound by love';
    
    // 创建名字标签
    const nameContainer = document.createElement('div');
    nameContainer.className = 'couple-names';
    
    const leftName = document.createElement('div');
    leftName.className = 'couple-name';
    leftName.textContent = 'Emma';
    leftName.style.color = '#ff4081';
    leftName.style.animation = 'float 3s ease-in-out infinite';
    
    const rightName = document.createElement('div');
    rightName.className = 'couple-name';
    rightName.textContent = 'Alex';
    rightName.style.color = '#2196f3';
    rightName.style.animation = 'float2 3s ease-in-out infinite 0.5s';
    
    // 创建交互按钮
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'couple-buttons';
    
    const likeButton = document.createElement('button');
    likeButton.className = 'couple-button';
    likeButton.textContent = '💖 Send Love';
    likeButton.onclick = function() {
      alert('💕 Love sent! Wishing you eternal happiness!');
      likeButton.textContent = '💕 Love Sent!';
      setTimeout(() => {
        likeButton.textContent = '💖 Send Love';
      }, 1500);
    };
    
    const shareButton = document.createElement('button');
    shareButton.className = 'couple-button share';
    shareButton.textContent = '✨ Share Blessing';
    shareButton.onclick = function() {
      alert('🌟 Blessing shared! May love always surround you!');
      shareButton.textContent = '🌟 Blessing Shared!';
      setTimeout(() => {
        shareButton.textContent = '✨ Share Blessing';
      }, 1500);
    };
    
    // 组装元素
    svg.appendChild(lightningPath);
    svg.appendChild(heart);
    lightningContainer.appendChild(svg);
    
    nameContainer.appendChild(leftName);
    nameContainer.appendChild(rightName);
    
    avatarsContainer.appendChild(leftAvatar);
    avatarsContainer.appendChild(rightAvatar);
    
    buttonContainer.appendChild(likeButton);
    buttonContainer.appendChild(shareButton);
    
    container.appendChild(bg);
    container.appendChild(decoration);
    container.appendChild(avatarsContainer);
    container.appendChild(lightningContainer);
    container.appendChild(title);
    container.appendChild(subtitle);
    container.appendChild(nameContainer);
    container.appendChild(buttonContainer);
    
    // 添加到页面
    document.head.appendChild(style);
    
    // 创建容器来包装卡片
    const cardWrapper = document.createElement('div');
    cardWrapper.style.textAlign = 'center';
    cardWrapper.style.margin = '40px 0';
    cardWrapper.appendChild(container);
    
    // 在Markdown内容后插入卡片
    const markdownBody = document.querySelector('article') || 
                         document.querySelector('.markdown-body') || 
                         document.querySelector('#readme') || 
                         document.querySelector('.container') ||
                         document.body;
    
    // 尝试在第一个H1标题后插入，如果没有则在文档末尾插入
    const firstH1 = markdownBody.querySelector('h1');
    if (firstH1) {
      firstH1.parentNode.insertBefore(cardWrapper, firstH1.nextSibling);
    } else {
      markdownBody.appendChild(cardWrapper);
    }
    
    // 添加自定义头像的提示
    const hint = document.createElement('div');
    hint.style.textAlign = 'center';
    hint.style.marginTop = '20px';
    hint.style.fontSize = '0.9rem';
    hint.style.color = '#666';
    hint.innerHTML = '<em>提示：要更换头像，请修改脚本中的图片URL</em>';
    cardWrapper.appendChild(hint);
  }
})();
</script>
</div>

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
