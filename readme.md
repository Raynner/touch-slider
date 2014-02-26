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
This will be initialize the plugin.
###Parameters

name         | type      | description
------------ | --------- | ----------- 
nav          | `string`  | A string describing the type of navigation. Options: `dots`, `arrows`, `both` or `none`.
prevValue    | `string`  | A value that will be inserted into the `previous` link.
nextValue    | `string`  | A value that will be inserted into the `next` link.
autoPlay     | `bol`     | If true, the panels will be changed automatically
interval     | `int`     | A number determining how long the panel will be displayed

**Ecxample:**
```js
$(document).ready(function () {
        $('.slider').sliderTouch({
           nav: "both", 
            prevValue:"<", 
            nextValue:">",
            autoPlay:false,
            interval:4000
        });
    });
```

##CSS style

And finally, just add few styles to customize the slider. You can style it anyway you want
```CSS
.slider {margin:auto;overflow:hidden;width:100%; height:400px; background-color:#221f1f;}
        .slider .slider-wrap {height:inherit; overflow: hidden;}
        .slider .box {margin:70px auto 0; width:500px; height:260px;}

        .slider nav.dots {position:absolute; width:100%; margin-top: -40px;}
        .slider nav.dots ul {text-align: center; list-style: none; margin: 0; padding: 0;}
        .slider nav.dots ul li{display: inline-block; width: 10px; height: 10px; border-radius: 10px; background: #565656; margin: 0 2px;cursor: pointer;}
        .slider nav.dots ul li.on{background-color:white;}

        .slider nav.arrows {position:absolute; width:100%; margin-top: -40px}
        .slider nav.arrows ul {text-align: center; list-style: none; margin: 0; padding: 0;}
        .slider nav.arrows ul li{display: inline-block;  padding: 10px; margin:0 10px; background: #f16272; cursor: pointer; color:#fff;}

``` 