export const dynamic = "force-dynamic";

async function getPromotion(id) {
  const res = await fetch(`http://localhost:3000/api/promotions/${id}`, {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Gagal mengambil data promo.");
  }

  return res.json();
}

export default async function PromoDetail({ params }) {
  const { id } = params;

  let promo;
  try {
    promo = await getPromotion(id);
  } catch (error) {
    return <div className="p-8">Promo tidak ditemukan!</div>;
  }

  return (
    <div className="p-8 max-w-2xl mx-auto bg-white rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">
        {promo.promo_name}
      </h1>
      <p className="text-gray-600 mb-2">{promo.description}</p>
      <p className="text-gray-700 font-medium">Periode: {promo.periode}</p>
      <div className="mt-6">
        <a
          href={promo.contact_info.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition"
        >
          Kunjungi Website
        </a>
      </div>
    </div>
  );
}
