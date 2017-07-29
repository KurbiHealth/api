/**
*  Signups schema
*
*  @version     0.0.1
*  @created     2016-04-12T23:46:19.677Z
*  @link        https://camintejs.com/
*  @wiki        https://github.com/biggora/caminte/wiki
*
*  Created by create-model script
**/

/**
*  Define  Signups Model
*  @param  {Object}  schema
*  @return {Object}  model
*
*  @wiki   https://github.com/biggora/caminte/wiki/Defining-a-Model
**/
module.exports = function(schema){
    var Signups = schema.define('signups', {
         firstname: { type: schema.String, limit: 100 },
         lastname: { type: schema.String, limit: 100 },
         email: { type: schema.String, limit: 250 },
         field: { type: schema.String, limit: 30 },
         created: { type: schema.Date }
    },{


    });

    /**
    *  Define any custom method
    *  or setup validations here
    **/

    return Signups;
};
