/*
await is usually used to unwrap promises by passing a Promise as the expression. 
Using await pauses the execution of its surrounding async function until the promise is settled (that is, fulfilled or rejected).
 When execution resumes, the value of the await expression becomes that of the fulfilled promise.
 
 The useFormStatus hook is a Next.js hook that provides a way to track the status of a form, such as whether it is valid, pending, or submitted. This information can be used to display different UI elements depending on the form's status, such as a loading spinner when the form is pending or a success message when the form is submitted.

The useFormStatus hook takes two arguments:

    initialStatus: The initial status of the form. This can be one of the following: valid, pending, or submitted.
    onStatusChange: A callback function that is called whenever the form's status changes. This function is passed the new status of the form as its argument.

import React, { useState } from "react";
import { useFormStatus } from "next/hooks";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [formStatus, setFormStatus] = useFormStatus({
    initialStatus: "valid",
    onStatusChange: (newStatus) => {
      console.log("Form status changed to: ", newStatus);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormStatus("pending");

    // Send the form data to the server
    // ...

    setFormStatus("submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Your email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <button type="submit">Submit</button>

      {formStatus === "pending" && <p>Your form is pending...</p>}
      {formStatus === "submitted" && <p>Your form has been submitted!</p>}
    </form>
  );
};

export default Form;

In this example, the useFormStatus hook is used to track the status of the form as the user enters data and submits the form. The formStatus variable is updated whenever the form's status changes, and the onStatusChange callback function is called with the new status of the form. The handleSubmit function is used to handle the form submission, and it updates the formStatus variable to pending before sending the form data to the server. Once the form data has been sent, the formStatus variable is updated to submitted.

The useFormStatus hook can be used to track the status of any form, and it can be used to display different UI elements depending on the form's status. This can help to improve the user experience by providing feedback to the user about the status of their form.
 */