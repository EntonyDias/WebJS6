function buta (){
    let put1 = document.getElementById("inp1").value;
    let put2 = document.getElementById("inp2").value;
    let pu = document.getElementById('ta');
    pu.textContent = (`Preço Final: R$${put1 * put2}`)
}