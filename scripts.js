function updateMap() {
  var latitude = $("#latitude").val();
  var longitude= $("#longitude").val();
  var zoom= $("#zoom-level").val();
  var newsrc = "https://maps.googleapis.com/maps/api/staticmap?size=600x400&center="+latitude+","+longitude+"&zoom="+zoom+"&markers=color:red|"+latitude+","+longitude+"&key=AIzaSyBBPAu8y4ITwSFsaHUPY2Ap4k3zE_oQ2mY";
  console.log(newsrc);
  
  $('#static-map').attr("src",newsrc);
  
  
  event.preventDefault();
}