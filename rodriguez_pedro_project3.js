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
	developedWarpDrive = true,
    planet1	           = "reptile",
    planet2            = "Omega",
    reptilian 		   = true;
    
//Procedure
var warpDriveIsAGo = developedWarpDrive; {
	if (developedWarpDrive === true) {
		console.log( "The Earth in the future developed the ability to travel the stars." + "This method was called " + warpDrive + ".");
	} else {
		console.log( "Earth did not develop " + warpDrive + "." + "  Humans did not get to travel the stars");
		
	}
};	

//Main Code
console.log("Since the development of " + warpDrive + " humans have been exploring the galaxy.");
console.log("They have discovered many planetary systems and species.");
console.log("The first two species discovered where Aquatic and Reptilian.");

//String Function
var planets = function(planet1,planet2){
	if (planet1 === "reptile"){
		return ("Reptilians came from Nebulon.");
	} else {
		var otherPlanet = "Omega" ;
		return "Reptilians did not come from " + otherPlanet;
	}
};

//Main Code

var outcome = planets(planet1);
console.log(outcome);
console.log("Aquatics came from " + planet2 + ".");

//Number Function






/*var planets = function(planet1,planet2){
	var species = [planet1, planet2];

	return species;
	
};
if (reptilian === true){
		var whereFrom1 = planets(planet1);
		console.log("Reptilians came from " + whereFrom1);
	} else {
		var whereFrom2 = planets(planet2);
		console.log("Reptilians did not come from " + whereFrom2);
	};

//Main Code
console.log("The Aquatics came from " + planet2) 
*/



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
