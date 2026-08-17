import Image from "next/image";
import { brandConfig } from "@/lib/data";

export function OwnerPortrait({ modifier = "" }) {
  const { image, alt } = brandConfig.ownerPortrait;

  return (
    <div className={`owner-portrait ${modifier}`}>
      {image ? (
        <Image src={image} alt={alt} fill sizes="(max-width: 820px) 320px, 390px" style={{ objectFit: "cover" }} />
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
