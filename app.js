
jQuery('.modal').on('show.bs.modal', function (e) {
    jQuery('#modal-video').get(0).play();
});

jQuery('.modal').on('hidden.bs.modal', function (e) {
    jQuery('#modal-video').get(0).pause();
    jQuery('#modal-video').get(0).currentTime = 0;
});
