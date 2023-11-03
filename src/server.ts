// import { Config } from './config';

// console.log('PORT', Config.PORT);
// console.log('PORT', Config.NODE_ENV);

// console.log("Server is running");

function login() {
    const user = {
        name: 'venki',
        id: '1',
    };

    const fullName = user.name;
    return user.name + fullName;
}
login();
