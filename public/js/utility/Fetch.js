export class Api {
    static ClassListData(url, method, formData) {
        fetch(url, {
            method: method,
            body: formData
        })
            .then(response => response.json())
            .then(result => {
            let class_table = document.querySelector("#class_list_table tbody");
            class_table.innerHTML = result.html;
        });
    }
}
