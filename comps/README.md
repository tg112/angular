moduleの作成  
`ng generate module <MODULE_NAME> --routing`

'Routing' flag tells angular to make this module ready for navigation

新規作成したモジュールを使用する場合、そのモジュール内でコンポーネントをexportし、appでそのモジュールをインストールする

## routing
`ng g m <module名> --routing`で生成

`module名-routing.module.ts`に下記を定義する
```
const routes: Routes = [{
  path: "<パス名>", component: <遷移時に表示するコンポーネント>
}];
```