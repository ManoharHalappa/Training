# API actions can be divided into three categories:

1. Item-based actions 
2. Queries
3. Scans

## Item-based actions 
Item-based actions are used whenever you are operating on a specific item in your DynamoDB table. There are four core API actions for item-based actions:
1. GetItem--used for reading a single item from a table.
2. PutItem--used for writing an item to a table. This can completely
overwrite an existing item with the same key, if any.
3. UpdateItem--used for updating an item in a table. This can create a new item if it doesn’t previously exist, or it can add, remove, or alter properties on an existing item.
4. DeleteItem--used for deleting an item from a table.

There are three rules around item-based actions.
* First, the full primary key must be specified in your request. 
* Second all actions to alter data—writes, updates, or deletes—must use an item-based action. 
* Finally, all item-based actions must be performed on your main table, not a secondary index.

## Queries

The Query API action lets you retrieve multiple items with the same partition key. This is a powerful operation, particularly when modeling 
and retrieving data that includes relations. You can use the Query API to easily fetch all related objects in a one-to-many relationship 
or a many-to-many relationship.

## Scan

A Scan will grab everything in a table. If you have a large table, this will be infeasible in a single request, so it will paginate. 
