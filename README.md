# Node.js Todoアプリ
[https://nodejs-todoapp.herokuapp.com/](https://nodejs-todoapp.herokuapp.com/)  
Node.jsおよびExpressフレームワークを使用した簡単なTodoアプリです。Mongooseライブラリを使用してMongoDBに接続し、ユーザーがタスクを追加、編集、削除できるようになっています。

## 技術スタック
- Node.js
- Express.js
- MongoDB
- Mongoose

## 使用方法
1, このリポジトリをクローンします。
```
git clone git@github.com:ya-sny/nodejs_todoapp.git
```

2, 必要なパッケージをインストールします。
```
cd nodejs_todoapp
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

アプリケーションにアクセスするとホームページが表示されます。ここでユーザーはタスクを追加することができます。追加されたタスクはホームページの下部に表示されます。
各タスクには編集および削除ボタンがあります。ユーザーはこれらのボタンを使用してタスクを編集または削除することができます。
