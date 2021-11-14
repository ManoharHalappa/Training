# Amazon Virtual Private Cloud (AWS VPC) – Overview, Benefits & Components

AWS VPC is one of the most popular and widely used services of Amazon Web Services. This is generally because Amazon VPC is mostly related to the security concepts in the cloud and access to the data inside a third-party data center. AWS VPC is a private subsection of AWS in which you can place AWS resources such as EC2 instances and databases. 
You have full control over who has access to the resources that you place inside the AWS Virtual Private Cloud.

## Overview
* Virtual Private Cloud (VPC) is a logically isolated network from another virtual network in the AWS cloud where you can launch the AWS resources.
* It gives all the benefits of the traditional network that you have for your own data center.
* Resources and applications are accessed through IPv4 or IPv6 in your AWS VPC.
* It gives the benefit of scalable infrastructure in the AWS environment.
* It gives you complete control over your virtual network.

![image](https://user-images.githubusercontent.com/17270996/141669066-1c5abb28-21eb-48c5-8470-1c59edd23a53.png)

## Benefits Of Using AWS Virtual Private Cloud
* EC2 Instance security group membership can be changed while it is running.
* Static IPv4 assigned to Instances that persist across the start and stop.
* Create a layered network of resources.
* A single-tenant hardware option is available to run EC2 Instances.
* Access Control List (ACL) is an additional security layer to protect Instances.
* Multiple IPv4 can be assigned to your Instances.
* Control both inbound and outbound traffic of Instances.
* Multiple network interfaces can be attached to EC2 Instances.

![image](https://user-images.githubusercontent.com/17270996/141669091-95bd7eb9-cf10-4b51-944a-2fc6d0983d65.png)

## Components of AWS Virtual Private Cloud
* **Route Table:** In AWS Virtual Private Cloud, route Tables are the set of rules, that are used to determine where the network traffic has to be directed. Route table specifies the destination (IP address) and target (where do want to send the traffic of that destination). The target can be Internet gateway, NAT gateway, Virtual private gateway, VPC peering connection, etc
* **Subnet:** It is a portion of the network that shares a common address component. All devices whose addresses have the same prefix are in the same subnet. For example, all those devices whose IP address would start with 172.31.1 would be part of the same subnet. There are two types of subnets. Private Subnet where resources are not exposed to the outside world and Public Subnet where resources are exposed to the internet through Internet Gateway.
* **Security Groups:** Security groups are a set of firewall rules that controls the traffic for your instance. In Amazon Firewall the only action that can be carried out is allowed. You cannot create a rule to deny. The destination is always the instance on which the service security group is running. You can have a single security group associated with multiple instances.
* **NAT Gateway:** Network Address Translation (NAT) Gateway is used when higher bandwidth, availability with lesser administrative effort is required. NAT gateway always resides inside the public subnet of an Availability Zone. It updates the route table of the private subnet such that it sends the traffic to the NAT gateway. Elastic IP must be attached to the NAT gateway while creating. It supports only TCP, UDP, and ICMP protocols.
* **VPC Peering:** A VPC peering connection allows you to route traffic between two Virtual Private Cloud’s using IPv4 or IPv6 private addresses. Instances in either VPC can communicate with each other as if they are within the same network. You can create a VPC peering connection between your own VPCs, or with a VPC in another AWS account. A VPC peering connection helps you to facilitate the transfer of data
* **Network Access Control Lists (NACL):** an optional layer of security for your VPC that acts as a firewall for controlling traffic in and out of one or more subnets. You might set up network ACLs with rules similar to your security groups in order to add an additional layer of security to your VPC. The default network ACL is configured to allow all traffic to flow in and out of the subnets to which it is associated.
* **Virtual Private Gateway:** A virtual private gateway is the VPN concentrator on the Amazon side of the VPN connection. You create a virtual private gateway and attach it to the VPC from which you want to create the VPN connection.
* **Customer Gateway:**  An Amazon VPC VPN connection links your data center (or network) to your Amazon VPC (virtual private cloud). A customer gateway is an anchor on your side of that connection. It can be a physical or software appliance.
* **Elastic IP:** It is a static IP address that never changes and is a reserved public IP address that can be assigned to any Instance in a particular region. An elastic IP is reserved for your AWS account and is yours until you release it.
* **Network Interface:** Network Interface is a point of connection between a public and a private network. Every instance has a default network interface, called the primary network interface. Network traffic is automatically shifted to the new instance if you move it from one instance to the other.
* **VPC Endpoints:** VPC endpoints allow private connection between your AWS VPC and other AWS services without using the internet. VPC endpoint devices are scaled, redundant, and highly available VPC components. There are two types of AWS Virtual Private Cloud endpoints Interface endpoints and Gateway Endpoints.
