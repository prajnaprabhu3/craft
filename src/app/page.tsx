import Image from "next/image";
import noise from "../../public/bg/noise.svg";
import Header from "./components/header";
import Hero from "./components/hero";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="h-screen mx-auto  w-full flex flex-col justify-between items-center">
      <Header />

      <Hero />

      <Footer />
      {/* <div className=" mx-auto max-w-2xl mt-40 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem sint
        incididunt ea sunt velit laborum minim culpa. Duis laboris ad fugiat
        aliquip quis ea nulla culpa cupidatat ullamco non. Veniam qui id tempor
        officia incididunt sit non excepteur deserunt eiusmod enim non nulla
        consectetur. Ad qui cillum commodo deserunt tempor anim est. Nostrud
        consequat ad laboris enim occaecat. Aute anim cillum consequat consequat
        consectetur ex ullamco ullamco duis officia qui nostrud adipisicing.
        Esse veniam ut laboris consectetur velit officia incididunt magna. Ad
        est do consequat est ex magna sunt. Est ipsum proident dolor esse ex
        excepteur et esse officia labore anim sint elit enim. Id culpa fugiat
        minim qui veniam officia minim incididunt exercitation eu pariatur.
        Excepteur consectetur proident officia consequat duis enim aute. Tempor
        officia laborum laboris dolor nisi reprehenderit veniam eiusmod
        exercitation deserunt ad in. Deserunt magna cupidatat laboris culpa do
        deserunt eiusmod. Ad incididunt exercitation nostrud officia culpa est
        anim officia laboris nisi laboris. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Lorem sint incididunt ea sunt velit
        laborum minim culpa. Duis laboris ad fugiat aliquip quis ea nulla culpa
        cupidatat ullamco non. Veniam qui id tempor officia incididunt sit non
        excepteur deserunt eiusmod enim non nulla consectetur. Ad qui cillum
        commodo deserunt tempor anim est. Nostrud consequat ad laboris enim
        occaecat. Aute anim cillum consequat consequat consectetur ex ullamco
        ullamco duis officia qui nostrud adipisicing. Esse veniam ut laboris
        consectetur velit officia incididunt magna. Ad est do consequat est ex
        magna sunt. Est ipsum proident dolor esse ex excepteur et esse officia
        labore anim sint elit enim. Id culpa fugiat minim qui veniam officia
        minim incididunt exercitation eu pariatur. Excepteur consectetur
        proident officia consequat duis enim aute. Tempor officia laborum
        laboris dolor nisi reprehenderit veniam eiusmod exercitation deserunt ad
        in. Deserunt magna cupidatat laboris culpa do deserunt eiusmod. Ad
        incididunt exercitation nostrud officia culpa est anim officia laboris
        nisi laboris. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem sint incididunt ea sunt velit laborum minim culpa. Duis laboris ad
        fugiat aliquip quis ea nulla culpa cupidatat ullamco non. Veniam qui id
        tempor officia incididunt sit non excepteur deserunt eiusmod enim non
        nulla consectetur. Ad qui cillum commodo deserunt tempor anim est.
        Nostrud consequat ad laboris enim occaecat. Aute anim cillum consequat
        consequat consectetur ex ullamco ullamco duis officia qui nostrud
        adipisicing. Esse veniam ut laboris consectetur velit officia incididunt
        magna. Ad est do consequat est ex magna sunt. Est ipsum proident dolor
        esse ex excepteur et esse officia labore anim sint elit enim. Id culpa
        fugiat minim qui veniam officia minim incididunt exercitation eu
        pariatur. Excepteur consectetur proident officia consequat duis enim
        aute. Tempor officia laborum laboris dolor nisi reprehenderit veniam
        eiusmod exercitation deserunt ad in. Deserunt magna cupidatat laboris
        culpa do deserunt eiusmod. Ad incididunt exercitation nostrud officia
        culpa est anim officia laboris nisi laboris.
      </div> */}
    </div>
  );
}
