class FormBuilder {
    constructor(fields) {
        this.fields = fields;
    }

    renderForm(containerId) {
        let formHTML = "";
        this.fields.forEach(field => {
            formHTML += `
                <label>${field.label}</label>
                <input type="${field.type}" id="${field.label.toLowerCase()}">
                <br><br>
            `;
        });
        formHTML += `<button id="submitBtn">Submit</button>`;
        document.getElementById(containerId).innerHTML = formHTML;
    }

    getFormData() {
        const data = {};
        this.fields.forEach(field => {
            const id = field.label.toLowerCase();
            data[id] = document.getElementById(id).value;
        });
        return data;
    }
}

const form = new FormBuilder([
    { type: "text", label: "Username" },
    { type: "email", label: "Email" }
]);

form.renderForm("formContainer");

document.addEventListener("click", (e) => {
    if (e.target.id === "submitBtn") {
        console.log(form.getFormData());
    }
});
