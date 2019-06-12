const Park = function (name, ticketPrice, dinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs
}

Park.prototype.addDinosaur = function(dinosaur){
  this.dinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaur = function(dinosaur){
  const indexPosition = this.dinosaurs.indexOf(dinosaur);
  this.dinosaurs.splice(indexPosition,1);
}

// Park.prototype.mostPopularDinosaur = function(){
//
// }

// Park.prototype.particularSpecies = function(species){
//
// };

Park.prototype.totalVisitors = function(){
  let visitors = 0;
  for (dinosaur of this.dinosaurs) {
    visitors += dinosaur.guestsAttractedPerDay;
  };
  return visitors;
};


module.exports = Park;
