var numOfItems = 0;
var items = [];

$(document).ready(function(){
  $('#ADD').click(function(){
    numOfItems++;
    $('#QTY').text(numOfItems.toString());
    items.push($('#item').val());
    $("#item").val("")
    //debugger;
  });
  $('#BUILD').submit(function(event){
    items.sort();
    items.forEach(function(item){
      $('#SCREEN-2 ul').append("<li>"+item.toUpperCase()+"</li>");
      $('#SCREEN-1').toggle();
      $('#SCREEN-2').toggle();
    });
    event.preventDefault();
  });

});
