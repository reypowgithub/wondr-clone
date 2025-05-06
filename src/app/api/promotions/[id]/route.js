import { NextResponse } from 'next/server';
import db from '../../../../app/data/db.json'

export async function GET(_, { params }) {
    const { id } = params;
    console.log(id);
    const promo = db.promotions.find((promotions) => promotions.promo_id === id);

    if (!promo) {
        return NextResponse.json({message: 'Promo not found'}, { status: 404 });
    }
return NextResponse.json({message: 'Success', data:promo});
    
}