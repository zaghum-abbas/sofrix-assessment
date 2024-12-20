import { Footer } from "@/app/components/layout/footer";
import { Hero } from "./hero";
import { SignUpDetails } from "./signupDetails";
import { ContactUsForm } from "./contactUsForm";

export const Home = () => {
  return (
    <>
      <Hero />
      <SignUpDetails />
      <ContactUsForm />
      <Footer />
    </>
  );
};
