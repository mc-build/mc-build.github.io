Templates are a means of defining a sort of compile time function which the result is inlined into your code.

# Definition

A template definition contains atleast one signature definition as well as an optional `tick` and `load` block.

A template signature consists of the with keyword followed by zero or more arguments
`with [...params]`
An argument is either a literal if it is just a name or a name with a type `<name>:<type>`

ex.
`with a number:int`
This would match a literal `a` followed by any integer value

When parsing a value the signatures are checked in the order of definition.
Its best to have your least specific signatures last and most specific first.

# Types

- `raw` - This will just grab the rest of the current argument string and pass it through as is.
- `float` - This will match any number
- `int` - This will match any integer
- `js` - This expects an inline JavaScript block and will pass the computed value as is without stringifying it
- `word` - This will pass the everything up until the end of the input or the next space

# Caveats

if your passing a inline JavaScript block to anything other than a `js` argument it will be interpreted and the string result should match exactly one argument.

# Examples

`example.mcbt`

```
template with-args{
    with a:int b:int c:int {
        say a=<%a%>
        say b=<%b%>
        say c=<%c%>
    }
    with a:int b:raw {
        say a=<%a%> (<%typeof a%>)
        say b=<%b%> (<%typeof b%>)
    }
}

template without-args {
    load{
        say load
    }
    tick{
        say tick
    }
    with {
        say this has no arguments
    }
}

template arg-js {
    with a:js {
        LOOP(a) as item{
            say item=<%item%> (<%typeof item%>)
        }
    }
}

template arg-block {
    with a:block {
        <%embed(a)%>
    }
}

template arg-literal{
    with test {
        say test
    }
    with bar {
        say bar
    }
}
```

`main.mcb`

```
import ./example.mcbt

function with-args{
    with-args <%1%> 2
    #---------
    with-args 1 2 3
}
function without-args{
    without-args
}

function js-args{
    arg-js <%[1,2n,'3',true]%>
}

function block-args{
    arg-block {
        say hi
    }
}

function literal-args{
    arg-literal test
    arg-literal bar
}
```
