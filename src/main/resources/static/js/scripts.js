const App = {
    data() {
        return {
            writerSelectedDepartment: -1,
            senderSelectedDepartment: -1,
            receiverSelectedDepartment: -1
        }
    },
    methods: {
        removePhonogram() {
            var currentIdPhonogram = this.$refs.currentIdPhonogram.value;
            if(currentIdPhonogram == "") {
                alert("Выберите запись для удаления");
            } else {
                if(confirm("Вы уверены, что хотите удалить эту запись?")) {
                    var deleteForm = document.createElement("form");
                    deleteForm.setAttribute("method","post");
                    deleteForm.setAttribute("action","/removePhonogram");
                    var idSelectedRow = document.createElement("input");
                    idSelectedRow.setAttribute("type", "text");
                    idSelectedRow.setAttribute("name", "id");
                    idSelectedRow.setAttribute("value", currentIdPhonogram);
                    idSelectedRow.setAttribute("hidden", "true");

                    deleteForm.appendChild(idSelectedRow);
                    document.body.appendChild(deleteForm);
                    deleteForm.submit();
                }
            }
//            fetch(path, {method: "DELETE"}).then(document.location = "/");
        },
        changeWriterSelectedDepartment() {
            for(var i=1;i<this.$refs.writer_id.length;i++) {
                this.$refs.writer_id[i].style.display = "block";
            }
            for(var i=1;i<this.$refs.writer_id.length;i++) {
                if(this.$refs.writer_id[i].getAttribute("department") != this.writerSelectedDepartment) {
                    this.$refs.writer_id.options[i].style.display = "none";
                }
            }
        },
        changeSenderSelectedDepartment() {
            for(var i=1;i<this.$refs.sender_id.length;i++) {
                this.$refs.sender_id[i].style.display = "block";
            }
            for(var i=1;i<this.$refs.sender_id.length;i++) {
                if(this.$refs.sender_id[i].getAttribute("department") != this.senderSelectedDepartment) {
                    this.$refs.sender_id.options[i].style.display = "none";
                }
            }
        },
        changeReceiverSelectedDepartment() {
            for(var i=1;i<this.$refs.receiver_id.length;i++) {
                this.$refs.receiver_id[i].style.display = "block";
            }
            for(var i=1;i<this.$refs.receiver_id.length;i++) {
                if(this.$refs.receiver_id[i].getAttribute("department") != this.receiverSelectedDepartment) {
                    this.$refs.receiver_id.options[i].style.display = "none";
                }
            }
        }
    }
}

Vue.createApp(App).mount('#vueApp');

function selectRow(el) {
    var idSelectedRow = el.getAttribute("phonogram");
    var dataTable = document.getElementById("dataTable");
    document.getElementById("currentIdPhonogram").value = idSelectedRow; // put into hidden input current id phonogram
    for (var i=1; i<dataTable.rows.length; i++) {
        if(dataTable.rows[i].getAttribute("phonogram") == idSelectedRow) {
            dataTable.rows[i].style.background = "#adb5bd";
        } else {
            dataTable.rows[i].style.background = null;
        }
    }
}
