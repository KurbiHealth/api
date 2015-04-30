NOTES ABOUT API

methods per table
POST	(INSERT)
GET		(SELECT)
PUT 	(UPDATE)
DELETE


(if model name is "messages")

GET/messages/			find all
GET/messages/{id}		find record with that id
GET/messages/{id}/exists
GET/messages/count		uses a where
GET/messages/findOne	uses filters (where, orderBy, etc)

NOTES
* have a list of all allowable table names as array in server


Auto Refreshing: By default, node doesn’t automatically refresh our server every time we change files. To do that we’ll use nodemon. Just install with: npm install -g nodemon and use with: nodemon server.js.

/* restify matches routes in the order they are defined; but that is 
subject to the underlying v8 non-portable behavior of Object.keys({}) 
returning keys in order. -author-of-restify */