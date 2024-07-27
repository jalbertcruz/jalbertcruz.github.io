

//tag::SbtPlugin-sbt-tpolecat[]
class A:
    def foo = "A.foo"
    def bar: String =
//tag::dos[]
        var x = 1
        for i <- 1 to 10 do
            x += i
//end::dos[]
        x.toString
//end::SbtPlugin-sbt-tpolecat[]