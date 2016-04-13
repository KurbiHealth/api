/**
*  CareTeamMembers schema
*
*  @version     0.0.1
*  @created     2016-04-12T23:46:19.669Z
*  @link        https://camintejs.com/
*  @wiki        https://github.com/biggora/caminte/wiki
*
*  Created by create-model script
**/

/**
*  Define  CareTeamMembers Model
*  @param  {Object}  schema
*  @return {Object}  model
*
*  @wiki   https://github.com/biggora/caminte/wiki/Defining-a-Model
**/
module.exports = function(schema){
    var CareTeamMembers = schema.define('care_team_members', {
         care_team_id: { type: schema.Number, limit: 11 },
         member_user_id: { type: schema.Number, limit: 11 },
         role: { type: schema.String, limit: 50 },
         sent_invitation: { type: schema.Boolean, limit: 4 },
         accepted: { type: schema.Boolean, limit: 4 },
         declined: { type: schema.Boolean, limit: 4 },
         created: { type: schema.Date }
    },{


    });

    /**
    *  Define any custom method
    *  or setup validations here
    **/

    return CareTeamMembers;
};
