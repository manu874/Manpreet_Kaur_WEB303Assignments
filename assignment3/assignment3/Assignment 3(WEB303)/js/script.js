//WEB 303 Assignment 3
// Student Name: Varinder Kaur
//Student ID: 0783469

let getJsonData = function() {
    $.getJSON("team.json", function (data) {
        let html = '',
            el = document.getElementById("team");
    
            $.each(data, function (index, data) {   
            html += "<h2>" + data.name + "</h2>";
            html += "<h5>" + data.position + "</h5>";
            html += "<p><strong>Bio: </strong>" + data.bio + "</p>";
        });
        el.innerHTML = html;
    });
};

$(document).ready(function() {
    getDataByAjax();
    
});


    let getDataByAjax = function(){
    $('div#team').append($("<p>" + "Loading..." + "</p>"));
    $.ajax({
        url: 'team.json',
        method: 'get',
        dataType: 'json',
        success: function(result) {
            $(result).each(function(i, emp){
                $('p:first-of-type').fadeOut(2000);
                $('div#team').append($("<h2>" + emp.name + "</h2>").hide().show(2000));
                $('div#team').append($("<h3>" + emp.position + "</h3>").hide().show(2000));
                $('div#team').append($("<p>" + emp.bio + "</p>").hide().show(2000));
            });
        }
    });
};