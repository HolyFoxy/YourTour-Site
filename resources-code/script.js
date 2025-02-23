const menu_list = document.querySelector('div.tour_type_select')
menu_list.addEventListener("click", (event)=>{
    if ((event.target.tagName === 'P')&&(!event.target.classList.contains('active'))){
        let childList = menu_list.querySelectorAll('*');
        for (let childNode of childList) {
            childNode.classList.remove('active');
        }
        event.target.classList.add('active');
    }
});

const fixed_menu = document.querySelector('div.fixed_menu')
addEventListener("scroll", ()=>{
    if (scrollY >= 450){
        if (fixed_menu.classList.contains('unvisible')){
            fixed_menu.classList.remove('unvisible');  
        }
    }
    else if (scrollY < 450){
        if (!fixed_menu.classList.contains('unvisible')){
            fixed_menu.classList.add('unvisible');
        }
    }
});

const select = document.querySelector('select');
select.addEventListener("change", ()=>{
    select.classList.remove("gray");
});
document.querySelector('button.reset').addEventListener('click', ()=>{select.classList.add('gray')});

let size = window.innerWidth;
let temp_size = "fhd";
if (size == 1024){
    for(let elem of document.querySelectorAll('*')){
        elem.classList.add('size_1024');
    }
    document.querySelector('form').classList.remove('size_1920');

    for(let elem of document.querySelectorAll('div.photos_photo.on_fhd'))
    {
        elem.classList.add('undisplay');
    }
    document.querySelector('div.footer').classList.remove('size_1920');
    temp_size = "hd";
};
if (size == 360){
    for(let elem of document.querySelectorAll('*')){
        elem.classList.add('mobile');
    }
    document.querySelector('div.head_menu_ref').classList.add('undisplay');
    document.querySelector('div.fixed_menu').querySelector('div.head_menu_ref').classList.add('undisplay');

    document.querySelector('form').classList.remove('size_1920');

    for(let elem of document.querySelectorAll('div.photos_photo.on_fhd'))
    {
        elem.classList.add('undisplay');
    }
    for(let elem of document.querySelectorAll('div.photos_photo.on_1024'))
    {
        elem.classList.add('undisplay');
    }
    document.querySelector('div.footer').classList.remove('size_1920');

    for (let elem of document.querySelectorAll('div.history_footer_social'))
    {
        elem.classList.add('undisplay');
    }
    temp_size = "mobile";
};

window.addEventListener('resize', resize_site);

function resize_site(){
    if (window.innerWidth < 1919 && (temp_size=="fhd" || temp_size == "shd")){
        document.querySelector('img.head_img').style.left = ((window.innerWidth - 1920)/2) + 'px';
        document.querySelector('div.head_menu').style.paddingLeft = (window.innerWidth * (0.196 * (window.innerWidth/1920))) + 'px';
        document.querySelector('div.head_menu').style.paddingRight = (window.innerWidth * (0.196 * (window.innerWidth/1920))) + 'px';

        document.querySelector('div.fixed_menu').style.paddingLeft = (window.innerWidth * (0.196 * (window.innerWidth/1920))) + 'px';
        document.querySelector('div.fixed_menu').style.paddingRight = (window.innerWidth * (0.196 * (window.innerWidth/1920))) + 'px';
    } else if (window.innerWidth >= 1919){
        document.querySelector('img.head_img').style.left = '';
        document.querySelector('div.head_menu').style.paddingLeft = '';
        document.querySelector('div.head_menu').style.paddingRight = '';

        document.querySelector('div.fixed_menu').style.paddingLeft = '';
        document.querySelector('div.fixed_menu').style.paddingRight = '';
    } else if (window.innerWidth <=1200 && window.innerWidth >= 990){
        document.querySelector('img.head_img').style.left = 0-(110 - 0.39*(window.innerWidth - 1024)) + 'px';
        document.querySelector('div.head_menu').style.paddingLeft = '';
        document.querySelector('div.head_menu').style.paddingRight = '';
        document.querySelector('img.head_img').style.scale = '';        
        
        document.querySelector('div.fixed_menu').style.paddingLeft = '';
        document.querySelector('div.fixed_menu').style.paddingRight = '';
    } else if (window.innerWidth < 990 && window.innerWidth >= 780){
        document.querySelector('img.head_img').style.left = '';
        document.querySelector('img.head_img').style.scale = 1 + 0.3*((window.innerWidth - 780)/210);
    } else if (window.innerWidth < 780){
        document.querySelector('img.head_img').style.left = '';
        document.querySelector('img.head_img').style.scale = '';

        document.querySelector('div.fixed_menu').style.paddingLeft = '';
        document.querySelector('div.fixed_menu').style.paddingRight = '';
        document.querySelector('div.head_menu').style.paddingLeft = '';
        document.querySelector('div.head_menu').style.paddingRight = '';
    }
    if (window.innerWidth < 1900 && temp_size == "fhd"){
        for (let elem of document.querySelectorAll('div.photos_photo.on_fhd'))
            elem.classList.add('undisplay');
        for (let elem of document.querySelectorAll('div.photos_photo'))
            elem.classList.add('size_1024');
        for (let elem of document.querySelectorAll('img.photos_photo'))
            elem.classList.add('size_1024');

        temp_size = "shd";
    } else if (window.innerWidth > 1200 && temp_size == "hd"){
        for (let elem of document.querySelectorAll('*'))
            if (!elem.classList.contains('photos_photo'))
                elem.classList.remove('size_1024');
        
        if (!document.querySelector('form').classList.contains('size_1902'))
            document.querySelector('form').classList.add('size_1920');

        temp_size = "shd"
    }else if (window.innerWidth >=1900 && temp_size == "shd"){
        for (let elem of document.querySelectorAll('div.photos_photo.on_fhd'))
            elem.classList.remove('undisplay');
        for (let elem of document.querySelectorAll('div.photos_photo'))
            elem.classList.remove('size_1024');
        for (let elem of document.querySelectorAll('img.photos_photo'))
            elem.classList.remove('size_1024');

        temp_size = "fhd";
    } else if (window.innerWidth <= 1200 && temp_size == "shd"){
        for (let elem of document.querySelectorAll('*')){
            if (!elem.classList.contains("size_1024"))
                elem.classList.add('size_1024');
        }

        temp_size = "hd";
    } else if (window.innerWidth < 990 && temp_size == "hd"){
        for (let elem of document.querySelectorAll('*')){
            elem.classList.remove('size_1024');
            elem.classList.add('mobile');
            if (elem.classList.contains('on_1024'))
                elem.classList.add('undisplay');
            if (elem.classList.contains('history_footer_social'))
                elem.classList.add('undisplay');
            if (elem.classList.contains('head_menu_ref'))
                elem.classList.add('undisplay');
        }

        temp_size = "mobile";
    } else if (window.innerWidth >= 990 && temp_size == "mobile"){
        for (let elem of document.querySelectorAll('*')){
            elem.classList.add('size_1024');
            elem.classList.remove('mobile');
            if (elem.classList.contains('on_1024'))
                elem.classList.remove('undisplay');
            if (elem.classList.contains('history_footer_social'))
                elem.classList.remove('undisplay');
            if (elem.classList.contains('head_menu_ref'))
                elem.classList.remove('undisplay');
        }
        

        temp_size = "hd";
    }
}

const inp_dates = document.querySelectorAll("input.date");
for (let inp of inp_dates)
{
    inp.addEventListener("change", ()=>{inp.classList.remove("gray")});
    document.querySelector('button.reset').addEventListener('click', ()=>{inp.classList.add('gray')});
}
