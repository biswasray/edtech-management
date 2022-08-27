# EdTech-Management SaaS company
In this platform, Schools are registered, along with their Students.

## About
This is a Scope-based Authorization system ,
- where any Role (ex: `Admin`, `Student`, `Principal`)
- must have a scope (eg: `school-create`, `user-GET`) with them
- to perform any actions on the resources (eg: `User`, `School`)

It basically has these models:
- `Role`
- `User`
- `Student`
- `School`

This is the crux of the platform:

- `Users` signup using Email and Password, and have some `Role` assigned to them.
- Every `Role` has scopes, that lets them have permission to work on some resource.
- `User` can have multiple `Student` associated with them. Think of it like this: the `User` is a parent, who can have multiple `Student` profiles for their children.

## API Endpoints

### User
#### POST Sign up
`https://edtechmanagement.herokuapp.com/user/signup`
#### POST Sign in
`https://edtechmanagement.herokuapp.com/user/signin`
#### GET GET All
`https://edtechmanagement.herokuapp.com/user`
#### GET GET Single
`https://edtechmanagement.herokuapp.com/user/:id`

### Role
#### POST Create
`https://edtechmanagement.herokuapp.com/role`
#### GET GET All
`https://edtechmanagement.herokuapp.com/role`

### Student
#### POST Create
`https://edtechmanagement.herokuapp.com/student`
#### GET GET All
`https://edtechmanagement.herokuapp.com/student`

### School
#### POST Create
`https://edtechmanagement.herokuapp.com/school`
#### GET GET All
`https://edtechmanagement.herokuapp.com/school`
#### GET GET Students
`https://edtechmanagement.herokuapp.com/school/students`
