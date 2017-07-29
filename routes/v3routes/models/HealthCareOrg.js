/**
*  HealthCareOrg schema
*
*  @version     0.0.1
*  @created     2016-04-12T23:46:19.671Z
*  @link        https://camintejs.com/
*  @wiki        https://github.com/biggora/caminte/wiki
*
*  Created by create-model script
**/

/**
*  Define  HealthCareOrg Model
*  @param  {Object}  schema
*  @return {Object}  model
*
*  @wiki   https://github.com/biggora/caminte/wiki/Defining-a-Model
**/
module.exports = function(schema){
    var HealthCareOrg = schema.define('health_care_org', {
         name: { type: schema.String, limit: 250 },
         created: { type: schema.Date, default: '0000-00-00 00:00:00' }
    },{


    });

    /**
    *  Define any custom method
    *  or setup validations here
    **/

    return HealthCareOrg;
};
