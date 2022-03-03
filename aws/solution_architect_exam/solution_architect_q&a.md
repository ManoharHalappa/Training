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

![image](https://user-images.githubusercontent.com/17270996/156509318-b7886e3f-467b-4a4d-984e-a3dfc612918c.png)

# Describe an acrhictecuture you designed.

Average answer:

Good answer:

# Biggest challenge faced during designing your application on cloud

Average answer:

Good answer:

# How do you pick one service vs another as a solution architect?

Average answer:

Good answer:

# What is the difference between SQL and no SQL databases?

Average answer:

Good answer:

# What is cloud computing?

Average answer:

Good answer:

# What is AWS Service  X?
