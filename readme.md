# wheel-direction
* [honeo/wheel-direction](https://github.com/honeo/wheel-direction)  
* [wheel-direction](https://www.npmjs.com/package/wheel-direction)


## なにこれ
方向付きWheelEventの実装。
* [DEMO - JSFiddle](https://jsfiddle.net/p85rvbka/10/)


## 使い方
```bash
$ npm i wheel-direction
```
```js
import 'wheel-direction';

element.addEventListener('wheel-up', (e)=>{
	console.log(e.type); // wheel-up
});
```


## Events
* wheel-up
* wheel-down
* wheel-left
* wheel-right
* wheel-front
* wheel-back

## API

### ON/OFF
```js
import ctrler from 'wheel-direction';

ctrler.enable();
ctrler.disable();
ctrler.toggle();
```

### addEventListener options
```js
// {passive: false}
const mod = import('wheel-direction?once=true&passive=false');
```
or
```html
<!-- {once: true} -->
<script type="module" src="./wheel-direction.mjs?once=true"></script>
```
