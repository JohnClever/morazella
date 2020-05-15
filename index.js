{
    document.querySelector('.toggleServ').addEventListener('click', function () {
        document.querySelector('.loader').style.display = 'block';
        document.querySelector('.header').style.display = 'none';
    });
    document.querySelector('.toggleHome').addEventListener('click', function () {
        document.querySelector('.loader').style.display = 'block';
        document.querySelector('.select').style.display = 'none';
    })

}



{
    var myFunc = function () {
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.header').style.display = 'none';
    document.querySelector('.select').style.display = 'block';
    document.querySelector('.header_footer').style.display = 'none';

}
var homeFunc = function () {
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.header').style.display = 'block';
    document.querySelector('.select').style.display = 'none';
    document.querySelector('.header_footer').style.display = 'block';
}
}


