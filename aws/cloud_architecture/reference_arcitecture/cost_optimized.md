# Cost optimized

* Apply the cost principles in your architecture. This provides design recommendations and describes best practices to optimise the cost of workloads
* Optimise good practice to avoid wasting unused resources by right sizing under and over utilized assets
* Implement cost awareness in your organization by establishing policies, budgets, and controls that set cost limits
  * Monitor usage and cost:
    * Analyse your costs with Cost Explorer
    * Manage AWS Cost and Usage Reports
    * Utilise Amazon Athena and Amazon QuickSight  to provide cost and usage awareness
    * Create AWS Budgets to provide proactive notifications for cost and usage. Manage staying within budget by setting up alert notifications
    * Apply cost allocation tags to categorize and track  AWS usage and costs
    * Create cost trends and establish benchmarks by using cost anomaly detection
  * Govern usage across workloads:
    * Implement cost controls i.e control access to regions or resource types with IAM policies.
    * Control access to AWS Regions using IAM policies
    * AWS multiple account billing strategy
    * AWS managed policies for job functions
* Select the pricing model that is most appropriate for your resources to minimize spend
  * Instance purchasing options. On demand is only used for short-term workloads that cannot be interrupted and do not run long enough for reserved capacity
  * Accessing Reserved Instance and Saving Plans recommendations. Permanently running resources should utilize reserved capacity such as Savings Plans or reserved Instances
  * Save up to 90% and run production workloads on Spot or Spot Fleet for short-term capacity.