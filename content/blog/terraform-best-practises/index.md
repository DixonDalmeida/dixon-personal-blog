---
title: 'Terraform Best Practises'
tags: ["terraform", "devops"]
featuredImage: ../../../src/images/terraform.png
published: true
date: '2019-11-03'
---
<br>


<b>Terraform Backend for storing Tfstate file</b>


Terraform stores the infrastructure information in the tfstate file. Normally, terraform stores the tfstate files in the locally. Terraform provides a feature for storing the tfstate file remotely using the Terraform backend. 
Terraform backend allows you to store the tfstate files in S3, blob storage, cloud storage, etcd, jfrog, etc,
Most of the Terraform backend also allows state locking.
<br>


<b>Terraform Workspaces for managing various environments</b>

Terraform allows you to configure multiple environments using workspaces. Create the workspaces to isolate dev, stage and prod environments. Terraform backend stores separ
<br>


<b>Tag resources</b>

Tagging resources help 
Tfvars file for configuration parameters
<br>


<b>Use Modules</b>

Provided for each of the cloud providers
Write custom reusable modules.
