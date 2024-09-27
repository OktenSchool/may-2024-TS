const names: string[] = []

names.push('222')
names.push('2')

const user: [number, string, boolean] = [1, "esss", true]

interface Iddd {
    sdf: string
}

interface IUser extends Iddd {
    id: number;
    name: string
    email: string
}

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users: IUser[]) => {
        const usersContainer = document.getElementById('users-container') as HTMLDivElement;
        users.forEach(user => {
            const userBlock = document.createElement('div');
            userBlock.className = 'user-block';
            userBlock.innerHTML = `
                    <p>ID: ${user.}</p>
                    <p>Name: ${user.name}</p>
                    <a href="user-details.html?userId=${user.id}" class="details-button">View Details</a>
                `;
            usersContainer.appendChild(userBlock);
        });
    });

// type IMyType = {
//     id:number,
//     name:string
// }

type ValueType = string|number|boolean|IUser

const asd = (value:ValueType, value2:ValueType): number => {
    return 8484884
}

type asdReturnType = ReturnType<typeof asd>

const s:asdReturnType = 1