import controllres from  '../controllers/index.js'


const app= Sammy('#root', function(){

    this.use('Handlebars','hbs');


    //Home
       this.get('#/home', controllres.home.get.home)

    //User
        this.get('#/user/login', controllres.user.get.login)
        this.get('#/user/register', controllres.user.get.register)

        this.post('#/user/login', controllres.user.post.login)
        this.post('#/user/register', controllres.user.post.register)
        this.get('#/user/logout', controllres.user.get.logout)




    //Cause
    this.get('#/cause/dashboard', controllres.cause.get.dashboard);
    this.get('#/cause/create', controllres.cause.get.create);
    this.get('#/cause/details/:causeId', controllres.cause.get.details);
    this.get('#/cause/close/:causeId', controllres.cause.del.close);
    this.get('#/cause/edit/:causeId', controllers.cause.get.edit);
    this.get('#/cause/like/:causeId', controllers.cause.put.like);
    this.get('#/user/profile', controllers.user.get.profile);


   

    this.post('#/cause/create', controllres.cause.post.create);

    this.post('#/cause/edit/:causeId', controllres.cause.put.edit);





});


(()=>{

    app.run('#/home')

})();