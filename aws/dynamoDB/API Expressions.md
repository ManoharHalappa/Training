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

**This makes the Scan + filter expression combo even less viable
If you want to filter your data, you need to make sure your access patterns are built directly into your primary keys.**

## **Projection Expressions:** 

Used in all read operations to describe which attributes you want to return on items that were read

A projection expression is similar to a filter expression in that its main utility is in reducing the amount of data sent over the wire in your response. While a filter expression works on an item-by-item basis, the projection expression works on an attribute-by-attribute basis within an item.

![image](https://user-images.githubusercontent.com/17270996/168054244-09e2e01d-c5c8-4acc-b3fe-29d1dc18a6d6.png)

## **Condition Expressions:** 

Used in write operations to assert the existing condition (or non-condition) of an item before writing to it

Condition expressions are available on every operation where you will alter an item—PutItem, UpdateItem, DeletetItem, and their batch and transactional equivalents. They allow you to assert specific statements about the status of the item before performing the write operation. If the condition expression evaluates to false, the operation will be canceled.

Condition expressions use a similar syntax to the previous expressions we’ve seen. In addition to the comparison operators of greater than, less than, equal to, and between, there are also several functions that are available, such as:
* attribute_exists(): Used to assert that a given attribute exists
* attribute_not_exists(): Just the opposite—assert that an attribute does not exist on the item. This one is commonly used to prevent overwrites by using it on the partition key of the item you’re writing.
* attribute_type(): Used to assert that an attribute is of a particular type
* begins_with(): Assert that an attribute value begins with a particular substring
* contains(): Assert that a string contains a particular substring, or that a set contains a particular value.
* size(): Allows you to assert various properties about the size of an attribute value. For things like strings or binary values, it’s the length of the string or number of bytes in the binary value. For things like lists, maps, or sets, it returns the number of elements in a set.

**Example**

![image](https://user-images.githubusercontent.com/17270996/168056151-a7e5e8e3-f4d4-423a-818a-91d676ad6413.png)

![image](https://user-images.githubusercontent.com/17270996/168062679-f3da804c-1807-4eda-9ed8-eff458feb27f.png)

![image](https://user-images.githubusercontent.com/17270996/168063039-fb1e08ca-ca13-4f20-bf94-dbacbf4e041d.png)

![image](https://user-images.githubusercontent.com/17270996/168063579-0293d77c-c89a-48c6-a997-22e12ecf41e1.png)


## **Update Expressions:** 

Used in the UpdateItem call to describe the desired updates to an existing item
