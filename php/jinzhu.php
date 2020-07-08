/*
 * @Author: your name
 * @Date: 2020-07-04 16:14:56
 * @LastEditTime: 2020-07-04 16:15:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Meeting\php\jinzhu.php
 */ 
<?php
    $conn=mysqli_connect("127.0.0.1","root","","h52002",3306);
    mysqli_query($conn,"SET NAMES utf8");
    $sql="SELECT * FROM jinzhu";
    $result=mysqli_query($conn,$sql);
    $arr=[];
    while(($row=mysqli_fetch_row($result))!=null){
        array_push($arr,$row);
    }
    echo $_GET["jinzhu"]."(".JSON_encode($arr).")";
?>