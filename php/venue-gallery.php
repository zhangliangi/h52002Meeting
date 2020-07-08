<?php
    $conn=mysqli_connect("127.0.0.1","root","","meeting",3306);
    mysqli_query($conn,"SET NAMES utf8");
    $sql="SELECT * FROM  venue_gallery";
    $result=mysqli_query($conn,$sql);
    $arr=[];
    while(($row=mysqli_fetch_row($result))!=null){
        array_push($arr,$row);
    }
    echo $_GET["venue-gallery"]."(".JSON_encode($arr).")";
?>