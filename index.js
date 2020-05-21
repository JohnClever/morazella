{
    let toggleBlogSport = document.querySelector('.toggleBlogSport');
    let toggleBlogPolitic = document.querySelector('.toggleBlogPolitic');
    let toggleBlogLifestyle = document.querySelector('.toggleBlogLifestyle');
    let toggleBlogHealth = document.querySelector('.toggleBlogHealth');

    document.querySelector('.toggleServ').addEventListener('click', function () {
        document.querySelector('.loader').style.display = 'block';
        document.querySelector('.header').style.display = 'none';
       
    });
    document.querySelector('.toggleHome').addEventListener('click', function () {
        document.querySelector('.loader').style.display = 'block';
        document.querySelector('.select').style.display = 'none';
    });
    document.querySelector('.toggleHomeBlog').addEventListener('click', function () {
        document.querySelector('.loader').style.display = 'block';
        document.querySelector('.select').style.display = 'none';
    });
    document.querySelector('.toggleBlogHome').addEventListener('click', function () {
        document.querySelector('.loader').style.display = 'block';
        document.querySelector('.blog').style.display = 'none';
        document.querySelector('.news_s').style.padding = '0px';
        document.querySelector('.news_p').style.padding = '2px';
        document.querySelector('.news_l').style.padding = '0px';
        document.querySelector('.news_h').style.padding = '0px';
        document.querySelector('.news_s').style.margin_bottom = '0px';
        document.querySelector('.news_p').style.margin_bottom = '10px';
        document.querySelector('.news_l').style.margin_bottom = '0px';
        document.querySelector('.news_h').style.margin_bottom = '0px';
    });
    document.querySelector('.toggleBlogServ').addEventListener('click', function () {
        document.querySelector('.loader').style.display = 'block';
        document.querySelector('.blog').style.display = 'none';
        document.querySelector('.news_s').style.padding = '0px';
        document.querySelector('.news_p').style.padding = '2px';
        document.querySelector('.news_l').style.padding = '0px';
        document.querySelector('.news_h').style.padding = '0px';
        document.querySelector('.news_s').style.margin_bottom = '0px';
        document.querySelector('.news_p').style.margin_bottom = '10px';
        document.querySelector('.news_l').style.margin_bottom = '0px';
        document.querySelector('.news_h').style.margin_bottom = '0px';
    });
    document.querySelector('.toggleBlog').addEventListener('click', function () {
        document.querySelector('.loader').style.display = 'block';
        document.querySelector('.header').style.display = 'none';
        document.querySelector('.news_s').style.padding = '0px';
        document.querySelector('.news_p').style.padding = '2px';
        document.querySelector('.news_l').style.padding = '0px';
        document.querySelector('.news_h').style.padding = '0px';
        document.querySelector('.news_s').style.margin_bottom = '0px';
        document.querySelector('.news_p').style.margin_bottom = '10px';
        document.querySelector('.news_l').style.margin_bottom = '0px';
        document.querySelector('.news_h').style.margin_bottom = '0px';
    });
    if (toggleBlogSport.addEventListener('click', function(){
        document.querySelector('.news_s').style.padding = '2px';
        document.querySelector('.news_p').style.padding = '0px';
        document.querySelector('.news_l').style.padding = '0px';
        document.querySelector('.news_h').style.padding = '0px';
        document.querySelector('.news_s').style.margin_bottom = '10px';
        document.querySelector('.news_p').style.margin_bottom = '0px';
        document.querySelector('.news_l').style.margin_bottom = '0px';
        document.querySelector('.news_h').style.margin_bottom = '0px';
        

    })) {
        console.log('toggleSport success');
        
    }
    else if(toggleBlogPolitic.addEventListener('click', function(){
        document.querySelector('.news_s').style.padding = '0px';
        document.querySelector('.news_p').style.padding = '2px';
        document.querySelector('.news_l').style.padding = '0px';
        document.querySelector('.news_h').style.padding = '0px';
        document.querySelector('.news_s').style.margin_bottom = '0px';
        document.querySelector('.news_p').style.margin_bottom = '10px';
        document.querySelector('.news_l').style.margin_bottom = '0px';
        document.querySelector('.news_h').style.margin_bottom = '0px';
    })) {
        console.log('togglePolitic success');
        
    }
    else if(toggleBlogLifestyle.addEventListener('click', function(){
        document.querySelector('.news_s').style.padding = '0px';
        document.querySelector('.news_p').style.padding = '0px';
        document.querySelector('.news_l').style.padding = '2px';
        document.querySelector('.news_h').style.padding = '0px';
        document.querySelector('.news_s').style.margin_bottom = '0px';
        document.querySelector('.news_p').style.margin_bottom = '0px';
        document.querySelector('.news_l').style.margin_bottom = '10px';
        document.querySelector('.news_h').style.margin_bottom = '0px';
    })) {
        console.log('togglePolitic success');
        
    }
    else if(toggleBlogHealth.addEventListener('click', function(){
        document.querySelector('.news_s').style.padding = '0px';
        document.querySelector('.news_p').style.padding = '0px';
        document.querySelector('.news_l').style.padding = '0px';
        document.querySelector('.news_h').style.padding = '2px';
        document.querySelector('.news_s').style.margin_bottom = '0px';
        document.querySelector('.news_p').style.margin_bottom = '0px';
        document.querySelector('.news_l').style.margin_bottom = '0px';
        document.querySelector('.news_h').style.margin_bottom = '10px';
    })) {
        console.log('togglePolitic success');
        
    }
    else{
        document.querySelector('.news_s').style.padding = '0px';
        document.querySelector('.news_p').style.padding = '0px';
        document.querySelector('.news_l').style.padding = '0px';
        document.querySelector('.news_h').style.padding = '0px';
        document.querySelector('.news_s').style.margin_bottom = '0px';
        document.querySelector('.news_p').style.margin_bottom = '0px';
        document.querySelector('.news_l').style.margin_bottom = '0px';
        document.querySelector('.news_h').style.margin_bottom = '0px';
    }
}



{
    var myFunc = function () {
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.header').style.display = 'none';
    document.querySelector('.select').style.display = 'block';
    document.querySelector('.blog').style.display = 'none';
    document.querySelector('.header_footer').style.display = 'none';

}
var homeFunc = function () {
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.header').style.display = 'block';
    document.querySelector('.select').style.display = 'none';
    document.querySelector('.blog').style.display = 'none';
    document.querySelector('.header_footer').style.display = 'block';
}
var blogFunc = function () {
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.header').style.display = 'none';
    document.querySelector('.select').style.display = 'none';
    document.querySelector('.blog').style.display = 'block';
    document.querySelector('.header_footer').style.display = 'block';
}
}


