<?php
/*
 * @Author: your name
 * @Date: 2020-07-02 11:54:28
 * @LastEditTime: 2020-07-04 15:10:32
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \Meeting\php\speakers.php
 */ 
    $conn=mysqli_connect("127.0.0.1","root","","meeting",3306);
    mysqli_query($conn,"SET NAMES utf8");
    $sql="SELECT * FROM speakers";
    $result=mysqli_query($conn,$sql);
    $arr=[];
    while(($row=mysqli_fetch_assoc($result))!=null){
        array_push($arr,$row);
    }
    echo $_GET["speakers"]."(".JSON_encode($arr).")";
?>