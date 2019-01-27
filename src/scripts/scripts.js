
window.initMap = function() {
  helpers.loadData( {
    url: 'https://cdn.glitch.com/a2518d3c-4005-4f7c-997e-35c746b866e0%2Fhello-salut.csv?1548592185141',
    type: 'csv'
  }, function ( err, data ){
    if ( data ){
      const geocoder = new google.maps.Geocoder();
      let map;
        
      console.log( data );  
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 0, lng: 0},
        zoom: 2
      });

      data.forEach( function ( dataPoint ){
        if ( dataPoint.hello && dataPoint.lat && dataPoint.long ){
          var infowindow = new google.maps.InfoWindow({
            content: dataPoint.hello
          });

          var marker = new google.maps.Marker({
            position: new google.maps.LatLng( parseFloat( dataPoint.lat ), parseFloat( dataPoint.long ) ),
            map: map,
            animation: google.maps.Animation.DROP,
            title: dataPoint.country
          });

          infowindow.open( map, marker );
        }
      } );
    }
  });
}

