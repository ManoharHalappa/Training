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
