import React, { useState } from "react";
import { ethers } from "ethers";
import { Settings } from "assets/icons";
import {
  useAccount,
  useBalance,
  usePrepareContractWrite,
  useContractReads,
} from "wagmi";
import { motion, AnimatePresence } from "framer-motion";
import One from "assets/topnfts/1.png";
import Two from "assets/topnfts/2.png";
import Three from "assets/topnfts/3.png";
import Four from "assets/topnfts/4.png";
import Five from "assets/topnfts/5.png";
import Six from "assets/topnfts/6.png";
import Seven from "assets/topnfts/7.png";
import "./slider.css";
import Avatar from "components/Avatar";
import Collapse from "components/Collapse";

const featuredImages = [
  { image: One },
  { image: Two },
  { image: Three },
  { image: Four },
  { image: Five },
  { image: Six },
  { image: Seven },
  { image: Seven },
  { image: Seven },
  { image: One },
  { image: Two },
  { image: Three },
  { image: Four },
  { image: Five },
  { image: Six },
  { image: Seven },
  { image: Seven },
  { image: Seven },
];

export default function Home() {
  return (
    <div className=" flex-col text-center justify-items-center space-y-12">
      <div className="max-w-2xl  mx-auto">
        <p id="top" className="text-3xl mt-20 font-bold">
          Acid Monkeys is a dark age comic inspired PFP collection of 5,000
          escaped lab experiments on Solana blockchain.
        </p>
        <p className="text-xl font-semibold mt-12">
          The project is backed by a strong focus on lore and community.
          Designed and cultivated by ex-Marvel artists.
        </p>
      </div>
      <div className="space-x-4 mt-12">
        <button className="btn btn-primary">Mint a monkey</button>
        <button className="btn btn-secondary">Marketplace</button>
      </div>
      <div className="slider ">
        <div className="slide-track">
          {featuredImages.map((image, i) => (
            <div className="slide">
              <img className="sli" src={image.image} />
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 max-w-5xl mx-auto">
        <img src={One} className="rounded-xl w-96" />
        <div className="px-4">
          <p className="text-5xl font-bold mb-6">ACID MONKEYS</p>
          <p className="text-md">
            Somewhere in the humid and DANK lab, kidnapped monkeys were
            restrained in foul smelling cages. Ghastly experiments were being
            performed to extract their ACID. While most of them suffered endless
            torment, a few monkeys hid themselves. The monkeys chewed and clawed
            on its chains in what seemed to be futile resistance. Until one day,
            the chains rusted enough for the monkeys to break free.The berserk
            monkeys rampaged the lab amidst their long awaited freedom. Vials of
            incomplete chemicals were knocked over, mutating them into ACID
            MONKEYS with powers that were unheard of.5,000 monkeys escaped from
            the Mad Scientist’s lab.
          </p>
          <button className="btn btn-primary mt-6">Mint Monkey</button>
        </div>
      </div>
      <div id="team">
        <p className="text-5xl font-bold mb-6">TEAM</p>
        <div className="flex justify-center space-x-4">
          <Avatar
            imageUrl="https://placeimg.com/192/192/people"
            name="Alfredo"
          />
          <Avatar
            imageUrl="https://placeimg.com/192/192/people"
            name="Snoop Dogg"
          />
          <Avatar imageUrl="https://placeimg.com/192/192/people" name="Test" />
        </div>
        <div className="flex justify-center space-x-4">
          <Avatar
            imageUrl="https://placeimg.com/192/192/people"
            name="Snoop Dogg"
          />
          <Avatar imageUrl="https://placeimg.com/192/192/people" name="Test" />
        </div>
      </div>

      <div id="faq" className="max-w-5xl mx-auto">
        <p className="text-5xl font-bold mb-6">Frequently Asked Questions</p>
        <Collapse title="Where i can buy Acid Monkey?">
          You can mint it on this website after official mint date or you can
          buy it on OpenSea afterwards.
        </Collapse>
        <Collapse title="Where i can buy Acid Monkey?">
          You can mint it on this website after official mint date or you can
          buy it on OpenSea afterwards.
        </Collapse>
        <Collapse title="Where i can buy Acid Monkey?">
          You can mint it on this website after official mint date or you can
          buy it on OpenSea afterwards.
        </Collapse>
        <Collapse title="Where i can buy Acid Monkey?">
          You can mint it on this website after official mint date or you can
          buy it on OpenSea afterwards.
        </Collapse>
        <Collapse title="Where i can buy Acid Monkey?">
          You can mint it on this website after official mint date or you can
          buy it on OpenSea afterwards.
        </Collapse>
        <Collapse title="Where i can buy Acid Monkey?">
          You can mint it on this website after official mint date or you can
          buy it on OpenSea afterwards.
        </Collapse>
        <Collapse title="Where i can buy Acid Monkey?">
          You can mint it on this website after official mint date or you can
          buy it on OpenSea afterwards.
        </Collapse>
      </div>
    </div>
  );
}
