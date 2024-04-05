export ANDROID_SDK_ROOT=/Users/abdilah/Library/Android/sdk

function androidinstall(){
   adb install -r ./bin/$1.apk
}

function androidrun(){
   ant clean debug
   adb shell am start -n $1/$1.$2
}

