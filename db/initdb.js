import { PrismaClient } from "@prisma/client";
import fs from "fs";
import readline from "readline";
import csv from "csv-parser";
const prisma = new PrismaClient();

async function main() {
  const readStream = fs
    .createReadStream("./db/Mobile_Food_Facility_Permit.csv")
    .pipe(csv())
    .on("data", async (row) => {
      // 将每一行添加到数组中，这里可以进行必要的转换
      const {
        locationid: locationId,
        Applicant: applicant,
        FacilityType: facilityType,
        cnn: cnn,
        LocationDescription: locationDescription,
        Address: address,
        blocklot: block,
        block: blocklot,
        lot: lot,
        permit: permit,
        Status: status,
        FoodItems: foodItems,
        X: x,
        Y: y,
        Latitude: latitude,
        Longitude: longitude,
        Schedule: schedule,
        dayshours: daysHours,
        NOISent: noiseSent,
        Approved: approved,
        Received: received,
        PriorPermit: priorPermit,
        ExpirationDate: expirationDateTime,
        Location: location,
        Fire: firePreventionDistricts,
        Police: policeDistricts,
        Supervisor: supervisorDistricts,
        Zip: zipCodes,
        Neighborhoods: neighborhoodsOld,
      } = row;
      const foodTruck = await prisma.foodTruck.create({
        data: {
          locationId,
          applicant,
          facilityType,
          cnn,
          locationDescription,
          address,
          block,
          blocklot,
          lot,
          permit,
          status,
          foodItems,
          x,
          y,
          latitude,
          longitude,
          schedule,
          daysHours,
          noiseSent,
          approved,
          received,
          priorPermit,
          expirationDateTime,
          location,
          firePreventionDistricts,
          policeDistricts,
          supervisorDistricts,
          zipCodes,
          neighborhoodsOld,
        },
      });
    })
    .on("close", async () => {
      // await prisma.$disconnect();
    });
}

main();
