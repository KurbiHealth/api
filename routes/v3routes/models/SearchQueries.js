/**
*  SearchQueries schema
*
*  @version     0.0.1
*  @created     2016-04-12T23:46:19.676Z
*  @link        https://camintejs.com/
*  @wiki        https://github.com/biggora/caminte/wiki
*
*  Created by create-model script
**/

/**
*  Define  SearchQueries Model
*  @param  {Object}  schema
*  @return {Object}  model
*
*  @wiki   https://github.com/biggora/caminte/wiki/Defining-a-Model
**/
module.exports = function(schema){
    var SearchQueries = schema.define('search_queries', {
         search_query: { type: schema.String, limit: 255 },
         created: { type: schema.Date }
    },{


    });

    /**
    *  Define any custom method
    *  or setup validations here
    **/

    return SearchQueries;
};
