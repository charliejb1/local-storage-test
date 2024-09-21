let myObj = {
    name: "Charlie",
    age:27
}

// regularly setting local storage to myObj without stringify or parse (this runs into issues for some reason though)
localStorage.setItem('myObj', myObj)
console.log(localStorage)

let myObj_stringed = JSON.stringify(myObj);

// settting as a string and console logging it
localStorage.setItem("myObj", myObj_stringed)
console.log(myObj_stringed)

// setting as an object and console logging it (json parse looks that way because it has first take a stringified object in orddr to convert it back)
let myObj_objected = JSON.parse(localStorage.getItem("myObj"))
console.log(myObj_objected)
