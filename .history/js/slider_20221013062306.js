var renderer            = new PIXI.autoDetectRenderer();
var stage               = new PIXI.Container();
var slidesContainer     = new PIXI.Container();
var displacementSprite  = new PIXI.Sprite.fromImage( displacementImage );
var displacementFilter  = new PIXI.filters.DisplacementFilter( displacementSprite );

// Add canvas to the HTML
document.body.appendChild( renderer.view );

// Add child container to the stage
stage.addChild( slidesContainer );

// Set the filter to stage
stage.filters = [displacementFilter];        

// We load the sprites to the slides container and position them at the center of the stage
// The sprites array is passed to our component upon its initialization
// If our slide has text, we add it as a child to the image and center it
function loadPixiSprites( sprites ) {
  
  for ( var i = 0; i < sprites.length; i++ ) {
    
    var texture = new PIXI.Texture.fromImage( sprites[i] );
    var image   = new PIXI.Sprite( texture );

    if ( texts ) {

      // Base styles for our Text
      var textStyle = new PIXI.TextStyle({
        fill: '#ffffff', 
        wordWrap: true,
        wordWrapWidth: 400
      });

      var text = new PIXI.Text( texts[i], textStyle);
      image.addChild( text );
      
      // Center each to text to the image
      text.anchor.set(0.5);
      text.x = image.width / 2;
      text.y = image.height / 2;      
               
    }
    
    image.anchor.set(0.5);
    image.x = renderer.width / 2;
    image.y = renderer.height / 2;            

    slidesContainer.addChild( image );
    
  } 
  
};


// We listen at each navigation element click and call the move slider function 
// passing it the index we want to go to
var currentIndex = 0;
var slideImages = slidesContainer.children;
var isPlaying = false;  

for ( var i = 0; i < nav.length; i++ ) {
  
  var navItem = nav[i];

  navItem.onclick = function( event ) {

    // Make sure the previous transition has ended
    if ( isPlaying ) {
      return false;
    }     

    if ( this.getAttribute('data-nav') === 'next' ) {

      if ( that.currentIndex >= 0 && that.currentIndex < slideImages.length - 1 ) {
        moveSlider( currentIndex + 1 );
      } else {
        moveSlider( 0 );
      }

    } else {

      if ( that.currentIndex > 0 && that.currentIndex < slideImages.length ) {
        moveSlider( currentIndex - 1 );
      } else {
        moveSlider( spriteImages.length - 1 );
      }            

    }

    return false;

  }
  
}

// Our transition between the slides
// On our timeline we set the alpha property of the relevant slide to 0 or 1 
// and scale out filter on the x & y axis accordingly
function moveSlider( newIndex ) {

	isPlaying = true;

	var baseTimeline = new TimelineMax( { onComplete: function () {
		that.currentIndex = newIndex;
		isPlaying = false;
	}}); 
	
	baseTimeline
		.to(displacementFilter.scale, 1, { x: 200, y: 200  })
		.to(slideImages[that.currentIndex], 0.5, { alpha: 0 })
		.to(slideImages[newIndex], 0.5, { alpha: 1 })          
		.to(displacementFilter.scale, 1, { x: 20, y: 20 } );

};