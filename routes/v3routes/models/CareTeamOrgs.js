/**
*  CareTeamOrgs schema
*
*  @version     0.0.1
*  @created     2016-04-12T23:46:19.669Z
*  @link        https://camintejs.com/
*  @wiki        https://github.com/biggora/caminte/wiki
*
*  Created by create-model script
**/

/**
*  Define  CareTeamOrgs Model
*  @param  {Object}  schema
*  @return {Object}  model
*
*  @wiki   https://github.com/biggora/caminte/wiki/Defining-a-Model
**/
module.exports = function(schema){
    var CareTeamOrgs = schema.define('care_team_orgs', {
         user_id: { type: schema.Number, limit: 11 },
         health_care_org_id: { type: schema.Number, limit: 11 },
         created: { type: schema.Date }
    },{


    });

    /**
    *  Define any custom method
    *  or setup validations here
    **/

    return CareTeamOrgs;
};
