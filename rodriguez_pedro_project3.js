//alert("JavaScript works!");

// Pedro J. Rodriguez
// Project 3 
// SDI 1212

//Variables

var warpDrive          = "Warp Drive",
	solSpaceShips	   = 5,
	spaceShips         = ["Necrosis", "Argonia", "Leviathan", "Hawkeye", "Titan"],
	enemySpaceShips	   = 5,
	pirateSpaceShips   = ["Noob", "Mortar", "Interceptor", "Weaver", "Kamari"],
	warpSpeed          = [ 1, 2, 3, 4, 5,],
	planetarySystems   = 10,
	pirateSystems      = 5,
	noPirateSystem	   = 5,
	developedWarpDrive = true,
    planet1	           = "reptile",
    planet2            = "Omega",
    reptilian 		   = true,
    warpShips          = 10;
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
var numberOfSpaceship = function(solSpaceShips,enemySpaceShips){
	var warpShips = 5 + 5;
	
	return totalWarpShips;
};
for (totalWarpShips = warpShips; warpShips > 0; warpShips--) {
		console.log(warpShips + " spaceships have warp capabilities.");	

};
//Main Code
console.log("No more spaceships with warp capabilities.");

//Boolean function
var exploredSystems = function(systems1,systems2) {
	var noPirateSystem = systems1 - systems2;
	if (noPirateSystem === 5){
		return "There are " + noPirateSystem + " systems with out pirate spaceships.";
	} else {
		return "The planetary systems are free of pirate spaceships.";
	};
}
var theSystems = exploredSystems(10,5);
console.log(theSystems);
//Method Mutator
var newNoPirateSystems = function(nop){
	var newSystems = nop + noPirateSystem;
	return newSystems;
};
console.log("A new system was discovered by humans recently, now");
var totalNoPirateSytems = newNoPirateSystems(1);
console.log("there are " + totalNoPirateSytems + " systems without pirate spaceships.");
//Method Mutator
var newPirateSystems = function(newp){
	var newSystemsWithPirates = newp + pirateSystems;
	return newSystemsWithPirates;
};
console.log("The Sol system spaceship " + spaceShips[0] + ", while in deep space patrol,");
var totalPirateSystems = newPirateSystems(2);
console.log("discovered " + (totalPirateSystems - pirateSystems) + " new planetary systems with pirate spaceships." + " there are now " + totalPirateSystems + " systems with pirate spaceships.");

//Main Code
console.log("There are Five clases of spaceships");

//Object Function

var shipClasses ={
	
	classType:          ["Dreadnought", "Battle Cruiser", "Cruiser", "Frigate", "Smuggler"],
	namesSol:           ["Necrosis", "Argonia", "Leviathan", "Hawkeye", "Titan"],
	namesPships:        ["Noob", "Mortar", "Interceptor", "Weaver", "Kamari"],
	crewsSol:           [300,200,150,50,25],
	crewsPships:        [200,150,50,25,15],
	armament:           {
						 Dreadnought:   ["15 Laser Cannons", "10 Turbo lasers", "6 Torpedo Bays"],
						 BattleCruiser: ["10 Laser Cannons", "5 Turbo Lasers", "3 Torpedo Bays"],
						 Cruiser:		["5 Laser Cannons", "3 Turbo Lasers", "2 Torpedo Bays"],
						 Frigate:		["2 Laser Cannons", "2 Turbo Lasers", "1 Torpedo Bay"],
						 Smuggler:		["1 Laser Cannon", "1 Turbo Laser", "0 Torpedo Bays"],
	},
						 
	cargoBaysSol:       [10,8,6,4,2],
	cargoBaysPShips:    [15,10,5,3,1],
	hitPointsSol:       [1000,800,600,400,200],
	attackPointsSol:    [100,80,60,40,20],
	hitPointsPShips:    [500,400,300,200,100],
	attackPointsPShips: [150,130,110,90,70],
	classTypeShips: 	function (){
		console.log("The classes of ships are as follows!");
	}
	
	};
	
shipClasses.classTypeShips();
console.log("Class 1 " +
			shipClasses.classType[0] + ", " +
			" Class 2 " +
			shipClasses.classType[1] + ", " +
			" Class 3 " +
			shipClasses.classType[2] + ", " +
			" Class 4 " +
			shipClasses.classType[3] + ", " +
			" Class 5 " +
			shipClasses.classType[4] + "."); 
if (shipClasses.namesSol === [1]){
	if (shipClasses.classType === [0]){
		console.log(shipClasses.namesSol[0] + " has " + shipClasses.armament.Dreadnought[0]);
	} else {
		console.log(shipClasses.namesSol[0] + " is not a Battle Cruiser, Cruiser, Frigate, or Smuggler.");
	};
} else {
	if (shipClasses.namesSol === [0]){
		console.log(shipClasses.namesSol[1] + " is a " + shipClasses.classType[1] + " and has " + shipClasses.armament.BattleCruiser[0]);
		} else {
			console.log(shipClasses.namesSol[1] + " is not a Dreadnought, Cruiser, Frigate, or Smuggler.");
	
	};
};			

for (var i=0, s=shipClasses.namesSol.length; i < s; i++){
	console.log("The " + shipClasses.namesSol[i] + " is a " + shipClasses.classType[i] );
};

//Array Function
var shipBattles = function(){
	console.log("The Necrosis has engaged a pirate Dreadnought in battle.");
}
shipBattles();
	var Dreadnought = shipClasses.hitPointsSol[0];
	while (Dreadnought > 0 ){
		console.log("The Necrosis has " + Dreadnought + "hp of hull Integrity Left.");
		Dreadnought = Dreadnought - shipClasses.attackPointsPShips[0] * .50;
	}


console.log("The Necrosis was lost in battle.");

//console.log(spaceShips);
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
