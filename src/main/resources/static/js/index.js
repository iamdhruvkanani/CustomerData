$(function(){
    $.getJSON("api/customer", displayCustomerTable);
});


function displayCustomerTable(data) {
    console.log(data);
    let customers = data["_embedded"].customers;
    if(customers.length > 0){
        $("#no_data_message").hide();
        let tbody$ = $("#data_table tbody");
        tbody$.html("");
        customers.forEach(function(customer, index){
            let link = customer["_links"].self.href;
            tbody$.append(
                `<tr>
                    <th scope="row" class="align-middle">${index + 1}</th>
                    <td class="align-middle">${customer.firstName}</td>
                     <td class="align-middle">${customer.lastName}</td>
                    <td>
                        <ul class="nav justify-content-center">
                            <li class="nav-item">
                                <a class="nav-link" href="customerdetails.html" data-link="${link}">
                                   <button><span>Info</span></button></a>
                            </li>
                        </ul>
                    </td>
                </tr>`);
        });
        $("#data_table a").click(function(){
            localStorage["customer-data-link"] = $(this).data("link");
        });
    }else{
        $("#data_table").hide();
    }

}