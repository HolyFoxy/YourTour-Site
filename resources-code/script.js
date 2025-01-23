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

const size = window.innerWidth;
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
};