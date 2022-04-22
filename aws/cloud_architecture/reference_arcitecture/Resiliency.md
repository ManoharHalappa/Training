# Resiliency

* Highly resilient workloads relies on developing strong architectural, technological, and operational management to ensure we provide a continuous service and avoid disruption and downtime. Ensure the capability is in place for a system to recover from a failure induced by high load, attacks, and failures.
  * Deploy resources across multiple AZs and platform services such as Advanced SSO across multiple regions.
  * Ensure there is no single instances running in your estate.
  * Optimise DNS and Route 53 to enable region routing.
  * Establish an incident management process and define key contacts as owners.
  * Design your architecture to include and implement a backup strategy. Perform periodic recovery of the data to verify backup integrity and processes.