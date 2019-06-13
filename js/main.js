"use strict";
    $(document).ready(function(){

        var win = $('.win');

        
        document.body.addEventListener('click', function(event){
            // console.log(event);
            
               if (event.target.tagName === 'IMG'){
                document.querySelector('.shoot').play();
                $(event.target).addClass('none');
                console.log('BINGO');
               } else if ($('.elem1').hasClass("none") &&  $('.elem2').hasClass("none") &&  $('.elem3').hasClass("none") &&  $('.elem4').hasClass("none") &&  $('.elem5').hasClass("none")){

                win.css( "display", "block" );
                (document).querySelector('.audio').play();
            }
            
        })




  
    });

  