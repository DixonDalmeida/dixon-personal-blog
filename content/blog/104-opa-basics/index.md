---
title: 'OPA - Open Policy Agent'
tags: ["terraform", "devops", "kubernetes", "docker"]
featuredImage: ../../../src/images/opa.png
published: true
date: '2019-11-04'
---
<br>

<b>What is Policy? Why do we require it?</b>


A policy is a set of rules which governs a software. In Organizations, we have policies around from HR policy, Work policy etc. In software world Authentication or Authorization can be policies. Authentication is the policy which defines who can access it. Similarly, authorization defines what users can access in the software.
Policies are essential to the long-term success of organizations because they encode important knowledge about how to comply with legal requirements, work within technical constraints, avoid repeating mistakes, and so on.

<b> What is OPA? </b>


OPA gives you a high-level declarative language to author and enforce policies across your stack.
OPA decouples policy decision-making from policy enforcement. When your software needs to make policy decisions it queries OPA and supplies structured data (e.g., JSON) as input. OPA accepts arbitrary structured data as input.

With OPA, you define rules that govern how your system should behave. These rules exist to answer questions like:

- Can user X call operation Y on resource Z?
- What clusters should workload W be deployed to?
- What tags must be set on resource R before it's created?

You integrate services with OPA so that these kinds of policy decisions do not have to be hardcoded in your service. Services integrate with OPA by executing queries when policy decisions are needed.

When you query OPA for a policy decision, OPA evaluates the rules and data (which you give it) to produce an answer. The policy decision is sent back as the result of the query.

For example, in a simple API authorization use case:

- You write rules that allow (or deny) access to your service APIs.
- Your service queries OPA when it receives API requests.
- OPA returns allow (or deny) decisions to your service.
- Your service enforces the decisions by accepting or rejecting requests accordingly.

The examples below show different kinds of policies you can define with OPA as well as different kinds of queries your system can execute against OPA. The example queries are executed inside OPA's REPL which was built to make it easy to develop and test policies.

OPA can be used with 
- [Kubernetes](https://kubernetes.io/blog/2019/08/06/opa-gatekeeper-policy-and-governance-for-kubernetes/)
- [Terraform](https://www.openpolicyagent.org/docs/latest/terraform/)
- [Docker](https://www.openpolicyagent.org/docs/latest/docker-authorization/)
- [SSH](https://www.openpolicyagent.org/docs/latest/ssh-and-sudo-authorization/) and more.

One of the coolest use case of OPA is to govern Terraform infra.
OPA makes it possible to write policies that test the changes Terraform is about to make before it makes them. Such tests help in different ways:

- tests help individual developers sanity check their Terraform changes
- tests can auto-approve run-of-the-mill infrastructure changes and reduce the burden of peer-review
- tests can help catch problems that arise when applying Terraform to production after applying it to staging

<b>OPA one of coolest governance tool<b>