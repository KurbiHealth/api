/**
*  Addresses schema
*
*  @version     0.0.1
*  @created     2016-04-12T23:46:19.668Z
*  @link        https://camintejs.com/
*  @wiki        https://github.com/biggora/caminte/wiki
*
*  Created by create-model script
**/

/**
*  Define  Addresses Model
*  @param  {Object}  schema
*  @return {Object}  model
*
*  @wiki   https://github.com/biggora/caminte/wiki/Defining-a-Model
**/
module.exports = function(schema){
    var Addresses = schema.define('addresses', {
         user_id: { type: schema.Number, limit: 11 },
         line1: { type: schema.String, limit: 255 },
         line2: { type: schema.String, limit: 255 },
         line3: { type: schema.String, limit: 255 },
         city: { type: schema.String, limit: 255 },
         state_province: { type: schema.String, limit: 255 },
         zip_postal: { type: schema.String, limit: 255 },
         created: { type: schema.Date }
    },{


    });

    /**
    *  Define any custom method
    *  or setup validations here
    **/

    return Addresses;
};
