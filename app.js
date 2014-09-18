

// Pulls the list of profiles for a particular directory specified through its url
function getProfilesListedInDirectory(directoryUrl)
{

	console.log("Running getProfilesListedInDirectory");

	$.get( directoryUrl, function( data ) {
	
		return data;

	});
}

$(function(){
  
  // Make call to listProfiles function on directory
  var directoryUrl = 'http://directory.plp.hackers4peace.net/getProfiles';

  // Print results
  $("#listings").html(getProfilesListedInDirectory(directoryUrl));
  
});

