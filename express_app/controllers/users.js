module.exports.controller = (app) => {
    app.get('/users', (req,res) => {
        //render users
        res.render('users', {title: 'Users'});
    } )
}