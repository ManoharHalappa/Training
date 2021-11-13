# Create your Amazon EFS file system

In this step, you create your Amazon EFS file system that has the service recommended settings using
the Amazon EFS console.

To create your Amazon EFS file system

1. Open the Amazon EFS Management Console at https://console.aws.amazon.com/efs/.
2. Choose Create file system to open the Create file system dialog box.

  ![image](https://user-images.githubusercontent.com/17270996/141606065-9d68cf0d-4aa7-4737-9993-446c9b391786.png)

3. (Optional) Enter a Name for your file system.
4. For Virtual Private Cloud (VPC), choose your VPC, or keep it set to your default VPC.
5. For Availability and Durability, choose one of the following:
* Regional to create a file system that uses Standard storage classes. Standard storage
classes store file system data and metadata redundantly across all Availability Zones within an
AWS Region. Regional offers the highest levels of availability and durability.
* One Zone to create a file system that uses One Zone storage classes. One Zone storage
classes store file sytem data and metadata redundantly within a single Availability Zone which
makes it less expensive than Standard storage classes.
Because EFS One Zone storage classes store data in a single AWS Availability Zone, data stored
in these storage classes may be lost in the event of a disaster or other fault that affects all copies
of the data within the Availability Zone, or in the event of Availability Zone destruction resulting
from disasters, such as earthquakes and floods.
If you choose One Zone, choose the Availability Zone that you want the file system created in, or
leave the default setting.

**Note** - One Zone storage classes are not available in all Availability Zones in AWS Regions where Amazon EFS is available.
6. Choose **Create** to create a file system. The **File systems** page appears with a banner across the top showing the status of the file system
you created.

![image](https://user-images.githubusercontent.com/17270996/141606183-0d1d1f1f-dcc6-4d37-93b3-ba0c1b7a5993.png)

## Steps to mount EFS to EC2 instance
1) Ensure to add inbound rules in security group Type NFS (Port 2049) and soruce as self (SG should be same used for creating EC2 instance)
2) sudo yum install -y amazon-efs-utils (Run this command to install efs utils into EC2)
3) Mkdir ~/efs-mount-point (Create directory called efs-mount-point)
4) sudo mount -t efs -o tls fs-0d97e17e8d3a1345f:/ ~/efs-mount-point (Mounts the EFS file drive to mountpoint)
5) sudo mount -t efs -o tls,accesspoint=access-point-id file-system-id ~/efs-mount-point
6) df -h (list the volumes. should show the newly attached EFS drive)


