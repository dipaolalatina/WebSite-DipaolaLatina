import { AwardClient } from  "../app/client.js";

var baseUrl = "https://localhost:5000"

function GetAll(){
    var client = new AwardClient(baseUrl)
    client.getAll().then(value => {
        // fulfillment
        var template = document.getElementById('template').innerHTML;
        var content = "";
        value.forEach(award => {
            award.image = baseUrl + "/api/image/" + award.image;
            var rendered = Mustache.render(template, award);
            content = content + rendered;
        });
        document.getElementById('target').innerHTML = content;
        loadPage();
      }, reason => {
        // rejection
        alert('No es posible cargar los recursos');
        window.location.assign("/");
        console.log(reason);
      });
}

GetAll();