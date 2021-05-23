
tower1 = {
	name: "tower1",
	arr: [7,6,5,4, 3,2,1]
}
tower2 = {
	name: "tower2",
	arr: []
}
tower3 = {
	name: "tower3",
	arr: []
}
totalMoves = 0
subset =(_set) => _set.filter(_item=>{return _item!= _set[0] })

function MoveFirst(_from,_to){
		console.log("---")
		console.log("Move from", _from.name, "to:", _to.name, "pieze:", _from.arr[_from.arr.length-1])
		totalMoves++;
		if (_to.arr.length==0 || _from.arr[_from.arr.length-1]<_to.arr[_to.arr.length-1]){
			_to.arr.push(_from.arr.pop())
			console.log("tower1", tower1.arr)
			console.log("tower2", tower2.arr)
			console.log("tower3", tower3.arr)
		}else{
			console.log( "error")
			throw "error"
		}		
}



function moveSet(discs=tower1.arr,_origin=tower1,  _middle= tower2 , _target = tower3){
	discBase = discs[0]
	try{
		if (discs.length>0){
			// es impar?
			if (discs.length == 1){
				MoveFirst(_origin,_target)
			}else{
				let subset_tmp =  subset(discs)
				moveSet(subset_tmp,_origin,_target,_middle)
				MoveFirst(_origin,_target)
				moveSet(subset_tmp,_middle,_origin,_target)
			}
		}
	}catch(e){
		console.log(e)
	}

}

//test()
console.log("////START////")
console.log("tower1", tower1.arr)
console.log("tower2", tower2.arr)
console.log("tower3", tower3.arr)
moveSet()
console.log("////END////")
console.log("tower1", tower1.arr)
console.log("tower2", tower2.arr)
console.log("tower3", tower3.arr)
console.log("totalMoves:",totalMoves)