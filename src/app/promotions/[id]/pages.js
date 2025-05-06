import { use } from "react";

// Masih salah wkwkw
export const dynamic = "force-dynamic";

async function getPromotions() {
  const res = await fetch("http://localhost:3000/api/promotions", {
    cache: "no-cache",
  });
  return res.json();
}

export default function PromoDetail() {
  const router = useRouter();
  const { id } = router.query;

  const promo = promotions.find((item) => item.promo_id === id);

  if (!promo) return <div className="p-8">Promo tidak ditemukan!</div>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{promo.promo_name}</h1>
      <p className="text-gray-600 mb-2">{promo.description}</p>
      <p className="text-gray-700 font-medium">Periode: {promo.periode}</p>
      <div className="mt-4">
        <a
          href={promo.contact_info.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Kunjungi Website
        </a>
      </div>
    </div>
  );
}
