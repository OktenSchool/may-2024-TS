interface IUserForm {
    name: string;
    age: number;
}

interface IUser extends IUserForm {
    id: number
}

class UserService {
    private static readonly _userKey = 'users'

    private static _getAll(): IUser[] {
        return JSON.parse(localStorage.getItem(this._userKey)) || []
    }
    private static _setToStorage(data:IUser[]):void{
        localStorage.setItem(this._userKey, JSON.stringify(data))
    }

    static create(data: IUserForm): void {
        const users = this._getAll();
        const id = users.length ? users.slice(-1)[0].id + 1 : 1;
        users.push({id, ...data})
        this._setToStorage(users)
    }

    static showHtml(): void {
        const userContainer = document.querySelector('#userContainer') as HTMLDivElement;
        userContainer.innerHTML = ''
        const users = this._getAll();

        const usersHtmlContent = users.map(user => {
            const itemDiv = document.createElement('div');
            const button = document.createElement('button');
            button.innerText = 'delete'
            button.onclick = () => {
                console.log('!!!!!!!!!!!!!!!!!!!!');
                this._deleteById(user.id)
            }
            itemDiv.innerText = `${user.id} -- ${user.name} -- ${user.age}`
            itemDiv.appendChild(button)
            return itemDiv
        });

        if (usersHtmlContent.length) {
            userContainer.append(...usersHtmlContent)
        } else {
            userContainer.innerText = 'Users does not exists'
        }


    }
    private static _deleteById(id:number):void{
        const users = this._getAll();
        const index = users.findIndex(user=>user.id === id);
        users.splice(index,1)
        this._setToStorage(users)
        this.showHtml()
    }
}


UserService.showHtml()

const form = document.forms['userForm'] as HTMLFormElement;

interface IInput {
    name: HTMLInputElement;
    age: HTMLInputElement;
}

form.onsubmit = (e:SubmitEvent):void=>{
    e.preventDefault()
    const {name:nameInput,age:ageInput} = form as any as IInput;
    UserService.create({name:nameInput.value, age:+ageInput.value})
    form.reset()
    UserService.showHtml()
}
// console.log(UserService._userKey);
//
// const userService = new UserService();
// UserService._userKey
// userService