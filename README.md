# EdTech-Management SaaS company
In this platform, Schools are registered, along with their Students.

## About
This is a Scope-based Authorization system ,
- where any Role (ex: `Admin`, `Student`, `Principal`)
- must have a scope (eg: `school-create`, `user-![#c5f015](https://via.placeholder.com/15/c5f015/c5f015.png) GET`) with them
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
#### ![#f03c15](https://via.placeholder.com/15/f03c15/f03c15.png) POST Sign up
`(https://edtechmanagement.herokuapp.com/user/signup)[https://edtechmanagement.herokuapp.com/user/signup]`
#### ![#f03c15](https://via.placeholder.com/15/f03c15/f03c15.png) POST Sign in
`(https://edtechmanagement.herokuapp.com/user/signin)[https://edtechmanagement.herokuapp.com/user/signin]`
#### ![#c5f015](https://via.placeholder.com/15/c5f015/c5f015.png) GET GET All
`(https://edtechmanagement.herokuapp.com/user)[https://edtechmanagement.herokuapp.com/user]`
#### ![#c5f015](https://via.placeholder.com/15/c5f015/c5f015.png) GET GET Single
`[https://edtechmanagement.herokuapp.com/user/:id](https://edtechmanagement.herokuapp.com/user/:id)`

### Role
#### ![#f03c15](https://via.placeholder.com/15/f03c15/f03c15.png) POST Create
`(https://edtechmanagement.herokuapp.com/role)[https://edtechmanagement.herokuapp.com/role]`
#### ![#c5f015](https://via.placeholder.com/15/c5f015/c5f015.png) GET GET All
`(https://edtechmanagement.herokuapp.com/role)[https://edtechmanagement.herokuapp.com/role]`

### Student
#### ![#f03c15](https://via.placeholder.com/15/f03c15/f03c15.png) POST Create
`(https://edtechmanagement.herokuapp.com/student)[https://edtechmanagement.herokuapp.com/student]`
#### ![#c5f015](https://via.placeholder.com/15/c5f015/c5f015.png) GET GET All
`(https://edtechmanagement.herokuapp.com/student)[https://edtechmanagement.herokuapp.com/student]`

### School
#### ![#f03c15](https://via.placeholder.com/15/f03c15/f03c15.png) POST Create
`(https://edtechmanagement.herokuapp.com/school)[https://edtechmanagement.herokuapp.com/school]`
#### ![#c5f015](https://via.placeholder.com/15/c5f015/c5f015.png) GET GET All
`(https://edtechmanagement.herokuapp.com/school)[https://edtechmanagement.herokuapp.com/school]`
#### ![#c5f015](https://via.placeholder.com/15/c5f015/c5f015.png) GET GET Students
`(https://edtechmanagement.herokuapp.com/school/students)[https://edtechmanagement.herokuapp.com/school]`
