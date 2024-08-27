import Image from "next/image";
import styles from "./styles/page.module.scss";
import Header from "./components/Header"
import MicrophoneSection from "./components/MicrophoneSection";
import Section from "./components/Section2";
export default function Home() {
  return (
    <main className={styles.container}>
      <Header/>
      <MicrophoneSection/>
      <Section/>
    </main>
  );
}
