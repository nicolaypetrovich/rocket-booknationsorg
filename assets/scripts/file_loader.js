$(document).ready(function () {
    //Get preview image in file loader field
    function readURL(input) {
        if (input.files && input.files[0]) {
            // create filereader
            var reader = new FileReader();

            reader.onload = function (e) {
                //Change default image src on new path
                $('.js-user-photo').attr('src', e.target.result);
            };
            // read file path
            reader.readAsDataURL(input.files[0]);
        }
    }
    //When field have change call function readURL
    $('#take_file').change(function () {
        readURL(this);
    });
    // Remove photo from preview and change on default image
    $('.clear_photo_field').on('click',function () {
        $('.js-user-photo').attr('src', 'assets/images/personal-photo.png');
    });
});