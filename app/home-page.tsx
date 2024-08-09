"use client";

import { ICatBreed, IDogBreed } from "@/types";
import { Card as DogCard } from "@/features/dogs";
import { Card as CatCard } from "@/features/cats";

type Props = {
  dogBreeds: IDogBreed[];
  catBreeds: ICatBreed[];
};

export default function HomePage({ dogBreeds, catBreeds }: Props) {
  return (
    <div className="flex flex-wrap gap-5 justify-center">
      {dogBreeds.map((dogBreed) => (
        <div className="flex-shrink-0" key={dogBreed.id}>
          <DogCard breed={dogBreed} />
        </div>
      ))}
      {catBreeds.map((catBreed) => (
        <div className="flex-shrink-0" key={catBreed.id}>
          <CatCard breed={catBreed} />
        </div>
      ))}
    </div>
  );
}
