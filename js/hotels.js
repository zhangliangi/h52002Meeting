/*
 * @Author: your name
 * @Date: 2020-07-03 09:32:56
 * @LastEditTime: 2020-07-06 10:14:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Meeting\js\hotels.js
 */ 
// $.ajax({
//     'url':"http://localhost/Meeting/php/hotels.php",
//     'dataType':"JSONP",
//     'jsonp':"hotels",
//     'success':(data)=>{
//         console.log(data);
//     }
// })
$.getJSON("http://192.168.1.61/Meeting/php/hotels.php?hotels=?", (data) => {
    // console.log(data);
    for (var i = 0; i < data.length; i++) {
        $hotel_box = $(`<div class="col-lg-4 col-md-6 "></div>`);
        $hotel = $(`<div class="hotel wow rollIn"data-wow-duration="${i}s"></div>`);
        // console.log($hotel);
        $img = $(`<div class="hotel-img"><img src="${data[i][1]}" alt="Hotel ${data[i][0]}" class="img-fluid"></div>`);
        $h3 = $(`<h3><a href="#">Hotel ${data[i][0]}</a></h3>`)
        $num = data[i][3];
        $stars = $(`<div class="stars"></div>`);
        if(parseInt($num)<$num){
            $num-=1;
        }
        for (var j = 0; j<$num; j++) {
            $i = $(`<i class="fa fa-star"></i>`);
            $stars.append($i);
        }
        if(parseInt($num)<$num){
            // console.log($(".stars>i:eq(0)"));
            $ihalf = $(`<i class="fa fa-star-half-full"></i>`);
            $stars.append($ihalf);
        } 
        $p = $(`<p>"${data[i][4]}</p>`);
        $hotel.append($img);
        $hotel.append($h3);
        $hotel.append($stars);
        $hotel.append($p);
        $hotel_box.append($hotel);
        $("#hotels>.container>.row").append($hotel_box);
    }
})
$.getJSON("http://192.168.1.61/Meeting/php/venue.php?venue=?", (data) => {
    // console.log(data);
    for (var i = 0; i < data.length; i++) {
        $venue_box = $(`<div class="col-lg-3 col-md-4 wow swing" data-wow-duration="2s"></div>`);
        $venue= $(`<div class="venue-gallery"></div>`);
        $img = $(`<img src="${data[i][1]}" alt class="img-fluid">`);
        $a = $(`<a href="${data[i][1]}" class="venobox vbox-item" data-gall="venue-gallery"></a>`)
        $a.append($img);
        $venue.append($a);
        $venue_box.append($venue);
        $("#venue>.venue-gallery-container>.row").append($venue_box);
        // console.log($venue_box);
    }
    $(".venobox").venobox();
        $('.venobox_custom').venobox({
        framewidth: '300px',
        frameheight: '250px',
        border: '6px',
        bordercolor: '#ba7c36',
        numeratio: true
    });
 
})
$.getJSON("http://192.168.1.61/Meeting/php/gallery.php?gallery=?",(data)=>{
     $owl=$(`<div class="owl-carousel gallery-carousel">`);
    for (var i = 0; i < data.length; i++) {
      $a=$(`<a href='${data[i][1]}' class='venobox' data-gall='gallery-carousel'><img src='${data[i][1]}' alt=''> </a>`);
      $owl.append($a);
     $("#gallery").append($owl);
    }
   
    $(".venobox").venobox();
        $('.venobox_custom').venobox({
        framewidth: '300px',
        frameheight: '250px',
        border: '6px',
        bordercolor: '#ba7c36',
        numeratio: true
    });
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        items:2,
        responsive:{
          600:{
              items:4
          }
      },
      center: true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true
      });
      $(".owl-item:last").remove();
})
$.getJSON("http://192.168.1.61/Meeting/php/speakers.php?speakers=?",(data)=>{
    // console.log(data); 
    for(var i=0;i<data.length;i++){
    $row =$(`<div class="row schedule-item"><div class="col-md-2"><time>${data[i][3]}</time></div></div>`);
    $col =$(`<div class="col-md-10"><div class="speaker"><img src="${data[i][6]}" alt="Hubert Hirthe"> </div> </div>`);
    $h4 =$(`<h4>${data[i][7]} <span>${data[i][1]}</span></h4>`);
    $p =$(` <p>${data[i][8]}</p>`);
   $($col).append($h4);
   $($col).append($p);
        $($row).append($col);
    $("#day-1").append($row);
   }
   for(var i=0;i<data.length;i++){
    $row =$(`<div class="row schedule-item"><div class="col-md-2"><time>${data[i][3]}</time></div></div>`);
    $col =$(`<div class="col-md-10"><div class="speaker"><img src="${data[i][6]}" alt="Hubert Hirthe"> </div> </div>`);
    $h4 =$(`<h4>${data[i][7]} <span>${data[i][1]}</span></h4>`);
    $p =$(` <p>${data[i][8]}</p>`);
   $($col).append($h4);
   $($col).append($p);
        $($row).append($col);
    $("#day-2").append($row);
   }
   data.reverse();
   for(var i=0;i<data.length;i++){
    $row =$(`<div class="row schedule-item"><div class="col-md-2"><time>${data[i][3]}</time></div></div>`);
    $col =$(`<div class="col-md-10"><div class="speaker"><img src="${data[i][6]}" alt="Hubert Hirthe"> </div> </div>`);
    $h4 =$(`<h4>${data[i][7]} <span>${data[i][1]}</span></h4>`);
    $p =$(` <p>${data[i][8]}</p>`);
   $($col).append($h4);
   $($col).append($p);
        $($row).append($col);
    $("#day-3").append($row);
   }
   $(".fade").css({
    "opacity": "1"
  })
  $(".nav-link").click(function () {
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
  })
})
$.getJSON("http://192.168.1.77:8080/Meeting/php/jinzhu.php?jinzhu=?",(data)=>{
    for(var i=0;i<data.length;i++){
      $div=$(`<div class="col-lg-3 col-md-4 col-xs-6"><div class="supporter-logo wow bounceInUp"data-wow-duration="2s"><img src="${data[i][1]}" class="img-fluid" alt=""> </div> </div>`)  
    $(".clearfix").append($div);
}
    
})
$.getJSON("http://192.168.1.77:8080/Meeting/php/faq.php?faq=?",(data)=>{
   $div=$(`<div class="row justify-content-center"></div>`);
   $col=$(`<div class="col-lg-9"> </div>`);
    $ul=$(`<ul id="faq-list"></ul>`);
    $($col).append($ul);
  
    for(var i=0;i<data.length;i++){
        $li=$(`<li class="wow bounceInUp" data-wow-duration="${i}s"><a data-toggle="collapse" class="collapsed" href="${data[i][1]}">${data[i][2]}<i class="fa ${data[i][3]}"></i></a></li>`);
        $con=$(`<div id="faq1" class="collapse" data-parent="#faq-list"><p>${data[i][4]}</p></div>`);
       
        $($li).append($con); 
        $($ul).append($li);
       
    }
    $div.append($col);
    $(".faq").append($div);
    $("#faq-list a").mouseover(function () {
        if ($(this).hasClass("collapsed")) {
          $("#faq-list div").removeClass("show");
          $(this).siblings().addClass("show");
          $("#faq-list a").addClass("collapsed");
          $(this).toggleClass("collapsed");
        } else {
          $("#faq-list div").removeClass("show");
          $("#faq-list a").addClass("collapsed");
        }
      })
      $("#faq-list a").mouseout(function () {
          $("#faq-list div").removeClass("show");
          $("#faq-list a").addClass("collapsed");
      })
})
 