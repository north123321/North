document.addEventListener('DOMContentLoaded',()=>{

    // 轮播图
    let banner = document.getElementById('banner');
    let ul = banner.children[0];
    ul.appendChild(ul.children[0].cloneNode(true));

    let len = ul.children.length;
    let index = 0;
    let page = document.createElement('div');
    page.className = 'page';
    for(let i=1;i<len;i++){
        let span = document.createElement('span');
        span.innerText = i;
        if(i===1){
            span.classList.add('active');
        }
        page.appendChild(span);
    }
    banner.appendChild(page);
    let imgWidth;
    ul.querySelector('img').onload = function(){
        imgWidth = this.offsetWidth;
        ul.style.width = imgWidth*len + 'px';
        
    }
    let timer = setInterval(autoPlay,3000);
    banner.onmouseenter = ()=>{
        clearInterval(timer);
    }

    banner.onmouseleave = ()=>{
        timer = setInterval(autoPlay,3000);
    }
    banner.onclick = e=>{
        if(e.target.parentNode.className === 'page'){
            index = e.target.innerText-1;

            show();
        }
    }
    function autoPlay(){
        index++;

        show();
    }
    function show(){
        if(index >= len){
            ul.style.left = 0;
            index = 1;
        }
        animate(ul,{left:-imgWidth*index});
        for(let i=0;i<len-1;i++){
            page.children[i].className = '';
        }
        if(index === len - 1){
            page.children[0].className = 'active';
        }else{
            page.children[index].className = 'active'
        }
    }
    

    // 鼠标移入高亮
    var nav1 = document.getElementsByClassName('nav1')[0];
    var tabItem = nav1.children;
    tabItem[0].className = 'active';
    for(var i=0;i<tabItem.length;i++){
        tabItem[i].onmouseover = function(){
            var idx;
            for(var i=0;i<tabItem.length;i++){
                if(tabItem[i] === this){
                    idx = i;
                }
                tabItem[i].className = '';
            }
            this.className = 'active';
        }
        tabItem[i].onmouseout = function(){
            
            this.className = '';
        }
    }

    // 鼠标移入小图切换大图
    var bigPic = document.getElementById('bigPic');
    var smallPic = document.getElementById('smallPic');
    var smallList = document.getElementsByClassName('smallList');
    var lastImg = smallList[0];
    for(var i=0;i<smallList.length;i++){
        smallList[i].onmouseover = function(){
            
            bigPic.src = this.src;
            lastImg.className = '';

            this.className = 'active';

            lastImg = this;
        }
    }

    // 二级导航、三级导航
    var yiji = document.getElementsByClassName('yiji')[0];
    var nav2 = document.getElementsByClassName('nav2')[0];
    var nav3 = document.getElementsByClassName('nav3')[0];
    
    var menu = document.querySelector('.menu');
    var menu2 = document.querySelector('.menu2');
    yiji.onmouseenter = function(){
        nav2.style.display = 'block';
        var nav2_li = nav2.querySelectorAll('.nav2_li');
        var liHeight = nav2_li[0].offsetHeight;
        for(var i=0;i<nav2_li.length;i++){
            nav2_li[i].onmouseenter = function(){
                var nav3 = this.querySelector('.nav3');
                nav3.style.display = 'block';
                animate(nav3,{top:0});
            }
            nav2_li[i].onmouseleave = function(){
                var nav3 = this.querySelector('.nav3');
                nav3.style.display = 'none';
                animate(nav3,{top:liHeight});
            }
        }
        this.className = 'gaoliang';
    }
    yiji.onmouseleave = function(){
        nav2.style.display = 'none';
    }

    // 吸顶
    let header1=document.querySelector('#header1');
    let header2=document.querySelector('#header2');
    
    window.onscroll=function(){
        var scrollTop=window.scrollY;
        if(scrollTop>=header1.offsetHeight){
            header2.className='fixed';
        }else{
            header2.className='';
        }
    }

    // 鼠标移入显示文字“加入购物车”
    var s_list = document.querySelector('.s_list');
    var s_li = s_list.getElementsByTagName('li');
    var s_span = document.querySelector('.wenzi');
    for(var i=0;i<s_li.length;i++){
        s_li[i].onmouseenter = function(){
            console.log('1')
            var s_span = this.querySelector('.wenzi');
            s_span.style.display = 'block';
            animate(s_span,{bottom:0});
            
            
        }
        s_li[i].onmouseleave = function(){
            console.log('2')
            var s_span = this.querySelector('.wenzi');
            s_span.style.display = 'none';
            animate(s_span,{bottom:-40});
        }
    }

    
})