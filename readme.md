# wheel-direction
* [honeo/wheel-direction](https://github.com/honeo/wheel-direction)  
* [wheel-direction](https://www.npmjs.com/package/wheel-direction)


## なにこれ
方向付きWheelEventの実装。


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