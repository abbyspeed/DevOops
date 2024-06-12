<?php

require 'vendor/autoload.php';
require_once './dbconnect.php';

$app = new \Slim\App;
$db = new db();

$app->get('/', function(){
    echo("Hello from root folder");
});

$app->get('/users', function($request, $response, $args){
    $name = $args['name'];
    echo 'Hello' .$name;
});

$app->post('/users', function($request, $response, $args) use ($db){
    $conn = $db->connect();
    $data = $request->getParsedBody();

    try{
        if(isset($data['username']) && isset($data['password'])){
            $fullName = $data['fullName'];
            $email = $data['email'];
            $username = $data['username'];
            $phoneNo = $data['phoneNo'];
            $password = $data['password'];
    
            $sql = 'INSERT INTO user (email, username, pwd, fullName, phoneNo) VALUES (:email, :username, :pwd, :fullName, :phoneNo)';
            $stmt = $conn->prepare($sql);
            $stmt->bindValue(':email', $email);
            $stmt->bindValue(':username', $username);
            $stmt->bindValue(':pwd', $password);
            $stmt->bindValue(':fullName', $fullName);
            $stmt->bindValue(':phoneNo', $phoneNo);
    
            $stmt->execute();
    
            return $response->withJson(['message' => 'created successfully']);
        
        } else{
            return $response->withJson(['message' => 'failed']);
            
        }
    }catch(Exception $error){
        return $response->withJson(['message' => 'something went wrong']);
    }
    
});

$app->run();