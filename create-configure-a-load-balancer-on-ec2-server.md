Steps To Create & Configure Load Balancer On Windows EC2
Step 1: Create Amazon Windows EC2 Instance
Step 2: Create Windows EC2 Instance in Different Subnet
Step 3: Connect to Windows EC2 Instance
Step 4: Configure IIS Server on Windows EC2 Instance
Step 5: Create a Web Page on IIS Server
Step 6: Create a Load Balancer & Access The Webpage
Step 1: Create Amazon Windows EC2 Instance
In this section, we are going to launch 2 EC2 Instances in two different availability zones

Note: If you don’t have an AWS account, check our blog on how to create AWS Free Tier Account

1: Log in to your AWS account and go to the EC2 dashboard then click on launch instance

2: Select Windows Server 2019 Base AMI.

![image](https://user-images.githubusercontent.com/17270996/141602301-ec0974b3-3189-4bcc-a54a-9d520eb54b34.png)

3: Select the t2.micro instance type and click on Next: Configure Instance Details.

4: Under the Configure Instance Details, select the subnet and then click on Next: Add Storage.

Note: Here we have selected the ap-south-1a subnet, you can select as per your choice.

![image](https://user-images.githubusercontent.com/17270996/141602456-f29081d0-231f-48bb-8c96-8af3473d5505.png)

5: In the Add Storage step, let root volume set to the default of 30Gib and then click on Next: Add Tags.

![image](https://user-images.githubusercontent.com/17270996/141602462-1f980be0-b090-4580-b73a-7112dd06bd98.png)

6: In the Add Tags step you can add tags to an instance and click on Next: Configure Security Group.

![image](https://user-images.githubusercontent.com/17270996/141602470-56c26e38-5769-467a-b9ad-845838ac9bdf.png)

7: In the Configure Security Group step we have to add the security group to the instance and add RDP and HTTP rule to the security group, now click on Review and Launch.

![image](https://user-images.githubusercontent.com/17270996/141602483-2787a03b-8874-4e23-a640-4c513520ef55.png)

8: In this Review Instance Launch step we are reviewing AMI, storage, tags, security groups that we have selected. Here If we want to make any changes again in launching the instance then we can do it. Now click on Launch.

![image](https://user-images.githubusercontent.com/17270996/141602507-069b3ae5-c78f-4902-92c9-5b61cb093fbc.png)

9: After reviewing the Instance we have to create a New Key-pair and click on Launch Instance.

![image](https://user-images.githubusercontent.com/17270996/141602518-52c55d01-aad1-4204-b910-49b968907afc.png)

10: Here you shall see that our Instance is launched in our ap-south-2a subnet.
![image](https://user-images.githubusercontent.com/17270996/141602541-14ac519f-4397-4a79-b6a6-0d86b49994d6.png)

Step 2: Create Windows EC2 Instance in Different Subnet
Repeat the steps 1 - 6 from above

7: In the Configure Security Group step we have to select the existing security group to the instance and now click on Review and Launch.
Note: Make sure you attach the same security group that we have created & attached earlier in our first EC2 instance.

![image](https://user-images.githubusercontent.com/17270996/141602608-383d6788-8972-43e7-a144-4290883c0ed2.png)

8: In this Review Instance Launch step we are reviewing AMI, storage, tags, security groups that we have selected. Here If we want to make any changes again in launching the instance then we can do it. Now click on Launch.

9: After reviewing the Instance we have to create a New Key-pair and click on the Launch Instance button
Note: Here you can choose your existing key pair which we have created earlier while launching our first EC2 Instance.

![image](https://user-images.githubusercontent.com/17270996/141602640-732e8403-e7dc-4ae6-a8b7-7be6813a024f.png)

10: Here you shall see that our Instance is launched in our ap-south-2b subnet.

Thus, at this step, we have successfully created two EC2 instances in two different subnets, Now in further steps we will see how to get connected with Windows EC2 Instance.

Step 3: Connect to Windows EC2 Instance
In this section, we are going to connect with our Windows EC2 Instance.

1: Select the instance and click on connect.

![image](https://user-images.githubusercontent.com/17270996/141602723-3e853e91-c1c7-4271-85d4-79bc6a59e311.png)

2: Click on the RDP client and then click on Get password.

![image](https://user-images.githubusercontent.com/17270996/141602729-c643e402-318a-4325-b9ed-b9e1ca1df075.png)

3: Click on Browse and select the key pair file which we have downloaded at the time of launching the EC2 instance.

![image](https://user-images.githubusercontent.com/17270996/141602738-bb457881-f2dc-43da-9f06-4206ecebb406.png)

4: Once you select the key pair file Now click on Decrypt Password.

![image](https://user-images.githubusercontent.com/17270996/141602746-d0ab47ae-5cc8-4785-8ea8-cc08eac8425d.png)

5: Here you shall see that your password is generated, copy the password and make it safe.

![image](https://user-images.githubusercontent.com/17270996/141602753-83a1a706-a69d-498e-92d6-0410529ee3f3.png)

6: Now search for the RDP on your system and open it.

7: From EC2 Dashboard select your Instance and copy the Public IPv4 address.

![image](https://user-images.githubusercontent.com/17270996/141602769-26a63da5-fbc3-473e-a2bc-5b4ca5fb451a.png)

8: Now paste the pubic IPv4 address inside the RDP application and click on connect.

![image](https://user-images.githubusercontent.com/17270996/141602775-2c50b5f8-11e5-4eb4-98d7-c434ecbecf9e.png)

9: Here you have to enter the credentials of your Instance.
Username –> Administrator
Password –> Enter the password which we have decrypted at step 5.
Then Click on Yes to proceed.

![image](https://user-images.githubusercontent.com/17270996/141602782-402682a8-40ee-4b7e-8293-92d1c7c57ebf.png)

10: Here you shall see that you are successfully connected with your EC2 Instance.

![image](https://user-images.githubusercontent.com/17270996/141602787-676380cd-fd76-44c2-8255-460826b58bda.png)

Thus we have successfully connected with our first EC2 instance. Similarly, you can connect with another EC2 instance by following the same steps as we followed here. 

Step 4: Configure IIS Server on Windows EC2 Instance
In this section, we are going to install the IIS server on our windows EC2.

1: Once you connect with your Ec2 Instance, click on the Start button and then click on Server Manager.

![image](https://user-images.githubusercontent.com/17270996/141602996-6bd002da-1860-4b9c-ab3c-d06b998f1168.png)

2: Click on Add roles and features.

![image](https://user-images.githubusercontent.com/17270996/141603000-635821ef-d133-4aa7-9d9c-ab522b03319e.png)

3: Click on Next.

![image](https://user-images.githubusercontent.com/17270996/141603004-e6336b52-f3fa-4520-a2d8-a754376dbd39.png)

4: Click on Role-based or feature-based installation and then click on Next.

![image](https://user-images.githubusercontent.com/17270996/141603011-338d6ef6-3419-479e-af86-b4653b0e7aa8.png)

5: Keep everything default and click on Next.

![image](https://user-images.githubusercontent.com/17270996/141603015-1b7335c4-9a91-485a-82a8-dd527be073cc.png)

6: Scroll down a bit and click on Web Server (IIS).

![image](https://user-images.githubusercontent.com/17270996/141603023-d2d39c18-b872-401b-a5fe-2db8e56467b3.png)

7: As you click on Web Server (IIS), a small dialogue box will open. Click on Add Features.

![image](https://user-images.githubusercontent.com/17270996/141603028-7abe3bd6-1c9e-499c-bfcd-8e325df07cc6.png)

8: Now click on Next again.

![image](https://user-images.githubusercontent.com/17270996/141603032-b080d032-5898-4c03-913f-b3c25a0bc2ac.png)

9: Now keep clicking on Next till you reach the Install dialogue box.

![image](https://user-images.githubusercontent.com/17270996/141603039-08b57f67-297e-4712-bf39-bd1d905ca149.png)

10:  The installation will start as shown below.
Note: The feature installation will take some time (approx. 5 minutes) to complete. Please be patient.

![image](https://user-images.githubusercontent.com/17270996/141603048-9d2f07cf-d986-499d-b06b-cc710ab96513.png)

11: The installation is complete now.

![image](https://user-images.githubusercontent.com/17270996/141603057-08a2fc43-cf19-4580-81c3-25a74a218c36.png)

Thus we have successfully installed IIS on our Windows Instance. similarly, you have to install the IIS server on our second EC2 instance.

Step 5: Create a Web Page on IIS Server
In this section, we are going to create a webpage on the IIS server, which we are going to access in further steps.

1: Navigate to the local disk of your Windows Virtual machine. You will see a folder by the name inetpub created in your local disk. Double click to open it.

![image](https://user-images.githubusercontent.com/17270996/141603075-e19dc1dd-b4d1-46fd-8eb1-6bf4a5058421.png)

2: Once you have opened it, now double click on wwwroot folder to open it.

![image](https://user-images.githubusercontent.com/17270996/141603084-6bbeacc3-a9f0-4ce8-a566-7cdf6a89438d.png)

3: You will find an HTML document inside by the name iisstart, This will be the home page of your web server.

![image](https://user-images.githubusercontent.com/17270996/141603088-ee661109-484a-4811-a8f8-7582628e9dd6.png)

4: Right-click on this file and open Notepad. It contains an HTML code as shown below.

![image](https://user-images.githubusercontent.com/17270996/141603100-d935445e-cbee-4f49-b0ba-20e036c0ab72.png)

5: Now to make our web page look a bit attractive. We will edit this HTML code by erasing everything in it by Pressing Ctrl+A and delete, write our own HTML code and Save it.

For First Instance:

<html>
<body bgcolor=green>
<h1>Welcome to My Demo </h1>
</body>
</html>

For Second Instance:

<html>
<body bgcolor=yellow>
<h1>Welcome to My Demo </h1>
</body>
</html>

![image](https://user-images.githubusercontent.com/17270996/141603110-f1455972-8a92-4fc8-8303-a20892252cbc.png)

Thus, we have successfully created a Webpage on our first Instance. similarly, you have to create a webpage on your second Instance, only you have to change the HTML code which we have given above for Instance 2.

Step 6: Create a Load Balancer & Access The Webpage
In this section, we are going to create a load balancer and attach both EC2 instances with our load balancer and access the webpage through load balancer DNS.

1: Under the EC2 dashboard, scroll down from the left panel and click on Load balancers, Now click on Create Load Balancer.

![image](https://user-images.githubusercontent.com/17270996/141603142-54aa7361-bbb7-46f4-8e30-e9b34cb387dc.png)

2: Here select the Application load balancer.

![image](https://user-images.githubusercontent.com/17270996/141603149-9bf3f758-371c-4da9-b980-4afc847d883d.png)

3: Under Configure Load Balancer

> For Name, enter a name for your load balancer. For example, MyALB.
> For Scheme, click on internet-facing, as internet-facing load balancer routes requests from clients over the internet to targets. An internal load balancer routes request to targets using private IP addresses.
> For IP address type, choose ipv4 if your clients use IPv4 addresses to communicate with the load balancer, or choose dual-stack if your clients use both IPv4 and IPv6 addresses to communicate with the load balancer. If the load balancer is an internal load balancer, you must choose ipv4.
> For Listeners, the default is a listener that accepts HTTP traffic on port 80. You can keep the default listener settings, modify the protocol, or modify the port. Choose to Add to add another listener (for example, an HTTPS listener).
> Under the Availability zone, select the availability zone in which you have launched the EC2 Instances and click on 

Next: Configure Security settings

![image](https://user-images.githubusercontent.com/17270996/141603224-cdc7afd9-e72b-4428-bd81-ca83d5a224bb.png)

4: Here click on Next: Configure Security Groups.

![image](https://user-images.githubusercontent.com/17270996/141603229-e01cbaa8-4856-4450-81f4-d80e99e9b32d.png)

5: Here under the security group, select the existing security group which we have created at the time of launching the EC2 Instances and click on Next: Configure Routing.

![image](https://user-images.githubusercontent.com/17270996/141603238-b7999c5e-4934-4d63-9ace-858796831168.png)

6: Under Configure Routing, enter the name of the target group and Leave the other fields set to their default values then click on Next: Register Target.

![image](https://user-images.githubusercontent.com/17270996/141603241-1dc83bf9-8dfa-4aab-9fc6-94a63c41eec6.png)

7: Under Register Target select both instances and then click on Add to registered and then click on Next: Review.

![image](https://user-images.githubusercontent.com/17270996/141603243-bf3c3c8c-5835-48db-8932-798acd7ea6ef.png)

8: Review your settings, and then click on Create.

![image](https://user-images.githubusercontent.com/17270996/141603251-4dafcd74-821a-4194-8d4f-95bbaf44d3d9.png)

9: AWS is now creating your load balancer. It will take a couple of minutes to start up the load balancer, attach your web servers, and pass the health checks. Click on Close.

![image](https://user-images.githubusercontent.com/17270996/141603257-05c3c107-f6dd-4cbf-84fb-5597a3f1d3f5.png)

10: Select the load balancer that you just created, click the Description tab, and Copy the DNS name
Note: Here your load balancer will take 2-5 min to change its state from provisioning to active, so don’t be panic.
Note: Do not copy the “(A Record)” text.

![image](https://user-images.githubusercontent.com/17270996/141603268-6b5e447b-ae28-4b6b-9b0a-2e14e4afc17e.png)

11: Paste the DNS in another tab of your browser and hit Enter.

![image](https://user-images.githubusercontent.com/17270996/141603281-577b713e-3cde-483f-b350-b34e56efdf32.png)

12: Here you shall accessible to a yellow webpage, Now continuously refresh your page.

![image](https://user-images.githubusercontent.com/17270996/141603287-f42150a7-1161-4a8c-a065-430ac298be4b.png)

13: Here you shall see that your webpage is switching between yellow and green webpage continuously.

![image](https://user-images.githubusercontent.com/17270996/141603296-91ad5dd7-e754-4642-bbcd-beb1b1e61e6a.png)

Thus we have successfully created a Load balancer and attached both of our EC2 Instances and accessed the Webpage through Load balancer DNS.


































































