import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function DELETE(request) {
  try {
    const { id } = await request.json();

    // Delete the appointment
    await prisma.appointment.delete({
      where: { id: id },
    });

    return NextResponse.json({ message: "Appointment deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting appointment:", error);
    return NextResponse.json({ error: "Failed to delete appointment" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}