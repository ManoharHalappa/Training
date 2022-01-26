# Latest Topics

# **Routing Policy**

![image](https://user-images.githubusercontent.com/17270996/150969956-c51871f2-109b-40bd-b584-b0c9faa92950.png)

![image](https://user-images.githubusercontent.com/17270996/150970423-670fbe4e-526d-457c-ac8d-438b7a08492f.png)

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
