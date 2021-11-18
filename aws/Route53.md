# Overview of Route 53
**Amazon Route 53** is a highly efficient and scalable cloud web service and is also used for health checking of resources. It effectively connects user requests to AWS  
such as Amazon EC2 instances, Elastic Load Balancing, or Amazon S3 buckets.  

## AWS Route 53 mainly performs three functions:-

* It registers the name for the website (Domain name) which needs a name. Like if you want to buy a domain name, you that domain name through Route 53.
* It helps the user to connect the website or web application with the browser in the server when he/she enters the website name.
* It keeps checking the health of resources before the customer notices it by sending an automated request over the internet to resources.

![image](https://user-images.githubusercontent.com/17270996/141610331-1fcf99fe-cf9d-42bc-8932-f8cb101765e2.png)

###  Benefits Of Using Route 53
Highly efficient and reliable ensures a consistent ability to route applications.
* It can handle millions of millions of requests because it is highly scalable.
* It can handle large queries without user interaction.
* It’s very easy to use, to sign up, configure and provides fast responses.
* It’s very cost-effective like pay only for the services you used.
* It’s very secure, because of Identity and Access Management (IAM).

### Types Of Routing Policy
1. **Simple Routing:-** It allows to configure DNS with no special Route 53 Routing. It is mainly used when you have a single resource that performs a given function for your domain.
   
   ![image](https://user-images.githubusercontent.com/17270996/141610431-c0e10f98-8b78-4fc6-9971-327f876605b3.png)
   
2. **Failover Routing:-** It routes traffic to another or alternate resource when the previous resource is unhealthy. 
   It makes one ELB (Elastic Load Balancing) on active mode and the other on standby mode. It switches automatically when there is a failover.
   
   ![image](https://user-images.githubusercontent.com/17270996/141610449-b01e256c-8eee-461b-a46f-c31ad2abceac.png)
   
3. **Geolocation Routing:-** It routes the resources based on the geographic location of the users. It localizes the content or website in the language of the user. These are specified by continents, or by country.

![image](https://user-images.githubusercontent.com/17270996/141610465-230e6cbc-06c1-4eb7-8b13-a8da1e8bdf1b.png)

4.**Latency based Routing:-** It is mainly used when we have installed or hosted a website across multiple AWS regions. It improves the performance by serving their request from the lowest latency AWS region.

![image](https://user-images.githubusercontent.com/17270996/141610491-7e23b348-bd12-451f-a659-fb875510c1b1.png)

5. **Weighted Routing:-** It routes multiple resources with a single domain name and control the traffic to be routed to each resource. It is mainly useful for testing and load balancing of new versions of the software.

![image](https://user-images.githubusercontent.com/17270996/141610589-e524ad27-ecbf-48dc-b964-4fe3525b72bb.png)

# Steps To Configure Amazon Route 53

Step 1:- Now, search Route 53 in the search bar in the AWS Console.

![image](https://user-images.githubusercontent.com/17270996/141610610-e361c9a8-ce0c-4ded-8af2-4a8ca04e55b3.png)

Step 2:- Click on Create hosted zone on Route 53 Dashboard.

![image](https://user-images.githubusercontent.com/17270996/141610624-beb81ade-ba0e-4bbc-a06a-3037d653ae5e.png)

Step 3:- On the new page fill in all the required details such as Domain name, description, and select the public hosted zone and then click on create hosted zone.

![image](https://user-images.githubusercontent.com/17270996/141610633-29949541-a1e3-496f-bd66-5acc34387f64.png)

Step 4:- Now, a hosted zone for the domain name will be created.

![image](https://user-images.githubusercontent.com/17270996/141610641-1e9f69fa-ae1a-4ff3-ac70-daca79a49580.png)

Step 5:- On the new page, there will be a list of record sets. By default, there will be two records of type NS & SOA

![image](https://user-images.githubusercontent.com/17270996/141610650-8eee7c58-314a-4b59-82aa-94c6a37681f4.png)

Step 6:-To create your record select the record name and click on the create record option.

![image](https://user-images.githubusercontent.com/17270996/141610663-15fa1b14-11c2-44ce-b232-d6a8b7190c88.png)

Step 7:− Fill in all the required details such as Name, Type, Alias, TTL seconds, Value, etc. Click the Create Record option. Create one more record for some other region so that there will be two records with the same domain name pointing to different IP addresses with your selected routing policy.

![image](https://user-images.githubusercontent.com/17270996/141610670-262e7971-a662-4d73-9972-46080c0b0bb7.png)


# AWS Certificate Manager

**AWS Certificate Manager (ACM)** is designed to simplify and automate many of the tasks traditionally associated with provisioning and managing SSL/TLS certificates. ACM takes care of the complexity surrounding the provisioning, deployment, and renewal of digital certificates for no extra cost!

### Overview of SSL/TLS Certificates

* An SSL certificate is like an ID card or a badge that proves someone is who they say they are.

* **SSL (Secure Socket Layer)** is the standard security technology for establishing an encrypted link between a web server and a browser. This link ensures that all data passed between the web server and browsers remain private and integral.

   ![image](https://user-images.githubusercontent.com/17270996/141610909-99703efc-7a63-40a8-81ac-f48fdddfc4a4.png)

* Transport Layer Security (TLS) is the successor protocol to SSL. TLS is an improved version of SSL. It works in much the same way as the SSL, using encryption to protect the transfer of data and information. The two terms are often used interchangeably in the industry although SSL is still widely used.

### How SSL/TLS works
1. A server attempts to connect to a website (i.e. a web-server) secured with SSL. The server requests the web-server to identify itself.
2. The web-server sends the server a copy of its SSL certificate.
3. The server checks to see whether or not it trusts the SSL certificate. If so, it sends a message to the web-server.
4. The web-server sends back a digitally signed acknowledgement to start an SSL encrypted session.
5. Encrypted data is shared between the server and the web-server.

![image](https://user-images.githubusercontent.com/17270996/141610979-42623ad3-6001-4f10-8ce9-dcc863697003.png)

### What is AWS Certificate Manager (ACM)?

AWS Certificate Manager is a service that lets you easily provision, manage, and deploy public and private Secure Sockets Layer/Transport Layer Security (SSL/TLS) certificates for use with AWS services and your internal connected resources.

![image](https://user-images.githubusercontent.com/17270996/141611004-446c2727-e61f-419f-a7d4-1c40343172e2.png)

With AWS Certificate Manager, you will be able to quickly request a certificate, deploy it on ACM-integrated AWS resources, like Elastic Load Balancers, Amazon CloudFront distributions, and APIs on API Gateway, and let AWS Certificate Manager handle certificate renewals.


## Requesting an SSL/TLS Certificates Using AWS Certificate Manager

Step 1: Provision Certificates
To get started, sign in to the AWS Management Console and navigate to the ACM console. Choose to Get started to request a certificate.

![image](https://user-images.githubusercontent.com/17270996/141611025-cb5a6509-849d-4256-a87e-7a36492d7ff5.png)

Step 2: Request a Certificate
Now, choose Request a certificate to request a new certificate.

![image](https://user-images.githubusercontent.com/17270996/141611031-4dce627a-d225-48e4-a734-3b5eb20e6859.png)

Step 3: Provide Domain Names
Provide your domain name and don’t forget to add a wildcard before your domain name.

![image](https://user-images.githubusercontent.com/17270996/141611040-69a37938-bdae-4370-8970-4151ff8556c9.png)


Step 4: Select the Validation Method
With DNS validation, you write a CNAME record to your DNS configuration to establish control of your domain name. Choose DNS validation, and then click on Next.

![image](https://user-images.githubusercontent.com/17270996/141611051-713bb4a5-fb7e-4603-a1a1-0dc39e93fe16.png)

Step 5: Create a Record in Route53
Click on Create a record in Route53, then it automatically creates a CNAME record in Route53 hosted zone.

![image](https://user-images.githubusercontent.com/17270996/141611061-2542e352-90e6-4d95-8993-be78e262d740.png)

Step 6: Certificate Issued
Refresh, and once the validation is completed the status of the certificate will become issued.

![image](https://user-images.githubusercontent.com/17270996/141611071-f11fd27b-a9dc-4dab-84e6-772c368ea0c9.png)











