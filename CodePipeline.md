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

How To Automate Code Deployment on AWS using CodePipeline: CodeCommit, CodeDeploy, CloudWatch

March 31, 2021 by Bhanvendra Singh Gaur Leave a Comment

 1386 views
In this blog, we are going to cover the case study on How To Automate Code Deployment on AWS using CodePipeline: CodeCommit, CodeDeploy, CloudWatch which we will be discussing in detail in our AWS Certified Developer Associate FREE CLASS.

Despite high competition, AWS has continued its stronghold on the cloud market till now. New services are continuously added, resulting in improved and high performance. And while AWS tries to keep things simple for developers, using the platform isn’t always easy. Especially for a big organization.

For this reason, AWS provides multiple tools to help AWS developers utilize and develop with its cloud platform and services. Let’s take a look at such tools that can help you build applications with AWS.

CodePipeline_Diagram

Also Check: Our blog post on AWS Cloud Architect Certification. 

Developer Tools Offered By AWS Used In Case Study
The developing tool in Amazon Web Services helps their users/customers to get the software to deliver safely. It also modifies the developers and IT operations to make the service outcome even better. This helps to build, test, and deploy the application to AWS or the required destination. This tool helps the user to monitor, store, and provide surveillance to the application source code. you’ll be able to use AWS CodePipeline to orchestrate associate degree end-to-end computer code advancement using these services and third-party tools or integrate every service severally along with your existing tools.

AWS CodeCommit – It is a  fully-managed source control service that hosts secure Git-based repositories. CodeCommit makes it easy for teams to collaborate on code in a secure and highly scalable ecosystem.Code Commit

AWS CodeBuild – A fully managed continuous integration service that compiles source code, runs tests and produces software packages that are ready to deploy, on a dynamically created build server.
What is AWS CodeBuild? - AWS CodeBuild
Check out: AWS Storage overview and types of storage options offered what are they intended for.

AWS CodeDeploy – A fully managed deployment service that automates software deployments to a variety of computing services such as Amazon EC2, AWS Fargate, AWS Lambda, and your on-premises servers.

aws-codedeploy-flow
AWS CodePipeline – A fully configured continuous delivery service that helps the user to automate their released pipelines for fast and reliable application and infrastructure updates.

pipeline

Check Out: What is AWS Database Migration Service?

Base Scenario (Use Case)
For this scenario, we will use CodePipeline to deploy code maintained in a CodeCommit repository to a single Amazon EC2 instance. Your pipeline is triggered when you push a change to the CodeCommit repository. The pipeline deploys your changes to an Amazon EC2 instance using CodeDeploy as the deployment service.

The pipeline has two stages:

A source stage (Source) for your CodeCommit source action.
A deployment stage (Deploy) for your CodeDeploy deployment action.
Deploy AWS CodePipeline

Also Check: Our blog post on the AWS Secret Access Key. 

Steps To Deploy AWS CodePipeline Using AWS Developer Tools
If you don’t have a FREE AWS account, then create one from here Step by Step AWS FREE Tier Account
Download the HTTPS Git credentials for AWS CodeCommit using the IAM console
Create a CodeCommit Repository
Add Sample Code to your CodeCommit Repository
Create Amazon EC2 Windows instances and install the CodeDeploy agent
Create an application in CodeDeploy
Create your first pipeline in CodePipeline
Modify Code in your CodeCommit Repository
Verify your Pipeline Ran Successfully
Also Check: Our blog post on AWS MFA

Step 1: Download the HTTPS Git credentials for AWS CodeCommit using the IAM console
1) Click on users from the left menu and click on your user then click on security credentials Scroll down to HTTPS Git credentials for AWS CodeCommit and click on Generate Credential

HTTPS Codecommit credentials
Check Out: Our blog post on AWS for testers. 

Step 2: Create a CodeCommit Repository
1) Open the Amazon Codecommit console and choose to Create repository.

CodeCommit - AWS Developer Tools
2) On the Create repository page, in Repository name, enter a name for your repository (for example, K21repo). Then Choose Create.

Code commit repo
3) On the next screen, click on Copy next to Step3: Clone the Repository (We’ll use this to clone this blank repository in the next step).

CodeCommit-AWS-Developer-Tools
Also Read: AWS Cloudtrail vs Cloudwatch, know their major differences!

Step:3 Add Sample Code to your CodeCommit Repository
1) Run the following command to clone the repository, replacing the GIT Clone Address with the one you copied in the earlier step.
git clone <GIT Clone Address> then enter the username and password for IAM users HTTPS Git Credentials that we already downloaded

git CredentialsAfter that, it will show you a warning message that you cloned an empty repository but it’s ok

2) Next, download the sample code and save it in which we created our local repository. Unzip the files from SampleApp_Linux.zip into the local directory you created earlier (for example, /tmp/MyDemoRepo).
–> Deploy to Amazon Linux instances using CodeDeploy, download the sample application here: [SampleApp_Linux.zip](https://github.com/ManoharHalappa/SampleApp_Linux/archive/refs/heads/main.zip).

3) Open Command Prompt and make sure you are in the [SampleApp_Linux](https://github.com/ManoharHalappa/SampleApp_Linux/archive/refs/heads/main.zip) folder
Run the following commands to stage all your files at once and commit the files with a commit message:
**git add -A**
**git commit -m “Add sample application files”**
**git push**
  
![image](https://user-images.githubusercontent.com/17270996/141642828-b327037e-dd36-4a62-b76b-b88ccfd64ee2.png)
  
4) The files you downloaded and added to your local repo have now been added to the master branch in your CodeCommit K21Repo repository and are ready to be included in a pipeline.




  

