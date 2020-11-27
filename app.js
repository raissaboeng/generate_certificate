//Carregando Módulos

const express = require('express')
const handlebars = require('express-handlebars')
const pdf = require('handlebars-pdf')
const bodyParser = require('body-parser');
const app = express()
const axios = require('axios')
const fs = require('fs')
const formatDate = require('./public/js/utils'); 



//Configurações
    //JSON
    app.use(express.json())
    //CSS
    app.use(express.static(__dirname + '/public'));
    //Body Parser
    app.use(bodyParser.urlencoded({extended:true}))

    //Handlebars 
    app.engine('handlebars', handlebars());
    app.set('view engine', 'handlebars');
 
    //Rotas
    app.get('/', function (req, res) {
        res.render('home');
    });

    app.post('/certificado', async (req,res)=>{
        const template = await axios.get("https://firebasestorage.googleapis.com/v0/b/certificado-80554.appspot.com/o/Modelos%20certificados%20HTML%2Ftemplate_certificate.html?alt=media&token=169b440e-c03d-4161-bc9e-48bf6a44d6d5");
        fs.writeFileSync("./views/certificado.handlebars",template.data); 
    
    
        req.body.date = formatDate(req.body.date)
        res.render("certificado",data = req.body)

        let document = {
            template: template.data,
            context: {
                student: req.body.student,
                course: req.body.course,
                date: req.body.date 
            },
            path: "./certificado.pdf",
            options: { "orientation": "landscape"}
            
        }
     
    pdf.create(document)
        .then(res => {
            console.log(res)
        })
        .catch(error => {
            console.error(error)
        })

     })


//Outros
//npm start para iniciar servidor
const PORT = process.env.PORT || 8081
app.listen(PORT,()=>{
    console.log("Servidor rodando!")
})