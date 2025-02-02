"use client";

import { NavBarProps } from "@/components/helpers/interfaces/navbar";

import { fetcher } from "@/utils/fetcher";
import useSWR from "swr";

export default function ProductsContainer() {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_HOST}/navbar`,
    fetcher
  );
  const navItems = data as NavBarProps;

  if (error) {
    return <div>Error loading data</div>;
  }

  if (isLoading) {
    return <div>Loading data...</div>;
  }
  return (
    <div>
      {/* Your code here .... */}
      {/* Get data from API */}
      {navItems ? <p>{navItems.name}</p> : ""}
    </div>
  );
}