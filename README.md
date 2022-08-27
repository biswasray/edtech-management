# EdTech-Management SaaS company
In this platform, Schools are registered, along with their Students.

## About
This is a Scope-based Authorization system ,
- where any Role (ex: `Admin`, `Student`, `Principal`)
- must have a scope (eg: `school-create`, `user-get`) with them
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
#### <span style="color: #FFA500">POST</span> Sign up
`https://edtechmanagement.herokuapp.com/user/signup`
#### <span style="color: #FFA500">POST</span> Sign in
`https://edtechmanagement.herokuapp.com/user/signin`
#### <span style="color: #00FF00">GET</span> Get All
`https://edtechmanagement.herokuapp.com/user`
#### <span style="color: #00FF00">GET</span> Get Single
`https://edtechmanagement.herokuapp.com/user/:id`

### Role
#### <span style="color: #FFA500">POST</span> Create
`https://edtechmanagement.herokuapp.com/role`
#### <span style="color: #00FF00">GET</span> Get All
`https://edtechmanagement.herokuapp.com/role`

### Student
#### <span style="color: #FFA500">POST</span> Create
`https://edtechmanagement.herokuapp.com/student`
#### <span style="color: #00FF00">GET</span> Get All
`https://edtechmanagement.herokuapp.com/student`

### School
#### <span style="color: #FFA500">POST</span> Create
`https://edtechmanagement.herokuapp.com/school`
#### <span style="color: #00FF00">GET</span> Get All
`https://edtechmanagement.herokuapp.com/school`
#### <span style="color: #00FF00">GET</span> Get Students
`https://edtechmanagement.herokuapp.com/school/students`
