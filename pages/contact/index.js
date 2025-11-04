import { useRef, useState } from "react";
import { BsSend } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import Circles from "../../components/Circles";


const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        "service_6bw78xs", // Remplacez par votre SERVICE ID
        "template_qsnvewr", // Remplacez par votre TEMPLATE ID
        form.current,
        "nFPYqaJmLKzrebS2I" // Remplacez par votre PUBLIC KEY
      );

      console.log(result.text);
      setMessage("Message sent successfully!");
      e.target.reset();
    } catch (error) {
      console.error(error.text);
      setMessage("An error occurred, please try again.");
    }
  };

  return (
    <div className="h-full bg-primary/30 flex items-center justify-center">
      <Circles />
      <div className="container mx-auto py-20 pt-0 text-center xl:text-left">
        <div className="flex flex-col w-full max-w-[700px] mx-auto">
          {/* Titre */}
          <h2 className="h2 text-center  mb-8">
            Let&apos;s <span className="text-accent">connect.</span>
          </h2>

          {/* Formulaire */}
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 w-full">
            <div className="flex flex-col md:flex-row gap-6">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="input w-full"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="input w-full"
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input w-full"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="textarea h-32 w-full"
              required
            ></textarea>

            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group relative"
            >
              <span className="absolute opacity-100 transition-all duration-500 group-hover:-translate-y-6">
                Send
              </span>
              <span className="opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                <BsSend className="text-[22px]" />
              </span>
            </button>
          </form>

          {/* Message de confirmation */}
          {message && <p className="text-green-500 mt-4">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
