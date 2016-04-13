/**
*  UserRoleEmployees schema
*
*  @version     0.0.1
*  @created     2016-04-12T23:46:19.680Z
*  @link        https://camintejs.com/
*  @wiki        https://github.com/biggora/caminte/wiki
*
*  Created by create-model script
**/

/**
*  Define  UserRoleEmployees Model
*  @param  {Object}  schema
*  @return {Object}  model
*
*  @wiki   https://github.com/biggora/caminte/wiki/Defining-a-Model
**/
module.exports = function(schema){
    var UserRoleEmployees = schema.define('user_role_employees', {
         user_id: { type: schema.Number, limit: 11 },
         admin_password: { type: schema.String, limit: 50 },
         created: { type: schema.Date }
    },{


    });

    /**
    *  Define any custom method
    *  or setup validations here
    **/

    return UserRoleEmployees;
};
