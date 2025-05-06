export const dynamic = "force-dynamic";

async function getRates() {
    const res = await fetch('http://localhost:3001/rates', {
        cache: "force-cache"
    });
    console.log(res);
    return res.json()
}

export default async function InterestRates() {
    const rates = await getRates();
    console.log(rates);
    return (
        <div>
            <h1>Interest Rates</h1>
            <ul> 
                {rates &&
                rates.map((rate) => (
                    <li key={rate.id}>{rate.name} : {rate.value}</li>
                ))}
            </ul>
        </div>
    );
}