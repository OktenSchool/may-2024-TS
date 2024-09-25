interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
        lat: string;
        lng: string;
    }
}

interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address[];
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
}



class User {
    constructor(private _name: string) {
    }

    get name(): string {
        return this._name
    }

    set name(newName: string) {
        if (newName !== "Oleh") {
            this._name = newName
        }
    }
}

const user = new User("Max");

console.log(user.name);
user.name = "Olha"
console.log(user.name);
