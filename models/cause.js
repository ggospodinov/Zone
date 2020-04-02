let db= firebase.firestore();


export default{
    create(data){
        return db.collection('treks').add(data)

    },
    getAll(){
        return db.collection('treks').get();
    },

    get(id){
        return db.collection('treks').doc(id).get()
    },

    close(id){
        return db.collection('treks').doc(id).delete()
    },

    edit(id, data){
        return db.collection('treks').doc(id).update(data)

    }
    
}