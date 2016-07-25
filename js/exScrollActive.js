/**
*	@author Ahsan Zahid Chowdhury <itszahid.info>
*	@description To enable auto active menu on scroll 
*		data-scrollBefore 	= Number, Mark the item as active before position
*	@since 2015-11-20
*	@param className String, Name of the class elements
*	@param activeClassName String, Name of the class that will mark as active
*/

function exScrollActive(className, activeClassName){
	jQuery(window).scroll(function(){
		var scrollPos = jQuery(window).scrollTop();

		jQuery.each(jQuery('.'+className),function(index, item){
			var currentTarget = jQuery(item).attr('href').split('#')[1];
			var scrollBefore = jQuery(item).attr('data-scrollBefore');			
			if(jQuery('#'+currentTarget).length > 0){
				var offsetPosMin = jQuery('#'+currentTarget).offset().top - scrollBefore;
				var offsetPosMax = jQuery('#'+currentTarget).offset().top + jQuery('#'+currentTarget).height() + scrollBefore;

				if(scrollPos >= offsetPosMin && scrollPos <= offsetPosMax){
					jQuery('.'+className).parent().removeClass(activeClassName);
					jQuery(item).parent().addClass(activeClassName);			
				}
			}		
		});
	});
};
