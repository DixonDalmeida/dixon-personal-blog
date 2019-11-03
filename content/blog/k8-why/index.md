---
title: 'Why Kubernetes'
tags: ["kubernetes", "devops"]
featuredImage: ../../../src/images/k8.jpeg
published: true
date: '2019-07-01'
---

<b>Kubernetes as a Service</b>
All major cloud providers like AWS, Azure, IBM, Redhat provide Kubernetes as a Service. It is not limited to the cloud providers. Kubernetes cluster can also be deployed on on-premise infrastructure as well.
Large open source community
Kubernetes is one of the largest opensource project maintained by CNCF and Linux Foundation. There is large community support for any issues. Also, there is a large number of add-ons available for Kubernetes. Also, most of these add-ons are maintained by CNCF.
<br>


<b>Cost Efficiency</b>
By using autoscaling in Kubernetes at cluster and pod level we can save the costs. Also, Kubernetes uses hardware efficiently. For example, we can deploy the two different application in single Kubernetes cluster.
<br>


<b>Simplifying application development</b>
If you turn back to the fact that apps run in the same environment both during development and in production, this has a big effect on when bugs are discovered. We all agree the sooner you discover a bug, the easier it is to fix it, and fixing it requires less work. It’s the developers who do the fixing, so this means less work for them. Developers can also directly interact with Kubernetes cluster and get information related to it.


As a final example of what Kubernetes brings to the table, you also need to consider the increase in confidence developers will feel knowing that when a new version of their app is going to be rolled out, Kubernetes can automatically detect if the new version is bad and stop its rollout immediately. This increase in confidence usually accelerates the continuous delivery of apps, which benefits the whole organization.
<br>


<b>Automatic Scaling</b>
Using Kubernetes to manage your deployed applications also means the ops team doesn’t need to constantly monitor a load of individual applications to react to sudden load spikes. As previously mentioned, Kubernetes can be told to monitor the resources used by each application and to keep adjusting the number of running instances of each application.
If Kubernetes is running on cloud infrastructure, where adding additional nodes is as easy as requesting them through the cloud provider’s API, Kubernetes can even automatically scale the whole cluster size up or down based on the needs of the deployed applications.
<br>


<b>Achieving better utilization of hardware</b>
By setting up Kubernetes on your servers and using it to run your apps instead of running them manually, you’ve decoupled your app from the infrastructure. When you tell Kubernetes to run your application, you’re letting it choose the most appropriate node to run your application on based on the description of the application’s resource requirements and the available resources on each node.


By using containers and not tying the app down to a specific node in your cluster, you’re allowing the app to freely move around the cluster at any time, so the different app components running on the cluster can be mixed and matched to be packed tightly onto the cluster nodes. This ensures the node’s hardware resources are utilized as best as possible.


The ability to move applications around the cluster at any time allows Kubernetes to utilize the infrastructure much better than what you can achieve manually. Humans aren’t good at finding optimal combinations, especially when the number of all possible options is huge, such as when you have many application components and many server nodes they can be deployed on. Computers can obviously perform this work much better and faster than humans.
<br>


<b>Health checking and self-healing</b>
Having a system that allows moving an application across the cluster at any time is also valuable in the event of server failures. As your cluster size increases, you’ll deal with failing computer components ever more frequently.


Kubernetes monitors your app components and the nodes they run on and automatically reschedules them to other nodes in the event of a node failure. This frees the ops team from having to migrate app components manually and allows the team to immediately focus on fixing the node itself and returning it to the pool of available hardware resources instead of focusing on relocating the app.