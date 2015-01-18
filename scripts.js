var alterMainImage = function(data) {
  $("#main-image").fadeOut(200/*milliseconds*/, function() {
    $(this).attr("src", data.url).fadeIn(200/*milliseconds*/);
  })

  $(".description").text(data.desc);
  $(".price").text("$" + data.price);
};

// This is saying;
// As soon as jQuery is loaded, evaluate the scripts inside this function.
$(document).ready(function() {

  // We are making a list to store some data. (images, cost)
  var images = [];

  var iterateNumber = 5;

  // Make an arbitrary amount of iterations.
  for (var i = 0; i < iterateNumber; i++) {
    // Insert an object into our list for each iteration.
    images.push({
      url:   "http://www.placekitten.com/g/" + (201 + i) + "/" + (201 + i),
      price: 3 * (i + 1),
      desc:  "A cat."
    });

    // Create an image.
    var text = $("<li><image src='" + images[i].url + "'></image></li>").attr("data-index", i);

    // Bind an event handler to the image. This will let us capture the
    // information on that image.
    text.bind("click", function(event) {
      alterMainImage(images[$(event.currentTarget).attr("data-index")]);
    });

    // This actually shoves it onto the page.
    $("#image-thumbs").append(text);
  }

  // Attach the image url to the main image container.
  $("#main-image").attr("src", images[0].url);
  $(".description").text(images[0].desc);
  $(".price").text("$" + images[0].price);
})