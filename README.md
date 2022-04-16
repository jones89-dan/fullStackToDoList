# To Do List Full-stack

This is a To Do list full-stack application. It has a user table and a task table. And a front-end that consumes the API.

## API endpoints

Before you start, create a new user account by sending a post request to '/users'. It will return an object like this:

```
{ success: true, id: 1 }
```

The id will be your api_key for making requests to the following tasks endpoints.

#### Tasks

<table>
  <thead>
    <tr>
      <td>URI</td>
      <td>Type</td>
      <td>Description</td>
      <td>Request Body</td>
      <td>Sample Response</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>api/tasks?api_key=your_user_id</td>
      <td>GET</td>
      <td>Returns an object with a tasks property that contains an array of tasks belonging to you.</td>
      <td>N/A</td>
      <td>
<pre>{
  tasks: [
    { id: 1,
      content: 'A to do list task',
      complete: 'false',
      due: datetime,
      updated_at: datetime,
      created_at: datetime
    },
    { id: 2,
      content: 'Another to do list task',
      complete: 'true',
      due: datetime,
      updated_at: datetime,
      created_at: datetime
    },
  ]
}</pre>
      </td>
    </tr>
    <tr>
      <td>api/tasks?api_key=your_user_id</td>
      <td>POST</td>
      <td>Creates a new task under your user account.</td>
      <td>
<pre>{
  task: {
    content: 'This is a task',
    due: 'Sat Oct 21 2017
    14:05:00 GMT+0800 (HKT)'
  }
}
</pre>
      </td>
      <td>
<pre>{
  task: {
    id: 1,
    content: 'This is a task',
    complete: 'false',
    due: '2017-10-21T06:01:02.000Z',
    created_at: '2017-10-21T06:00:07.065Z'
  }
}</pre>
      </td>
    </tr>
    <tr>
    <td>api/tasks/:id?api_key=your_user_id</td>
    <td>PUT</td>
    <td>Update the content or due time of the task specified by id.</td>
    <td>
<pre>{
  task: {
    content: 'This is not a task',
    due: 'Sat Oct 21 2017
    14:09:38 GMT+0800 (HKT)',
  }
}</pre>
    </td>
    <td>
<pre>{
  task: {
    id: 1,
    content: 'This is not a task',
    complete: 'true',
    due: '2017-10-21T06:09:38.000Z',
    created_at: '2017-10-21T06:00:07.065Z',
    updated_at: '2017-10-21T06:09:54.730Z'
  }
}</pre>
      </td>
    </tr>
    <tr>
      <td>api/tasks/:id/mark_complete?api_key=your_user_id</td>
      <td>PUT</td>
      <td>Mark the complete property to true for the task specified by id.</td>
      <td>N/A
      </td>
      <td>
<pre>{
  task: {
    id: 1,
    content: 'This is a task',
    complete: 'true',
    due: datetime,
    created_at: DateObject,
    updated_at: DateObject
  }
}</pre>
      </td>
    </tr>
    <tr>
      <td>api/tasks/:id/mark_active?api_key=your_user_id</td>
      <td>PUT</td>
      <td>Mark the complete property to false for the task specified by id.</td>
      <td>N/A
      </td>
      <td>
<pre>{
  task: {
    id: 1,
    content: 'This is a task',
    complete: 'false',
    due: datetime,
    created_at: DateObject,
    updated_at: DateObject
  }
}</pre>
      </td>
    </tr>
    <tr>
      <td>api/tasks/:id?api_key=your_user_id</td>
      <td>DELETE</td>
      <td>Delete the task specified by id.</td>
      <td>N/A
      </td>
      <td>
<pre>{
  success: true
}</pre>
      </td>
    </tr>
  </tbody>
</table>

### Datetime
Datetime objects are stored in UTC time.

## Front-end App

The To Do List front-end is located at root `/`. It uses the user id 1 to make requests.

## Running the server locally

After downloading the repository
Install the gems

```
bundle
```

Create the database

```
rails db:create
```

Migrate the database

```
rails db:migrate
```

Seed the database

```
rails db:seed
```

Start server:

```
rails s
```

Visit localhost:3000 to see the To Do List.
