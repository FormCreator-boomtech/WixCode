import {created, badRequest} from 'wix-http-functions';
import wixData from 'wix-data';

export function post_BoomFormData( request ) 
{
    let responseOptions = {
        "headers": {
            "Content-Type": "application/json"
        },
        "body" : null
    };

    return request.body.json()
    .then( ( body ) => 
    {
        return wixData.insert( body.collection, body.data );   
    } )
    .then( ( result ) => 
    {
        responseOptions.body = result;
        return created( responseOptions );
    } )
    .catch( ( error ) => 
    {
        responseOptions.body = JSON.stringify(error.message);
        return badRequest( responseOptions );
    } );
        
}
