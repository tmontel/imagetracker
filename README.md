# Image tracker

[Image tracker](https://github.com/tmontel/imagetracker.git) is a piece of code allowing to send images infos when HTML container page is loading.

## Prerequisite
* You must have a [Node.js](http://nodejs.org/) server listening.

   
## Getting Started
* Just include the piece of code and customize var name and image name.

## Examples


```python
<script type="text/javascript" src="imgtracker.js"></script>
<script type="text/javascript">
	var img1 = new Imagetracker("http://www.javatpoint.com/images/javascript/javascript_logo.png"); 
	img1.show_image();
</script>
<script type="text/javascript">
	var img2 = new Imagetracker("http://developer.asustor.com/uploadIcons/0020_999_1373597531_nodejs_256.png"); 
	img2.show_image();
</script>
```