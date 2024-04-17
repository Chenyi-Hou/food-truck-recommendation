import { getFTById } from "@/app/_actions";
import { Props } from "@/app/_type";
import { Button } from "@/components/ui/button";

export default async function Page({ params: { id }, searchParams }: Props) {
  const FTDetail = await getFTById(id);
  return (
    <div className="px-4 py-6 md:py-12 lg:py-16">
      <div className="flex flex-col gap-4 md:gap-8 max-w-6xl mx-auto items-start">
        <div className="grid gap-2">
          <h1 className="font-bold text-2xl sm:text-4xl">
            {FTDetail?.applicant}
          </h1>
        </div>
        <div className="grid gap-2">
          <p className="text-sm md:text-base">
            <span className="font-bold">Location: </span>
            {FTDetail?.locationDescription}
          </p>
          <p className="text-sm md:text-base">
            <span className="font-bold">Hours: </span>
            {FTDetail?.daysHours || "Not Released"}
          </p>
        </div>
        <div className="grid gap-2">
          <h2 className="font-bold text-xl">Menu</h2>
          <div className="grid gap-4 sm:gap-8 md:gap-6 lg:gap-12">
            <div className="flex items-start gap-4">
              <img
                alt="Taco"
                className="rounded-lg object-cover border border-gray-200 w-24 dark:border-gray-800"
                height={100}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "100/100",
                  objectFit: "cover",
                }}
                width={100}
              />
              <div className="grid gap-1">
                <h3 className="font-semibold">Taco</h3>
                <p className="text-sm text-gray-100 dark:text-gray-800">
                  $2.99
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <img
                alt="Burrito"
                className="rounded-lg object-cover border border-gray-200 w-24 dark:border-gray-800"
                height={100}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "100/100",
                  objectFit: "cover",
                }}
                width={100}
              />
              <div className="grid gap-1">
                <h3 className="font-semibold">Burrito</h3>
                <p className="text-sm text-gray-100 dark:text-gray-800">
                  $5.99
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <img
                alt="Quesadilla"
                className="rounded-lg object-cover border border-gray-200 w-24 dark:border-gray-800"
                height={100}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "100/100",
                  objectFit: "cover",
                }}
                width={100}
              />
              <div className="grid gap-1">
                <h3 className="font-semibold">Quesadilla</h3>
                <p className="text-sm text-gray-100 dark:text-gray-800">
                  $4.99
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-2">
          <h2 className="font-bold text-xl">Reviews</h2>
          <div className="grid gap-4 sm:gap-8 md:gap-6 lg:gap-12">
            <div className="grid gap-2">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-0.5">
                  <StarIcon className="w-5 h-5 fill-gray-900 dark:fill-gray-50" />
                  <StarIcon className="w-5 h-5 fill-gray-900 dark:fill-gray-50" />
                  <StarIcon className="w-5 h-5 fill-gray-900 dark:fill-gray-50" />
                  <StarIcon className="w-5 h-5 fill-gray-100 stroke-gray-500 dark:fill-gray-800 dark:stroke-gray-400" />
                  <StarIcon className="w-5 h-5 fill-gray-100 stroke-gray-500 dark:fill-gray-800 dark:stroke-gray-400" />
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Posted on 22nd August 2023
                </p>
              </div>
              <p>
                The Tasty Tacos truck serves the most authentic Mexican street
                food I&apos;ve had outside of Mexico. Their tacos are fresh and
                bursting with flavor. I highly recommend trying their al pastor
                and barbacoa tacos. The service is always friendly, and the
                prices are reasonable. It&apos;s a must-visit for any taco
                lover.
              </p>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-0.5">
                  <StarIcon className="w-5 h-5 fill-gray-900 dark:fill-gray-50" />
                  <StarIcon className="w-5 h-5 fill-gray-900 dark:fill-gray-50" />
                  <StarIcon className="w-5 h-5 fill-gray-900 dark:fill-gray-50" />
                  <StarIcon className="w-5 h-5 fill-gray-100 stroke-gray-500 dark:fill-gray-800 dark:stroke-gray-400" />
                  <StarIcon className="w-5 h-5 fill-gray-100 stroke-gray-500 dark:fill-gray-800 dark:stroke-gray-400" />
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Posted on 15th July 2023
                </p>
              </div>
              <p>
                I stumbled upon the Tasty Tacos food truck last week, and
                I&apos;m glad I did. Their food is simply outstanding. The carne
                asada fries are a revelation, loaded with tender meat, cheese,
                and fresh salsa. The truck&apos;s location is convenient, and
                the staff is always polite. I&apos;ll definitely be returning to
                try more of their offerings.
              </p>
            </div>
          </div>
        </div>
        <div className="grid gap-2 md:gap-4">
          <Button size="lg">
            <MapIcon className="w-4 h-4 mr-2" />
            View on map
          </Button>
        </div>
      </div>
    </div>
  );
}

function MapIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
      <line x1="9" x2="9" y1="3" y2="18" />
      <line x1="15" x2="15" y1="6" y2="21" />
    </svg>
  );
}

function StarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
