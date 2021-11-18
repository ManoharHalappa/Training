# AWS Elastic Beanstalk

* An orchestration service offered by AWS

* **AWS Elastic Beanstalk is an easy-to-use AWS service for deploying and scaling web applications and services** developed with Python, Ruby, Java, .NET, PHP, Node.js, Go, and Docker on familiar servers such as Apache, Passenger, Nginx, and IIS.

* With Elastic Beanstalk, you just have to upload your code and Elastic Beanstalk automatically handles the deployment, from capacity provisioning, load balancing, auto-scaling to application health monitoring

### Benefits Of AWS Elastic Beanstalk

* **Fast and simple to deploy:** Amazon Elastic Beanstalk is the simplest and fastest way to deploy your application on AWS. You just use the AWS Management Console, a Git repository, or an integrated development environment (IDE) such as Eclipse or Visual Studio to upload your application, and Elastic Beanstalk automatically handles the deployment details of capacity provisioning, auto-scaling, load balancing, and application health monitoring. Within minutes, your application will be ready to use without any infrastructure or resource configuration work on your part.

* **Scalable:** Amazon Elastic Beanstalk automatically scales your application up and down based on your application’s need using easily adjustable Auto Scaling settings. For e.g, you can use CPU utilization metrics to trigger Auto Scaling actions. With Elastic Beanstalk, your application can handle peaks in workload or traffic while minimizing your costs.

* **Developer productivity:** Amazon Elastic Beanstalk provisions and operates the infrastructure and manages the application stack (platform) for you, so you don’t have to spend the time or develop the expertise. It also keeps the underlying platform running your application up-to-date with the latest patches and updates. So, you can focus on writing code rather than spending time managing and configuring servers, load balancers, databases, firewalls, and networks.

* **Complete infrastructure control:** You are free to select the AWS resources, such as Amazon EC2 instance type, that are optimal for your application. Additionally, Elastic Beanstalk lets you “open the hood” and allow you to full control over the AWS resources powering your application. If you decide you want to take over some (or all) of the elements of your infrastructure, you can do so seamlessly by using Amazon Elastic Beanstalk’s management capabilities.

### How Does AWS Elastic Beanstalk Work?

By using Elastic Beanstalk, you create an application, upload an application version in the form of an application code bundle (for example, a Python .war file) 
to Elastic Beanstalk, and then provide some information about the application. Elastic Beanstalk automatically launches an environment, 
creates and configures the AWS resources needed to run your code. After your environment launch, you can then manage your environment and deploy new application versions. 
The following diagram illustrates the workflow of Elastic Beanstalk.


![image](https://user-images.githubusercontent.com/17270996/141612068-64254c74-6cca-4624-8498-826b7e9a28a7.png)

### Creating an Elastic Beanstalk Application
1. From the Compute Section click on Elastic Beanstack.

![image](https://user-images.githubusercontent.com/17270996/141612110-6ff04cfe-2ea8-49fa-b0a5-39196de8b340.png)

2. Click on Create Application under Elastic Beanstalk.

![image](https://user-images.githubusercontent.com/17270996/141612122-868590b7-ba57-4a3b-b234-48578c28ff33.png)

3. Give your application a name.

4. In the Application tags section you can tag your application by giving key-value pairs.

5. In the platform section, you have to choose a platform, platform branch, platform version (In Platform  Select PHP as the web application environment, 
   In Platform branch you have to select the instance type on which your environment will going to create. I am using Amazon Linux 2, In Platform, version select the recommended version.)

6. In the Application code section you have to choose a sample application and then click on **Create application**.

![image](https://user-images.githubusercontent.com/17270996/141612189-8157ad74-9f34-4dbe-9923-9855e57cf0d5.png)

7. Once all the backend services will create then you will see the link to open the application screen. Click on the link to see your sample application.

![image](https://user-images.githubusercontent.com/17270996/141612240-0e69d894-1188-45bf-8935-1b352970990f.png)




