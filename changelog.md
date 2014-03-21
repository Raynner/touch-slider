

## rp.touch-slider change log

###bugs
- [x] panels out of position when the window resized
- [x] still not working on safari and ie9+ last panel disappearing when the window is resized.
- [ ] iphone orientation didn’t resize
- [x] margin nav change when window resize


###parameters

name         | type      | description
------------ | --------- | ----------- 
nav          | `string`  | A string describing the type of navigation. Options: `dots`, `arrows`, `both` or `none`.
prevValue    | `string`  | A value that will be inserted into the `previous` link.
nextValue    | `string`  | A value that will be inserted into the `next` link.
autoPlay     | `bol`     | If true, the panels will be changed automatically
interval     | `int`     | A number determining how long the panel will be displayed



**looking after**
name         | type      | description
------------ | --------- | ----------- 
navObj       | `string`  | A string with object ID. If exists, build a  list of links to navigate using this object.
easing       | `string`  | A string indicating which easing function to use for the transition. Need jQuery.easing plugin
duration     | `int`     | A number determining the animation time




###features
|                        |           |            
------------------------ | --------- | ----------- 
`Navigation.next();`     | Call next panel and change navigation position.
`Navigation.prev();`     | Call previous panel and change navigation position.
`Navigation.keepPos();`  | keep panel position when window resized.