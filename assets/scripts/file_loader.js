/*
    Что бы получить предпросмотр картинки
    вызываем функцию readURL в событии change которое вызываем на инпут type = "file"



*/
$(document).ready(function () {
    //Get preview image in file loader field
    function readURL(input) {
        if (input.files && input.files[0]) {
            // create filereader
            var reader = new FileReader();


            // А так же нужно указать место для замены src картинки которую нужно поменять на загруженную
            reader.onload = function (e) {
                //Change default image src on new path
                $('.js-user-photo').attr('src', e.target.result);
            };
            // read file path
            reader.readAsDataURL(input.files[0]);
        }
    }
    //When field have change call function readURL
    $('#take_file, .take-file').change(function () {
        readURL(this);
    });
    // Remove photo from preview and change on default image
    $('.clear_photo_field').on('click',function () {
        $('.js-user-photo').attr('src', 'assets/images/personal-photo.png');
    });

    $('#req_field').on('change',function () {
        var files = fileInput.files;

        for (var i = 0; i < files.length; i++) {
            alert("Filename " + files[i].name);
        }
    });

    //    File name

    /*
        Получаем и записываем имя картинки в span

        Для этого делаем такую структуру

        <div class="file-load">
            <span class="req_field">Image File</span>
            <input type="file" class=" load_file-target " id="YOUR ID" data-multiple-caption="{count} files selected" >
            <label for="YOUR ID" class="set_req">
                <span class="cur_file-name">Select file...</span>
            </label>
        </div>

        В переменную inputs добавляем свой класс что бы данные выбирались именно с него
        Атрибут data-multiple-caption обязательный , а так же не забыть поменять айди
    */
    var inputs = $( '.load_file-target' );
    Array.prototype.forEach.call( inputs, function( input )
    {
        var label	 = input.nextElementSibling,
            labelVal = label.innerHTML;
        input.addEventListener( 'change', function( e ){
            var fileName = '';
            if( this.files && this.files.length > 1 ){
                fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
            }
            else{
                fileName = e.target.value.split( '\\' ).pop();
            }
            if( fileName ){
                label.querySelector( 'span' ).innerHTML = fileName;

            }

            else{
                label.innerHTML = labelVal;
            }
        });
    });
    /*
        Получаем данные из полей type file и выводим эти данны(размер, имя) файла на странице
       */

       /* <div class="uplod_file">
            <h5 class="head_load">uploaded</h5>
            <div class="show_video">
                <span class="info_file-name form_js-vid_name">Name</span>
                <span class="info_file-size form_js-vid_size">0</span>
                <span class="info_file-mb">mb</span>
                <span class="info_icon"><i class="fas fa-video"></i></span>
                <span class="clear_file clear-file_vid"><i class="fas fa-times"></i></span>
            </div>
            <div class="show_img active-img">
                <span class="info_file-name form_js-img_name">Name</span>
                <span class="info_file-size form_js-img_size">0</span>
                <span class="info_file-mb">mb</span>
                <span class="info_icon"><i class="fas fa-image"></i></span>
                <span class="clear_file clear-file_img"><i class="fas fa-times"></i></span>
            </div>
        </div>*/
$(".show_video").fadeOut();
$(".show_img").fadeOut();
    $('.forum-load_vid').change(function () {
        var name = this.files[0].name;
        var size = this.files[0].size;
        $(".show_video").fadeIn();
        if(size < 1024){
            $('.form_js-vid_size').text('0.' + Math.round(size));
        }else{
            $('.form_js-vid_size').text( Math.round(size / 1024) / 1000);
        }
       $('.form_js-vid_name').text(name);
    });

    $('.forum-load_pict').change(function () {
        var name = this.files[0].name;
        var size = Math.round(this.files[0].size);
        $(".show_img").fadeIn();
        if(size < 1024){
            $('.form_js-vid_size').text('0.' + Math.round(size));
        }else{
            $('.form_js-img_size').text( Math.round(size / 1024) / 1000);
        }
        $('.form_js-img_name').text(name);
    });
    /*Проверка , и добавление класса required если не был загружен файл (логотип компании)
        если файл не был выбран и остается дефолтное значение тега span , то добавляем класс required , что
        указывает пользователю на то что пропущенно обязательное поле
    */
    $('.partners_form-send').on('click',function () {
        if( $('.cur_file-name').text() == 'Select file...'){
            $('.set_req').addClass('required');
        }else{
            $('.set_req').removeClass('required');
        }
    });


window.addEventListener('DOMContentLoaded', init);
function init () {


    

  function addFile () {

    this.UpLoadFile = document.querySelector('.uplod_file');
    this.sendBtnPic = document.querySelector('.load_picture');
    this.sendBtnVid = document.querySelector('.load_video');
    this.remoVer = document.querySelector('.clear_file');


    // Создаем Заголовок //
    this._createUpLod = () => {
          
          let headUp = document.createElement('h5');
              headUp.classList.add('head_load');
              headUp.innerHTML = "uploaded";

          this.UpLoadFile.insertBefore(headUp, this.UpLoadFile.firstChild);    



    }

    // Создаем елемент видео //
    this._createVideo = () => {
        let wrpVid = document.createElement('div');
            wrpVid.classList.add('show_video');
        let nameV = document.createElement('span');
            nameV.classList.add('info_file-name');
            nameV.classList.add('form_js-vid_name');
            nameV.innerHTML = "Name";
        let sizeV = document.createElement('span');
            sizeV.classList.add('info_file-size');    
            sizeV.classList.add('form_js-vid_size');
            sizeV.innerHTML = "100";
        let valueMb = document.createElement('span');
            valueMb.classList.add('info_file-mb')
            valueMb.innerHTML = "mb";
        let iconV = document.createElement('span');
            iconV.classList.add('info_icon');
        let iconVcontV = document.createElement('i');
            iconVcontV.classList.add('fas');    
            iconVcontV.classList.add('fa-video');
        let iconClosV = document.createElement('span');
            iconClosV.classList.add('clear_file');
        let iconClosVcontent = document.createElement('i');
            iconClosVcontent.classList.add('fas');    
            iconClosVcontent.classList.add('fa-times');
        wrpVid.appendChild(nameV);        
        wrpVid.appendChild(sizeV);
        wrpVid.appendChild(valueMb);
        wrpVid.appendChild(iconV);
        wrpVid.appendChild(iconClosV);
        iconV.appendChild(iconVcontV);
        iconClosV.appendChild(iconClosVcontent);

        this.UpLoadFile.insertBefore(wrpVid, this.UpLoadFile.lastChild);
    } 
    // Создаем елемент катринки //
    this._createImg = () => {
        let wrpImg = document.createElement('div');
            wrpImg.classList.add('show_img');
        let nameImg = document.createElement('span');
            nameImg.classList.add('info_file-name');
            nameImg.classList.add('form_js-img_name');
            nameImg.innerHTML = "Name";
        let sizeImg = document.createElement('span');
            sizeImg.classList.add('info_file-size');    
            sizeImg.classList.add('form_js-img_size');
            sizeImg.innerHTML = "100";
        let valueMb = document.createElement('span');
            valueMb.classList.add('info_file-mb')
            valueMb.innerHTML = "mb";
        let iconImg = document.createElement('span');
            iconImg.classList.add('info_icon');
        let iconImgcontV = document.createElement('i');
            iconImgcontV.classList.add('fas');    
            iconImgcontV.classList.add('fa-image');
        let iconClosImg = document.createElement('span');
            iconClosImg.classList.add('clear_file');
        let iconClosImgContent = document.createElement('i');
            iconClosImgContent.classList.add('fas');    
            iconClosImgContent.classList.add('fa-times');
        wrpImg.appendChild(nameImg);        
        wrpImg.appendChild(sizeImg);
        wrpImg.appendChild(valueMb);
        wrpImg.appendChild(iconImg);
        wrpImg.appendChild(iconClosImg);
        iconImg.appendChild(iconImgcontV);
        iconClosImg.appendChild(iconClosImgContent);

        this.UpLoadFile.insertBefore(wrpImg, this.UpLoadFile.lastChild);
    }   
    this._clerFile = (event) => {

        event.parentNode.removeChild(event);
 console.log('blablabla');

    }  

    this._remove = () => {
        let shImg = [].slice.call(document.getElementsByClassName('show_img'));
        let shVid = [].slice.call(document.getElementsByClassName('show_video'));
        let shHlod = [].slice.call(document.getElementsByClassName('head_load')); 
       
           

        if (shImg.length) {
            shImg.forEach(function(elem){
                
                elem.remove();
            });
            // shImg.parentNode.removeChild(shImg);

        } else if (shVid.length) {

            shVid.forEach(function(elem){
                
                elem.remove();
            });

        } else if (shHlod.length) {

            shHlod.forEach(function(elem){
                
                elem.remove();
            });
        }
    }

    this._event = () => {

        this.remoVer.addEventListener('mouseup', this._clerFile(remoVer));
             
        this.sendBtnPic.addEventListener('m', this._remove);
        this.sendBtnPic.addEventListener('mouseup', this._createImg);
        this.sendBtnPic.addEventListener('mouseup', this._createUpLod);
        
        this.sendBtnVid.addEventListener('click', this._remove);          
        this.sendBtnVid.addEventListener('mouseup', this._createVideo); 
        this.sendBtnVid.addEventListener('mouseup', this._createUpLod); 

    }
    

    this._init = () => {   
        this._event (); 
                  
       
    }   

    this._init();     

// var vidShow = document.querySelector('.show_video');
//     imgShow = document.querySelector('.show_img');
//     getEl = document.querySelector('.uplod_file');

// newCreEl = vidShow.cloneNode(true);
// new1CreEl = imgShow.cloneNode(true);
// // getEl.appendChild(newCreEl);
// // getEl.appendChild(new1CreEl);
  }
   const runaddFile = new addFile();
}
    
    // удаление нажимая на крестик //
    $('.clear-file_vid').click(function(){
        $(".forum-load_vid").replaceWith($(".forum-load_vid").val(''));
        $('.form_js-vid_size').text('0');
        $('.form_js-vid_name').text("Name");
        $(".show_video").fadeOut();
    });

    $('.clear-file_img').click(function(){
        $(".forum-load_pict").replaceWith($(".forum-load_pict").val(''));
        $('.form_js-img_size').text('0');
        $('.form_js-img_name').text("Name");
        $(".show_img").fadeOut();

    });
    /*
        var valPick = $(".forum-load_pict").val('');
        var valVid = $(".forum-load_vid").val('');

        function alerttt () {
            console.log("dfds");
         if ( $('.form_js-img_name').text("Name") == true && $('.form_js-vid_name').text("Name") == true) {
            alert("dfdsf");
        }
    };
*/

    // конец удалние нажимая на крестик //
});

