/* eslint-disable no-undef */
function makeButtonHoverable(buttonElement, divContent) {
	buttonElement.addEventListener('mouseover', () => {
		divContent.classList.add('active');
	});
	buttonElement.addEventListener('mouseout', () => {
		divContent.classList.remove('active');
	});
} /* In Order To Use This Function select the button which is to be made hoverable
 in your file. Then
select the div's content. Pass these two to the function.
Style your menu content with the class 'active'
 for this to work. CHEERS! */
