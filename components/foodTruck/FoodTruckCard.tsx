import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FoodTruck } from "@prisma/client";
import Link from "next/link";

export default function FoodTruckCard(props: FoodTruck) {
  return (
    <Link href={`/detail/${props.locationId}`}>
      <Card className="aspect-[4/3]">
        <CardHeader>
          <CardTitle>{props.applicant}</CardTitle>
          <CardDescription>{props.locationDescription}</CardDescription>
        </CardHeader>
        <CardContent>
          <p title={props.foodItems} className="line-clamp-2">
            {props.foodItems}
          </p>
        </CardContent>
        <CardFooter>
          <p>Check Now!</p>
        </CardFooter>
      </Card>
    </Link>
  );
}
