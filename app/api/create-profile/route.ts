import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST() {
  try {
    const clerkUser = await currentUser();
    if (!clerkUser) {
      return NextResponse.json({
        error: "User not found",
      });
    }

    const email = clerkUser?.emailAddresses[0].emailAddress || "";
    if (!email) {
      return NextResponse.json({
        error: "User email not found",
      });
    }

    const existingProfile = await prisma.profile.findUnique({
      where: {
        userId: clerkUser.id,
      },
    });

    if (existingProfile) {
      return NextResponse.json({
        messsage: "Profile already exists",
      });
    }

    await prisma.profile.create({
      data: {
        userId: clerkUser.id,
        email,
        subscriptionTier: null,
        subscriptionId: null,
        subscriptionActive: false,
      },
    });

    return NextResponse.json(
      {
        message: "Profile created",
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: "internal server error",
      },
      {
        status: 500,
      }
    );
  }
}
