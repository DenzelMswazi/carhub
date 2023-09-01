"use state";

import { useRouter } from "next/navigation";

import { ShowMoreProps } from "@types";
import { updateSearchParams } from "@utils";
import { CustomButton } from "@components";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    // Calculate the new limit based on the page number and navigation type
    const newLimit = (pageNumber + 1) * 10;

    // Update the 'limit' search parameter in the URL with new value
    const newpathname = updateSearchParams("limit", `${newLimit}`);

    router.push(newpathname);
  };
};
