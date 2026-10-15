
function calcularDesconto() {

    var total = Number(document.getElementById("total").value)
    var anoNascimento = 2008
    var desconto = 0
    var tDesconto = total

    if (total <= 50) {
        desconto = 0
        tDesconto = total
    }
    else if (total > anoNascimento) {
        desconto = total * 0.10
        tDesconto = total - desconto
    }
    else {
        desconto = total * 0.05
        tDesconto = total - desconto
    }

    document.getElementById("valorDesconto").innerHTML = desconto.toFixed(2)
    document.getElementById("totalDesconto").innerHTML = tDesconto.toFixed(2)

    console.log("Valor do desconto: " + desconto.toFixed(2))
    console.log("Total com desconto: " + tDesconto.toFixed(2))

}
