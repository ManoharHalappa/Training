https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/dynamodb-example-table-read-write.html

# NodeJS Example

```

var AWS = require('aws-sdk');

AWS.config.update({region: 'us-east-1'});

var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

const broadcastId = 'a80a407b-bd8a-439e-b481-2dfcc335e9f7'; // event.pathParameters?.broadcastId;

// Get & Delete the broadcast object to be deleted from the dynamoDB


const getBroadcastDetail = async (broadcastDetailId: any): Promise<any> => {
    const params = {
      TableName: "broadcast-deo-stack-BroadcastsD5656FA5-EQJ6XPL8C8PW",
      // Item: {
      //   districtId: { S: broadcastDetail.districtId },
      //   id: { S: broadcastDetail.id },
      //   broadcastDetail: { S: JSON.stringify(broadcastDetail) }
      // },
      Key: {
 
            id: {S: broadcastDetailId},
            districtId: {S: "59b7863e-10d7-4aff-959b-37d085279875"}
          // }
 
      
    }

  };
    
    ddb.deleteItem(params, function(err:any, data:any) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Success", data.Item);
      }
    });


}
  
  const getBroadcast = getBroadcastDetail(broadcastId);
  
  ```
