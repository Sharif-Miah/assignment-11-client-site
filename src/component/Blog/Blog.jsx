import React from 'react';

const Blog = () => {
    return (

        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">

                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Blog</h2>
                <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                    <div>
                        <h3 className="font-semibold">Difference between SQL and NoSQL.</h3>
                        <p className="mt-1 dark:text-gray-400">
                            <li>SQL pronounced as “S-Q-L” or as “See-Quel” is primarily called RDBMS or Relational Databases, whereas NoSQL is a Non-relational or Distributed Database.</li>
                            <li>SQL databases are table-based databases, whereas NoSQL databases can be document-based, key-value pairs, and graph databases.</li>
                            <li>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                            </li>
                            <li>SQL databases have a predefined schema, whereas NoSQL databases use a dynamic schema for unstructured data.</li>
                            <li>Comparing NoSQL vs SQL performance, SQL requires specialized DB hardware for better performance while NoSQL uses commodity hardware.</li>
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold">What is JWT, and how does it work?</h3>
                        <p className="mt-1 dark:text-gray-400">JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server.
                            Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. Resource server then verifies the authenticity of the token using the secret salt/ public key.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold">What is the difference between javascript and NodeJS?</h3>
                        <p className="mt-1 dark:text-gray-400"> JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">How does NodeJS handle multiple requests at the same time?</h3>
                        <p className="mt-1 dark:text-gray-400">NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;