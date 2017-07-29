/**
*  GoalsSupporters schema
*
*  @version     0.0.1
*  @created     2016-04-12T23:46:19.671Z
*  @link        https://camintejs.com/
*  @wiki        https://github.com/biggora/caminte/wiki
*
*  Created by create-model script
**/

/**
*  Define  GoalsSupporters Model
*  @param  {Object}  schema
*  @return {Object}  model
*
*  @wiki   https://github.com/biggora/caminte/wiki/Defining-a-Model
**/
module.exports = function(schema){
    var GoalsSupporters = schema.define('goals_supporters', {
         supporter_user_id: { type: schema.Number, limit: 11 },
         goal_id: { type: schema.Number, limit: 11 },
         user_invited: { type: schema.Boolean, limit: 4 },
         supporter_joined: { type: schema.Boolean, limit: 4 },
         created: { type: schema.Date }
    },{


    });

    /**
    *  Define any custom method
    *  or setup validations here
    **/

    return GoalsSupporters;
};
