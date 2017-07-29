/**
*  CareTeams schema
*
*  @version     0.0.1
*  @created     2016-04-12T23:46:19.668Z
*  @link        https://camintejs.com/
*  @wiki        https://github.com/biggora/caminte/wiki
*
*  Created by create-model script
**/

/**
*  Define  CareTeams Model
*  @param  {Object}  schema
*  @return {Object}  model
*
*  @wiki   https://github.com/biggora/caminte/wiki/Defining-a-Model
**/
module.exports = function(schema){
    var CareTeams = schema.define('care_teams', {
         name: { type: schema.String, limit: 200 },
         created: { type: schema.Date },
         user_id: { type: schema.Number, limit: 11 }
    },{


    });

    /**
    *  Define any custom method
    *  or setup validations here
    **/

    return CareTeams;
};
