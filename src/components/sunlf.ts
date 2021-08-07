interface User {
  id: number
}

interface Admin extends User {
  name: string
}

interface Normal extends User {
  day: string
}

interface Student {
  user: User
}

const admin: Admin = {
  id: 1000,
  name: 'hello'
}

const normal: Normal = {
  id: 1000,
  day: 'hello'
}

const student: Student = {
  user: normal
}

console.log(student)
