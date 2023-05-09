# Node.js Todoアプリ
このリポジトリは、Node.jsおよびExpressフレームワークを使用した簡単なTodoアプリの実装例です。Mongooseライブラリを使用してMongoDBに接続し、ユーザーがタスクを追加、編集、削除できるようになっています。

## 技術スタック
Node.js
Express.js
MongoDB
Mongoose

## インストール
1, このリポジトリをクローンします。
```
git clone https://github.com/Shin-sibainu/nodejs-todoapp-udemy.git
```

2, 必要なパッケージをインストールします。
```
cd nodejs-todoapp-udemy
npm install
```

3, MongoDBをローカルで実行していない場合は、公式ドキュメントを参照してインストールしてください。

4, .envファイルを作成します。 PORTとMongoDBの接続情報を追加します。
```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/todoapp
```

5, アリケーションを起動します。
```
npm start
```

6, ブラウザで http://localhost:3000 にアクセスして、アプリケーションが正常に動作していることを確認します。

## 使用方法
アプリケーションにアクセスすると、ホームページが表示されます。ここで、ユーザーはタスクを追加することができます。追加されたタスクは、ホームページの下部に表示されます。
各タスクには、編集および削除ボタンがあります。ユーザーはこれらのボタンを使用してタスクを編集または削除することができます。
