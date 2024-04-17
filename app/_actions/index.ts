"use server";

import prisma from "@/db";
import { redirect } from "next/navigation";
export async function refreshFoodTruckData() {
  const csvFile = await fetch(
    "https://data.sfgov.org/api/views/rqzj-sfat/rows.csv"
  );
  return;
}

export async function getAllFT() {
  const fts = await prisma.foodTruck.findMany();
  return fts;
}

export async function getFTById(id: string) {
  const FT = await prisma.foodTruck.findUnique({
    where: {
      locationId: id,
    },
  });
  return FT;
}

export async function getPageFT(pageNum: number, pageSize: number = 10) {
  const FTs = await prisma.foodTruck.findMany({
    take: pageSize,
    skip: pageNum * (pageSize - 1),
  });
  return {
    data: FTs,
    nextCursor: pageNum + 1,
  };
}

export async function getRandom() {
  const count = await prisma.foodTruck.count();
  const FT = await prisma.foodTruck.findMany({
    take: 1,
    skip: Math.floor(count * Math.random()),
  });
  redirect(`/detail/${FT[0].locationId}`);
}
