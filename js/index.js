getData();
$("form").submit(function(e){
    e.preventDefault();
    let category = $("#Category").val(),
        search = $("#Search").val();
    getData(category, search);
})