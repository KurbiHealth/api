/**
*  PathStepsDone schema
*
*  @version     0.0.1
*  @created     2016-04-12T23:46:19.675Z
*  @link        https://camintejs.com/
*  @wiki        https://github.com/biggora/caminte/wiki
*
*  Created by create-model script
**/

/**
*  Define  PathStepsDone Model
*  @param  {Object}  schema
*  @return {Object}  model
*
*  @wiki   https://github.com/biggora/caminte/wiki/Defining-a-Model
**/
module.exports = function(schema){
    var PathStepsDone = schema.define('path_steps_done', {
         path_steps_id: { type: schema.Number, limit: 11 },
         percent_done: { type: schema.Number, limit: 11 },
         done_timestamp: { type: schema.Date },
         created: { type: schema.Date }
    },{


    });

    /**
    *  Define any custom method
    *  or setup validations here
    **/

    return PathStepsDone;
};
