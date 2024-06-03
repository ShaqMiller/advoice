import Image from "next/image";
import styles from "./styles/page.module.scss";
import Header from "./components/Header"
import MicrophoneContent from "./components/MicrophoneContent";
import Section from "./components/Section2";
export default function Home() {
  return (
    <main className={styles.container}>
      <Header/>
      <MicrophoneContent/>
      <Section/>
    </main>
  );
}
