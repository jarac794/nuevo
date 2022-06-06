import Head from "next/head";
import { useRef } from "react";
import { useRouter } from "next/router";
import HeaderPage from "../components/HeaderPage";

export default function About(data) {
  const searchInputRef = useRef(null);
  const router = useRouter();
  


  return (
    <div>
      <Head>
        <title>About Us</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <HeaderPage />

      <div className="page_conentst mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
        <div className="page_conentst_title">
          <strong><h1>About Us</h1></strong>

        </div>
        <div className="page_conentst_desc">
          
            
            <p><strong>Our Team</strong><br></br> Konlap.com is owned and operated by Konlap Technologies, a Peruvian company, directed and managed from its headquarters in Chachapoyas (Peru), by our founder Hector Diaz. You can contact us at contact@konlap.com</p>
            </div><div>
        </div>
      </div>

    </div>
  );
}

