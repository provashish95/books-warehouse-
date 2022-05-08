import React from 'react';

const Blogs = () => {
    return (
        <div className="background-img">
            <div className="container">
                <div className="row">
                    <div className="col my-5 mx-4 border-4 rounded-2 p-4 bg-light">
                        <h6 className='text-color'><i className="fa-solid fa-hand-point-right"></i> Difference between javascript and nodejs</h6>
                        <p>JavaScript is a lightweight, object-oriented scripting language that is used to build dynamic HTML pages with interactive effects on a webpage. On the other hand, Node.js usually represents a list of objects and methods accessible to JavaScript code when run in the V8 engine or via the node interpreter.It is basically used on the client-side.Javascript is capable enough to add HTML and play with the DOM.Javascript is used in frontend development. 	Some of the javascript frameworks are RamdaJS, TypedJS, etc.Various companies use JavaScript like Google, Shopify, Udacity, Sendgrid, Groupon, Okta, Instacart, etc. </p>

                        <p>NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.It is mostly used on the server-side.Nodejs does not have capability to add HTML tags. Nodejs is used in server-side development.Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm.Various companies use Node Js like Netflix, Hapi, Walmart, Paypal, Linkedin, Trello, Medium, eBay, etc. </p>
                        <h6 className='text-color'><i className="fa-solid fa-hand-point-right"></i> When should you use nodejs and when should you use mongodb</h6>
                        <p>Nodejs is a Javascript engine that we can write any application we want with (by programming in the Javascript language). It runs our Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too. Any project needs a programming environment and a runtime library that offers us basic programming tools/support and can compile and/or interpret our code.</p>

                        <p>MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data.If my application needs the ability to persistently store data in a way that i can efficiently query or update it later, then we would typically use some form of database like  MongoDB.</p>
                        <h6 className='text-color'><i className="fa-solid fa-hand-point-right"></i> Differences between sql and nosql databases</h6>
                        <p>This is relational database management system (RDBMS).These databases have fixed or static or predefined schema.SQL are not suited for hierarchical data storage.And it best suited for complex queries</p>

                        <p>NoSQL is Non-relational or distributed database system.Its have dynamic schema.NoSQL databases are best suited for hierarchical data storage, but not so good for complex queries.It is horizontally scalable.</p>
                        <h6 className='text-color'><i className="fa-solid fa-hand-point-right"></i>  What is the purpose of jwt and how does it work</h6>
                        <p>We use json web token for secure our API with email like Authorization, Information Exchange etc.SON Web Token (JWT) is an open standard so we can say JSON Web Token is a standard used to create access tokens for an application.</p>

                        <p>In authentication, when the user successfully logs in using their credentials, a JSON Web Token will be returned. Since tokens are credentials, great care must be taken to prevent security issues. In general, you should not keep tokens longer than required.We store jwt in local storage application of client side . Whenever the user wants to access a protected route or resource, the user agent should send the JWT, typically in the Authorization header using the Bearer schema.The server's protected routes will check for a valid JWT in the Authorization header, and if it's present, the user will be allowed to access protected resources. If the JWT contains the necessary data, the need to query the database for certain operations may be reduced, though this may not always be the case.</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Blogs;