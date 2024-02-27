
<h1 align="center">
    Kube-Est8
    <br>
    <img src="./client/src/assets/images/logo.png" style="height: 300px;">
</h1>

<p align="center">
  <i align="center">Monitor your Kubernetes cluster's resource usage and vulnerabilities across different levels 🖥️</i>
</p>

<h4 align="center">
    <img src="./client/src/assets/images/cluster_overview.jpeg" >
</h4>
<h4 align="center">
    <img src="./client/src/assets/images/node-graph-flow-chart.jpeg" >
</h4>
<h4 align="center">
    <img src="./client/src/assets/images/node-data-backend.jpeg" >
</h4>


## Introduction

`Kube Est8(beta)` is an open source application being developed to offer developers a Kubernetes monitoring solution that places a focus on bottleneck detection and security vulnerabilities. Core features include metric visualization through Grafana graphs, using time-series data collected by Prometheus from your cluster, node graph flow chart for interactive rendering of the cluster as well as ability to create and delete nodes, health metrics related to each node of the cluster, security vulnerability scan, and bottleneck detection, especially those resulting from AI or ML workloads. 


## Setup

Clone repository, install dependencies, and run:

```
git clone https://github.com/oslabs-beta/kube-est8.git
cd kube-est8
npm i
npm start
```

## Spinning up Kubernetes

The Kubernetes command-line tool, [kubectl](https://kubernetes.io/releases/download/), allows you to run commands against Kubernetes clusters.

Kube-Est8 will connect to the cluster configured in your [kubeconfig](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/) file.



## Setting up Kubernetes Metrics Server

[Kubernetes Metrics Server](https://github.com/kubernetes-sigs/metrics-server) collects resource metrics from Kubelets and exposes them in Kubernetes apiserver.





## Tests
