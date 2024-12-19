# Task Manager Api

 It supports basic CRUD operations, allowing users to create, read, update, and delete tasks.

## Installation

Use the package manager `npm` to install the dependencies.

```bash
npm install 
```

## Start the Server

```bash
npm start
```


## API Reference

#### Get all tasks

```http
  GET /tasks
```



#### Get Task Details By Id

```http
  GET /tasks/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of task |


#### Add a New Task

```http
  POST /tasks/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | **Required**. Title of task |
| `description`      | `string` | **Required**. Description of task |
| `completed`      | `boolean` | **Required**. Whether task is completed or not |

#### Update a Task

```http
  PUT /tasks/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of task|
| `title`      | `string` | **Required**. Title of task |
| `description`      | `string` | **Required**. Description of task |
| `completed`      | `boolean` | **Required**. Whether task is completed or not |

#### Delete a Task

```http
  DELETE /tasks/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of task  |

## Run Tests

```bash
npm run test 
```