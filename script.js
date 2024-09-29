function removeColor() {
    document.querySelector("input[type='button']").addEventListener("click", () => {
    let element = document.querySelector("#colorSelect")
		let item = element.value
		let arr = Array.from(element.children)
		let arr1 = []
		for(let i of arr){
			arr1.push(i.value)
		}
	arr = arr1.filter((i) => i !== item)
	  element.innerHTML = ""
		arr.forEach((ele) => {
        element.innerHTML += `<option>${ele}</option>` 
		
	})
	})
	
}

removeColor()