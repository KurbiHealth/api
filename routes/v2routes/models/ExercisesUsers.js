/**
*  ExercisesUsers schema
*
*  @version     0.0.1
*  @created     2016-04-12T23:46:19.670Z
*  @link        https://camintejs.com/
*  @wiki        https://github.com/biggora/caminte/wiki
*
*  Created by create-model script
**/

/**
*  Define  ExercisesUsers Model
*  @param  {Object}  schema
*  @return {Object}  model
*
*  @wiki   https://github.com/biggora/caminte/wiki/Defining-a-Model
**/
module.exports = function(schema){
    var ExercisesUsers = schema.define('exercises_users', {
         exercise_id: { type: schema.Number, limit: 11 },
         user_id: { type: schema.Number, limit: 11 },
         frequency: { type: schema.String, limit: 15 },
         last_date_exercised: { type: schema.Date },
         created: { type: schema.Date, default: '0000-00-00 00:00:00' }
    },{


    });

    /**
    *  Define any custom method
    *  or setup validations here
    **/

    return ExercisesUsers;
};
