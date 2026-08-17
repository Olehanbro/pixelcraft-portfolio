import { FavoritesSection, FieldsSection, HomeHero, ManifestSection, PrinciplesSection } from "@/components/Sections";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <FavoritesSection />
      <FieldsSection />
      <ManifestSection>
        «Сайт має пояснювати роботу так, ніби поруч стоїть людина, яка справді розуміє бізнес: спокійно, точно і без зайвого театру».
      </ManifestSection>
      <PrinciplesSection />
    </>
  );
}
