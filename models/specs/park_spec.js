const assert = require('assert');
const Park = require('../park.js');
const Dinosaur = require('../dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    dinosaur_1 = new Dinosaur ('t-rex', 'carnivore', 50);
    dinosaur_2 = new Dinosaur ('Nimpto', 'carnivore', 25);
    dinosaur_3 = new Dinosaur ('Jungo', 'herbivore', 70);
    dinosaur_4 = new Dinosaur ('Funga', 'herbivore', 100);
    dinosaur_5 = new Dinosaur ('Dropplesaurus', 'omnivore', 30);
    dinosaurs = [dinosaur_1, dinosaur_2, dinosaur_3];
    park = new Park('Big Johns Dino Park', 75, dinosaurs);
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual,'Big Johns Dino Park');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 75)
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, dinosaurs);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur_4);
    const actual = park.dinosaurs;
    const expected = [dinosaur_1, dinosaur_2, dinosaur_3, dinosaur_4];
    assert.deepStrictEqual(actual,expected);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDinosaur(dinosaur_1);
    const actual = park.dinosaurs;
    const expected = [dinosaur_2,dinosaur_3];
    assert.deepStrictEqual(actual,expected);
  });

  // it('should be able to find the dinosaur that attracts the most visitors', function(){
  //   const actual = park.mostPopularDinosaur();
  //   const expected = dinosaur_3;
  //   assert.deepStrictEqual(actual,expected)
  // });

  xit('should be able to find all dinosaurs of a particular species', function(){
    const actual = park.particularSpecies('omnivore');
    assert.deepStrictEqual(actual, dinosaur_5)
  });

  xit('should be able to remove all dinosaurs of a particular species');

  });

  it('should be able to total the number of visitors', function(){
    const actual = park.totalVisitors();
    const expected = 145;
    assert.strictEqual(actual,expected);
  });
