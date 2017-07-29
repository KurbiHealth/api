/**
*  UserRoleHealthcareprof schema
*
*  @version     0.0.1
*  @created     2016-04-12T23:46:19.680Z
*  @link        https://camintejs.com/
*  @wiki        https://github.com/biggora/caminte/wiki
*
*  Created by create-model script
**/

/**
*  Define  UserRoleHealthcareprof Model
*  @param  {Object}  schema
*  @return {Object}  model
*
*  @wiki   https://github.com/biggora/caminte/wiki/Defining-a-Model
**/
module.exports = function(schema){
    var UserRoleHealthcareprof = schema.define('user_role_healthcareprof', {
         health_care_org_id: { type: schema.Number, limit: 11 },
         created: { type: schema.Date },
         user_id: { type: schema.Number, limit: 11 },
         specialty: { type: schema.String, limit: 100 },
         practice: { type: schema.String, limit: 150 },
         location: { type: schema.String, limit: 150 },
         education: { type: schema.String, limit: 150 },
         interests: { type: schema.String, limit: 150 },
         user_signup_url: { type: schema.String, limit: 250 }
    },{


    });

    /**
    *  Define any custom method
    *  or setup validations here
    **/

    return UserRoleHealthcareprof;
};
