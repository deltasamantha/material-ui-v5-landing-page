import { Place } from "../models/Place";

export const placesData: Array<Place> = [{
    image: `${process.env.PUBLIC_URL}/assets/beach.jpg`,
    name: "Beaches",
    description: "We have world famous golden beaches more than 3000km stretches around the island"
},{
    image: `${process.env.PUBLIC_URL}/assets/island.jpg`,
    name: "Islands",
    description: "We have more than 1300 islands both in sea and in various revers and streams within the country"
}];