---
start_date: 2025-01-10T22:37:00+02:00
title: Problems with Akka
category: Article
tags:
    - scala
    - akka
    - blog

last_update: 2025-01-20T22:37:00+02:00
status: draft
confidence: highly likely
importance: 5
---

Akka

---

<PostDetail>

Akka is a powerful toolkit for building highly concurrent, distributed, and
resilient message-driven applications for Java and Scala. It is a very good
option for building microservices, event sourcing, CQRS, and other distributed
systems.

Nevertheless, there are some problems with Akka that can make it difficult to
use in some scenarios, it lacks for example:

1. tracing support
2. examples
    1. logs processing
    2. integrations with cats-effects ecosystem (Kafka etc.)
    3. integrations with HTTP/REST servers outside AKKA-HTTP
3. dev setups
4. architecture recommendations:
    1. componentization
    2. effects handling

## Production grade examples

There is no many complete examples around. The official docs are at certain
point good (there are outdated info related to avro for example) but in any
case the barrier to anyone trying to learn is high.

In the other hand some times can appear the option of doing some service using
event sourcing in a company that do not have experience with Scala; a senior
engineer can understand that Akka can bring a lot of value but he can not take
several days in putting a scaffolding project in an environment neither can
cope with a long iteration process of implement and test features.

## Development setups

A lot of developers also are not very proficient with the shell and to have a
setup for developing over 3 sbt projects connected (as is required by
Akka/sharding) or a simpler (but more code based setup) multi ActorSystem setup
on development that behaves diferent in deployment/production can be daunting.

## Tracing

To be able of move a traceid over the messages going over the system, or be
up-to-date with the observability stack is a challenging task.

## Architecture

Any project of certain level of complexity normally grows in the size of the
Akka entities, so if you do not apply some modularization techniques you end in
a mess. Unfortunately there is none best practices recommendations or examples
out there, and in general what you can find is that the functional side of the
community end seeing Akka as a very bad option. In some blogs appears
suggestions around mix Cats Effects with Akka but that normally do not show how
to do it.

</PostDetail>
