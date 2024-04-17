-- CreateTable
CREATE TABLE "FoodTruck" (
    "locationId" TEXT NOT NULL PRIMARY KEY,
    "applicant" TEXT NOT NULL,
    "facilityType" TEXT NOT NULL,
    "cnn" TEXT NOT NULL,
    "locationDescription" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "block" TEXT,
    "blocklot" TEXT,
    "lot" TEXT,
    "permit" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "foodItems" TEXT NOT NULL,
    "x" TEXT,
    "y" TEXT,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "schedule" TEXT,
    "daysHours" TEXT,
    "noiseSent" TEXT NOT NULL,
    "approved" TEXT,
    "received" TEXT,
    "priorPermit" TEXT,
    "expirationDateTime" TEXT,
    "location" TEXT,
    "firePreventionDistricts" TEXT,
    "policeDistricts" TEXT,
    "supervisorDistricts" TEXT,
    "zipCodes" TEXT,
    "neighborhoodsOld" TEXT
);