'use client';

import { useState } from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';

function Icon({ open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${open ? 'rotate-180' : ''} h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}
const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};

export default function ServiceDetails() {
  const [openAcc1, setOpenAcc1] = useState(false);
  const [openAcc2, setOpenAcc2] = useState(false);
  const [openAcc3, setOpenAcc3] = useState(false);
  const [openAcc4, setOpenAcc4] = useState(false);
  const [openAcc5, setOpenAcc5] = useState(false);
  const [openAcc6, setOpenAcc6] = useState(false);

  return (
    <section className="px-4 w-full max-w-screen-lg">
      <h2 className="text-4xl font-bold py-8">
        Dette er <span className="text-primary">inkludert</span> i flyttevasken
      </h2>

      <Accordion
        open={openAcc1}
        animate={CUSTOM_ANIMATION}
        icon={<Icon open={openAcc1} />}
      >
        <AccordionHeader onClick={() => setOpenAcc1(!openAcc1)}>
          Generelt for alle rom:
        </AccordionHeader>
        <AccordionBody>
          <ul className="text-lg text-gray-800">
            <li className="">
              <span className="font-bold text-black">Møbler og eiendeler:</span>
              Sørg for at alt er fjernet før vi begynner. Hvis noen møbler skal
              overtas av den nye eieren, prøv å få dem ut før vask.
            </li>

            <li>
              <span className="font-bold text-black">Flater: </span>
              Vi fjerner støv og flekker fra alle tilgjengelige overflater.
            </li>

            <li>
              <span className="font-bold text-black">Vegger og tak: </span>
              Vi tørrmopper forsiktig for å unngå skader på maling eller tapet.
            </li>

            <li>
              <span className="font-bold text-black">Gulv: </span> Støvsuger og
              mopper gulv (tilpasset gulvmaterialet).
            </li>

            <li>
              <span className="font-bold text-black">Dører og karmer: </span>
              Rengjøring av dører, dørkarmer, lysbrytere, og lister.
            </li>

            <li>
              <span className="font-bold text-black">Vinduer: </span> Rengjøring
              av vinduer både innvendig og utvendig (der det er mulig uten
              stige/lift).
            </li>
          </ul>
        </AccordionBody>
      </Accordion>

      <Accordion
        open={openAcc2}
        animate={CUSTOM_ANIMATION}
        icon={<Icon open={openAcc2} />}
      >
        <AccordionHeader onClick={() => setOpenAcc2(!openAcc2)}>
          Kjøkken:
        </AccordionHeader>
        <AccordionBody>
          <ul className="text-lg text-gray-800">
            <li className="">
              <span className="font-bold text-black">
                Kjøkkenskap og skuffer:{' '}
              </span>
              Vask både innvendig og utvendig.
            </li>

            <li>
              <span className="font-bold text-black">Hvitevarer: </span>
              Utvendig rengjøring av komfyr, kjøleskap, og mikrobølgeovn
              (innvendig vask kan bestilles separat).
            </li>

            <li>
              <span className="font-bold text-black">
                Benkeplater og vask:{' '}
              </span>
              Rengjøring av benkeplater, vask, og fliser.
            </li>

            <li>
              <span className="font-bold text-black">Kjøkkenvifte: </span> Vask
              av kjøkkenvifte (filter rengjøres ikke).
            </li>
          </ul>
        </AccordionBody>
      </Accordion>

      <Accordion
        open={openAcc3}
        animate={CUSTOM_ANIMATION}
        icon={<Icon open={openAcc3} />}
      >
        <AccordionHeader onClick={() => setOpenAcc3(!openAcc3)}>
          Bad:{' '}
        </AccordionHeader>
        <AccordionBody>
          <ul className="text-lg text-gray-800">
            <li className="">
              <span className="font-bold text-black">Rengjøring: </span>
              Vask av toalett, vask, dusj eller badekar, og fliser.
            </li>

            <li>
              <span className="font-bold text-black">Speil og skap: </span>
              Rengjøring av speil og skap, både innvendig og utvendig.
            </li>

            <li>
              <span className="font-bold text-black">Sluk: </span>
              Tømming og rensing av alle sluk (badekar må flyttes for å nå
              sluket bak).
            </li>
          </ul>
        </AccordionBody>
      </Accordion>

      <Accordion
        open={openAcc4}
        animate={CUSTOM_ANIMATION}
        icon={<Icon open={openAcc4} />}
      >
        <AccordionHeader onClick={() => setOpenAcc4(!openAcc4)}>
          Soverom:{' '}
        </AccordionHeader>
        <AccordionBody>
          <ul className="text-lg text-gray-800">
            <li className="">
              <span className="font-bold text-black">Vegger og tak: </span>
              Tørrmopping av vegger og tak.
            </li>

            <li>
              <span className="font-bold text-black">Skap og hyller: </span>
              Rengjøring av skap og hyller.
            </li>

            <li>
              <span className="font-bold text-black">Gulv: </span>
              Støvsuging og mopping av gulv.
            </li>
          </ul>
        </AccordionBody>
      </Accordion>

      <Accordion
        open={openAcc5}
        animate={CUSTOM_ANIMATION}
        icon={<Icon open={openAcc5} />}
      >
        <AccordionHeader onClick={() => setOpenAcc5(!openAcc5)}>
          Ekstra tjenester (kan bestilles separat):{' '}
        </AccordionHeader>
        <AccordionBody>
          <ul className="text-lg text-gray-800">
            <li className="">
              <span className="font-bold text-black">Hvitevarer: </span>
              Rengjøring av kjøleskap, fryser, og komfyr (inkluderer også en
              standard hvitevarevask).
            </li>

            <li>
              <span className="font-bold text-black">
                Utvendig vindusvask:{' '}
              </span>
              Kan bestilles, inkludert balkong/terrasse og garasje.
            </li>

            <li>
              <span className="font-bold text-black">
                Balkong og terrasse:{' '}
              </span>
              Rengjøring etter behov.
            </li>
          </ul>
        </AccordionBody>
      </Accordion>

      <Accordion
        open={openAcc6}
        animate={CUSTOM_ANIMATION}
        icon={<Icon id={6} open={openAcc6} />}
      >
        <AccordionHeader onClick={() => setOpenAcc6(!openAcc6)}>
          Hva som ikke er inkludert:{' '}
        </AccordionHeader>
        <AccordionBody>
          <ul className="text-lg text-gray-800">
            <li className="">
              <span className="font-bold text-black">Post-renovering: </span>
              Rengjøring etter oppussing og byggestøv.
            </li>

            <li>
              <span className="font-bold text-black">Spesialrengjøring: </span>
              Ikke inkludert er fjerning av ekstreme flekker, rengjøring av
              ventilatorfilter, persienner, og dyprens av tepper eller sluk.
            </li>

            <li>
              <span className="font-bold text-black">Tunge møbler: </span>
              Flytting av tunge møbler eller hvitevarer.
            </li>
          </ul>
        </AccordionBody>
      </Accordion>
    </section>
  );
}
