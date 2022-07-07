const App = {
    data() {
        return {
            writerSelectedDepartment: -1,
            senderSelectedDepartment: -1,
            receiverSelectedDepartment: -1,
            currentRowId: -1
        }
    },
    methods: {
        /*
        getSelectedRow(event) {
            console.log(event);
        },
        */
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


function getSelectedRow(el) {
    console.log(el.getAttribute("phonogram"));
    el.style.background = "#adb5bd";
}