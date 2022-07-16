/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function DevinTestCard(props) {
  const { home, overrides, ...rest } = props;
  return (
    <View
      width="306px"
      height="315px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "DevinTestCard")}
    >
      <Image
        width="285px"
        height="158px"
        position="absolute"
        top="11px"
        left="11px"
        padding="0px 0px 0px 0px"
        src={home?.image_url}
        {...getOverrideProps(overrides, "Image")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="254px"
        height="39px"
        position="absolute"
        top="196px"
        left="20px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={home?.address}
        {...getOverrideProps(overrides, "Title")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="267px"
        height="49px"
        position="absolute"
        top="243px"
        left="20px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={home?.price}
        {...getOverrideProps(overrides, "Description")}
      ></Text>
    </View>
  );
}
