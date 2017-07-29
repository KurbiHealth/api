/**
*  PathSteps schema
*
*  @version     0.0.1
*  @created     2016-04-12T23:46:19.675Z
*  @link        https://camintejs.com/
*  @wiki        https://github.com/biggora/caminte/wiki
*
*  Created by create-model script
**/

/**
*  Define  PathSteps Model
*  @param  {Object}  schema
*  @return {Object}  model
*
*  @wiki   https://github.com/biggora/caminte/wiki/Defining-a-Model
**/
module.exports = function(schema){
    var PathSteps = schema.define('path_steps', {
         name: { type: schema.String, limit: 255 },
         path_id: { type: schema.Number, limit: 11 },
         created: { type: schema.Date }
    },{


    });

    /**
    *  Define any custom method
    *  or setup validations here
    **/

    return PathSteps;
};
