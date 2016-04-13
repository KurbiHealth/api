/**
*  GoalActivities schema
*
*  @version     0.0.1
*  @created     2016-04-12T23:46:19.671Z
*  @link        https://camintejs.com/
*  @wiki        https://github.com/biggora/caminte/wiki
*
*  Created by create-model script
**/

/**
*  Define  GoalActivities Model
*  @param  {Object}  schema
*  @return {Object}  model
*
*  @wiki   https://github.com/biggora/caminte/wiki/Defining-a-Model
**/
module.exports = function(schema){
    var GoalActivities = schema.define('goal_activities', {
         name: { type: schema.String, limit: 255 },
         type: { type: schema.String, limit: 255 },
         icon_path: { type: schema.String, limit: 200 },
         created: { type: schema.Date }
    },{


    });

    /**
    *  Define any custom method
    *  or setup validations here
    **/

    return GoalActivities;
};
