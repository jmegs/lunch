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