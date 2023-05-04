import React from 'react';
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    title: {
      fontSize: 24,
      textAlign: "center",
    },
    text: {
      margin: 12,
      fontSize: 14,
      textAlign: "justify",
      fontFamily: "Times-Roman",
    },
    image: {
      marginVertical: 15,
      marginHorizontal: 100,
    },
    header: {
      fontSize: 12,
      marginBottom: 20,
      textAlign: "center",
      color: "grey",
    },
    pageNumber: {
      position: "absolute",
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: "center",
      color: "grey",
    },
  });

const PDFFile = () => {
    return (
        <Document>
            <Page style={styles.body}>
                <Text style={styles.header} fixed>Blog</Text>
                <Text style={styles.title}>Tell us the differences between uncontrolled and controlled components.</Text>
                <Text style={styles.text}>Uncontrolled components are typically form inputs such as text inputs, checkboxes, and radio buttons that manage their own internal state. When a user types into a text input, the input element manages its own state internally, without any intervention from the parent component. On the other hand, Controlled components are when the user interacts with the input, the parent component updates its state and re-renders the information with the new value. In uncontrolled components the state is managed internally by the component, But in controlled components, the state is managed externally by the parent component.</Text>
                <Text style={styles.title}>How to validate React props using PropTypes</Text>
                <Text style={styles.text}>PropTypes is a React built-in library that allows you to define the expected data types of a components props and validate them at runtime. PropTypes only provides runtime validation and should not be relied on for type checking in code. When a component is rendered, PropTypes will automatically validate the props against the expected data types and log a warning in the console if there are any type mismatches.</Text>
                <Text style={styles.title}>Tell us the difference between nodejs and express js.</Text>
                <Text style={styles.text}>Node.js and Express.js are two different technologies that are often used together for building web applications. Node.js is a runtime environment for executing JavaScript code outside of a web browser. But Express.js is a web framework for Node.js that provides a set of features and tools for building web applications and APIs. Node.js is built on top of Googles V8 JavaScript engine and can be used for a variety of tasks beyond web development, including command-line tools, server-side scripting, and building desktop applications. But Express.js is built on top of Node.js and allows developers to choose which modules and components to use in their application and how to structure their code.</Text>
                <Text style={styles.title}>What is a custom hook, and why will you create a custom hook?</Text>
                <Text style={styles.text}>Custom Hook is a reusable piece of logic that encapsulates common functionality and can be shared across multiple components. Custom hooks allow us to extract component logic into a separate function and reuse it throughout our application. If we have to write the same code again again and have to used in different components then we write a custom Hook. To create a custom hook in React, we simply write a function that uses one or more built-in hooks (such as useState, useEffect, or useContext) and returns a value or an object with values and functions that can be used in our components.</Text>
            </Page>
        </Document>
    );
};

export default PDFFile;