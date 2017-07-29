/**
*  UserRolePatients schema
*
*  @version     0.0.1
*  @created     2016-04-12T23:46:19.680Z
*  @link        https://camintejs.com/
*  @wiki        https://github.com/biggora/caminte/wiki
*
*  Created by create-model script
**/

/**
*  Define  UserRolePatients Model
*  @param  {Object}  schema
*  @return {Object}  model
*
*  @wiki   https://github.com/biggora/caminte/wiki/Defining-a-Model
**/
module.exports = function(schema){
    var UserRolePatients = schema.define('user_role_patients', {
         user_id: { type: schema.Number, limit: 11 },
         created: { type: schema.Date },
         year_first_symptom: { type: schema.String, limit: 4 },
         year_diagnosed: { type: schema.String, limit: 4 },
         primary_physician: { type: schema.String, limit: 100 },
         ms_type: { type: schema.String, limit: 1 }
    },{


    });

    /**
    *  Define any custom method
    *  or setup validations here
    **/

    return UserRolePatients;
};
