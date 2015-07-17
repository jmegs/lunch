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