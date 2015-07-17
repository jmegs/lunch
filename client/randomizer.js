Template.randomizer.events({
    'click .randomize': function(){
      var random = Math.floor((Math.random() * Places.find().count()) + 1);
      var result = Places.findOne({ idx : random});
      Session.set('pick', result);
      var pick = Session.get('pick');
    }
  });

Template.randomizer.helpers({
    'pick': function(){
       var pick = Session.get('pick');
       return pick;
    }
  });