Places = new Mongo.Collection('places');

if (Meteor.isClient) {
	Meteor.subscribe('thePlaces');
};

if (Meteor.isServer) {
	Meteor.publish('thePlaces', function(){
	return Places.find();
});
}

