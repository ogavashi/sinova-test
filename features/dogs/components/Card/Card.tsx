"use client";

import { ROUTES } from "@/constants/routes";
import { IDogBreed } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

interface CardProps {
  breed: IDogBreed;
}

export const Card = ({ breed }: CardProps) => {
  const router = useRouter();

  const temperamentList = breed.temperament
    ? breed.temperament.split(",").map((t) => t.trim())
    : [];

  const handleClickViewMore = useCallback(() => {
    router.push(`${ROUTES.VIEW_DOG_BREED}${breed.id}`);
  }, [breed.id, router]);

  return (
    <div className="card card-compact bg-white w-96 shadow-lg rounded-lg overflow-hidden flex flex-col">
      <figure className="relative">
        <Image
          src={breed?.imageUrl || ""}
          width={256}
          height={256}
          alt={breed.name}
          className="object-cover w-full h-64"
        />
      </figure>
      <div className="card-body flex flex-col flex-grow p-6">
        <h2 className="text-xl font-bold mb-2">{breed.name}</h2>
        <p className="text-gray-600 mb-4">
          {breed.life_span ? `Lifespan: ${breed.life_span}` : "Lifespan unknown"}
        </p>
        <div className="mb-4 flex flex-col flex-grow">
          <p className="text-gray-600 mb-2">Temperament:</p>
          <div className="flex flex-wrap gap-2 min-h-20">
            {temperamentList.map((trait, index) => (
              <span key={index} className="badge badge-secondary">
                {trait}
              </span>
            ))}
          </div>
        </div>

        <div className="text-sm text-gray-500 mb-4">
          <p>
            <strong>Height:</strong> {breed?.height?.metric || "?"} cm
          </p>
        </div>

        <div className="text-sm text-gray-500 mb-4">
          <p>
            <strong>Weight:</strong> {breed?.weight?.metric || "?"} cm
          </p>
        </div>

        <div className="flex flex-col flex-grow justify-end">
          <button onClick={handleClickViewMore} className="btn btn-primary w-full">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};
