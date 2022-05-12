# Expressions

There are five types of expressions in DynamoDB:
## **Key Condition Expressions:** 
Used in the Query API call to describe which items you want to retrieve in your query

Examples:

~~~
result = dynamodb.query( 
  TableName='MovieRoles', 
  KeyConditionExpression="#a = :a", 
  ExpressionAttributeNames={
          "#a": "Actor"
  },
  ExpressionAttributeValues={
          ":a": { "S": "Natalie Portman" }
  }
)
~~~

~~~
result = dynamodb.query(
  TableName='MovieRoles', 
  KeyConditionExpression="#a = :a AND #m < :title", 
  ExpressionAttributeNames={
    "#a": "Actor",   
     "#m": "Movie" 
  },   
  ExpressionAttributeValues={
      ":a": { "S": "Natalie Portman" },
      ":title": { "S": "N" }
  }
)
~~~

![image](https://user-images.githubusercontent.com/17270996/168050719-aa599599-d79f-4e7b-98fc-ca0a59a0540a.png)


## **Filter Expressions:** 

Used in Query and Scan operations to describe which items should be returned to the client after finding items that 

The key difference with a filter expression vs. a key condition expression is that a filter expression can be applied on any attribute in the table, 
not just those in the primary key. 

![image](https://user-images.githubusercontent.com/17270996/168051688-2e05ff99-eea9-481d-b899-79a87312156f.png)

**Note**

When you issue a Query or Scan request to DynamoDB, DynamoDB performs the following actions in order:

![image](https://user-images.githubusercontent.com/17270996/168052334-c08e301b-7214-47ad-912b-44194df704c1.png)

First, it reads items matching your Query or Scan from the database. Second, if a filter expression is present, it filters out items from the results that don’t match the filter expression. Third, it returns any remaining items to the client.
However, the key point to understand is that the Query and Scan operations will return a maximum of 1MB of data, and this limit is applied in step 1, before the filter expression is applied.

## **Projection Expressions:** 

Used in all read operations to describe which attributes you want to return on items that were read


## **Condition Expressions:** 

Used in write operations to assert the existing condition (or non-condition) of an item before writing to it

## **Update Expressions:** 

Used in the UpdateItem call to describe the desired updates to an existing item
