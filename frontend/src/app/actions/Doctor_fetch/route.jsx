import { NextResponse } from "next/server"; 
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function GET() {
    try{
        const doctors = await prisma.doctor.findMany({
            select:{
                id: true,
                doctorName: true,
                description: true,
                availableDays: true,
                timing: true,
            },
        });

        return NextResponse.json(doctors, { status: 200 });
    } catch (error){
        console.error("Error fetching doctors:", error);
        return NextResponse.json({ error: "Failed to fetch doctors" }, { status: 500 });
    }
}