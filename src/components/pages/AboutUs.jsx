import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "../LogoutButton";

function Aboutus() {
  return (
    <div className="text-white bg-gray-600">
      <div className="font-bold text-white w-full m-auto ">
        <ul className="grid grid-cols-2 lg:flex lg:w-[80%] lg:m-auto justify-between ">
          <li className="bg-transparent border-2 w-max px-1 justify-self-center bg-zinc-600  hover:bg-green-600 rounded-lg my-1">
            <Link to={"/home"}>Home</Link>
          </li>
          <li className="bg-transparent border-2 w-max px-1 bg-zinc-600 justify-self-center rounded-lg my-1 hover:bg-green-600">
            <Link to={"/About"}>About</Link>
          </li>

          <li className="bg-black text-white border-2 w-max px-1  rounded-lg my-1 justify-self-center hover:bg-green-600 ">
            <LogoutButton />
          </li>
        </ul>
      </div>

      <section>
        <h2>React.js:</h2>
        <p>
          <strong>Description:</strong> React.js is a popular JavaScript library
          for building user interfaces. It allows you to create reusable UI
          components and manage the state of your application efficiently. In
          your eCommerce project, React will be the foundation for creating
          dynamic and responsive user interfaces.
        </p>
      </section>

      <section>
        <h2>Appwrite:</h2>
        <p>
          <strong>Description:</strong> Appwrite is an open-source backend
          server that helps developers build applications faster. It offers a
          set of RESTful APIs for user authentication, databases, file storage,
          and more. For your eCommerce project, you can use Appwrite to handle
          user authentication, manage product data, and store other relevant
          information.
        </p>
      </section>

      <section>
        <h2>React Redux:</h2>
        <p>
          <strong>Description:</strong> React Redux is a state management
          library for React applications. It helps manage the state of your
          application in a predictable way, making it easier to handle complex
          data flows. In an eCommerce project, React Redux can be used to manage
          the global state, such as shopping cart contents, user authentication
          status, and other application-wide data.
        </p>
      </section>

      <section>
        <h2>Tailwind CSS:</h2>
        <p>
          <strong>Description:</strong> Tailwind CSS is a utility-first CSS
          framework that provides low-level utility classes to build designs
          directly in your markup. It's highly customizable and allows for rapid
          development by eliminating the need to write custom CSS. In your
          eCommerce project, Tailwind CSS can be used to style your components
          and create a visually appealing user interface.
        </p>
      </section>

      <section>
        <h2>Integration:</h2>
        <p>
          <strong>Description:</strong> Integrate these technologies seamlessly
          to build a robust eCommerce platform. Use React for building your
          front-end components, manage the state with React Redux, and leverage
          Appwrite for backend functionalities like user authentication and data
          storage. Tailwind CSS will help you style your components efficiently.
        </p>
      </section>

      <section>
        <h2>Key Features:</h2>
        <ul>
          <li>
            <strong>User Authentication:</strong> Utilize Appwrite for secure
            user authentication, ensuring that users can create accounts, log
            in, and maintain personalized profiles.
          </li>
          <li>
            <strong>Product Management:</strong> Leverage Appwrite to manage
            product data, including details like images, descriptions, and
            prices.
          </li>
          <li>
            <strong>Shopping Cart with React Redux:</strong> Implement a
            shopping cart feature using React Redux to manage the state of items
            in the user's cart across different components.
          </li>
          <li>
            <strong>Responsive Design with Tailwind CSS:</strong> Ensure a
            responsive and visually appealing design using Tailwind CSS classes
            for styling.
          </li>
        </ul>
      </section>

      <section>
        <h2>Development Process:</h2>
        <ol>
          <li>
            <strong>Front-end Development:</strong> Use React.js to create the
            user interface components, making them modular, reusable, and
            responsive.
          </li>
          <li>
            <strong>State Management:</strong> Implement React Redux to manage
            the global state of your application, handling user authentication,
            cart contents, and other relevant data.
          </li>
          <li>
            <strong>Backend Integration:</strong> Connect your front-end to the
            Appwrite backend, utilizing its APIs for user authentication and
            data storage.
          </li>
          <li>
            <strong>Styling:</strong> Apply styling using Tailwind CSS, making
            your eCommerce platform visually appealing and responsive.
          </li>
        </ol>
      </section>
    </div>
  );
}

export default Aboutus;
