# Direction Slideshow
===================

*A Simple JS / HTML5 Slideshow based on sky directions*

## Demo's

  1. [Basic](demo/basic_demo.html "Basic")
  1. [HTML](demo/html_demo.html "HTML")
  1. [Multiple](demo/multiple_demo.html "Multiple")


## HTML5 DOM

  - **Basic Syntax**
  ```HTML
  
	<div id="BasicDemo" class="DirectionSlideContainer">
	
		<div class="SlideBox">
	
			<ul>
	
				<li data-direction="south"><a href=""><img alt="" src="../src/img/green.gif"></a></li>
	
				<li data-direction="north"><a href=""><img alt="" src="../src/img/red.gif"></a></li>
	
				<li data-direction="east"><a href=""><img alt="" src="../src/img/blue.gif"></a></li>
	
				<li data-direction="west"><a href=""><img alt="" src="../src/img/white.gif"></a></li>
	
				<li data-direction="north"><a href=""><img alt="" src="../src/img/black.gif"></a></li>
	
				<li data-direction="east"><a href=""><img alt="" src="../src/img/yellow.gif"></a></li>
	
				<li data-direction="south"><a href=""><img alt="" src="../src/img/orange.gif"></a></li>
	
			</ul>
	
		</div>	
	
	</div>
  ```
  - Possibile options for the **li**-tag
  - **data-direction**: you can specify from which sky direction the current element moves in
  - **data-delay**: A number determining the delay between animations in milliseconds (default: 1500)
  - **data-duration**: A number determining how long the animation will run in milliseconds  (default: 1000)
  - **data-easing**: jQuery easing of animation (default: linear)



## CSS ##

it is required that you take care of width/height of your container and sliders! Take a look into demo.css 


## JavaScript ##

How to start your slideshow:

```JavaScript
$('#BasicDemo').directionSlideshow();
```

you can add some options to your slideshow:

**Options**
```JavaScript
$('#BasicDemo').directionSlideshow({
            direction: "north",
            delay: 1500,
            duration: 1000,
            easing: 'linear',
            activateFirstChilds:true,
            debug:false          
        });
```
