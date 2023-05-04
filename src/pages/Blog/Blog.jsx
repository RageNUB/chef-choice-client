import React from "react";
import PDFFile from "../../components/PDFFile/PDFFile";
import { PDFDownloadLink } from "@react-pdf/renderer";

const Blog = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center">Blog</h2>
      <div className="text-center mt-5">
        <PDFDownloadLink document={<PDFFile />} filename="FORM">
          {({ loading }) =>
            loading ? (
              <button className="text-2xl font-semibold btn btn-primary text-white">Loading Document...</button>
            ) : (
              <button className="text-2xl font-semibold btn btn-primary text-white">
                Download as PDF
              </button>
            )
          }
        </PDFDownloadLink>
      </div>
      <div className="lg:px-20 mt-16 mb-20">
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            How to validate React props using PropTypes
          </div>
          <div className="collapse-content">
            <p>
              PropTypes is a React built-in library that allows you to define
              the expected data types of a components props and validate them at
              runtime. PropTypes only provides runtime validation and should not
              be relied on for type checking in code. When a component is
              rendered, PropTypes will automatically validate the props against
              the expected data types and log a warning in the console if there
              are any type mismatches.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            Tell us the differences between uncontrolled and controlled
            components.
          </div>
          <div className="collapse-content">
            <p>
              Uncontrolled components are typically form inputs such as text
              inputs, checkboxes, and radio buttons that manage their own
              internal state. When a user types into a text input, the input
              element manages its own state internally, without any intervention
              from the parent component. On the other hand, Controlled
              components are when the user interacts with the input, the parent
              component updates its state and re-renders the information with
              the new value. In uncontrolled components the state is managed
              internally by the component, But in controlled components, the
              state is managed externally by the parent component.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            Tell us the difference between nodejs and express js.
          </div>
          <div className="collapse-content">
            <p>
              Node.js and Express.js are two different technologies that are
              often used together for building web applications. Node.js is a
              runtime environment for executing JavaScript code outside of a web
              browser. But Express.js is a web framework for Node.js that
              provides a set of features and tools for building web applications
              and APIs. Node.js is built on top of Googles V8 JavaScript engine
              and can be used for a variety of tasks beyond web development,
              including command-line tools, server-side scripting, and building
              desktop applications. But Express.js is built on top of Node.js
              and allows developers to choose which modules and components to
              use in their application and how to structure their code.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What is a custom hook, and why will you create a custom hook?
          </div>
          <div className="collapse-content">
            <p>
              Custom Hook is a reusable piece of logic that encapsulates common
              functionality and can be shared across multiple components. Custom
              hooks allow us to extract component logic into a separate function
              and reuse it throughout our application. If we have to write the
              same code again again and have to used in different components
              then we write a custom Hook. To create a custom hook in React, we
              simply write a function that uses one or more built-in hooks (such
              as useState, useEffect, or useContext) and returns a value or an
              object with values and functions that can be used in our
              components.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
