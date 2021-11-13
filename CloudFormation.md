# AWS CloudFormation

* **Building Blocks:** It is a language that gives you building blocks to describe the infrastructure you want to provision in AWS.
* **Text files:** Containing the description that is formatted in JSON and YAML. In this, you can version it and track changes like any other piece of code.

### When And Where To Use AWS CloudFormation?
* When you have to deploy infrastructure rather than doing it manually.
* To create a repeatable patterned environment, e.g. a WordPress blog and a database if you were running a web hosting business.
* To run automated testing for CI/CD environments. Create a dedicated, clean environment, inject your code, run testing, produce results, then delete the test environment, all with no human input.
* To define an environment all at once, and have it deployed to any region in the AWS Cloud without reconfiguration.
* To manage infrastructure configuration using software development style versioning and code repositories such as git.

### How AWS CloudFormation Works?

![image](https://user-images.githubusercontent.com/17270996/141611358-7a30ac07-1255-4137-9ff2-5fcb830699ec.png)

## CloudFormation Template:

* Example:

```
{
    "AWSTemplateFormatVersion" : "2010-09-09",
    "Description" : "A simple Ec2"
    "Resources": {
        "MyEC2Instance": {
            "Type": "AWS::EC2::Instance",
            "Properties" : {
                "ImageId" : "ami-0ff8a91507f77f867",
                "InstanceType": "t2.micro"
            }
        }
    }
}

```

### Refer the below templates for examples

https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/sample-templates-services-us-west-2.html



