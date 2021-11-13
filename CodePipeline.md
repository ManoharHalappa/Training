# How To Automate Code Deployment on AWS using CodePipeline: CodeCommit, CodeDeploy, CloudWatch

![image](https://user-images.githubusercontent.com/17270996/141612643-229d6011-2201-450b-9314-0682f5cbedb2.png)

### **AWS CodeCommit** – It is a  fully-managed source control service that hosts secure Git-based repositories. CodeCommit makes it easy for teams to collaborate on code in a secure and highly scalable ecosystem.

![image](https://user-images.githubusercontent.com/17270996/141612671-9a1dcaae-d960-471f-80a2-0488952e43ae.png)

### **AWS CodeBuild** – A fully managed continuous integration service that compiles source code, runs tests and produces software packages that are ready to deploy, on a dynamically created build server.

![image](https://user-images.githubusercontent.com/17270996/141612703-d56655b7-c9f8-41ab-b2fa-e0ef04cccf0e.png)

### **AWS CodeDeploy** – A fully managed deployment service that automates software deployments to a variety of computing services such as Amazon EC2, AWS Fargate, AWS Lambda, and your on-premises servers.

![image](https://user-images.githubusercontent.com/17270996/141612744-d6fab777-8210-429b-b068-256da092c7d5.png)

### **AWS CodePipeline** – A fully configured continuous delivery service that helps the user to automate their released pipelines for fast and reliable application and infrastructure updates.

![image](https://user-images.githubusercontent.com/17270996/141612755-85e1bda1-5351-4a58-a9ba-538b561951ec.png)

## AWS Code Pipeline Demostration

The pipeline has two stages:

* A source stage (Source) for your CodeCommit source action.
* A deployment stage (Deploy) for your CodeDeploy deployment action.

![image](https://user-images.githubusercontent.com/17270996/141612867-c3ad8a19-8854-47fa-8b8f-aa53679d78a4.png)

## Steps To Deploy AWS CodePipeline Using AWS Developer Tools
1. If you don’t have a FREE AWS account, then create one from here Step by Step AWS FREE Tier Account
2. Download the HTTPS Git credentials for AWS CodeCommit using the IAM console
3. Create a CodeCommit Repository
4. Add Sample Code to your CodeCommit Repository
5. Create Amazon EC2 Windows instances and install the CodeDeploy agent
6. Create an application in CodeDeploy
7. Create your first pipeline in CodePipeline
8. Modify Code in your CodeCommit Repository
9. Verify your Pipeline Ran Successfully

# Step 1: Download the HTTPS Git credentials for AWS CodeCommit using the IAM console

* Click on users from the left menu and click on your user then click on security credentials Scroll down to HTTPS Git credentials for AWS CodeCommit and click on Generate Credential

![image](https://user-images.githubusercontent.com/17270996/141642568-625e292d-3bfa-438c-849d-949fbb5f671b.png)

# Step 2: Create a CodeCommit Repository

1) Open the Amazon Codecommit console and choose to Create repository.

2) On the Create repository page, in Repository name, enter a name for your repository (for example, mandemo). Then Choose Create.

3) On the next screen, click on Copy next to Step3: Clone the Repository (We’ll use this to clone this blank repository in the next step).

![image](https://user-images.githubusercontent.com/17270996/141642611-b56336ce-0d83-4d90-bb48-cc2f252f7cf5.png)

# Step:3 Add Sample Code to your CodeCommit Repository

1) Run the following command to clone the repository, replacing the GIT Clone Address with the one you copied in the earlier step.
git clone <GIT Clone Address> then enter the username and password for IAM users HTTPS Git Credentials that we already downloaded
  
![image](https://user-images.githubusercontent.com/17270996/141642667-17e63edb-455c-4f91-ab24-52bd492e74ec.png)

After that, it will show you a warning message that you cloned an empty repository but it’s ok
  
2) Next, download the sample code and save it in which we created our local repository. Unzip the files from SampleApp_Linux.zip into the local directory you created earlier .
–> Deploy to Amazon Linux instances using CodeDeploy, download the sample application here: [SampleApp_Linux.zip](https://github.com/ManoharHalappa/SampleApp_Linux/archive/refs/heads/main.zip).

3) Open Command Prompt and make sure you are in the [SampleApp_Linux](https://github.com/ManoharHalappa/SampleApp_Linux/archive/refs/heads/main.zip) folder
Run the following commands to stage all your files at once and commit the files with a commit message:
git add -A
git commit -m “Add sample application files”
git push
  
![image](https://user-images.githubusercontent.com/17270996/141643499-77aa5990-d67d-45b7-9074-2fe635cff335.png)

4) The files you downloaded and added to your local repo have now been added to the master branch in your CodeCommit K21Repo repository and are ready to be included in a pipeline.
  
# Step 4: Create Amazon EC2 Windows instances and install the CodeDeploy agent
  
1) Create an IAM role that will be required to grant permission to the EC2 instance. Select the policy named AmazonEC2RoleforAWSCodeDeploy to create.

![image](https://user-images.githubusercontent.com/17270996/141643601-c533ab5b-e786-4f95-9bf4-2bedb7ba44f9.png)

2) Launch the instance on which our code will be deployed. To know more about how to launch an EC2 instance check our Blog on EC2 Instance. Just remember to add the IAM role that we have created and In Auto-assign Public IP, choose Enable.
  
Expand Advanced Details, and in User data, As text selected, enter the following:
```
#!/bin/bash
yum -y update
yum install -y ruby
yum install -y aws-cli
cd /home/ec2-user
aws s3 cp s3://aws-codedeploy-us-east-2/latest/install . –region us-east-2
chmod +x ./install
./install auto
```
![image](https://user-images.githubusercontent.com/17270996/141643673-4ec86f42-f747-4941-8704-7fe55771a872.png)

4) On Configure Security Group page, do the following:
* Next to Assign a security group, choose to create a new security group.
* In the row for SSH, under Source, choose Anywhere.
* Choose Add Rule, choose HTTP, and then under Source, choose Anywhere.
  
![image](https://user-images.githubusercontent.com/17270996/141643704-bd78a598-0342-4008-881a-7814ddf02b3f.png)

# Step 5: Create an application in CodeDeploy
  
1) Create an AWSCodeDeployRole that allows CodeDeploy to perform deployments
  
![image](https://user-images.githubusercontent.com/17270996/141643747-a9ce9d35-5c9a-46d4-96c8-d6524456c37e.png)

2) Initially click on create an application in CodeDeploy, and In Compute Platform, choose EC2/On-premises.Choose to Create application.
  
![image](https://user-images.githubusercontent.com/17270996/141643793-03bde2e5-194f-40b9-9449-3c17f4b8544f.png)
  
3) On the page that displays your application, choose to Create a deployment group. In service, role creates an IAM role under code deploy category.
  
![image](https://user-images.githubusercontent.com/17270996/141643804-480dc0e4-5ac0-488a-818c-7d15a2d0a2e1.png)

4) Under Deployment type, choose In-place. Under the Environment configuration, choose Amazon EC2 Instances.
  
![image](https://user-images.githubusercontent.com/17270996/141643844-731d57d8-30b0-4ae6-97bc-dd81f1fdbe66.png)
  
5) Under Deployment configuration, choose CodeDeployDefault.OneAtaTime. Under Load Balancer, clear Enable load balancing, leave the defaults then choose to Create a deployment group.
  
![image](https://user-images.githubusercontent.com/17270996/141643886-28234a7a-148b-4e76-bc35-573988214ce9.png)
  
# Step 6: Create your first pipeline in CodePipeline
  
1) Open the CodePipeline console. Choose pipeline settings, Enter your desired name and in the Service role, Choose New service role to allow CodePipeline to create a new service role in IAM.
  
![image](https://user-images.githubusercontent.com/17270996/141643920-356c21d8-57ad-4a07-9405-282c25f6b219.png)
  
2) In the Add source stage, select Source provider, choose Amazon S3. Under the S3 object key, enter the object key with or without a file path, and remember to include the file extension.

![image](https://user-images.githubusercontent.com/17270996/141643979-36a83e0c-5c07-4233-8316-8ea98acd41f5.png)
  
3) In the Add build stage, choose to Skip build stage, and then accept the warning message by choosing Skip again. Choose Next.

4) In the Add deploy stage, in Deploy provider, choose AWS CodeDeploy.Then enter your application name or choose the application name from the list. In the Deployment group, enter MyDemoDeploymentGroup, or choose it from the list, and then choose Next.
  
![image](https://user-images.githubusercontent.com/17270996/141643997-b037f87c-9718-4143-acbf-c98d4ac4bd70.png)
  
5) In Step 5: Review, review the information, and then choose Create pipeline. The pipeline starts running after it is created. It downloads the code from your CodeCommit repository and creates a CodeDeploy deployment to your EC2 instance.
  
![image](https://user-images.githubusercontent.com/17270996/141644016-2a3fedc1-b9c7-4690-9cb4-8ad2e45e9e98.png)
  
Congratulations! You just created a simple pipeline in CodePipeline.
you can verify that by coping EC2 Public DNS address and then past it into the address bar of your web browser
  
![image](https://user-images.githubusercontent.com/17270996/141644026-35b4cf54-e70a-41b3-8011-cf672c81f5c0.png)
  
# Step 7: Modify Code in your CodeCommit Repository
  
1) In your CodeCommit repository revise the contents of the index.html file to change the background color and some of the text on the webpage, by clicking on edit
  
![image](https://user-images.githubusercontent.com/17270996/141644105-221c4fe9-e8f3-48ca-9781-af9660c70beb.png)

2) Under Author name enter K21,  then enter Email Address, Click on Commit changes
  

# Step 8: Verify your Pipeline Ran Successfully

1) View the initial progress of the pipeline. The status of each stage changes from No executions yet to In Progress, and then to Succeeded. The running of the pipeline should be complete within a few minutes.

2) After Succeeded is displayed for the action status, refresh the demo page you accessed earlier in your browser.

![image](https://user-images.githubusercontent.com/17270996/141644123-d22333cd-9c99-4e04-817b-fbc74b29696a.png)






