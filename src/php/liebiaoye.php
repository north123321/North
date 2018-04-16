<?php
   
    // 文件路径
    $path = 'data/liebiaoye.json';

    // 打开文件（只读）
    $file = fopen($path,'r');

    // 读取文件内容
    $content = fread($file,filesize($path));

    // json->array
    $data = json_decode($content);

    echo json_encode($res,JSON_UNESCAPED_UNICODE);

?>