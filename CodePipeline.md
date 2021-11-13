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


