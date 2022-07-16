/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, SwitchField, Text, View } from "@aws-amplify/ui-react";
export default function ReleaseFrame(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="320px"
      height="568px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "ReleaseFrame")}
    >
      <Button
        display="flex"
        gap="0"
        position="absolute"
        top="100px"
        left="calc(50% - 67.5px - 1.5px)"
        direction="row"
        justifyContent="center"
        alignItems="center"
        border="1px SOLID rgba(174,179,183,1)"
        borderRadius="5px"
        padding="8px 16px 8px 16px"
        size="default"
        isDisabled={false}
        variation="default"
        children="Release Spot"
        {...getOverrideProps(overrides, "ToggleButton")}
      ></Button>
      <SwitchField
        display="flex"
        gap="8px"
        position="absolute"
        top="166px"
        left="calc(50% - 66px - 0px)"
        direction="row"
        justifyContent="center"
        alignItems="center"
        padding="8px 8px 8px 8px"
        label="Reserved"
        size="default"
        defaultChecked={true}
        isDisabled={false}
        labelPosition="start"
        {...getOverrideProps(overrides, "Reserved")}
      ></SwitchField>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="16px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="61px"
        left="calc(50% - 42.5px - 0.5px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="RESERVED"
        {...getOverrideProps(overrides, "Status")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="16px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="30px"
        left="calc(50% - 30.5px - 0.5px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="7/14/22"
        {...getOverrideProps(overrides, "Date")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="16px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="0px"
        left="calc(50% - 37px - 0px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="John Doe"
        {...getOverrideProps(overrides, "StudentName")}
      ></Text>
    </View>
  );
}
