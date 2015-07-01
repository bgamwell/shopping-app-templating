$(function() {

  // Variables //

  var $newItem = $("#new-item");

  var $itemName = $("#item-name");

  var $allItems = $("#item-list");

  var $reset = $("#reset");

  var itemsTemplate = _.template($("#items-template").html()); //compiler function

  var $itemsList = $("#items-list");

  var $itemsTemplateDisplay = $(".items-template");

  // Model

  var items = [
  {item: "Lettuce"},
  {item: "Broccoli"},
  {item: "Truffles"}
  ];

  _.each(items, function (item, index) {
    event.preventDefault(); // prevents page from reloading
      var $item = $(itemsTemplate(item));
      $item.attr('data-index', index);
      $itemsList.append($item);
  });

  // my if/else condition seems to prevent database data from loading to the page because technically the submit field is empty while they're loading

  $newItem.on('submit', function(event) {
    event.preventDefault();

    var itemName = $('#item-name').val();
    var itemData = {item: itemName};

    items.push(itemData);
    console.log(items);
    var index = items.indexOf(itemData);

    var $item = $(itemsTemplate(itemData));
    $item.attr('data-index', index);
    $itemsList.append($item);

    $newItem[0].reset();
    $("#item-name").focus();
  });

  $itemsList.on("click", ".delete", function () {
    var $item = $(this).closest(".item");
    var index = $item.attr("data-index");

    items.splice(index, 1);

    $item.remove();

    $('.item').each(function(index) {
      $(this).attr('data-index', index);
    });
  });

  $itemsTemplateDisplay.on("click", "li", function(){
    var $listItem = $(this).closest(".item");
    $listeItem.addClass("done"); //strikethrough method doesn't seem to be working
  });

});
