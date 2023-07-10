
function fibonacci() {
    i = 0
    n = 1
    count = 1
    let gen = document.getElementById("generate");
    let seq = "";
    while (count <= 500) {
        seq += " " + count
        count = i + n
        i = n
        n = count
    }
    gen.innerHTML = seq;
}
fibonacci()