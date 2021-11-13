# How to Attach EBS Volume on EC2 Windows & Linux Instance in AWS
**Windows**
Step 1: Go to Ec2 -> Volumes and Create new Volume

Select the availability zone where your EC2 is created as volumes are Zone specific

![image](https://user-images.githubusercontent.com/17270996/141607695-92932c13-efbf-49c0-be79-2f2d092cd353.png)

![image](https://user-images.githubusercontent.com/17270996/141607649-fa454284-0fed-4d30-a248-3044c4ab86e4.png)

Step 2: Select the EC2 machine to which the EBS has to be attached and attach

![image](https://user-images.githubusercontent.com/17270996/141607807-be98e0b2-b664-4dda-8350-31de75b6b6d5.png)

![image](https://user-images.githubusercontent.com/17270996/141607812-c03c2970-62d8-4abe-9d6e-8e4f121b270b.png)

Step 3: Login to the Windows EC2 machine where the volume is attached

Step 4: Login to Server Manager -> Local Server -> Computer Management

![image](https://user-images.githubusercontent.com/17270996/141607878-bebe1da4-daa4-4413-aad0-b212f515db74.png)

![image](https://user-images.githubusercontent.com/17270996/141607906-375aa920-cf3e-46e4-a1f4-a131a7dd9bbb.png)

Right click on the new disk and say "online"

Step 5: Initilize Disk

![image](https://user-images.githubusercontent.com/17270996/141607941-a9e88c47-5762-49f3-ba65-ac81bf6a3fb2.png)

Step 6: New Simple Volume

![image](https://user-images.githubusercontent.com/17270996/141607963-75e6c66d-376c-4b19-a1c8-a709485e56f9.png)

Select the volume letter example:- D

![image](https://user-images.githubusercontent.com/17270996/141607977-79f6849c-f0fb-46ee-8aa4-efb465b2cc7d.png)












