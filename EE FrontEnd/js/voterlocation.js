var geocoder;
var map;

//Initialize Map
function initMap() 
{                
    geocoder = new google.maps.Geocoder();
    //Location
    var latlng = new google.maps.LatLng(-25.344, 131.036);
    var mapOptions = {zoom: 7, center: latlng}
    //Map - Centered at Location
    map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);
    //Marker - Position at Location
    var marker = new google.maps.Marker({position: latlng, map: map});
}

function getLocation() 
{
    if (navigator.geolocation) 
    {
        navigator.geolocation.getCurrentPosition(showPosition);
    } 
    else 
    {
        alert("This browser does not support Geolocation");
    }
}

function showPosition(position) 
{
    //Location
    var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    var mapOptions = {zoom: 7, center: latlng}
    //Map - Centered at Location
    map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);
    //Marker - Position at Location
    var marker = new google.maps.Marker({position: latlng, map: map});



    //Reverse Geocoder - Find Address for Database Lookup
    geocoder.geocode({'location': latlng}, function(results, status) 
    {
        if (status == google.maps.GeocoderStatus.OK) 
        {
            if (results[0]) 
            {
                //alert(results[0].formatted_address);/////////////////////////////////////////////////////////////////////////////////////////////
            } 
            else 
            {
                window.alert('No results found');
            }
        }
    });
}

function codeAddress()
{
    //Clear Table
//                var table = $("#tableB");
//                var tableBody = document.getElementById("tableBody");
//                var newBody = document.createElement('tbody');
//                tableBody.parentNode.replaceChild(newBody, tableBody);

    //Location String
    var address = document.getElementById("searchInput").value;
    var addr = address;
    while(addr.includes(" ")) 
    {
        addr = addr.replace(" ", "%20");
    }
    var url = "http://database-env.tpry6djxqe.us-east-2.elasticbeanstalk.com/locations/" + addr;
    console.log("location = " + url);
    try 
    {
        $.getJSON(url, function (data) 
        {//gets JSON from the API server
            var addresses = [];
            for(var x = 0; x < data.length; x++) 
            {
                addresses.push(data[x]["address"]);
            }
            console.log(addresses);

            //Clear Table
            var table = $("#tableB");
            var tableBody = document.getElementById("tableBody");
            var newBody = document.createElement('tbody');
            tableBody.parentNode.replaceChild(newBody, tableBody);

            //Populates List
            for (var index = 0; index < addresses.length; index++)
            {
                table.append("<tbody id = \"tableBody\"><tr><td>" + (index + 1) + "</td><td>" + addresses[index] + "</td></tr></tbody>");
            }

            //Geocoder for Addresses returned from Database
            for (var index = 0; index < addresses.length; index++)
            {
                geocoder.geocode({address: addresses[index]}, function(results, status)
                {
                    if (status == google.maps.GeocoderStatus.OK)
                    {
                        map.setCenter(results[0].geometry.location);
                        var marker = new google.maps.Marker({position: results[0].geometry.location, map: map});

                    }
                    else
                    {
                        //Error handling for Invalid Locations
                    }
                });
            }
        });
    }
    catch (e) 
    {
        alert("Please enter a valid Location");
    }
    //Geocoder fro Address Inputted
    geocoder.geocode({address: address}, function(results, status)
    {
        if (status == google.maps.GeocoderStatus.OK)
        {
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({position: results[0].geometry.location, map: map});

        }
        else
        {
            //Error handling for Invalid Locations
            alert("Invalid Location");
        }
    });
}
