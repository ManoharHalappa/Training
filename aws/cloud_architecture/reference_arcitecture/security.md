# Security

* Deliver security first approach towards all development and infrastructure deliverables. Ability to protect data, systems, and assets to take advantage of cloud technologies to improve security.
* The security pillar of the Well-Architected Framework captures a set of design principles which is a holistic set of guidelines for deploying the full complement of AWS security services.
  * Implement a strong identity foundation – Implement the principle of least privilege, and enforce separation of duties with appropriate authorization for each interaction with your AWS resources. Centralize identity management, and aim to eliminate reliance on long-term static credentials.
  * Ensure the Harness Delegate been created with Role Permissions and not IAM access keys
  * Enable traceability – Monitor, generate alerts, and audit actions and changes to your environment in real time. Integrate log and metric collection with systems to automatically investigate and take action.
  * Apply security at all layers and perform vulnerability management. Apply a defence-in-depth approach with multiple security controls. Apply multiple types of controls (for example, preventive and detective controls) to all layers, including edge of network, virtual private cloud (VPC), load balancing, every instance and compute service, operating system, application configuration, and code.
  * Automate security best practices – Automated, software-based security mechanisms improve your ability to securely scale more rapidly and cost-effectively. Create secure architectures, and implement controls that are defined and managed as code in version-controlled templates.
  * Protect data in transit and at rest – Classify your data into sensitivity levels and use mechanisms such as encryption, tokenization, and access control where appropriate.
  * DDoS Mitigation
    * AWS Route53 DNS service hosted at numerous AWS edge locations, creating a global surface area capable of absorbing large amounts of DDoS traffic.
    * AWS Cloudfront  (CDN) service used to deliver data which only accepts HTTPS and HTTP well-formed connections to prevent many common DDoS attacks.
  * Infrastructure Protection
    * Shared VPC / isolated subnets
    * WAF v2 / Firewall Manager
  * Detective controls
    * AWS Security Hub– allows us to view high-priority security alerts and compliance status across AWS accounts
    * CIS Benchmark Frameworks
      * Security Hub supports the CIS AWS Foundations Benchmark which is a standard for securing AWS resources. The benchmark offers prescriptive instructions for configuring AWS services in accordance with industry best practices.
    * AWS CloudTrail is enabled by default on every AWS account
    * AWS Config  helps detect non-compliance configurations in real time
    * Amazon GuardDuty is a threat detection service that provides a way to continuously monitor and protect workloads. GuardDuty identifies suspected attackers through integrated threat intelligence feeds and uses machine learning to detect anomalies in account and workload activity. It monitors for activity such as unusual API calls or unauthorized deployments.
  * Add SIEMonster for security monitoring
  * Patch Management
For AWS Managed Services like RDS or ECS, the patching is maintained by AWS. For EC2 Instances, patching updates are applied via AWS Systems Manager. Patch Manager within Systems Manager allows us to set up Patch Baseline and Patch Groups which automatically applies the updates that have been approved.
  * Encryption
    * KMS lets us choose whether to have AWS manage the encryption keys or enable us to keep complete control over the keys. Encryption is handled via AWS Key Management Service (KMS) which encrypts the S3 contents at the object level for example which covers recordings, logs, and saved reports by default for Amazon S3. We can employ Server-Side Encryption (SSE) with Amazon S3-Managed Keys (SSE-S3), SSE with AWS KMS-Managed Keys (SSE-KMS), or SSE with Customer-Provided Encryption Keys (SSE-C).
