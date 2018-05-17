function getRates() {
    $.ajax({
        dataType: 'json',
        url: 'http://api.nbp.pl/api/exchangerates/tables/a/?format=json',
        type: 'GET',
        success: function (data) {
            console.log(data)

            $('#actualData')[0].innerHTML = "Tabela nr 082/A/NBP/2018 z dnia:  "+data[0].effectiveDate

            for (i = 0; i <= 34; i++) {
                $('#name')[0].innerHTML += `<li class="line">`+data[0].rates[i].currency+`</li>`
                $('#code')[0].innerHTML += `<li class="line">`+data[0].rates[i].code+`</li>`
                $('#rate')[0].innerHTML += `<li class="line">`+Math.round(data[0].rates[i].mid *10000)/10000+`</li>`
            }

        }
    })

}

getRates();