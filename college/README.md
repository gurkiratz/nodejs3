# College Database - with Node and MongoDB

## Postman Collection

[Download](https://downgit.github.io/#/home?url=https://github.com/gurkiratz/nodejs3/blob/main/NodeJS%203.postman_collection.json)

## API Reference

#### Students

- Register Student

```http
  POST /api/student/register
```

| Parameter | Type     | Description |
| :-------- | :------- | :---------- |
| `email`   | `string` | **Unique**  |

#### Admin

- Get All Users

```http
  GET /api/admin/getUsers
```

- Login User

```http
  POST /api/admin/login
```
