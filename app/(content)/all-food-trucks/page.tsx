import { getAllFT, getPageFT } from "@/app/_actions";
import FoodTruckCard from "@/components/foodTruck/FoodTruckCard";
import FTList from "./_components/FTList";
import { Suspense } from "react";
import Loading from "@/app/loading";
export default async function Page() {
  const allFts = await getPageFT(1, 10);
  return (
    <main className="grid grid-cols-2 gap-4 p-4 lg:grid-cols-4">
      {allFts.data.map((ft) => {
        return (
          <div key={ft.locationId} className="">
            <FoodTruckCard {...ft}></FoodTruckCard>
          </div>
        );
      })}
      <Suspense fallback={<Loading></Loading>}>
        <FTList></FTList>
      </Suspense>
    </main>
  );
}
