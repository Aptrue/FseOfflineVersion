# FseOfflineVersion
Ficha socioeconomic Offline inclusion 


/*Instalacao do projecto*/

node js
vsCode

npm install -g @ionic/cli 

2#
npm install @ionic/storage-angular --save --save-exact
import { IonicStorageModule } from '@ionic/storage' 
Adicione IonicStorageModule.forRoot() à importsmatriz em app.module.ts
2###

3#  para gerar id de cada familia
npm install uuid
 
ionic cordova platform add android@8 // recomendo para android 5 - 5+ 



//Sqlite install

ionic cordova plugin add cordova-sqlite-storage
npm install @ionic-native/sqlite --save

ionic cordova plugin add uk.co.workingedge.cordova.plugin.sqliteporter
npm install @ionic-native/sqlite-porter --save

