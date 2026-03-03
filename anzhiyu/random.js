var posts=["2026/03/02/hello-world/","2026/03/02/第一篇Hexo博客/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };