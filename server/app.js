const express =require('express');
const mysql=require('mysql2');
const cors=require('cors');
const app=express();


//connect to database
const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Aya@2003',
    database:'users',
    
});
con.connect((err)=>{
    if(err)console.log(err); else
    console.log('connected');
});

app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
const sql='SELECT * FROM STUDENT';

con.query(sql,(err,result)=>{
    if(err) res.json(err);
    res.json(result);
});
});
app.post('/create',(req,res)=>{
    const sql='INSERT INTO STUDENT(`name`,`email`) values (?)';
    const values=[
        req.body.name,
        req.body.email,
    ];
    con.query(sql,[values],(err,result)=>{
        if(err) res.json(err);
        res.json(result);
    });});

    app.put('/update/:id',(req,res)=>{
        const sql='UPDATE STUDENT SET name=? ,email= ? where id=?';
        const values=[
            req.body.name,
            req.body.email,
        ];
        const id=req.params.id;
        con.query(sql,[...values,id],(err,result)=>{
            if(err) res.json(err);
            res.json(result);
        });});   
        app.delete('/delete/:id',(req,res)=>{
            const sql='DELETE FROM STUDENT WHERE id=?';
           
            const id=req.params.id;
            con.query(sql,[id],(err,result)=>{
                if(err) res.json(err);
                res.json(result);
            });});   
app.listen(3000,()=>{console.log('listening to port 3000')});