# AWS Identity And Access Management (IAM)
AWS IAM is the heart of AWS security because it empowers you to control access by creating users and groups, assigning specific permissions and policies to specific users, 
Managing Root Access Keys, setting up MFA Multi-Factor authentication,  for additional security, and so much more.

![image](https://user-images.githubusercontent.com/17270996/141605557-aa6ac960-b21f-42c8-998d-a92ace312cb7.png)

![image](https://user-images.githubusercontent.com/17270996/141605583-da3d58d8-9493-4d4f-bb26-fcf30fb4bd17.png)

# IAM Users:

* IAM users can be an individual, system, or application requiring access to AWS services
* A user account consists of a unique name and security credentials such as a password, access key, and/or multi-factor authentication (MFA)
* IAM users only need passwords when they access the AWS Management Console

# IAM Groups:

* IAM Groups are a way to assign permissions to logical and functional units of your organization
* IAM groups are a tool to help with operational efficiency, Bulk permissions management (scalable) and easy to change permissions as individuals change teams (portable)
* A group can contain many users, and a user can belong to multiple groups.
* Groups can’t be nested; they can contain only users, not other groups.

# IAM Policies:

* IAM policies are JSON-based statements that define access control and permissions.
* IAM policies can be “inline” or “managed” and can be attached to a user or a group
* Inline policies – policies that you create and manage, and that are embedded directly into a single user, group, or role.
* Managed policies – standalone policies that you can manage separately from the IAM users, groups, or roles to which they are attached.

![image](https://user-images.githubusercontent.com/17270996/141605634-3d3a43ff-3c3d-4a3b-a55f-73feebc1b2c1.png)

# IAM Roles:

* An IAM role is like a user, in that it is an AWS identity with permission policies that determine what the identity can and cannot do in AWS.
* You can authorize roles to be assumed by humans, Amazon EC2 instances, custom code, or other AWS services for specific access to services.
* Roles do not have standard long-term credentials such as a password or access keys associated with it, instead, when you assume a role, it provides you with temporary security credentials for your role session.
