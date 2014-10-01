$(function(){

  // Make call to listProfiles function on directory
  var directoryUrl = window.plp.config;

  superagent.get(directoryUrl)
		.end(function(err,res){

				if (err){

					console.log('Error ' + err);

				}else{

					if(res.ok) {

						console.log('Profile correctly downloaded from provider ' + res.body);

						$("#listings").html(res.body);

					}

				}

		});

});
