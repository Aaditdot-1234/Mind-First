import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const { userEmail, userName, doctorId, doctorName, date, timing, message } = await request.json();

    const user = await prisma.user.findUnique({
      where: { email: userEmail },
    });

    if (!user) {
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    const appointment = await prisma.appointment.create({
      data: {
        userId: user.id,
        userName: userName,
        doctorId: doctorId,
        doctorName: doctorName,
        Date: new Date(date), 
        timing: timing,
        message: message,
      },
    });

    return new Response(JSON.stringify(appointment), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error creating appointment:", error);
    return new Response(JSON.stringify({ error: "Failed to create appointment" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  } finally {
    await prisma.$disconnect();
  }
}