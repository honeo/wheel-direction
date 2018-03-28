/*
	マウスホイールの方向検知
		引数
			1: event
		返り値
			なし
*/

// query
const query = new URL(import.meta.url).searchParams;
const options_query = {
	capture: query.get('capture')==='true',
	once: query.get('once')==='true',
	passive: query.get('passive')==='true'
}

// default
let status = true;
const options_default = {
	capture: true,
	once: false,
	passive: true
}
const options = Object.assign(options_default, options_query);

window.addEventListener('wheel', wheelListener, options);

/*
		wheelイベントのlistener
*/
function wheelListener(e){

	let direction;
	const X = e.deltaX;
	const Y = e.deltaY;


	// X,Yどちらも0なら奥行き
	if( X===0 && Y===0 ){

		// back - 0 + front
		direction = 0 < e.deltaZ ?
			'front':
			'back';

	}else if( X===0 ){
	// 縦

		// up - 0 + down
		direction = 0 < Y ?
			'down':
			'up';

	}else{
	// 横

		// left - 0 + right
		direction = X < 0 ?
			'left':
			'right';

	}

	const wheel = new WheelEvent(`wheel-${direction}`, e);
	e.target.dispatchEvent(wheel);
}


// 本モジュール返り値
const ctrler = {

	get status(){
		return status;
	},

	enable(){
		status || window.addEventListener('wheel', wheelListener, options);
		status = true;
	},

	disable(){
		status && window.removeEventListener('wheel', wheelListener, options);
		status = false;
	},

	toggle(){
		status ?
			this.disable():
			this.enable();
	}
}

export default ctrler;
