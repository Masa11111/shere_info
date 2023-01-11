<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>登録完了</title>
</head>
<body>
    <h1>ご登録いただき有難うございます。</h1>
    <p>お客様情報は以下の通りです。</p>
    <p>ご確認ください。</p>

    --------------------------------------<br>

    【名前】　　　　　：{{$name}}<br>
    【メールアドレス】：{{$email}}<br>
    【日時】　　　　　：<?php echo date("Y年m月d日");?><br>

    --------------------------------------<br>

    <p>*本メールは送信専用メールアドレスです。</p>
    <p>*ご返信はご遠慮ください。</p>

    <p>運営会社：株式会社MolbeT</p>
    <p>福岡県福岡市</p>
</body>
</html>