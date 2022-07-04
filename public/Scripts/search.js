function tableSearch() {
    //Declaram variabilele
    let input, filter, table, tr, td, txtValue;

    //Initaializam variabilele
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = document.getElementsByTagName("tr");

    //parcurgem toate randurile tabelului si le ascundem pe cele care nu se potrivesc
    for (let i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1]

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