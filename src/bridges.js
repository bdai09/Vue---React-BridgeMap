//purpose:
//do a GET request to our API
//check the response we get back to make sure it worked
//if it failed, throw an error
//if it worked, parse the response JSON into JS
//fix-up all the bridge names so they can be displayed in HTML

// Convert characters like ' to HTML entities using
// https://github.com/mathiasbynens/he#heencodetext-options
import { encode } from 'he';

const bridgeUrl = 'https://api.myjson.com/bins/17fpo0';
export default function(){
    return fetch(bridgeUrl) //request data
    .then(response=>{    //check response
        if(!response.ok){ //if failed, throw error
           throw new Error(response.statusText);
        }
        //if worked, parse response to JS
        return response.json();
    })
    .then(bridges=>{
        //encoded and uppercase all bridge names
        bridges.forEach(bridge=>{ bridge.nameEncoded=encode(bridge.name.toUpperCase()) });
        return bridges;
    })

    
}