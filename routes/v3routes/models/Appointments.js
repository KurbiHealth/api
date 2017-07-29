/**
*  Appointments schema
*
*  @version     0.0.1
*  @created     2016-04-12T23:46:19.668Z
*  @link        https://camintejs.com/
*  @wiki        https://github.com/biggora/caminte/wiki
*
*  Created by create-model script
**/

/**
*  Define  Appointments Model
*  @param  {Object}  schema
*  @return {Object}  model
*
*  @wiki   https://github.com/biggora/caminte/wiki/Defining-a-Model
**/
module.exports = function(schema){
    var Appointments = schema.define('appointments', {
         date: { type: schema.Date },
         time: { type: schema.Date },
         location: { type: schema.String, limit: 255 },
         created: { type: schema.Date }
    },{


    });

    /**
    *  Define any custom method
    *  or setup validations here
    **/

    return Appointments;
};
