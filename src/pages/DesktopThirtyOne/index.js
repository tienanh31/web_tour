import React from "react";

import { Column, Stack, Text, Row, CheckBox, Img, Button } from "components";

const DesktopThirtyOnePage = () => {
  return (
    <>
      <Column className="bg-orange_50_cc font-tirobangla items-center mx-[auto] lg:p-[31px] xl:p-[35px] 2xl:p-[40px] 3xl:p-[48px] w-[100%]">
        <Stack className="lg:h-[1057px] xl:h-[1209px] 2xl:h-[1359px] 3xl:h-[1631px] w-[78%]">
          <Column className="absolute bg-white_A700 border-bw3 border-solid border-white_A700 bottom-[0] lg:p-[49px] xl:p-[56px] 2xl:p-[63px] 3xl:p-[75px] rounded-radius32 shadow-bs4 w-[100%]">
            <Text className="font-normal font-tirobangla lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] not-italic lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-teal_300 w-[auto]">
              Confirm Informations
            </Text>
            <Text className="font-normal font-tirobangla italic lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-deep_orange_500 w-[auto]">
              Welcome, Nguyen Van A
            </Text>
            <Text className="font-normal font-tirobangla lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-deep_orange_500 w-[auto]">
              Enter your personal data
            </Text>
            <Text className="font-normal font-tirobangla lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-gray_500 w-[auto]">
              Gender
            </Text>
            <Row className="font-tirobangla items-center lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[58%]">
              <CheckBox
                className="lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] mt-[1px]"
                inputClassName="h-[40.83px] mr-[5px] w-[40.83px]"
                name="bx"
                label=""
                variant="FillDeeporange5021_2"
              ></CheckBox>
              <Text className="font-normal mb-[1px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] not-italic lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-deep_orange_500 w-[auto]">
                Male
              </Text>
              <CheckBox
                className="lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[142px] xl:ml-[162px] 2xl:ml-[183px] 3xl:ml-[219px] mt-[1px]"
                inputClassName="h-[40.83px] mr-[5px] w-[40.83px]"
                name="bx One"
                label=""
                variant="FillDeeporange5021_2"
              ></CheckBox>
              <Text className="font-normal mb-[1px] lg:ml-[24px] xl:ml-[27px] 2xl:ml-[31px] 3xl:ml-[37px] not-italic lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-deep_orange_500 w-[auto]">
                Female
              </Text>
            </Row>
            <Text className="font-normal font-tirobangla lg:mt-[39px] xl:mt-[45px] 2xl:mt-[51px] 3xl:mt-[61px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-gray_500 w-[auto]">
              Birthday
            </Text>
            <Row className="font-baloo items-center lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[98%]">
              <Row className="bg-white_A700 border-4 border-deep_orange_500 border-solid items-center justify-center lg:p-[24px] xl:p-[27px] 2xl:p-[31px] 3xl:p-[37px] rounded-radius15 w-[27%]">
                <Text className="font-semibold lg:ml-[31px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] mt-[2px] lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-deep_orange_500 w-[auto]">
                  22
                </Text>
                <Img
                  src="images/img_arrowdown.svg"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[42px] xl:ml-[48px] 2xl:ml-[55px] 3xl:ml-[66px] mr-[3px] w-[21%]"
                  alt="arrowdown"
                />
              </Row>
              <Text className="font-normal mb-[2px] lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] not-italic xl:text-[106px] 2xl:text-[120px] 3xl:text-[144px] lg:text-[93px] text-deep_orange_500 w-[auto]">
                /
              </Text>
              <Row className="bg-white_A700 border-4 border-deep_orange_500 border-solid items-center justify-end lg:ml-[21px] xl:ml-[24px] 2xl:ml-[28px] 3xl:ml-[33px] lg:p-[22px] xl:p-[25px] 2xl:p-[29px] 3xl:p-[34px] rounded-radius15 w-[27%]">
                <Text className="font-semibold mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-deep_orange_500 w-[auto]">
                  09
                </Text>
                <Img
                  src="images/img_arrowdown.svg"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] w-[21%]"
                  alt="arrowdown One"
                />
              </Row>
              <Text className="font-normal lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] mt-[2px] not-italic xl:text-[106px] 2xl:text-[120px] 3xl:text-[144px] lg:text-[93px] text-deep_orange_500 w-[auto]">
                /
              </Text>
              <Row className="bg-white_A700 border-4 border-deep_orange_500 border-solid items-center justify-end lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:p-[19px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius15 w-[27%]">
                <Text className="font-semibold mb-[1px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-deep_orange_500 w-[auto]">
                  2022
                </Text>
                <Img
                  src="images/img_arrowdown.svg"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] w-[20%]"
                  alt="arrowdown Two"
                />
              </Row>
            </Row>
            <Text className="font-normal font-tirobangla lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-gray_500 w-[auto]">
              City of Residence
            </Text>
            <Button
              className="font-normal font-tirobangla lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-center w-[98%]"
              size="3xl"
              variant="OutlineDeeporange500"
            >
              Enter City of Residence
            </Button>
            <Button
              className="font-baloo1 font-normal lg:mb-[64px] xl:mb-[73px] 2xl:mb-[83px] 3xl:mb-[99px] 3xl:mt-[111px] lg:mt-[72px] xl:mt-[82px] 2xl:mt-[93px] not-italic lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-center text-white_A700 w-[98%]"
              size="2xl"
              variant="OutlineDeeporange5001_2"
            >
              Complete
            </Button>
          </Column>
          <Img
            src="images/img_rectangle1.png"
            className="absolute lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] inset-x-[0] mx-[auto] top-[0] w-[50%]"
            alt="RectangleSixtyFour"
          />
        </Stack>
        <Text className="font-normal lg:mb-[42px] xl:mb-[48px] 2xl:mb-[55px] 3xl:mb-[66px] lg:mt-[49px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-teal_300 w-[auto]">
          © 2022 besttravel. All rights reserved
        </Text>
      </Column>
    </>
  );
};

export default DesktopThirtyOnePage;
