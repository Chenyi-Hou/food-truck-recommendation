"use client";

import { getAllFT, getPageFT } from "@/app/_actions";
import FoodTruckCard from "@/components/foodTruck/FoodTruckCard";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Loader } from "lucide-react";
export default function Component() {
  const { ref, inView } = useInView();
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["FOOD_TRUCK"],
    queryFn: ({ pageParam }) => getPageFT(pageParam),
    initialPageParam: 2,
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  });

  useEffect(() => {
    if (inView && !isFetching) {
      fetchNextPage();
    }
  }, [inView, isFetching, fetchNextPage]);
  return (
    <>
      {data?.pages.map((page) => {
        return page.data.map((ft) => {
          return (
            <div key={ft.locationId} className="">
              <FoodTruckCard {...ft}></FoodTruckCard>
            </div>
          );
        });
      })}
      <div ref={ref} className="w-full flex items-center content-center">
        <Loader className="animate-spin" />
      </div>
    </>
  );
}
