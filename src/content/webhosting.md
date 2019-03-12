---
title: Web Hosting
---

![Web Site Illustration](../images/webhosting.svg)

After a site is developed, I tend to look to where I can host it.

There are two paths I go down if I need to host a site. If it's a static website that doesn't need a backend to be consistently connected to the frontend, I use [Netlify](https://netlify.com). It's where this site and a variety of other sites I maintain are hosted. It offers Continuous Delivery so when I make a push to GitHub, the site is automatically sent to Netlify to be deployed and then it is spread across their global CDN so the site is globally accessible without needing to worry about latency. Did I also mention that the base plan which is good enough for most of my sites is completely free.

On the other hand, when I need an actual server to host a web app or API, I tend to use [DigitalOcean](https://www.digitalocean.com/) as my provider. They offer VMs as low as $5/month which ends up being only $60 a year for continuous runtime. It offers a full Linux VM with 1 vCPU, 1GB of RAM, and 25GB of SSD storage to deploy whatever you want onto it. Even further, their pricing is by the hour, so if you only use the VM for a few hours and then decide to spin it down, you only have to pay for the few hours that were used. As well, DigitalOcean also provides other services like managed Databases, load balancers & firewalls, S3-like object storage, and plenty of others.
