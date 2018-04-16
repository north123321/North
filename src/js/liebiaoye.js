

document.addEventListener('DOMContentLoaded',function(){

    let goodslist = document.querySelector('.list_c');
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){

        let status=[200,304];
        xhr.onload=function(){
            if(status.includes(xhr.status)){
                let data=JSON.parse(xhr.responseText);
                // console.log(data);
                goodslist.innerHTML = data.map(item=>{
                    return `<li class="liebiao">
                            <img src="${item.imgurl}" />
                            <img src="${item.tubiao}" />
                            <p>${item.title}</p>
                            <span class="jiage">${item.jiage}</span>
                            <span class="goumai">${item.goumai}</span>
                            <button class="jia">加入购物车&gt&gt</button>
                        </li>`
                }).join('')
            }
        }
            
            
    }
    
    xhr.open('get','../data/goodslist.json',true);
    xhr.send();

    // liebiaoye鼠标移入显示加入购物车
    let liebiao = document.querySelector('.liebiao');
    let jia = document.querySelector('.jia');
    liebiao.onmouseenter = function(){
        console.log(1)
        jia.style.display = 'block';
    }
    liebiao.onmouseleave = function(){
        console.log(2)
        jia.style.display = 'none';
    }
})



