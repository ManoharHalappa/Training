# AWS Fargate – How to Deploy A Containerized Application (Serverless way)

**AWS Fargate** is a serverless compute engine for containers that work with Amazon Elastic Container Service. Fargate makes it easy for you to focus on building your applications. 
Fargate removes the need to provision and manage servers,lets you specify and pay for resources per application, and improves security through application isolation by design.

## Overview of Containers

![image](https://user-images.githubusercontent.com/17270996/141667567-d1c38074-0c0c-4ea2-a43e-0f2f049a5176.png)

* Containers are an executable unit of software in which application code is packaged, along with its libraries and dependencies, in common ways so that it can be run anywhere, whether it be on the desktop, traditional IT, or the cloud.
* Containers are small, fast, and portable because unlike a virtual machine, containers do not need to include a guest OS in every instance and can, instead, simply leverage the features and resources of the host OS.
* Making software applications behave predictably on different computers is one of the biggest challenges for developers. The software may need to run in multiple environments: development, testing, staging, and production.
* To solve these challenges, more and more developers are using a technology called containers. Each container encapsulates an entire runtime environment. This includes the application itself, as well as the dependencies, libraries, frameworks, and configuration files that it needs to run.

## What is AWS Fargate?

AWS Fargate is a compute engine for Amazon Elastic Container Service(ECS) that allows you to run containers without having to provision, configure & scale clusters of VMs that host container applications.

AWS Fargate eliminates the need for users to manage the EC2 instances on their own. In fact, users don’t need to use EC2 instances at all. 
Fargate itself will act as a compute engine. It lets you focus on elements like designing and constructing your application instead of managing the infrastructure that runs them.
With the Fargate launch type, all you need to do is package your application in containers, specify the memory and CPU requirements, define IAM policies & launch your application.

![image](https://user-images.githubusercontent.com/17270996/141667596-9177a719-f0da-4c46-95a0-bfe36762be0f.png)

## What is Amazon ECS?
Amazon Elastic Container Service (ECS) helps schedule and orchestrate containers across a fleet of servers. It involves installing an agent on each container host that takes 
instructions from the ECS control plane and relays them to the local Docker image on each one.

## Why AWS Fargate?
Containerization has transformed cloud architecture over the past few years, allowing businesses to build, deploy & manage applications at a faster rate. There are a plethora of container & container orchestration services that are available today. Most of them, however, still require you to configure and manage clusters of virtual machines for the containers to run. This is where AWS Fargate comes into the picture. 

Fargate allocates the right amount of compute, eliminating the need to choose instances and scale cluster capacity. You only pay for the resources required to run your containers, so there is no over-provisioning and paying for additional servers. 

![image](https://user-images.githubusercontent.com/17270996/141667670-605e05fc-268e-4271-abb2-64967c7218b1.png)

## Working of AWS Fargate
Before getting into the working, let’s understand some general terms that you will encounter several times when you are dealing with AWS Fargate.

**Task Definitions:**  The task definition is a text file, in JSON format, that describes one or more containers that form your application. You can think of it as a blueprint for your application.

**Task:** A task is the instantiation of a task definition within a cluster. You have the option to specify the number of tasks that will run on your cluster.

**Service:** A service allows you to run and maintain a specified number (the "desired count") of simultaneous instances of a task defenition in an ECS cluster

**Clusters:** Cluster is basically the logical grouping of resources that your application needs. If you use the Fargate launch type with tasks within clusters then Amazon ECS manages your cluster resources.

![image](https://user-images.githubusercontent.com/17270996/141667743-0de369ce-c69f-42c6-8bb8-0164ef165432.png)

Now, we can move ahead to understand how to deploy the Containerized Application with Fargate. 
The diagram below gives you a rough idea of how to deploy it with **AWS Fargate**.

![image](https://user-images.githubusercontent.com/17270996/141667767-08658bcf-6324-4ff0-bdf1-f8e7b6b0107a.png)


# Demo: Fargate in Action
We will be performing 6 steps to deploy a Containerized application with AWS Fargate.

## Step 1: Getting started with Amazon Elastic Container Service using Fargate

1. Open the Amazon Elastic Container Service Console and Click on ‘Get started’

![image](https://user-images.githubusercontent.com/17270996/141667787-78aa58f5-ba22-4012-a9c7-23cc2dede9c3.png)

2. You will be redirected to a page where it says  “Getting Started with Amazon Elastic Container Service (Amazon ECS) using Fargate”.

![image](https://user-images.githubusercontent.com/17270996/141667793-124d2d66-152e-49ff-a7e3-1f52ecb23013.png)

## Step 2: Create a Container Definition
1. Choose sample-app as an image for your container to get started quickly or define the container image to use by clicking on Edit.

![image](https://user-images.githubusercontent.com/17270996/141667807-cabe722b-304f-4e33-9574-872386339f8c.png)

## Step 3: Create a Task Definition

1. You can use sample task definition or optionally rename the task definition and edit the resources used by the task (such as the Task memory and Task CPU values) by choosing Edit. 

![image](https://user-images.githubusercontent.com/17270996/141667824-31a58cd7-3391-4c81-9a13-f6b3146327d1.png)

## Step 4: Define Your Service

1. Configure a service that launches and maintains a specified number of copies of the task definition in your cluster. You can use preloaded service definition or optionally rename the service or review and edit the details by choosing Edit.

![image](https://user-images.githubusercontent.com/17270996/141667833-9ffa613b-9318-4c16-9856-cdff99c30d20.png)

## Step 5: Configure your Cluster

1. As the final step, you need to configure the cluster. Name your cluster, and then Amazon ECS takes care of the networking and IAM configuration for you.

![image](https://user-images.githubusercontent.com/17270996/141667858-63b25e2d-85e9-488d-8b8c-7c21d2f97e11.png)

## Step 6: Review and click on Create

![image](https://user-images.githubusercontent.com/17270996/141667873-91167ee8-3a48-4954-ba95-b7d3c8341447.png)

2. Look for IPv4 Public IP address in the network section of your service & try hitting it on your browser. You shall see your Webpage is Up and Running.

![image](https://user-images.githubusercontent.com/17270996/141667881-b914e93c-38c9-44ad-b127-592fa2e2d67c.png)
