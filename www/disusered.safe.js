/**
 * disusered.safe.js
 *
 * @overview Easy to use cryptographic operations for Cordova.
 * @author Carlos Antonio
 * @license MIT
*/

var exec = cordova.require('cordova/exec');

/**
 * onSuccess
 *
 * @param {Function} success Success callback
 * @param {String} path Encrypted file URI
 * @returns {String} Encrypted file URI
 */
function onSuccess(success, path) {
  if (typeof success === 'function') {
    window.requestFileSystem(window.PERSISTENT, 0, function(fs) {
      fs.root.getFile(path.split('/').pop(), {create: false}, function(file) {
        file.file(function(fileObj) {
          success(fileObj);
        }, onError);
      }, onError);
    }, onError);
  }
}

/**
 * onError
 *
 * @param {String} error Error callback
 * @param {Function} code Error code
 * @returns {String} Decrypted file URI
 */
function onError(error, code) {
  if (typeof error === 'function') error(code);
  return code;
}


var EncryptionPlugin = function() {
  console.log('EncryptionPlugin instanced');
};

EncryptionPlugin.prototype.encrypt = function(path, password, onSuccess, onError) {

  if (!path || arguments.length === 0) return;
  var errorCallback = function(obj) {
      onError(obj);
  };

  var successCallback = function(obj) {
      onSuccess(obj);
  };

  // exec(successCallback, errorCallback, 'AndroidToast', 'show', [msg]);
  exec(successCallback, errorCallback, 'Safe', 'encrypt', [path, password]);
};

EncryptionPlugin.prototype.decrypt = function(path, password, onSuccess, onError) {

  if (!path || arguments.length === 0) return;
  var errorCallback = function(obj) {
      onError(obj);
  };

  var successCallback = function(obj) {
      onSuccess(obj);
  };

  // exec(successCallback, errorCallback, 'AndroidToast', 'show', [msg]);

  exec(successCallback, errorCallback, 'Safe', 'decrypt', [path, password]);
};

if (typeof module != 'undefined' && module.exports) {
  module.exports = EncryptionPlugin;
}
