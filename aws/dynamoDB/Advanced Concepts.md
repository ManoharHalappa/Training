# Advanced Concpets of DynamoDB

* DynamoDB Streams 
* Time-to-live (TTL)
* Partitions
* Consistency
* DynamoDB Limits
* Overloading keys and indexes


## DynamoDB Streams 

With DynamoDB streams, you can create a stream of data that includes a record of each change to an item in your table. 
Whenever an item is written, updated, or deleted, a record containing the details of that record will be written to your DynamoDB stream. 
You can then process this stream with AWS Lambda or other compute infrastructure.

![image](https://user-images.githubusercontent.com/17270996/168018762-10b28160-8234-4ecb-8f32-c69533ae129b.png)

DynamoDB streams enable a variety of use cases, from using DynamoDB as a work queue to broadcasting event updates across microservices. 
The combination of DynamoDB Streams with serverless compute with AWS Lambda gives you a fully-managed system to react to database changes.

![image](https://user-images.githubusercontent.com/17270996/168018964-2facb7f6-8d26-41a1-9e2c-f5a1a5df5a1f.png)

## Time-to-live (TTL)

TTLs allow you to have DynamoDB automatically delete items on a per-item basis. This is a great option for storing short-term data in DynamoDB as you can use TTL to clean up your database rather than handling it manually via a scheduled job. To use TTL, you specify an attribute on your DynamoDB table that will serve as the marker for item deletion. For each item that you want to expire, you should store a Unix timestamp as a number in your specified attribute. This timestamp should state the time after which the item should be deleted. DynamoDB will periodically review your table and delete items that have your TTL attribute set to a time before the current time.

## Partitions

Partitions are the core storage units underlying your DynamoDB table. We noted before that DynamoDB is built for infinite scale,and it does that by sharding your data across multiple server instances. When a request comes into DynamoDB, the request router looks at the partition key in the request and applies a hash function to it. The result of that hash function indicates the server where that data will be stored, and the request is forwarded to that server to read or write the data as requested. The beauty of this design is in how it scales—DynamoDB can add additional storage nodes infinitely as your data scales up.

## Consistency

DynamoDB splits up, or "shards", its data by splitting it across multiple partitions. This allows DynamoDB to horizontally scale by adding more storage nodes. This horizontal scaling is how it can provide fast, consistent performance no matter your data size.

To handle this, there are vast numbers of storage partitions spread out across a giant fleet of virtual machines. When you write data to DynamoDB, there is a request router that is the frontend for all requests. It will authenticate your request to ensure you have access to write to the table. If so, it will hash the partition key of your item and send that key to the proper primary node for that item.

![image](https://user-images.githubusercontent.com/17270996/168021243-9e8c4a19-eb4c-4c41-af20-389c2753df05.png)

The primary node for a partition holds the canonical, correct data for the items in that node. When a write request comes in, the primary node will commit the write and commit the write to one of two secondary nodes for the partition. This ensures the write is saved in the event of a loss of a single node.

![image](https://user-images.githubusercontent.com/17270996/168021466-214bd757-2d7c-475b-abc9-8b572c2aa57e.png)

After the primary node responds to the client to indicate that the write was successful, it then asynchronously replicates the write to a third storage node.

![image](https://user-images.githubusercontent.com/17270996/168021681-a85321dc-1bf0-4fc0-8f04-1c6d4615342a.png)

Thus, there are three nodes—one primary and two secondary—for each partition. These secondary nodes serve a few purposes. First, they provide fault-tolerance in case the primary node goes down. Because that data is stored on two other nodes, DynamoDB can handle a failure of one node without data loss.
Secondly, these secondary nodes can serve read requests to alleviate pressure on the primary node. Rather than requiring that all reads and writes go through the primary, we can have all writes go through the primary and then have the reads shared across the three nodes.

![image](https://user-images.githubusercontent.com/17270996/168021892-13334781-e9dd-4bf8-babb-dc74c2894890.png)

Finally, there are two times you need to think about consistency with DynamoDB.
**First**, whenever you are reading data from your base table, you can choose your consistency level. By default, DynamoDB will make an eventually-consistent read, meaning that your read may go to a secondary node and may show slightly stale data. However, you can
opt into a strongly-consistent read by passing ConsistentRead=True in your API call. An eventually-consistent read consumes half the write capacity of a strongly-consistent read and is a good choice for many applications.
**Second**, you should think about consistency when choosing your secondary index type. A local secondary index will allow you to make strongly-consistent reads against it, just like the underlying table. However, a global secondary index will only allow you to make eventually-consistent reads. If you do choose a local secondary index, the mechanics are the same as with your base table—you can opt in to strongly consistent reads by setting ConsistentRead=True.

## DynamoDB Limits
1. Item size limits - 400KB of data
2. Query and Scan Request Size Limits - Query and Scan will read a maximum of 1MB of data from your table. Further, this 1MB limit is applied before any filter expressions are considered.
3. Partition throughput limits - A single partition can have a maximum of 3000 Read Capacity Units or 1000 Write Capacity Units.
4. Item collection limits - If you have a local secondary index, a single item collection cannot be larger than 10GB. The partition size limit is not a problem for global secondary indexes.

## Overloading keys and indexes
This concept of using generic names for your primary keys and using different values depending on the type of item is known as overloading your keys.
