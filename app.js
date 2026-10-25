class User{
    User(name,email){
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("Data");
    }
}


class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        console.log("Data edited");
    }
}


