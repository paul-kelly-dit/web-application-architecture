#### Create or use a database
use todo

#### Insert a document
db.tasks.insertOne({
    name: "Learn Mongodb",
});

#### Verify the creation of the database
show databases;

#### Search for Tasks
db.tasks.find()

#### Insert Multiple Documents
db.tasks.insertMany([{
    name: "Learn MongoDB Topic 1",
    date: new Date(),
    priority: 1,
    status: "pending",
    user: "onkar",
    assignee: "onkar"
}, {
    name: "Learn MongoDB Topic 2",
    date: new Date(),
    priority: 2,
    status: "pending",
    user: "onkar",
    assignee: "onkar"
}]);


#### Find all documents with status of pending
db.tasks.find({
    status: "pending",
});

#### Find all documents with status of pending and a priority of 2

db.tasks.find({
    status: "pending",
    priority: 2
});



#### Matching a regular expression

db.tasks.find({ 
    status: { 
        $eq: new RegExp("pending", "ig")
    } 
});

#### Example of embedded documents

db.tasks.insertMany([
  {
      name: 'Task 1',
      assignee: {
        username: 'user_a',
      },
  },
  {
      name: 'Task 2',
      assignee: {
            username: 'user_b',
      },
  }
]);

#### Querying an embedded doc
db.tasks.find({
    'assignee.username': { $eq: 'user_a' },
})

#### Next, we build a query to fetch tasks that have a greater priority than 1.

db.tasks.find({
    priority: {
        $gt: 1,
    },
});

#### Greater than or equal to
db.tasks.find({
    priority: {
        $gte: 1,
    },
});
