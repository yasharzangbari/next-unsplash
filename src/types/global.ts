import { LocalesType } from "@constants/locales";
import { FC } from "react";
import { TFunction } from "react-i18next";
import { NextPage } from "next";

export type Language = LocalesType.FA | LocalesType.EN;

export type Translation = {
  translate: TFunction;
};

export type Component = FC<Translation & NextPage>;
