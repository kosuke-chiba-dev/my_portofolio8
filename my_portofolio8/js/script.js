// imgArea-1---------------------------------------------
    $(window).scroll(function() {
        if (window.matchMedia('(min-width: 900px)').matches) {
            // ウィンドウサイズ768px以下のときの処理
        // パララックスさせたい画像要素の親要素のトップからの位置を取得
        var position = $('.imgArea-1').offset().top;
        // 画面の高さを取得
        var windowHeight = $(window).height();
        // トップからのスクロール量を取得
        var scrollTop = $(window).scrollTop();
    
        // 画面の高さとトップからのスクロール量の合計がパララックスさせたい画像要素の親要素のトップからの位置の値を超えた
        // 時に下記の処理を実行する。
        if (windowHeight + scrollTop > position) {
            // パララックスさせたい画像要素の親要素のトップからの位置から、画面の高さとトップからのスクロール量を引くことに
            // よって、パララックスさせたい画像要素の親要素の位置からのスクロール量を取得する。
            var scrollAmount = windowHeight + scrollTop - position;
            console.log(scrollAmount);
            // 上で取得した、パララックスさせたい画像要素の親要素の位置からのスクロール量の0.1倍だけ背景画像を元の位置から移動させる。
            // css側で移動させる画像にtransition: top 0.3s;を指定することで、このtopプロパティの値の変化が滑らかになって、親要素の中でスクロール
            // しているように見せることができる。
            // *なぜ、パララックスさせたい画像要素の親要素の位置からのスクロール量の0.1倍だけ、背景画像を元の位置から移動させるかというと、
            // このデザインカンプ上、大きくスクロールさせすぎると、親要素の下端よりも上にパララックスさせたい画像要素がきてしまうため、
            // スクロール量に対して、0.1倍だけパララックスさせたい画像要素を移動させるというようにしている。
            // 他のデザインカンプだったら0.5倍とかでもいいかも。当然、数値が大きい方がパララックス効果が強く見える。
            $('.imgArea-1').find('img').css('top', 'calc(30% - ' + (scrollAmount * 0.05) + 'px)');
        }
    } else{
        $('.imgArea-1').find('img').css('top', 'auto');
    }}
    );


// imgArea-2---------------------------------------
// $(window).scroll(function(){
//     var position = $('.imgArea-2').offset().top;
//     var windowHeight = $(window).height();
//     var scrollTop = $(window).scrollTop();
//     if(position < windowHeight + scrollTop){
//         var scrollAmount = scrollTop - position + windowHeight;
//         console.log('できてる');
//         $('.imgArea-2').find('img').css('top', 'calc(-58% -' + (scrollAmount * 0.3) + 'px)');
//     }
// });

// imgArea-2--------------------------------------------
$(document).ready(function() {
    $(window).scroll(function(){
        if (window.matchMedia('(min-width: 900px)').matches) {
        var position = $('.imgArea-2').offset().top;
        var windowHeight = $(window).height();
        var scrollTop = $(window).scrollTop();
        if(position < windowHeight + scrollTop){
            var scrollAmount = scrollTop - position + windowHeight;
            $('.imgArea-2').find('img').css('top', 'calc(-40% - ' + (scrollAmount * 0.05) + 'px)');
        }
    } else{
        $('.imgArea-2').find('img').css('top', '0px');
    }
});
});


// about-item-title--------------------------
$(document).ready(function() {
    if($(window).width() >= 1070){
        $('.about-item-title.number-2').find('.only-l').hide();
    } else if($(window).width() >= 900){
        $('.about-item-title.number-2').find('.only-l').show();
    } else{
        $('.about-item-title.number-2').find('.only-l').hide();
    }
  });

$(window).on('resize', function(){
    if($(window).width() >= 1070){
        $('.about-item-title.number-2').find('.only-l').hide();
    } else if($(window).width() >= 900){
        $('.about-item-title.number-2').find('.only-l').show();
    } else{
        $('.about-item-title.number-2').find('.only-l').hide();
    }
});


$(document).ready(function() {
    if($(window).width() >= 1150){
        $('.about-item-title.number-3').find('.only-s-l').hide();
    } else if($(window).width() >= 900){
        $('.about-item-title.number-3').find('.only-s-l').show();
    } else if(699 >= $(window).width() && $(window).width() >= 0){
        $('.about-item-title.number-3').find('.only-s-l').show()
    } else{
        $('.about-item-title.number-3').find('.only-s-l').hide();
    }
  });


$(window).on('resize', function(){
    if($(window).width() >= 1150){
        $('.about-item-title.number-3').find('.only-s-l').hide();
    } else if($(window).width() >= 900){
        $('.about-item-title.number-3').find('.only-s-l').show();
    } else if(699 >= $(window).width() && $(window).width() >= 0){
        $('.about-item-title.number-3').find('.only-s-l').show()
    } else{
        $('.about-item-title.number-3').find('.only-s-l').hide();
    }
});


// smoothScroll----------------------------------------
$('a[href^="#"]').on('click', function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
        scrollTop: position
    }, 300)
});

$('.page-top-btn').on('click', function(){
    $('html, body').animate({
        scrollTop: 0
    }, 300)
});


//   shop-footer-textArea-description-lines------------------------
const targetElement = document.querySelector('.shop-footer-textArea-description');
const lines = document.querySelector('.shop-footer-textArea-description-lines');
let previousHeight = targetElement.clientHeight; // 初期高さ
console.log(previousHeight);

// ページ読み込み時にスパン要素を追加
for (let i = 0; i < Math.floor(previousHeight / 40); i++) {
    const newSpan = document.createElement('span');
    lines.appendChild(newSpan);
}

// 要素の高さが変更されたときに呼び出される関数
const checkHeightChange = function() {
    const currentHeight = targetElement.clientHeight;
    if (currentHeight > previousHeight) {    // 高さが増加した場合
        const numToAdd = Math.floor((currentHeight - previousHeight) / 40);
        for (let i = 0; i < numToAdd; i++) {
            const newSpan = document.createElement('span');
            lines.appendChild(newSpan);
        }
    } else if (currentHeight < previousHeight) {    // 高さが減少した場合
        const numToRemove = Math.floor((previousHeight - currentHeight) / 40);
        for (let i = 0; i < numToRemove; i++) {
            lines.removeChild(lines.lastElementChild);
        }
    }
    previousHeight = currentHeight;
    console.log(previousHeight);
};

// 監視開始
const observer = new ResizeObserver(checkHeightChange);
observer.observe(targetElement);


// modal--------------------------------------
$('.modal-open').on('click', function(){
    $('.modal').show();
    $('html, body').addClass('no-scroll');
});
$('.modal-close').on('click', function(){
    $('.modal').hide();
    $('html, body').removeClass('no-scroll');
});

