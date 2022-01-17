# Terraform

Terraform is an open-source infrastructure as code software tool created by HashiCorp. Users define and provide data center infrastructure using a declarative configuration language known as HashiCorp Configuration Language, or optionally JSON

# Main commands:

**init** - Prepare your working directory for other commands

**validate** - Check whether the configuration is valid

**plan** - Show changes required by the current configuration

**apply** - Create or update infrastructure

**destroy** - Destroy previously-created infrastructure

# Example

```

provider "aws" {
    region     = "us-west-2"
    access_key = "my-access-key"
    secret_key = "my-secret-key"
}

# Configure the AWS Provider
provider "aws" {
  region = "us-east-1"
}

# Create a VPC
resource "aws_vpc" "example" {
  cidr_block = "10.0.0.0/16"
}


```
