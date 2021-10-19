const caculator = {
    plus: function(a, b){
        console.log(a + b);
    },

    minus: function(a,b){
        console.log(a - b);
    },

    mul: function(a,b){
        console.log(a * b);
    },

    div: function(a,b){
        console.log(a/b);
    },

    square: function(a, b){
        console.log(a**b);
    }
}

caculator.plus(10, 6);
caculator.minus(10, 6);
caculator.mul(10, 6);
caculator.div(10, 6);
caculator.square(10, 6);