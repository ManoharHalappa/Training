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









