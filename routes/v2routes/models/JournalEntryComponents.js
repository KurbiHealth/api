/**
*  JournalEntryComponents schema
*
*  @version     0.0.1
*  @created     2016-04-12T23:46:19.672Z
*  @link        https://camintejs.com/
*  @wiki        https://github.com/biggora/caminte/wiki
*
*  Created by create-model script
**/

/**
*  Define  JournalEntryComponents Model
*  @param  {Object}  schema
*  @return {Object}  model
*
*  @wiki   https://github.com/biggora/caminte/wiki/Defining-a-Model
**/
module.exports = function(schema){
    var JournalEntryComponents = schema.define('journal_entry_components', {
         severity: { type: schema.String },
         symptom_id: { type: schema.Number, limit: 11 },
         note_id: { type: schema.Number, limit: 11 },
         image_id: { type: schema.Number, limit: 11 },
         journal_entry_id: { type: schema.Number, limit: 11 },
         date: { type: schema.Date },
         created: { type: schema.Date }
    },{
,
         indexes: {
            index_daily_record_details_on_predefined_symptom_id: {
                columns: 'symptom_id'
            },
            index_daily_record_details_on_daily_record_id: {
                columns: 'journal_entry_id'
            }
         }
    });

    /**
    *  Define any custom method
    *  or setup validations here
    **/

    return JournalEntryComponents;
};
