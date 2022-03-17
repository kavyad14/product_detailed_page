$("#wishlist_btn").click(function(){
  $("#wishlist_heart").toggleClass("fa-solid");
});

$("#increase").click(function() {
  $quantity = $("#number").val();
  $quantity++;
  $("#number").val($quantity);
});

$("#decrease").click(function() {
  $quantity = $("#number").val();
  if ($quantity <= 0) {
    $quantity = 0;
  } else {
    $quantity--;
  }
  $("#number").val($quantity);
});

$("#images_verticle img").click(function() {
  $selected_image = $(this).attr('src');

  $("#images_verticle img").removeClass("selected");
  $(this).addClass("selected");
  $("#star_image").attr('src',$selected_image);
});

// Set the options that I want
toastr.options = {
  "closeButton": true,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-right",
  "preventDuplicates": true,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

$("#add_to_cart").click(function() {
  toastr.success("Internship added to cart successfully!");
});