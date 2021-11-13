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












