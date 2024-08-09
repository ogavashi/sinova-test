import { Details } from "@/features/cats";
import { ICatBreed } from "@/types";

type Props = {
  breed: ICatBreed;
};

export default function BreedPage({ breed }: Props) {
  return <Details breed={breed} />;
}
