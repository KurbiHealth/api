module.exports = function(router,passport){

    router.route('/checktoken/')

        .get(
            passport.authenticate(
                'token',
                {session: false}
            ),
            function(req,res){
                
                res.status('200').send('');

            } // end function(req,res)
        ) // end get()

}; // end modules.exports