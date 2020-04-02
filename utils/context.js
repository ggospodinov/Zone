export default function extend(context) {

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.

            context.isLogged = true;
            context.userId = user.uid;
            context.username = user.email;



            localStorage.setItem('userId', user.uid);
            localStorage.setItem('userEmail', user.email);
            // ...
        } else {
            // User is signed out.
            // ...
            context.isLogged = false;
            context.userId = null;
            context.username = null;

            localStorage.removeItem('userId')
            localStorage.removeItem('userEmail')
            
        }
    });

    return context.loadPartials({

        header: '../views/common/header.hbs',
        footer: '../views/common/footer.hbs'

    })

}