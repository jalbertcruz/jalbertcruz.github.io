---
start_date: 2025-01-23T22:37:00+02:00
title: Scala advantages
category: Article
tags:
    - scala
    - blog

last_update: 2025-01-29T22:37:00+02:00
status: notes
confidence: highly likely
importance: 5
---
Scala in the great scheme of programming
---

<PostDetail>

# When a language is use as an engineering tool

## Two view  points

1. Languages not matter: all maistream programming languages are the same in the software engineer realm, at the end of the day you can do anything with anyone of them.
2. Languages matter: some languages have features  that allows develpment patterns and practices with a very big impact in the software development process.

## Programmers subjectivity

## Objective criterias

### Tooling
### Size of the library ecosystem

## Study case: scalameta

One of the underappreciated tool in the ecosystem is scalameta, this tool is a killer to do metaprogramming (reflection) over our sourcecode (provided the process can be done in compilation  time).

Scalameta can be use to do Model Driven Development:
1. generate stub implementation of services defined as traits
2. in an Akka persistence application, generate the protobuf files to do custom serialization
3. generate the glue code necesary to convert using chimney code generated from protobuf and domain models
4. generate the glue code necesary to integrate Cats Effects and Akka

Others use are related to enforce code practices in the team
</PostDetail>
