/**
*  Searches schema
*
*  @version     0.0.1
*  @created     2016-04-12T23:46:19.675Z
*  @link        https://camintejs.com/
*  @wiki        https://github.com/biggora/caminte/wiki
*
*  Created by create-model script
**/

/**
*  Define  Searches Model
*  @param  {Object}  schema
*  @return {Object}  model
*
*  @wiki   https://github.com/biggora/caminte/wiki/Defining-a-Model
**/
module.exports = function(schema){
    var Searches = schema.define('searches', {
         created: { type: schema.Date },
         user_id: { type: schema.Number, limit: 11 },
         search_query_id: { type: schema.Number, limit: 11 }
    },{
,
         indexes: {
            index_searches_on_patient_id: {
                columns: 'user_id'
            },
            index_searches_on_search_query_id: {
                columns: 'search_query_id'
            }
         }
    });

    /**
    *  Define any custom method
    *  or setup validations here
    **/

    return Searches;
};
