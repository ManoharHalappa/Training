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

Note : One Zone storage classes are not available in all Availability Zones in AWS Regions where
Amazon EFS is available.
