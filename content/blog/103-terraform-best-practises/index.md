---
title: 'Terraform Best Practises'
tags: ["terraform", "devops"]
featuredImage: ../../../src/images/terraform.png
published: true
date: '2019-11-03'
---
<br>

<head>
<title>Dixon Dalmeida - Terraform, Best Practises</title>
<meta name="description" content="Terraform Best Practises" />
</head>

<b>[Terraform Backend](https://www.terraform.io/docs/backends/config.html) for storing Tfstate file</b>


Terraform stores the infrastructure information in the tfstate file. By default, Terraform stores the tfstate files in the locally. Because tfstate file has all infra details, it's better to store it remotely. To remotely store the tfstate file Terraform provides a feature called Terraform backend. Terraform backend allows you to store the tfstate files in S3, blob storage, cloud storage, etcd, jfrog, etc. Most of the Terraform backend also allows state locking. State locking means updating of Terraform infrastructure can only be created sequentially. Updating parallelly of the same infrastructure is not supported.

<br>


<b>[Terraform Workspaces](https://www.terraform.io/docs/cloud/workspaces/index.html) for managing various environments</b>

Terraform allows you to configure multiple environments using workspaces. Create the workspaces to isolate dev,stage and prod environments. Use terraform backend and Workspaces to isolate different environments.
<br>


<b>Tag resources</b>

Tag all the resources which you can. Tagging help search the resources efficiently. 
Also, tagging is used for identifying resources during billing.
- [AWS Tagging Strategy](https://aws.amazon.com/answers/account-management/aws-tagging-strategies/)
- [Azure Tagging](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-using-tags)
- [GCP Tagging](https://acloud.guru/forums/gcp-certified-associate-cloud-engineer/discussion/-L_6TTKxulQgu7XzeqmC/Tags%20vs%20Labels%20vs%20Meta-Data)

<b>Use [TFVARS file](https://www.terraform.io/docs/configuration/variables.html#variable-definitions-tfvars-files)</b>

Intialize Terraform variables inside the Tfvars file. Hence you can use the same code with multiple TFvars file to build different environments. Using default values in variables.tf is not a sustainable practice.
<br>


<b>Use [Modules](https://www.terraform.io/docs/modules/index.html)</b>

The open-source community provides predefined modules for creating infrastructure. Understand and use them
- [AWS Modules](https://github.com/terraform-aws-modules)
- [Azure Modules](https://github.com/search?q=org%3AAzure+terraform&unscoped_q=terraform)
- [GCP Modules](https://github.com/terraform-google-modules)

If modules are not readily available, then create the custom modules. Which will help in reusability of the code.
