let link = localStorage["customer-data-link"];

$(function(){
    $.getJSON(link, displayCustomerData);
});

function displayCustomerData(customer) {
    console.log(customer);

    $("#firstName").text(customer.firstName);
    $("#lastName").text(customer.lastName);

    $("#email").text(customer.email);
    $("#street").text(customer.street);
    $("#city").text(customer.city);
    $("#state").text(customer.state);
    $("#zipCode").text(customer.zipCode);


}