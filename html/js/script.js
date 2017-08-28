// JavaScript Document


$(function () {
	var $nav	= $('.navDrawr');
	var $navBtn	= $('.navDrawrBtn');
	var $speed	= 300;
	var $navW	= 270;
	var wW = $(window).width();
	var sH = wW * 0.5625 ;
	var gW = $('.grid-items ul').width();
	var _touch = ('ontouchstart' in document) ? 'touchstart' : 'click';
	var i = new Date();
	var myMonth = i.getMonth() + 1;
	var myDate = i.getDate();
	
	
	$('.btn a,.btn span').removeClass('tapStyle');
	$('a[href^=http]').not('[href*="'+location.hostname+'"]').attr('target','_blank');
	$('.month').text(myMonth +'/');
	$('.day').text(myDate);

	
	//サブメニューを非表示に
	$nav.find('.sub').hide();
	
	//ドロワー
	$('body').on('click','.navDrawrBtn span',function(){
		drawerFunc();
		$("#panel-btn-icon").toggleClass("close");

	});
	
	
	$('body').on('click','.overlay',function(){
		drawerFunc();
	});
	
	
	function drawerFunc(){
		if( $('body').hasClass('menuOpen') ){
			$('body').removeClass('menuOpen');
			$nav.animate({right:-1*$navW},$speed,'swing');
			$('.overlay').fadeOut($speed);
		}else{
			$('body').addClass('menuOpen');
			if(!$('.overlay').length){
				$('#wrapper').prepend('<div class="overlay"></div>');
			}
			$nav.animate({right:0},$speed,'swing');
			$('.overlay').fadeIn($speed);
		}
	}
	
	//カルーセルの設定
	$('.slideBox .slider').slick({
		accessibility: true,
		dots: true,
		autoplay: true,
		autoplaySpeed:3200,
		infinite: true,
		speed: 1800,
		swipe: true,
		fade:true
	});
	
	
	
	
//vgridのオプション
	
	$('.grid-items ul').vgrid({
		useLoadImageEvent:true,
		fadeIn: {
			time: 500,  
			delay: 50
		}
	});
	
/*ブロックのソート
	$(".sort a").click(function(){
		$('.grid-items ul').vgsort(function(a, b){
			var _a = $(a).find('p').text();
			var _b = $(b).find('p').text();
			return (_a > _b) ? 1 : -1 ;
		});
		return false;
	});*/
	
	//スライドパネル　応募
	$('#stepBox dd').not(':first').hide();
	$('#stepBox dt:first-child').addClass('open');
	
	$('#stepBox dt').on(_touch,function() {
		if($(this).next('#stepBox dd').is(':visible')) {
			$(this).next('#stepBox dd').slideUp(300);
			$('#stepBox dt').removeClass('open');
		} else {
			$(this).next('#stepBox dd').slideDown(300).siblings('#stepBox dd').slideUp(300).addClass('open');
			$(this).addClass('open');
			$(this).siblings('#stepBox dt').removeClass('open');
		}
		return false;
	});
});

$(function nav01(){
　$(".btn a").hover(function(){
　　$(this).addClass('tapStyle')
　},function(){
　　$(this).removeClass('tapStyle')
　});		
　$(".btn a").click(function(){
　　$('.btn a').removeClass('tapStyle')
　});
});