'use client';
import Image from 'next/image';

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';

import { Slider } from '@material-tailwind/react';

export default function AlwaysSatesfied() {
  return (
    <section className="w-full  bg-hero py-24 lg:px-0 px-4">
      <div className="flex flex-col-reverse  items-center lg:flex-row max-w-screen-2xl m-auto   font-sans-serif gap-x-16 gap-y-4">
        <div class=" relative basis-3/5 lg:pt-0">
          <Image
            src="/images/costumer-reviews.jpg"
            alt="Hero Image"
            width={1200}
            height={1200}
            className="object-cover"
            priority={true} // Preload the image for performance
          />
        </div>
        <div class="relative basis-2/5 ">
          <h2 className=" text-4xl font-bold leading-snug	">
            Alltid helt
            <span className="text-primary"> fornøyd</span>
          </h2>
          <p className=" py-8 text-xl text-gray-900">
            Vi har fornøydgaranti på alle tjenestene! Hvis du ikke er helt
            fornøyd med resultatet, gjør vi alt i vår makt for å rette det opp.
            Din tilfredshet betyr alt for oss!
          </p>
        </div>
      </div>
    </section>
  );
}
