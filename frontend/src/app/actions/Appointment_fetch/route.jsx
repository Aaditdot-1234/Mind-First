import { NextResponse } from "next/server"; 
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function GET() {
    try{
        const appointment = await prisma.appointment.findMany({
            select:{
                id: true,
                userName: true,
                doctorName: true,
                message: true,
                Date: true,
                timing: true,
            },
        });

        return NextResponse.json(appointment, { status: 200 });
    } catch (error){
        console.error("Error fetching doctors:", error);
        return NextResponse.json({ error: "Failed to fetch doctors" }, { status: 500 });
    }
}