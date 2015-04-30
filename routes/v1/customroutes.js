module.exports = function(router,connection,passport,validModels,async,joins,sendMessage){

/*
CUSTOM MODELS

	MESSAGES
		messages_to_user
		messages_from_user
	GOALS
		life_goals
		daily_goals
		daily_goal_activity POST
	JOURNAL
		journal_entry_add POST (includes adding of all subcomponents)
		journal_entries/today|all|dateRange(!timestampRange)
	CARE TEAM
		care_team_invitation
		care_team_accept_invitation/invitation_id
		list_care_team_members
		list_care_team_orgs
*/

    router.route('/custom/*')

    	.get(
            passport.authenticate(
                'token',
                {session: false}
            ),
            function(req,res){
            async.waterfall([

            ],
            function(err,result){

            });
        	}
        );

};