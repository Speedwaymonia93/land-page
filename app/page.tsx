import AboutUs from "./components/AboutUs";
import Congress from "./components/Congress";
import ContactUs from "./components/ContactUs";
import Management from "./components/Management";
import News from "./components/News";


export default function Home() {
  return (
    <>
      <News />
      <AboutUs />
      <Management />
      <Congress />
      <ContactUs />
    </>
  );
}
