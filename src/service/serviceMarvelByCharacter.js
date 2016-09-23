
import { API_BASE_URL, API_KEY_PUBLIC, API_KEY_PRIVATE  } from './API';
var crypto = require('crypto');


/** Request to the server :   load one character  :  API_BASE_URL(@param)  **/

function loadDistantCharacter(BASE_URL, PARAMS, _id) {
    return new Promise(function (resolve, reject) {

        $( document ).ready(function() {
            //console.log( "ready!" );

            $.ajax({
                url: BASE_URL +"/"+_id,
                type: "get",
                data: PARAMS,
                success: function(response) {
                    //console.log("response.data.results = > ", response.data.results);
                    if ( response.data  ) {
                        resolve(response.data);
                    }
                },
                error: function(xhr) {
                    console.log("xhr = ", xhr);
                    reject(xhr);
                }
            });
        });
    });
}



export function search_CharacterInfo( _id ) {
    //console.log("search_CharacterInfo ", _id);

    var timestamp = Math.round(new Date().getTime()/1000);
    let concatenatedString = timestamp + API_KEY_PRIVATE + API_KEY_PUBLIC  ;
    var hash = crypto.createHash('md5').update(concatenatedString).digest("hex");

    var params = {
        "ts": timestamp,
        "apikey": API_KEY_PUBLIC,
        "hash": hash
    };
    //console.log("params ", params);

    let promise  = new Promise(function (resolve, reject) {
        loadDistantCharacter(API_BASE_URL, params, _id).then(function (content) {
            //console.info('loadDistantArticles !', content.results);
            resolve(content.results);
        }).catch(function (err) {
            console.error('Erreur !');
            reject(err);
        });

    });

    return promise;
}


