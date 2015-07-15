Places = new Mongo.Collection('places');

if (Meteor.isClient) {
  Template.random.events({
    'click .randomize': function(){
      var random = Math.floor((Math.random() * Places.find().count()) + 1);
      var result = Places.findOne({ idx : random});
      Session.set('pick', result);
      var pick = Session.get('pick');
    }
  });

  Template.random.helpers({
    'pick': function(){
       var pick = Session.get('pick');
       return pick;
    }

  });

  Template.addPlaceForm.events({
    'submit form': function(event){
      event.preventDefault();
      var nameVar = event.target.placeName.value;
      var locationVar = event.target.placeLoc.value;
      var descriptionVar = event.target.placeDesc.value;
      var placeCount = Places.find().count() + 1
      Meteor.call('addPlace', nameVar, locationVar, descriptionVar, placeCount);
      
      event.target.reset();
      }
  });
}

if (Meteor.isServer){
  Meteor.methods({
      'addPlace': function(nameVar, locationVar, descriptionVar, placeCount){
          Places.insert({
          name: nameVar,
          location: locationVar,
          description: descriptionVar,
          idx: placeCount
        }); 
      }
  });
}

