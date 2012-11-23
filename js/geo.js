if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
          
          // Your position
          var ylatitude = position.coords.latitude;
          var ylongitude = position.coords.longitude;

          // C12's position
          var latitude = 49.1473914;
          var longitude = -123.18736359999998;

          var ccoords = new google.maps.LatLng(latitude, longitude);
          var ycoords = new google.maps.LatLng(ylatitude, ylongitude);
          var mapOptions = {
              zoom: 11,
              center: ccoords,
              mapTypeId: google.maps.MapTypeId.ROADMAP,
              navigationControlOptions: {
                  style: google.maps.NavigationControlStyle.SMALL
              },
              mapTypeId: google.maps.MapTypeId.ROADMAP
              };
              map = new google.maps.Map(
                  document.getElementById("mapholder"), mapOptions
                  );
              var cmarker = new google.maps.Marker({
                      position: ccoords,
                      map: map,
                      title: "C12's position!"
              });
              var ymarker = new google.maps.Marker({
                      position: ycoords,
                      map: map,
                      title: "Your position!"
              });
 
          });
    }else {
        alert("Geolocation API is not supported in your browser.");
    }