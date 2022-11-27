# unifi-testing

## models and info 
- userSchema = new Schema ({
    username: String,
    password:String
})

- todoSchema = new Schema ({
    title: String,
    userID:String,
    description:String
})
## API Endpoints

### Todos

---

- Index (GET `/api/todo` )
- Show (GET `/api/todo/to?id=`) 
- Create (POST `/api/todo/add`) 
- Update (PUT `/api/todo/update?id=`) 
- Delete (DELETE `/api/todo/delete?id=`) 

### Authentication

---
- register (post `/api/auth/register` )
- login (post `/api/auth/login` )
