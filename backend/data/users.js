import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin',
    email: 'sasza.vcn@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Liliia',
    email: 'liliia@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Oleksandr',
    email: 'oleksandr@vcn.pl',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users