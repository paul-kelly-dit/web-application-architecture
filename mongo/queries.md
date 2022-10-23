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


#### $in operator
db.tasks.insertMany([
{
      name: 'Task 1',
      priority: 1,
},
{
      name: 'Task 2',
      priority: 2,
},
{
      name: 'Task 3',
      priority: 3,
}
]);

db.tasks.find({
    priority: {
        $in: [1, 3]
    }
});


db.tasks.find({status: { $ne: 'completed',},});


#### And operator

db.tasks.insertMany([
{
  name: 'Task 1',
  priority: 1,
  status: 'pending',
},
{
  name: 'Task 2',
  priority: 1,
  status: 'completed',
},
{
  name: 'Task 3',
  priority: 2,
  status: 'pending',
}
]);


db.tasks.find({
    $and: [
        {
            priority: 1,
        },
        {
            status: 'pending',
        }
    ]
});

#### Exists

db.tasks.find({
    priority: {
        $exists: true
    }
});

#### Size

db.tasks.insertMany([
{
  name: 'Task 1',
  categories: [
  {
      key: 'category_a'
  },
  {
      key: 'category_b'
  }
  ]
},
{
  name: 'Task 2',
  categories: [
  {
      key: 'category_a'
  },
  ]
}
]);

db.tasks.find({
    categories: {
        $size: 2
    }
});


#### Return specific fields from embedded docs

db.tasks.insertMany([
{
  name: 'Task 1',
  assignee: {
      id: 100,
      username: 'user_a',
  }
},
{
  name: 'Task 2',
  assignee: {
      id: 101,
      username: 'user_b',
  }
}
]);

db.tasks.find({}, {
    'assignee.username': 1
});

#### Sort
db.tasks.insertMany([
{
  name: 'Task 1',
  priority: 1
},
{
  name: 'Task 2',
  priority: 2
}
]);

db.tasks.find().sort({priority: -1});


#### update

db.tasks.insertOne({
  name: "Learn MongoDB Topic 1",
  date: new Date(),
  priority: 1,
  status: "pending",
  user: "onkar",
  assignee: "onkar"
});

db.tasks.updateOne({
   _id: ObjectId("60f7d855b307d94301b9cb90")
}, {
       $set: {
       status: "completed"
   }
});

db.tasks.updateOne({
  name: "Learn MongoDB Topic 1"
}, 
{
  $set: {
     status: "completed",
     progress; 10,
     priority: 2
  }
});

#### $inc

db.tasks.updateOne({
  name: "Learn MongoDB Topic 1"
}, 
{
  $inc: {
  progress: 10
}
});

#### $push 

db.tasks.updateOne({
  name: "Learn MongoDB Topic 1"
}, 
{
  $push: {
      tags: "learning"
  }
});


#### Delete a document
db.tasks.deleteOne({
      _id: ObjectId("60f7d855b307d94301b9cb90")
});

db.tasks.deleteMany({
  _id: {
      $in: [
        ObjectId("60f7d855b307d94301b9cb90"), 
        ObjectId("60f7d855b307d94301b9cb91")
      ]
  }
});
