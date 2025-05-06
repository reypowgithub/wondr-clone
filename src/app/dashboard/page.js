import { use } from "react";

export const dynamic = "force-dynamic";

async function getPromotions() {
    const res = await fetch('http://localhost:3001/promotions', {
        cache: "no-cache"
    });
    return res.json();
}

export default async function Dashboard() {
    const promotions = await getPromotions();
    
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Promo Terbaru</h1>
            
            {promotions.length > 0 ? (
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {promotions.map((promo, index) => (
                    <div key={index} className="bg-white p-5 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
                    <h2 className="text-xl font-semibold mb-3">{promo.promo_name}</h2>
                    <p className="text-gray-600">{promo.description}</p>
                    </div>
                ))}
                </div>
            ) : (
                <p className="text-gray-600">Data promo tidak tersedia.</p>
            )}
        </div>
    );
}