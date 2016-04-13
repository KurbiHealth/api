/**
*  Users schema
*
*  @version     0.0.1
*  @created     2016-04-12T23:46:19.679Z
*  @link        https://camintejs.com/
*  @wiki        https://github.com/biggora/caminte/wiki
*
*  Created by create-model script
**/

/**
*  Define  Users Model
*  @param  {Object}  schema
*  @return {Object}  model
*
*  @wiki   https://github.com/biggora/caminte/wiki/Defining-a-Model
**/
module.exports = function(schema){
    var Users = schema.define('users', {
         first_name: { type: schema.String, limit: 100 },
         last_name: { type: schema.String, limit: 100 },
         social_security: { type: schema.String, limit: 255 },
         user_name: { type: schema.String, limit: 255 },
         created: { type: schema.Date },
         race: { type: schema.String, limit: 255 },
         sex: { type: schema.String, limit: 255 },
         bio: { type: schema.Text },
         email: { type: schema.String, limit: 150 },
         password: { type: schema.String, limit: 150 },
         auth_token: { type: schema.String, limit: 255 },
         auth_token_created: { type: schema.Date },
         password_reset_token: { type: schema.String, limit: 255 },
         password_reset_sent_at: { type: schema.Date },
         location: { type: schema.String, limit: 10 },
         birth_date: { type: schema.Date },
         terms_accepted: { type: schema.Boolean, limit: 4 },
         image_file_name: { type: schema.String, limit: 200 },
         disabled_invitation: { type: schema.Boolean, limit: 4 },
         signup_ip: { type: schema.String, limit: 15 },
         proposed_care_team_name: { type: schema.String, limit: 100 }
    },{


    });

    /**
    *  Define any custom method
    *  or setup validations here
    **/

    return Users;
};
