 Template.list.helpers({
    'place': function(){
      return Places.find({}, {sort: {name: 1} });
    }
  });