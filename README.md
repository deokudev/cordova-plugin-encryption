cordova-safe
====

> Simple file encryption for Cordova.

## Install

```bash
$ cordova plugin add https://github.com/deokudev/cordova-plugin-encryption.git
```

## Usage

```javascript
var safe = cordova.plugins.disusered.safe,
    key = 'someKey';


function success(encryptedFile) {
  console.log('Encrypted file: ' + encryptedFile);

  safe.decrypt(encryptedFile, key, function(decryptedFile) {
    console.log('Decrypted file: ' + decryptedFile);
  }, error);
}

function error() {
  console.log('Error with cryptographic operation');
}

safe.encrypt('file:/storage/sdcard/DCIM/Camera/1404177327783.jpg', key, success, error);
```

## API

The plugin exposes the following methods:

```javascript
cordova.plugins.disusered.safe.encrypt(file, key, success, error);
cordova.plugins.disusered.safe.decrypt(file, key, success, error);
```

#### Parameters:
* __file:__ A string representing a local URI
* __key:__ A key for the crypto operations
* __success:__ Optional success callback
* __error:__ Optional error callback

## License

MIT © [Carlos Rosquillas](http://carlosanton.io)
