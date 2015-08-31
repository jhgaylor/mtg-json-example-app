if (Meteor.isServer) {
  // var mtgjson = Npm.require('mtgjson');

  MTGjson(function(err, data) {
      if (err) { return console.log(err) };
      console.log(data.LEA.cards); // Prints out all cards from the Limited Edition Alpha (LEA) set
  });
}