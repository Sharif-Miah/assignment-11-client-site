import React from 'react';

const FAQ = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">Difference between SQL and NoSQL.</summary>
                        <div className="px-4 pb-4">
                            <p>
                                <li>SQL pronounced as “S-Q-L” or as “See-Quel” is primarily called RDBMS or Relational Databases, whereas NoSQL is a Non-relational or Distributed Database.</li>
                                <li>SQL databases are table-based databases, whereas NoSQL databases can be document-based, key-value pairs, and graph databases.</li>
                                <li>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                                </li>
                                <li>SQL databases have a predefined schema, whereas NoSQL databases use a dynamic schema for unstructured data.</li>
                                <li>Comparing NoSQL vs SQL performance, SQL requires specialized DB hardware for better performance while NoSQL uses commodity hardware.</li>
                            </p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">What is JWT, and how does it work?</summary>
                        <div className="px-4 pb-4">
                            <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server.
                                Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. Resource server then verifies the authenticity of the token using the secret salt/ public key.
                            </p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">What is the difference between javascript and NodeJS?</summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">How does NodeJS handle multiple requests at the same time?</summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                        </div>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default FAQ;