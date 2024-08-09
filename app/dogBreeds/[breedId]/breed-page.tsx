import { Details } from "@/features/dogs";
import { IDogBreed } from "@/types";

type Props = {
  breed: IDogBreed;
};

export default function BreedPage({ breed }: Props) {
  return <Details breed={breed} />;
}
