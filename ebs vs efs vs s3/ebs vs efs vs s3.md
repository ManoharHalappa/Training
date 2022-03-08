# EBS vs EFS vs S3 – when to use AWS’ three storage solutions

AWS offers a range of storage solutions, but for users with typical storage needs, the decision comes down to these three services: EBS, EFS and S3. 

The question is, which one? 

**1. EBS: high performance, per instance block storage** 

EBS used to be accessible to a single EC2 instance only, making it most like your physical hard drive. 

That’s still generally how it’s used (as per-instance storage), but in special cases, Amazon EBS Multi-Attach can turn EBS into multi-instance storage, like EFS.

EBS Instances can be either General Purpose SSD (for general use) or Provisioned IOPS SSD, for mission-critical workloads.

**What kind of storage is EBS?**

EBS is a block storage service, which means all data within EBS is stored in equally sized blocks. This system offers some performance advantages over traditional storage, and generally boasts lower latency, too.


**EBS’s key benefits**

Within its role as a per-EC2 instance service, EBS has a range of benefits:

* Low-latency performance – Up to 16,000 IOPS for General Purpose SSDs and up to 256,000 IOPS for the new Provisioned IOPS SSD
* Easy data backup and restoration – via snapshots that can be taken at hourly intervals, EBS ensures all your data is well protected
* Highly available – 99.8% – 99.9% for General Purpose SSDs and 99.999% for the Provisioned IOPS SSD
* EBS encryption – there’s no need to worry about key management, as EBS handles that for you.

**When to use EBS?**

EBS’s use case is more easily understood than the other two. It must be paired with an EC2 instance. So when you need a high-performance storage service for a single instance, use EBS.

**2. EFS: scalable file storage for multiple EC2 instances**

Unlike EBS, EFS can be mounted by multiple EC2 instances, meaning many virtual machines may store files within an EFS instance. 

But its main feature is its scalability. EFS can grow or shrink according to demand, with more and more files being added without disturbing your application or having to provision new infrastructure.

**What kind of storage is EFS?**

EFS is a file storage system. File storage is the system you’ll likely be most familiar with, as it’s how files are stored in the hard drive on your computer. File storage is fast and accessible, but it doesn’t offer the increased potential for complex queries that object storage does (more on that in the S3 section).

**EFS’s key benefits**

Within its role as a shared file storage service for multiple EC2 instances, EFS provides many benefits: 

* Adaptive throughput – EFS’s performance can scale in-line with its storage, operating at a higher throughput for sudden, high-volume file dumps, reaching up to 500,000 IOPS or 10 GB per second
* Totally elastic – once you’ve spun up an EFS instance, you can add add files without worrying about provisioning or disturbing your application’s performance
* Additional accessibility – EFS can be mounted from different EC2 instances, but it can also cross the AWS region boundary via the use of VPC peering

**When to use EFS?**

EFS may be used whenever you need a shared file storage option for multiple EC2 instances with automatic, high-performance scaling. 

This makes it a great candidate for file storage for content management systems; for lift and shift operations, as its autoscaling potential means you do not need to re-architect; for application development, as EFS’s shareable file storage is ideal for storing code and media files.

**3. S3: object storage for complex queries and archived data**

S3 is scalable, like EFS, and has access to multiple EC2 instances. However, it can also be accessed by other cloud services, and its object storage system makes it ideal for handling large volumes of static data as well as complex queries.

**What kind of storage is S3?**

S3 is an object storage service. Unlike file storage – in which all data is organised hierarchically in a top-down network of folders – data in S3 is contained on the same flat plane, with more comprehensive metadata (labels) to make it manageable.

Think of the difference between a family tree, and a family party at which each family member is wearing a name tag. In the first scenario, people exist in hierarchal relation to one another; in the second all are milling about on equal footing. 

Having each object marked like this makes it easier to run complex queries on each object without reference to an existing hierarchy.

**S3’s key benefits**

Within its role as a object storage system, S3 offers many benefits:

* Running analytics – because S3 can interface with other services like AWS Lake Formation and analytics tools, it can be used as a data lake, with other services running complex queries on its data to draw insights
* Data archiving – S3 is capable of archiving data, meaning simpler forms of your data can be stored at a lower cost than a ‘fuller’ version would
* Incredibly durable – Amazon S3 Standard, S3 Standard–IA, S3 Intelligent-Tiering, S3 One Zone-IA, S3 Glacier, and S3 Glacier Deep Archive are all designed to provide 99.999999999% (11 9’s) of data durability of objects over a given year. This durability level corresponds to an average annual expected loss of 0.000000001% of objects. If you store 10,000,000 objects with Amazon S3, you can on average expect to incur a loss of a single object once every 10,000 years.
* Highly available – S3 boasts 99.99% + availability
* Flexible – S3 can be mounted on an application to act as a shared drive, making files shareable across multiple instances running the web application

**When to use S3?**

S3 is good at storing long-term data due to its archiving system. Things like reports and records, which may go unused for years, can be stored on S3 at a lower cost than the other two storage services discussed. 

As already stated, S3 is also useful for storing data on which complex queries may be run. This makes it useful for data related to customer purchases, behaviour or profiles, because that data can be easily queried and fed into analytics tools.

This  capacity for interfacing with other tools also makes S3 great for back-up and restoration, as it can be paired with Amazon Glacier for even more secure backing up.

S3 also supports static websites, so if you need to host a static HTML page, S3 is a good choice.


**The Takeaways** 

* EBS is a high-performance per-instance block storage system designed to act as storage for a single EC2 instance (most of the time)
* EFS is a highly scalable file storage system designed to provide flexible storage for multiple EC2 instances
* S3 is an object storage system, designed to provide archiving and data control options and to interface with other services beyond EC2. It’s also useful for storing static html pages and shared storage for applications