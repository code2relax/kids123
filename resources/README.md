cd kids123
ionic cordova build android --prod --release

"c:\Program Files\Java\jdk1.8.0_131\bin\jarsigner.exe" -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.jks platforms\android\build\outputs\apk\android-release-unsigned.apk my-alias

cd platforms\android\build\outputs\apk
c:\Users\<user>\AppData\Local\Android\Sdk\build-tools\27.0.2\zipalign.exe -v 4 android-release-unsigned.apk ABC123ColorsShapes.apk

c:\Users\<user>\AppData\Local\Android\Sdk\build-tools\27.0.2\apksigner  verify ABC123ColorsShapes.apk 
