const messenger = {
    message: "Hello!",
    sendMessageAfter(seconds){
        const self = this;
        setTimeout(
            // 関数式
            function(){
                console.log(this.message);
                console.log(self.message);
            }

            // アロー関数式
            // () => {
            //     console.log(this.message);
            // }
        ,seconds * 1_000)
    }
};

messenger.sendMessageAfter(3);