function panggilNestedArray(value){
 for (var i = 0; i < value.length; i++){
    console.log('id :', value[0][i])
    console.log('name :', value[1][i])
    console.log('company :', value[2][i])
    console.log('\n')
 }
}
var nestedArray = [
    [1,2,3,4],
    ["Mark Zuckerberg","Elon Musk","Bill Gates","Steve Jobs"],
    ["Facebook","Tesla","Microsoft","Apple"]
]

panggilNestedArray(nestedArray);