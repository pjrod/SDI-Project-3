//alert("JavaScript works!");

// Pedro J. Rodriguez
// Project 3 
// SDI 1212

//Variables

var warpDrive          = "Warp Drive",
	spaceships         = ["Necrosis", "Argonia", "Leviathan", "Hawkeye", "Titan 1"],
	pirateSpaceShips   = ["Noob", "Mortar", "Interceptor", "Weaver", "Kamari"],
	warpSpeed          = [ 1, 2, 3, 4, 5,],
	planetarySystems   = 10,
	developedWarpDrive = true;
    
//Procedure
var warpDriveIsAGo = developedWarpDrive; {
	if (developedWarpDrive === true) {
		console.log( "The Earth in the future developed the ability to travel the stars." + "This method was called " + warpDrive + ".");
	} else {
		console.log( "Earth did not develop " + warpDrive + "." + "  Humans did not get to travel the stars");
		
	}
};	

//String Function

	
    


//for reference
/*var cube = {
	
	"name": "myCube",
	"length": 5,
	"width":  5,
	"height": 5,
	"area":	  function(){ //Method function
		var totalArea = this.height * this.width * this.length;
		return totalArea;
	}	
	//Method Mutator
	"setNewArea": function(newHeight){
		this.height = newHeight;
	}
	
};

console.log("Total area is " + cube.area());
cube.setNewArea(100));
console.log("The new area is " + cube.area());

*/
