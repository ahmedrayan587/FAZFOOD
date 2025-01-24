import Form from "./Form/Form";
import FormButton from "./Form/FormButton";
import FormInput from "./Form/FormInput";
import { toast } from "react-toastify";

export default function Contact() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.success(`Message Submitted!`);
  };
    return (
      <section className="container w-10/12 mx-auto my-8">
        <h2 className="text-3xl font-bold text-center text-emerald-600 dark:text-white">CONTACT US</h2>
        <Form onSubmit={handleSubmit}>
          <FormInput name="Name" type="text" />
          <FormInput name="Email" type="email" />
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-emerald-600 dark:text-white">Message</label>
            <textarea id="message" name="message" rows={4} required className="mt-1 p-2 w-full border rounded-md text-emerald-600 placeholder:text-emerald-600 dark:bg-emerald-700 dark:text-white dark:placeholder:text-white dark:border-emerald-300 focus:outline-none"></textarea>
          </div>
          <FormButton name={"Reserve Now"} />
        </Form>
      </section>
    );
  }