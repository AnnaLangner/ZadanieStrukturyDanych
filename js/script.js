'use strict';
  
var data = [
	{
		id: 'box1',
		title: 'First box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted', 'special-header', 'important']
	},
	{
		id: 'box2',
		title: 'Second box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['special-header', 'important']
	},
	{
		id: 'box3',
		title: 'Third box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted', 'important']
	},
	{
		id: 'box4',
		title: 'Fourth box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted']
	},
	{
		id: 'box5',
		title: 'Fifth box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: []
	},
];
  
var output = document.getElementById('page-wrapper');

  	/*var headerClickCallback = function(event){
		this.parentElement.classList.toggle('highlighted');
	};

	var boxes = document.querySelectorAll('.box');

	for (var i = 0; i < boxes.length; i++) {
		var boxHeader = boxes[i].querySelector('header');
		boxHeader.addEventListener('click', headerClickCallback);
	}*/

