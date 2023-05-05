import React from 'react';
import NavPart from '../../nav/NavPart';
import Footer from '../../Footer/Footer';

const Blog = () => {
    return (
        <div>
            <NavPart></NavPart>
            <div className='flex flex-col justify-center bg-teal-500 align-items-center'>
                <div className='m-5' >
                    <h3 className='text-red-500'>1:Tell us the differences between uncontrolled and controlled components.?</h3>
                    <p >Answer:Controlled components in React manage their state through props passed down from the parent, while uncontrolled components manage their state internally. This means that the parent component has direct control over the state of a controlled component, while it has no direct access to the state of an uncontrolled component.</p>
                </div>
                <div className='m-5'>
                    <h3 className='text-red-500'>2:How to validate React props using PropTypes</h3>
                    <p>Answer:o validate React props using PropTypes, you can import the prop-types package and define the expected data type and structure of the props using the propTypes object. You can then assign the propTypes object to your component using the propTypes static property. When the component is used, React will automatically validate the props against the propTypes object and show a warning in the console if the validation fails.</p>
                </div>
                <div className='m-5'>
                    <h3 className='text-red-500'>3:Tell us the difference between nodejs and express js.?</h3>
                    <p>Answer:Node.js is a server-side JavaScript runtime that allows developers to run JavaScript on the server. Express.js, on the other hand, is a web framework built on top of Node.js that simplifies the development of web applications by providing features such as routing, middleware, and templates. In short, Node.js provides the runtime environment while Express.js provides the tools to build web applications using Node.js.</p>
                </div>
                <div className='m-5'>
                    <h3 className='text-red-500'>4:What is a custom hook, and why will you create a custom hook?</h3>
                    <p>Answer:A custom hook in React is a function that allows you to extract component logic into reusable functions. You can create a custom hook to share functionality between components or to keep the component code organized and easier to maintain. Custom hooks can also help to make code more readable and reduce duplication</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;