import Image from "next/image";
import { brandConfig } from "@/lib/data";

export function OwnerPortrait({ modifier = "" }) {
  const { image, alt } = brandConfig.ownerPortrait;
  const isHeroPortrait = modifier.includes("hero-owner");

  return (
    <div className={`owner-portrait ${modifier}`}>
      {image ? (
        <Image
          src={image}
          alt={alt}
          fill
          loading={isHeroPortrait ? "eager" : "lazy"}
          fetchPriority={isHeroPortrait ? "high" : "auto"}
          sizes="(max-width: 820px) 320px, 390px"
          style={{ objectFit: "cover" }}
        />
      ) : (
        <div className="owner-placeholder">
          <span>Фото власника</span>
          <small>/assets/owner-portrait.jpg</small>
        </div>
      )}
    </div>
  );
}

export function TeamPortrait({ role }) {
  if (role.type === "owner") return <OwnerPortrait modifier="team-owner" />;

  return (
    <div className={`team-portrait ${role.type}`} aria-hidden="true">
      <span />
    </div>
  );
}
