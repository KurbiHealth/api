var validModels = {

// PUBLIC MODELS (data can be seen by anyone)
	'actions': 'public',
	'diseases': 'public',
	'disease_conditions': 'public',
	'disease_condition_symptoms': 'public',	
	'goal_activities': 'public',
	'health_care_org': 'public',
	'medications': 'public',
	'symptoms': 'public',
	'symptom_categories': 'public',

// COMPLEX PRIVATE (data belongs to a single user, through a parent table)
	'appointments': {
		'type': 'privateJoin',
		'join': 'appointments_users'
	},
	'care_team_members': {
		'type': 'privateJoin',
		'join': 'care_teams'
	},
	'exercises': {
		'type': 'privateJoin',
		'join': 'exercises_users'
	},
	'goals_actions': {
		'type': 'privateJoin',
		'join': 'goals'
	},
	// NOTE: goals_actions_done is currently the only table 2 tables away from "users" table
	'goals_actions_done': {
		'type': 'privateJoin',
		'join': 'goals_actions'
	},
	'goals_journal_entry': {
		'type': 'privateJoin',
		'join': 'goals'
	},
	'goals_supporters': {
		'type': 'privateJoin',
		'join': 'goals'
	},
	'journal_entry_components': {
		'type': 'privateJoin',
		'join': 'journal_entries'
	},
	'notes': {
		'type': 'privateJoin',
		'join': 'journal_entry_components'
	},
	'othertreatments': {
		'type': 'privateJoin',
		'join': 'othertreatments_users'
	},
	'search_queries': {
		'type': 'privateJoin',
		'join': 'searches'
	},

// PRIVATE MODELS (data belongs to a single user, directly [some of these are many2many tables])
	'actions_users': 'private',						// id (is m2m)
	'addresses': 'private',							// id
	'appointments_users': 'private',				// id (is m2m w/ data)
	'care_teams': 'private',						// id
	'care_team_orgs': 'private',					// id (is m2m)
	'exercises_done': 'private',					// id (is m2m w/ data)
	'exercises_users': 'private',					// id (is m2m)
	'goals': 'private', 
	'journal_entries': 'private',					// id (is m2m)
	'medications_users': 'private',					// id (is m2m)
	'medications_taken': 'private',					// id (is m2m)
	'messages': 'private',							// id (author_user_id)
	'message_recipients': 'private',				// id (recipient_user_id)
	'othertreatments_users': 'private',				// id (is m2m)
	'othertreatments_taken': 'private',				// id (is m2m)
	'searches': 'private',							// id (is m2m)
	'user_defined_symptoms': 'private',				// id (is m2o)
	'user_role_employees': 'private',				// id (is o2o)
	'user_role_healthcareprof': 'private',			// id (is o2o)
	'user_role_patients': 'private',				// id (is o2o)
	'user_role_supporters': 'private',				// id (is o2o)
	'user_symptom_searches': 'private'				// id (is m2m)
};

module.exports = validModels;