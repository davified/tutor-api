module.exports = {

    'facebookAuth' : {
        'clientID'      : process.env.FACEBOOK_APP_ID,
        'clientSecret'  : process.env.FACEBOOK_APP_SECRET,
        'callbackURL'   : 'http://localhost:3000/auth/facebook/callback'
    },
    // 'twitterAuth' : {
    //     'consumerKey'       : 'your-consumer-key-here',
    //     'consumerSecret'    : 'your-client-secret-here',
    //     'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    // },
    //
    // 'googleAuth' : {
    //     'clientID'      : 'your-secret-clientID-here',
    //     'clientSecret'  : 'your-client-secret-here',
    //     'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    // }
};
