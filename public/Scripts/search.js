function tableSearch() {
    //Declaram variabilele
    let input, filter, table, tr, td, txtValue;

    //Initaializam variabilele
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = document.getElementsByTagName("tr");

    //parcurgem toate randurile tabelului 

    for (let i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1]

        //daca serviciul se regaseste in tabel, este afisat si vom ascundem serviciile care nu se potrivesc
        //daca servciul nu este gasit in tabel, nu se afiseaza nimic
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}