import { ManifestSection, PrinciplesSection, ProcessSection, TeamSection } from "@/components/Sections";

export const metadata = {
  title: "Про нас",
  description: "Про підхід Myshchyshyn до портфоліо, лендингів, кейсів і production-запуску."
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero about-hero" aria-labelledby="about-title">
        <p className="hero-kicker">— Про нас · Myshchyshyn</p>
        <h1 id="about-title">Команда під сайти, які треба показувати без пояснень.</h1>
        <p>Myshchyshyn збирає портфоліо, лендинги й кейси з нормальної структури: зрозумілий перший екран, охайна верстка, живий deployment.</p>
      </section>
      <ManifestSection compact label="Маніфест Myshchyshyn">
        «Сайт має не пояснювати, що він гарний. Він має швидко показати роботу, довести рівень і дати зрозумілий наступний крок».
      </ManifestSection>
      <PrinciplesSection title="Три принципи, яких ми дотримуємось." />
      <TeamSection />
      <ProcessSection />
    </>
  );
}
