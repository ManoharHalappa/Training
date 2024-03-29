# Latest Topics

# **Route 53 - Routing Policy**

![image](https://user-images.githubusercontent.com/17270996/150969956-c51871f2-109b-40bd-b584-b0c9faa92950.png)

![image](https://user-images.githubusercontent.com/17270996/150970423-670fbe4e-526d-457c-ac8d-438b7a08492f.png)

![image](https://user-images.githubusercontent.com/17270996/151122457-110be21e-7cca-4db7-8a56-7be77cac0590.png)

![image](https://user-images.githubusercontent.com/17270996/151122482-9c4768dd-163b-4f65-aaf1-46a2c05d736e.png)


# **AWS Global Accelerators**

AWS Global Accelerator is a networking service that improves the performance of your users’ traffic by up to **60%** using Amazon Web Services’ global network infrastructure. When the internet is congested, AWS Global Accelerator optimizes the path to your application to keep packet loss, jitter, and latency consistently low.

With Global Accelerator, you are provided **two global static public IPs** that act as a fixed entry point to your application, improving availability. On the back end, add or remove your AWS application endpoints, such as Application Load Balancers, Network Load Balancers, EC2 Instances, and Elastic IPs without making user-facing changes. Global Accelerator automatically re-routes your traffic to your nearest healthy available endpoint to mitigate endpoint failure.

Use Case: AWS Global Accelerator helps bridge the gap between single and multiple Region deployments by improving the network routing for local and global user traffic. If traffic to your application’s single Region is left on the public internet, it can be negatively impacted by internet congestion and local outages. Using Global Accelerator, your users' traffic is moved off the internet and onto Amazon’s private global network through 90+ global edge locations, then directed to your application origins. AWS Global Accelerator is quick to setup and increases traffic performance by up to 60%.

# Amazon SageMaker

Amazon SageMaker helps data scientists and developers to prepare, build, train, and deploy high-quality machine learning models quickly by bringing together a broad set of capabilities purpose-built for machine learning. To make it easier to get started, Amazon SageMaker JumpStart provides a set of solutions for the most common use cases that can be deployed readily with just a few clicks.

Use Case:
![image](https://user-images.githubusercontent.com/17270996/150975041-783f4467-ba53-4e23-b15e-93ea03cf3493.png)

# AWS FSx (File system)

Amazon FSx makes it easy and cost effective to launch, run, and scale feature-rich, high-performance file systems in the cloud. It supports a wide range of workloads with its reliability, security, scalability, and broad set of capabilities. Amazon FSx is built on the latest AWS compute, networking, and disk technologies to provide high performance and lower TCO. And as a fully managed service, it handles hardware provisioning, patching, and backups -- freeing you up to focus on your applications, your end users, and your business.

![image](https://user-images.githubusercontent.com/17270996/151119537-1bc632b2-790a-4130-9011-eb715a04879c.png)


What is difference between EFS and FSx?

**Amazon EFS** is a managed NAS filer for EC2 instances based on Network File System (NFS) version 4. ... **FSx** for Windows, on the other hand, is a managed Windows Server that runs Windows Server Message Block (SMB)-based file services. It is conceptually analogous to Amazon Relational Database Service

# AWS Parallel Cluster

**AWS ParallelCluster** is an AWS-supported open source cluster management tool that makes it easy for you to deploy and manage High Performance Computing (HPC) clusters on AWS. ... It also supports multiple instance types and job submission queues, and job schedulers like AWS Batch and Slurm.

![image](https://user-images.githubusercontent.com/17270996/150976798-b565d3bf-25d2-4394-83de-27b28134230f.png)

# AWS DataSync

AWS DataSync is an online data transfer service that simplifies, automates, and accelerates moving data between on-premises storage systems and AWS storage services, and also between AWS storage services. DataSync can copy data between:
Network File System (NFS) file servers

* Server Message Block (SMB) file servers
* Hadoop Distributed File System (HDFS)
* On-premises (self-managed) object storage
* Snow Family Devices
* Amazon Simple Storage Service (Amazon S3) buckets
* Amazon EFS file systems
* Amazon FSx for Windows File Server file systems
* Amazon FSx for Lustre file systems

# AWS Auto Scalling

  ## **Target tracking scaling policies**

  Amazon EC2 Auto Scaling creates and manages the CloudWatch alarms that trigger the scaling policy and calculates the scaling adjustment based on the metric and the target  value. The scaling policy adds or removes capacity as required to keep the metric at, or close to, the specified target value. In addition to keeping the metric close to the target value, a target tracking scaling policy also adjusts to changes in the metric due to a changing load pattern.

  For example, you can use target tracking scaling to:

  * Configure a target tracking scaling policy to keep the average aggregate CPU utilization of your Auto Scaling group at 40 percent.
  * Configure a target tracking scaling policy to keep the request count per target of your Application Load Balancer target group at 1000 for your Auto Scaling group.

  ![image](https://user-images.githubusercontent.com/17270996/151120564-a92410a9-0d11-4a89-a781-b467dca6d77c.png)


  **Step and simple scaling policies**

  Both require you to create CloudWatch alarms for the scaling policies. Both require you to specify the high and low thresholds for the alarms. Both require you to define whether to add or remove instances, and how many, or set the group to an exact size.

  The main difference between the policy types is the step adjustments that you get with step scaling policies. When step adjustments are applied, and they increase or decrease the current capacity of your Auto Scaling group, the adjustments vary based on the size of the alarm breach.

  **In most cases, step scaling policies are a better choice than simple scaling policies, even if you have only a single scaling adjustment.**

  ## **Placement groups**

  When you launch a new EC2 instance, the EC2 service attempts to place the instance in such a way that all of your instances are spread out across underlying hardware to minimize correlated failures. You can use placement groups to influence the placement of a group of interdependent instances to meet the needs of your workload. Depending on the type of workload, you can create a placement group using one of the following placement strategies:

  **Cluster** – packs instances close together inside an Availability Zone. This strategy enables workloads to achieve the low-latency network performance necessary for tightly-coupled node-to-node communication that is typical of HPC applications. 

  **Partition** – spreads your instances across logical partitions such that groups of instances in one partition do not share the underlying hardware with groups of instances in different partitions. This strategy is typically used by large distributed and replicated workloads, such as Hadoop, Cassandra, and Kafka. 

  **Spread** – strictly places a small group of instances across distinct underlying hardware to reduce correlated failures. 
  
  ![image](https://user-images.githubusercontent.com/17270996/151121126-4d9d3f34-e81a-45dd-8824-3e1c75bf3b74.png)

  

  ## **Scaling cooldowns**

  A scaling cooldown helps you prevent your Auto Scaling group from launching or terminating additional instances before the effects of previous activities are visible.

  When you use simple scaling, after the Auto Scaling group scales using a simple scaling policy, it waits for a cooldown period to complete before any further scaling activities initiated by simple scaling policies can start. An adequate cooldown period helps to prevent the initiation of an additional scaling activity based on stale metrics. 

# AWS ENA (Elastic Network Adapter)

ENA is a custom network interface optimized to deliver high throughput and packet per second (PPS) performance, and consistently low latencies on EC2 instances. Using ENA, customers can utilize up to 20 Gbps of network bandwidth on certain EC2 instance types.

# AWS Athena

Amazon Athena is an interactive query service that makes it easy to analyze data in Amazon S3 using standard SQL. Athena is serverless, so there is no infrastructure to manage, and you pay only for the queries that you run. ... This makes it easy for anyone with SQL skills to quickly analyze large-scale datasets.

![image](https://user-images.githubusercontent.com/17270996/151122667-491e2ccf-ef49-473c-8632-3c42f991c1d4.png)

![image](https://user-images.githubusercontent.com/17270996/151122637-ff83c5a3-d0ea-4d74-a6a5-7e991d70498c.png)


# Amazon Glue

AWS Glue is an event-driven, serverless computing platform provided by Amazon as a part of Amazon Web Services. It is a computing service that runs code in response to events and automatically manages the computing resources required by that code. 

  ## Use case

  AWS Glue is a fully managed ETL (extract, transform, and load) service that makes it simple and cost-effective to categorize your data, clean it, enrich it, and move it reliably between various data stores and data streams. ... AWS Glue is designed to work with semi-structured data. It is a serverless data integration service that makes it easy to discover, prepare, and combine data for analytics, machine learning, and application development.

  ## Crawler
  A crawler is a job defined in Amazon Glue. It crawls databases and buckets in S3 and then creates tables in Amazon Glue together with their schema. Then, you can perform your data operations in Glue, like ETL.

  ## Classifier
  A classifier reads the data in a data store. If it recognizes the format of the data, it generates a schema. The classifier also returns a certainty number to indicate how certain the format recognition was. AWS Glue provides a set of built-in classifiers, but you can also create custom classifiers.

# AWS Shield
AWS Shield is a managed Distributed Denial of Service (DDoS) protection service that safeguards applications running on AWS. AWS Shield provides always-on detection and automatic inline mitigations that minimize application downtime and latency, so there is no need to engage AWS Support to benefit from DDoS protection.

  ## AWS Shield vs WAF
  
# S3

![image](https://user-images.githubusercontent.com/17270996/151119818-8c17a9d1-e0ce-499b-81ba-0882f362437a.png)

![image](https://user-images.githubusercontent.com/17270996/151119886-795d7fb5-093c-4836-809c-b5f93bb61b57.png)

  While AWS WAF is a firewall that can protect you from multiple types of attacks and provide various options for whitelisting, AWS Shield is a single-purpose service. AWS Shield is a managed Distributed Denial of Service (DDoS) protection tool for your AWS-based applications.
  
![image](https://user-images.githubusercontent.com/17270996/151123001-ec632305-6b3d-4388-91a4-e239d9306349.png)

![image](https://user-images.githubusercontent.com/17270996/151123019-0d22414e-06cb-4f38-b0ce-b9757335a6a6.png)


#  Amazon Kinesis Data Streams producer
An Amazon Kinesis Data Streams producer is an application that puts user data records into a Kinesis data stream (also called data ingestion). The Kinesis Producer Library (KPL) simplifies producer application development, allowing developers to achieve high write throughput to a Kinesis data stream.

  ## KPL VS KCL
  Kinesis Producer Library is installed and used within your producer applications while the Kinesis Client Library is installed and used to consume data from the stream. So, the KPL lives on wherever applications are producing data and the KCL lives wherever you need to consume or process the streaming data from Kinesis.

  An example would be, installing the KPL onto an EC2 instance that runs an application. This application produces many, many logs files. You use the KPL to stream these logs into the Kinesis Data Stream.

# CloudFront

![image](https://user-images.githubusercontent.com/17270996/151121992-3f075515-5fa0-438f-86e3-1f39002cd1aa.png)

![image](https://user-images.githubusercontent.com/17270996/151121958-70c6eb21-2a38-4222-94bf-ca8cbda2b68d.png)

![image](https://user-images.githubusercontent.com/17270996/151122082-7b4d51b7-37ec-4d77-b476-fabe65c861dc.png)

![image](https://user-images.githubusercontent.com/17270996/151122115-34c0f078-6f81-4224-b97a-c769d6321336.png)



