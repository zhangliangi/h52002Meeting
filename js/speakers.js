/*
 * @Author: your name
 * @Date: 2020-07-04 14:56:15
 * @LastEditTime: 2020-07-06 10:10:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Meeting\js\speakers.js
 */ 
$.getJSON("http://192.168.1.61/Meeting/php/speakers.php?speakers=?", (data) => {
    // console.log(data);
    var arr=data[0][5].split(".");
    // console.log(arr);

    for (var i = 0; i < data.length; i++) {
        // console.log(data[i]);
        $speakers_box = $(`<div class="col-lg-4 col-md-6"></div>`);
        $speaker= $(`<div class="speaker wow flipInX"data-wow-duration="${i}s"></div>`);
        $img = $(`<img src="${data[i][6]}" alt="Speaker ${i+1}" class="img-fluid">`);
        $details= $(`<div class="details"></div>`);
        $h3= $(`<h3><a href="speaker-details.html">${data[i][1]}</a></h3>`);
        $p=$(`<p>${data[i][4]}</p>`);
        $social= $(`<div class="social"></div>`);
        //contact
        for(var j=0;j<arr.length;j++){
            $i = $(`<a href="#" style="margin-right:5px;"><i class="fa ${arr[j]}"> </i></a>`);
            $social.append($i);
        // console.log($i);

        }
        $details.append($h3);
        $details.append($p);
        $details.append($social);
        $speaker.append($img);
        $speaker.append($details);
        $speakers_box.append($speaker);
        $("#speakers>.container>.row").append($speakers_box);
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

