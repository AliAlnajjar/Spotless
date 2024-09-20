'use client';
import Image from 'next/image';
import { useState } from 'react';

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';

import { Slider } from '@material-tailwind/react';

export default function Hero() {
  const [apartmentSize, setApartmentSize] = useState(0);

  return (
    <section className="flex flex-col  items-center lg:flex-row w-full max-w-screen-2xl p-4 font-sans-serif">
      <div class="relative basis-1/2 ">
        <h1 className=" lg:text-[3rem] text-3xl  lg:text-left text-center font-bold leading-normal	">
          Flyttevask med
          <span className="text-primary"> 100%&nbsp;fornøydgaranti </span>
        </h1>
        <p className=" lg:py-8 py-4 lg:text-xl text-lg  lg:text-left text-center text-gray-900">
          Grundig utvask av bolig etter utflytting - vi tar alle kriker og
          kroker. La oss ta flyttevasken for deg og sørge at alt blir skinnende
          rent.
        </p>

        <Card
          shadow={false}
          className="mt-6 border border-gray-400 rounded-xl outline-1 bg-hero-pattern"
        >
          <CardBody>
            <div className="">
              <p className=" pb-4 text-l text-black">
                Angi boligens størrelse for å få et pristilbud
              </p>

              <p className="pb-2 text-gray-500"> størrelse (kvm)</p>
            </div>
            <div className="">
              <Slider
                color="green"
                step={10}
                defaultValue={0}
                onChange={(e) => {
                  e.preventDefault();
                  setApartmentSize(e.currentTarget.value);
                }}
              />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <div className="flex flex-row justify-around  items-center">
              <div className="text-m py-4  text-gray-500 ">
                fra
                <span className="text-5xl text-secondary font-mono font-bold px-2">
                  {getThePrice(apartmentSize)},-
                </span>
              </div>
              <div>
                <Button variant="filled" size="lg" className="bg-primary ">
                  Få pristilbud
                </Button>
              </div>
            </div>
          </CardFooter>
        </Card>
        <p className="text-[12px] py-2 text-gray-600 ">
          *Vær oppmerksom på at prisene kun er anslag og ikke endelige. Ved å be
          om et uforpliktende tilbud tilpasser vi tjenesten og beregner prisen
          basert på opplysningene du gir oss.
        </p>
      </div>

      <div class=" relative basis-1/2 pt-16 lg:pt-0">
        <Image
          src="/images/hero-section-image.svg"
          alt="Hero Image"
          width={700}
          height={700}
          className="object-cover"
          priority={true} // Preload the image for performance
        />
      </div>
    </section>
  );

  function getThePrice(size) {
    console.log(size);
    switch (size) {
      case 20:
        return 2900;

      case 30:
        return 3500;

      case 40:
        return 4000;

      case 50:
        return 5400;

      case 60:
        return 5800;

      case 70:
        return 6000;

      case 80:
        return 6300;

      case 90:
        return 6500;

      case 100:
        return 6800;
      case 110:
        return 7200;
      case 120:
        return 7600;
      default:
        return 0;
    }
  }
}
