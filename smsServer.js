

module.exports = async function (){
        if(!text || !body){
            console.log("the request body is empty")
        }else{
            let message = ""

            const url = 'http://enser.eastus.cloudapp.azure.com:5000/ensers';
            const data = {
                "query" : req.body.text
            };

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                }
            };

            axios.post(url, data, config)
            .then(response => {
                console.log(response.answer);
            })
            .catch(error => {
                console.error(error);
            });

            const response= await sendSMS(message,req.body.from);
        }
}