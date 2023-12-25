<?php
$Name=$_REQUEST['enter name'];
$Email=$_REQUEST['email'];
$Contact=$_REQUEST['contact'];

$conn=mysqli_connect($host,$user,$password,$db);
$insert=( "insert into data values('Name','Email','Contact'");

if(isset($_post ['btn']))
{
    $host="localhost";
    $user="root";
    $password="";
    $db="asianfood";

    mysqli_query($conn,$insert);

}

?>