# How to approach data modeling in DynamoDB

Below are a few key areas where DynamoDB differs from relational databases.

## Joins

Joins are inefficient at scale, and DynamoDB is built for scale. Rather than reassembling your data at read time with a join, you should preassemble your data in the exact shape that is needed for a read operation.

People often try to do joins in their application code. They’ll make an initial request to DynamoDB to fetch a record, then make a follow-up request to query all related records for that record. You should avoid this pattern. DynamoDB doesn’t have joins for a reason!

## Normalization

There are two reasons for normalization.
* The technological reason for normalization was because storage was an expensive resource. It made sense to reduce duplication of data by only writing it once and then having other records point to it. You could use joins to reassemble the disaggregated record. In todays time Storage is cheap and plentiful and no longer contraining factor. 

* The second reason for normalization is that it helps to maintain data integrity over time. If you have a piece of data duplicated across multiple records in a table, you’ll need to make sure you update every record in that table in the event of a change. In contrast, with a normalized database, you can update the record in one place and all records that refer to it will get the benefits of the update.
  The second reason for normalization—maintaining data integrity— is still a factor, and it’s one you will need to consider as you model your data. Data integrity is now an application concern rather than a database concern. Consider where and when your data will be updated and how you will identify the associated records that need to be updated as part of it. In most applications, this won’t be a big problem, but it can add significant complexity in certain situations.
  


  
