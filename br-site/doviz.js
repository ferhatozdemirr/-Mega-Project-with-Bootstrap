const url = "https://api.collectapi.com/economy/currencyToAll?int=10&base=USD";

$(() => {

    $("button").click(() => {
        $.get(url , Psd);
    })

});

function Psd (params) {
    console.log(params);
}