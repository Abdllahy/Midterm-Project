import bcrypt from 'bcryptjs'

const users =  [
    {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
    },
    {
    name: 'Abdullahi Bashir',
    email: 'abdullahi@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
    },
    {
    name: 'John Mark',
    email: 'john@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
    },
];

export default users;