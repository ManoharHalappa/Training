# How can you make your application scalable for a big traffic day?
![image](https://user-images.githubusercontent.com/17270996/156505913-1be18fcc-d666-42f1-83a6-e0546f36bb0e.png)


Good answer: For black friday sale or diwali sale natural scalling may not be a good solution

* Pre-warm Load Balancers
* Scheduled Scaling (All the containers are already running before the load comes)
* In case the EC2 / Docker needs to scale naturally keep the AMI size and docker images very light weight so that scalling will not take long time
* If the application is accessing RDS use database proxy (ex RDS proxy). Rapid connection to RDS are made sometimes the connections stay open and become stale. Orphan DB connections are reused using RDS proxy
* Run IEM( Infrastructure Event Management) to ensure it can handle hight traffic
* Also we should consider breaking the application into microservices (Going to kubernetes or serverless doesn't eliminate these challenges as we still have to confiugure the concurrency, API rate limits etc)

# How do you achieve DR for your cloud application?

Average answer: I will replicate to another region

Good answer: DR architectire from AWS is exlained in the below link

https://aws.amazon.com/blogs/architecture/disaster-recovery-dr-architecture-on-aws-part-i-strategies-for-recovery-in-the-cloud/

# How do you secure your aplication on the cloud?

Average answer: Use KMS, IAM, and firewalls for security.

Good answer:

* Explain what they do rather than just saying service names
* Take one app such as 3 tier app with EC2, or microservices runnign on Kubernetes, or Serverless and explain in detail
* While securing the API layer we have to thing about using IAM roles instead of static tokens
* VPC architecture, security groups, WAF should also be considerd

![image](https://user-images.githubusercontent.com/17270996/156509318-b7886e3f-467b-4a4d-984e-a3dfc612918c.png)

# Describe an acrhictecuture you designed.

* Always better to explain system you designed, even if small

# Biggest challenge faced during designing your application on cloud

Average answer: There are so many services, its hard to determine when to use for what

Good answer: 
* Explain the scalling example which you have implemented or any practical solution design solution even if its small
* Cost optimize the applications (give an example)
  * Amazon CloudWatch Insights
  * AWS Compute Optimizer
  * AWS Spot instances / Cost explorer / CloudHealth

# How do you pick one service vs another as a solution architect?

Good answer:
  * Ask interviewer about system requirements
  * You just gotta study for this one
  * Example:
    * Load balancer or API Gateway
    * Serverless vs EC2
    * SQLvs NoSQL
    * When to user eventbridge? SQS ? SNS ?
    * GitOps vs DevOps
    * Kubernetes vs Lambda
    * EKS / ECS / Fargate / Elastic Beanstalk / Lightsail

# What is the difference between SQL and no SQL databases?

Average answer:

SQL holds structured data and NoSQL holds unstructured data. You can define indexes and run queries on SQL. SQL is good for transactional system and noSQL best for logging.

Good answer: Above is average answer because, it does't hightlight strengths of modern NoSQL. Modern NoSQL databases support indexes and used in transactional systems as well

# What is cloud computing?

Average answer: Cloud computing is storing your data and servers in datacenters that you dont't own. You can run your applications on cloud. Some cloud examples are AWS, Azure, GCP

https://aws.amazon.com/what-is-cloud-computing/

# What is AWS Service  X?

Give the official defention and explain in your own words
