/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
import Student from "./Student";
export default function StudentView(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="524px"
      height="297px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "StudentView")}
    >
      <View
        width="351px"
        height="21px"
        position="absolute"
        top="14px"
        left="calc(50% - 175.5px - 63.5px)"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "StudentListHeader")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="25px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="30px"
          height="29px"
          position="absolute"
          top="0px"
          left="311px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="ID"
          {...getOverrideProps(overrides, "ID")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="25px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="0px"
          left="134px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Last Name"
          {...getOverrideProps(overrides, "Last Name")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="25px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="First Name"
          {...getOverrideProps(overrides, "First Name")}
        ></Text>
      </View>
      <Student
        width="387px"
        height="24px"
        position="absolute"
        top="44px"
        left="calc(50% - 193.5px - 45.5px)"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Student")}
      ></Student>
    </View>
  );
}
