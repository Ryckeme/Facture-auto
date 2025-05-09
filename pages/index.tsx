 import Head from "next/head";
 import FactureForm from "../components/FactureForm";

 export default function Home() {
   return (
     <>
       <Head>
         <title>Facture Auto-Entrepreneur</title>
       </Head>
       <main className="min-h-screen bg-gray-100 py-10">
         <FactureForm />
       </main>
     </>
    );
}