'use strict';

var FbAPI = (function() {
    return {
        firebaseCredentials:  function() {
            return new Promise((resolve, reject) => {
                $.ajax({
                    method: 'GET',
                    url: `apiKeys.json`
                }).then((response) =>  { 
                    resolve(response);
                    // console.log(response);
                }, (response) => { //error function for ajax call to apiKeys.json
                    reject(response);
                });

            });
        }
    };
})();
