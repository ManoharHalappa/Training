# Sample project to use CDK
https://enlear.academy/aws-cdk-a-beginners-guide-with-examples-424c600ac409

https://www.youtube.com/watch?v=LU5VgGWO9zw

# CDK for biginners
https://bobbyhadz.com/blog/aws-cdk-tutorial-typescript

# CDK workshop
https://cdkworkshop.com/


# Fix CDK - Argument of type Not Assignable to type Construct
https://bobbyhadz.com/blog/aws-cdk-not-assignable-to-type-construct

# CDK commands cheat sheet

https://ninegene.com/2021/07/29/aws-cdk-cheat-sheet/

# CDK Examples
https://github.com/kolomied/awesome-cdk

# CDK Dev community
https://cdk.dev/resources

# Getting Started Steps:
Step 1: Prerequisites

* AWS CLI (Need Python 3.x) (https://cdkworkshop.com/15-prerequisites/100-awscli.html)
* AWS Account and User &  (https://cdkworkshop.com/15-prerequisites/200-account.html)
* Configure your credentials (https://cdkworkshop.com/15-prerequisites/200-account.html#configure-your-credentials)
* Node.js (Need Npm) (https://cdkworkshop.com/15-prerequisites/300-nodejs.html)
* IDE for your programming language ( VSCode recommended) 

Step 2: Initialize the Application

~~~
mkdir cdk-three-tier-serverless && cd cdk-three-tier-serverless
npx cdk init app --language=typescript
~~~

Step 3: Bootstrap your AWS Account
~~~
npx cdk bootstrap
~~~

* Print Diff. cdk diff command would show what changes would occur in case we deployed our CDK code

~~~
npx aws-cdk diff
~~~

![image](https://user-images.githubusercontent.com/17270996/166907372-f8861aac-90dd-4adf-beb7-12dee4dc2f81.png)

* cdk deploy command will deploy the solution to AWS
~~~
npx cdk deploy
~~~

* CDK Files

package.json - manages our node packages and scripts
jest.config.js - configuration for testing
tsconfig.json - TypeScript configuration

# Sample Demployments

## Dynamo DB

~~~
import { RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import { AttributeType, BillingMode, Table } from 'aws-cdk-lib/aws-dynamodb';
import { Construct } from 'constructs';

export class CdkThreeTierServerlessStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const table = new Table(this, 'NotesTable', {
      billingMode: BillingMode.PAY_PER_REQUEST,
      partitionKey: { name: 'pk', type: AttributeType.STRING },
      removalPolicy: RemovalPolicy.DESTROY,
      sortKey: { name: 'sk', type: AttributeType.STRING },
      tableName: 'NotesTable',
    });
  }
}

~~~

## Dynamo DB and S3 bucket

~~~
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cdk from 'aws-cdk-lib';

export class CdkAppStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // 👇 use the Bucket construct
    const bucket = new s3.Bucket(this, 'avatars-bucket', {
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    // 👇 use the Table construct
    const table = new dynamodb.Table(this, 'todos-table', {
      partitionKey: {name: 'todoId', type: dynamodb.AttributeType.NUMBER},
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });
  }
}

~~~

# Environment setup (Dev, Prod etc)

Inside bin folder

~~~
#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import 'source-map-support/register';
import {CdkAppStack} from '../lib/cdk-app-stack';

const app = new cdk.App();

new CdkAppStack(app, 'cdk-stack-dev', {
  stackName: 'cdk-stack-dev',
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});

new CdkAppStack(app, 'cdk-stack-prod', {
  stackName: 'cdk-stack-prod',
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});
~~~
