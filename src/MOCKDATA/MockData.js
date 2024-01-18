import { ReactComponent as PackageSvg } from "../assets/svg/package.svg";
import { ReactComponent as PackageSvgActive } from "../assets/svg/packageactive.svg";
import { ReactComponent as Paws } from "../assets/svg/paws.svg";
import { ReactComponent as PawsActive } from "../assets/svg/pawsactive.svg";
export const jobTypeMockData = [
  {
    id: 1,
    name: "pets",
    uri: { Paws },
    actUri: { PawsActive },
  },
  {
    id: 2,
    name: "goods",
    uri: { PackageSvg },
    actUri: { PackageSvgActive },
  },
  {
    id: 3,
    name: "electronics",
    uri: { PackageSvg },
    actUri: { PackageSvgActive },
  },
];
