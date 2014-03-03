var actionBtn = $('.btn'),
    demoBox   = $('.demo-box .flag');

    actionBtn.on('click', function (event) {
    var $this = $(this);
	
    if(demoBox.attr('data-click') != 'on'){
    
    demoBox.attr('data-click', 'on');
    
    event.preventDefault();
    demoBox.attr('id', $this.attr('data-effect'));
	

    demoBox.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd',

    function (e) {
		demoBox.addClass('active');
		setTimeout(function(){
		demoBox.removeAttr('id');
        demoBox.attr('data-click', 'off');
			demoBox.removeClass('active');
		}, 1000);
        
    }
	);
	
	
        
    }
    

});
