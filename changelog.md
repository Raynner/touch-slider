## change log

###bugs
- [x] panels out of position when the window resized
- [x] still not working on safari and ie9+) last panel disappearing when the window is resized.
- [ ] iphone orientation didn’t resize


###parameters

name    | type   | description
------- | ------ | ----------- 
`nav`     | `true`   | If `true`, build a list of links to navigate between panels


**looking after**

name         | type      | description
------------ | --------- | ----------- 
nav          | `string`  | A string describing the type of navigation. Options: `dots`, `arrows`, `both` or `none`.
navObj       | `string`  | A string with object ID. If exists, build a  list of links to navigate using this object.
descriptions | `array`   | Array with panels description
easing       | `string`  | A string indicating which easing function to use for the transition. Need jQuery.easing plugin
duration     | `int`     | A number determining how long the panels animation will run.
autoPlay     | `bol`     | If true, the panels will be changed automatically
delay        | `int`     | A number determining how long the panel will be displayed 



###features
|                        |           |            
------------------------ | --------- | ----------- 
`Navigation.next();`     | Call next panel and change navigation position.
`Navigation.prev();`     | Call previous panel and change navigation position.
`Navigation.keepPos();`  | keep panel position when window resized.
