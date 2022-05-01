import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-center text-success mb-3'>These are some basics of NodeJS</h1>
            <h3>(1)Write the differences between javascript and nodejs.</h3>
            <p className='ms-5'>Ans: Javascript is a high level ,scripting  programming language besides nodeJs is used to run javascript outside the browser.
                <br />
                Javascript is used in client side development,where nodeJs is used in server side development.
                <br />
                Javascript have the capacity to add HTML in the client side,besides nodeJs has no capacity to add HTML.
                <br />
                Javascript can run in any browser,where nodeJs is made with v8 engine which run javascript.
            </p>
            <h3>(2) When should you use nodejs and when should you use mongodb?</h3>
            <p className='ms-5'>
                Ans: NodeJs is a javascript runtime which runs javascript code outside the browser.It is a tool for javascript language for building servers and that can give response to the web requests.Node.js is popular because it has a huge, active, open-source, JavaScript-based ecosystem. Also, it doesn't tend to break compatibility between versions in major ways.so , when we want to write some kind of stand-alone program or server in Javascript, then we can use nodejs for it.
                <br />
                <br />
                Mongodb is a type of database where we can keep data,read,delete and update it.If our application needs the ability to  store data in a way that we can efficiently query or update it later, then we should typically use some sort of databse which is very persistent.Mongodb is one of such database which offers an API library that runs within a Nodejs application to give us programmatic access to Mongodb.NodeJs can be efficiently used with a nosql databse.Where mongodb is a nosql database and that's why we should prefer nosql database like mongodb when we are using nodejs in server side.
            </p>
            <h3>(3) What is the purpose of jwt and how does it work?</h3>
            <p className='ms-5'>
                Ans: jwt means json web token which is used as a authorization system of a website.It is used to protect data from unauthorised access.Whenever anyone logs into a system,the server passes a json web token for the user.After that whenever a user tries to access any confidential data,server verifies the user's email by the token generated before.If the verification is ok,the user gets the access of the data,otherwise not.
            </p>
        </div>
    );
};

export default Blogs;