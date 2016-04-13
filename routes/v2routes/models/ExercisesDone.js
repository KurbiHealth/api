/**
*  ExercisesDone schema
*
*  @version     0.0.1
*  @created     2016-04-12T23:46:19.670Z
*  @link        https://camintejs.com/
*  @wiki        https://github.com/biggora/caminte/wiki
*
*  Created by create-model script
**/

/**
*  Define  ExercisesDone Model
*  @param  {Object}  schema
*  @return {Object}  model
*
*  @wiki   https://github.com/biggora/caminte/wiki/Defining-a-Model
**/
module.exports = function(schema){
    var ExercisesDone = schema.define('exercises_done', {
         user_id: { type: schema.Number, limit: 11 },
         exercise_id: { type: schema.Number, limit: 11 },
         date_exercised: { type: schema.Date }
    },{


    });

    /**
    *  Define any custom method
    *  or setup validations here
    **/

    return ExercisesDone;
};
