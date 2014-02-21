# Touch-slider

**A responsive slider based on jQuery Mobile Touch Events.**

## Demo
* http://www.raynner.com/touch-slider

##Instalation

First we need to add a jQuery reference. Just put the following lines between HTML `<header></header>` tags. 
``` html
<script src="scripts/jquery-1.10.2.min.js"></script>
<script src="scripts/jquery.mobile.custom.min.js"></script>
```

Then, add a  `rp.touch-slider.js` script
``` html
<script src="scripts/rp.touch-slider.js"></script>
```

##Usage
It's simple to use, just follow this HTML Pattern.
``` html
<div class="slider">
    <div class="slider-wrap">
        <div><div class="box">slider 1</div></div>
        <div><div class="box">slider 2</div></div>
        <div><div class="box">slider 3</div></div>
    </div>
</div>
```

Inside of the head tags put the following snippet between `<script type="text/javascript"></script>`
```js
    $(document).ready(function () {
        $('.slider').sliderTouch();
    });
```

The above code initializes the plugin with default options.

And finally just add few styles to customize
```CSS
.slider {margin:auto;overflow:hidden;width:100%; height:400px; background-color:#221f1f}
.slider-wrap {height:inherit;}
.box {margin:70px auto 0; width:500px; height:260px;}

nav {position: relative; width:100%; margin-top: -40px;}
nav ul {text-align: center; list-style: none; margin: 0; padding: 0;}
nav ul li{display: inline-block; width: 10px; height: 10px; border-radius: 10px; background: #565656; margin: 0 2px;cursor: pointer;}
nav ul li.on{background-color:white;}

``` 