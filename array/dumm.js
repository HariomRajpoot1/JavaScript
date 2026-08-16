// const express = require('express');
// const app = express();
// app.use(express.json());

// app.get('/orders/:id', async (req, res) => {

//     try {
//         const order = await getOrderFromDb(req?.params?.id);

//         //res.json(order); 

//         // proper response
//         if (order) {
//             res.json(order);
//             // res.json({"msg":"",data:order, code:200})
//         }
//         else {
//             res.json({ "msg": "Data not found", code: 400 })
//         }
//     }
//     catch (err) {
//         console.log(err);
//     }
// });


// app.post('/orders', (req, res) => {
//     const { amount } = req.body;
//     const fee = amount * 0.02;
//     res.json({ total: amount + fee });

// });

// app.listen(3000);




// Write a small Express middleware that rate-limits a route to 5 requests per 10 seconds per IP, using an in-memory store.

// get user.ip :- req.header.ip
//limit :- hit:- flagr+1
//  setTimeout (if(flag>5){ "return too many reqest"},5000 )


//tool checking memory leak

const cache = [];
app.get('/leak', (req, res) => {
 
  cache.push(new Array(1000000).fill('x'));
  res.send('ok');
  
});



Design and actually create collections for: dealers, quotes, and documents. 
Each quote belongs to a dealer, can have multiple uploaded documents, and has a status history 
(pending → approved/rejected).


Mongo dealers :-

{
    objectID:"asasas",
    "id":1,
    "name":"abc",
    "quotes":[
        {"id":1,
            "quaotes_nmee":"ayz"
        },...
    ]
    status:1, //pending
    doc_id:[1,2],
    is_delete:0,
    updated_at,
    created_at :
}

MOngo Documemt :-

{
    "objectID":"",
    "id":"123",
    "url":"xyz.com",
    status:"1",
    "category_id":1,
    is_delete:0
},
{
...
}
//Find all quotes for a dealer that are pending and older than 48 hours
 // create > new date()+2

//status 
db.dealer.find({
    status:0, 
    created_at:
})

//indexing :- making faster, 
//uniqe, compiste, multikey,

// Write an aggregation pipeline that returns total 
// quote amount per dealer for the last 30 days, sorted descending.


//optimize
//idexing,
//sharding , replication
// partion
//redis,


A: db.quotes.createIndex({ createdAt: 1, dealerId: 1 })
B: db.quotes.createIndex({ dealerId: 1, status: 1, createdAt: 1 }) :-

B: db.quotes.createIndex({ status: 1, createdAt: 1 }) :-
B: db.quotes.createIndex({ status: 1, createdAt: 1 }) :-
B: db.quotes.createIndex({ status: 1 })

//diiference index in mongodb and mysql

//6 mb

//sharding 1-2, 3-4, 5-6
// cap 6, request
// match, group
// select,  diff group() 

// arry[50k], need in db, 6mb reach 

