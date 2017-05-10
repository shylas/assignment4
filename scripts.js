function updateMap() {
  var latitude = $("#latitude").val();
  var longitude= $("#longitude").val();
  var zoom= $("#zoom-level").val();
  var newsrc = "https://maps.googleapis.com/maps/api/staticmap?size=600x400&center="+latitude+","+longitude+"&zoom="+zoom+"&markers=color:red|"+latitude+","+longitude+"&key=AIzaSyDU6lWXAex1uw3neucrHf9BSGRExTkwqxQ";
  console.log(newsrc);
  
  $('#static-map').attr("src",newsrc);
  
  
  event.preventDefault();
}