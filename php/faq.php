/*
 * @Author: your name
 * @Date: 2020-07-04 17:04:23
 * @LastEditTime: 2020-07-04 17:04:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Meeting\php\faq.php
 */ 
<?php
    $conn=mysqli_connect("127.0.0.1","root","","h52002",3306);
    mysqli_query($conn,"SET NAMES utf8");
    $sql="SELECT * FROM faq";
    $result=mysqli_query($conn,$sql);
    $arr=[];
    while(($row=mysqli_fetch_row($result))!=null){
        array_push($arr,$row);
    }
    echo $_GET["faq"]."(".JSON_encode($arr).")";
?>