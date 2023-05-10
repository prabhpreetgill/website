$('.blog').hide();
$('.keeper').hide();
$('.others').hide();

function showBlog() {
    $(".blog").show();
    $('.world-cup').hide();
    $('.keeper').hide();
    $('.others').hide();
}

function showKeep() {
    $(".keeper").show();
    $('.world-cup').hide();
    $('.blog').hide();
    $('.others').hide();
}

function showOthers() {
    $(".others").show();
    $('.world-cup').hide();
    $('.keeper').hide();
    $('.blog').hide();
}