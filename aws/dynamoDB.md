# What is DynamoDB?

## The Five Misconceptions about DynamoDB.

1. DynamoDB is just a key-value store.
2. DynamoDB doesn’t scale
3. DynamoDB is only for enormous scale.
4. You can’t use DynamoDB if your data model will change.
5. You don’t need a schema when using DynamoDB.

## Key Properties of DynamoDB

1. DynamoDB is a fully-managed, NoSQL database provided by Amazon Web Services.
2. **Key-value or wide-column data model:** The problem with a key-value store is that you can only retrieve one record at a time. But what if you want to retrieve multiple records? For example, I might want to read the ten most recent readings for my IoT sensor, or I may want to fetch a Customer and all of the Customer’s Orders over the last 6 months.To handle these more complex access patterns, you can also use DynamoDB as a wide-column store.
3. **Infinite scaling with no performance degradation:** DynamoDB was built to be fast and scalable, and it delivers on both counts. Most operations in DynamoDB have response times in single-digit milliseconds. If you need better than that, AWS offers DynamoDB Accelerator (DAX), which is a fully-managed in- memory cache for your DynamoDB table.
4. **HTTP connection model:** All requests to DynamoDB are made to the DynamoDB API via HTTP requests. This is in contrast to most database systems that initialize persistent TCP connections that are reused many times over the lifetime of an application.
5. **IAM authentication:** AWS IAM provides a granular permission system that is well-known by AWS administrators, rather than a database-specific permission system whose intricacies are less well-known.
6. **Infrastructure-as-code friendly**
7. **Flexible pricing model:** For most DB server you specify the size of the server. You look at various combinations of CPU, RAM, and disk to find the server that works for you. This is suboptimal as you’re paying for resource capacity ("How much RAM do I need?") rather than workload capacity ("How many read queries per second will I have?"). In contrast, DynamoDB is priced directly based on the amount of workload capacity you need. You specify the throughput you want in terms of Read Capacity Units and Write Capacity Units.
8. **Change data capture with DynamoDB Streams:** With DynamoDB Streams, you get a transactional log of each write transaction in your DynamoDB table. You can programmatically process this log, which opens up a huge number of use cases.
9. **Fully-managed:** DynamoDB is a fully-managed database. You won’t need to spin up server instances, install software, manage failovers, handle backups, upgrade software, or handle any other basic database maintenance tasks. This offloads a ton of low-level work from your plate.

## Core Concepts in DynamoDB

### Basic Keywords

1. **Tables** : It is a grouping of records that conceptually belong together.
2. **Items** : An item is a single record in a DynamoDB table. It is comparable to a row in a relational database
3. **Attributes** : A DynamoDB item is made up of attributes, which are typed data values holding information about the element. For example, if you had an item representing a User, you might have an attribute named "Username" with a value of "Manohar".
4. **Primary Keys**: When creating a DynamoDB table, you must declare a primary key for your table.
  * **Simple:** Contains Single element called a **Partition Key**
  * **Composite:** Consist of two elements, called a **partition key and a sort key**.
5. **Secondary Indexs** : When you create a secondary index on your table, you specify the primary keys for your secondary index, just like when you’re creating a table. AWS will copy all items from your main table into the secondary index in the reshaped form. You can then make queries against the secondary index.
  * **Local secondary indexes** : A local secondary index uses the same partition key as your table’s primary key but a different sort key.
  * **Global secondary indexes** : With a global secondary index, you can choose any attributes you want for your partition key and your sort key.

![image](https://user-images.githubusercontent.com/17270996/168009672-74aaa195-d9a9-4b68-9a32-de7e64ca2ffe.png)

### Data Types in DynamoDB

1. **Scalars**
   * String
   * Number
   * Binary
   * Boolean
   * Null 
2. **Complex**
   * List
   * Maps 
3. **Sets** : Sets are a powerful compound type that represents multiple, unique values.

### The importance of item collections

An item collection refers to a group of items that share the same partition key in either the base table or a secondary index.

![image](https://user-images.githubusercontent.com/17270996/168010364-f53cc1a5-396b-4775-92e9-83ec6b13a355.png)

Item collections are important for two reasons.
1. DynamoDB partitions your data across a number of nodes in a way that allows for consistent performance as you scale. However, all items with the same partition key will be kept on the same storage node. This is important for performance reasons.
2. Second, item collections are useful for data modeling. The Query action can retrieve multiple items within a single item collection. It is an efficient yet flexible operation. 

## DynamoDb CRUD

Creating and Using Table in DynamodB

https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/dynamodb-examples-using-tables.html

https://github.com/awsdocs/aws-doc-sdk-examples/blob/main/javascript/example_code/dynamodb/ddb_putitem.js

## Error Handling

https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Programming.Errors.html
