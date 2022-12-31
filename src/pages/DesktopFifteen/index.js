import React from "react";

import { Column, Stack, Text, Row, Img, Button } from "components";

const DesktopFifteenPage = () => {
  return (
    <>
      <Column className="bg-orange_50_cc font-tirobangla items-center mx-[auto] lg:p-[31px] xl:p-[35px] 2xl:p-[40px] 3xl:p-[48px] w-[100%]">
        <Stack className="3xl:h-[1181px] lg:h-[765px] xl:h-[875px] 2xl:h-[984px] w-[78%]">
          <Column className="absolute bg-white_A700 border-bw3 border-solid border-white_A700 bottom-[0] justify-center lg:p-[48px] xl:p-[55px] 2xl:p-[62px] 3xl:p-[74px] rounded-radius32 shadow-bs4 w-[100%]">
            <Text className="font-normal font-tirobangla ml-[1px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-teal_300 w-[auto]">
              FORGOT PASSWORD ?
            </Text>
            <Row className="bg-deep_orange_50 font-tirobangla justify-end ml-[1px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius15 w-[98%]">
              <Img
                src="images/img_info.svg"
                className="lg:h-[32px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:w-[31px] xl:w-[36px] 2xl:w-[41px] 3xl:w-[49px]"
                alt="info"
              />
              <Column className="lg:mb-[22px] xl:mb-[25px] 2xl:mb-[29px] 3xl:mb-[34px] lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[90%]">
                <Img
                  src="images/img_close.svg"
                  className="lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:ml-[606px] xl:ml-[693px] 2xl:ml-[780px] 3xl:ml-[936px] lg:w-[20px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                  alt="close"
                />
                <Text className="font-normal leading-[normal] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-deep_orange_500 w-[100%]">
                  The verification code has been sent to:
                  khiemhuy1722002@gmail.com . Please enter the verification
                  code.
                </Text>
              </Column>
            </Row>
            <Text className="font-normal font-tirobangla lg:mt-[45px] xl:mt-[52px] 2xl:mt-[59px] 3xl:mt-[70px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-gray_500 w-[auto]">
              Verification Codes
            </Text>
            <Button
              className="font-normal font-tirobangla ml-[1px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-center w-[98%]"
              size="3xl"
              variant="OutlineDeeporange500"
            >
              Enter Auth Code
            </Button>
            <Button
              className="font-baloo1 font-normal lg:mb-[18px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[28px] ml-[1px] lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] not-italic lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-center text-white_A700 w-[98%]"
              size="2xl"
              variant="OutlineDeeporange5001_2"
            >
              Accuracy
            </Button>
          </Column>
          <Img
            src="images/img_rectangle1.png"
            className="absolute lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] inset-x-[0] mx-[auto] top-[0] w-[50%]"
            alt="RectangleSixtyFour"
          />
        </Stack>
        <Text className="font-normal lg:mb-[128px] xl:mb-[146px] 2xl:mb-[165px] 3xl:mb-[198px] lg:mt-[45px] xl:mt-[51px] 2xl:mt-[58px] 3xl:mt-[69px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-teal_300 w-[auto]">
          © 2022 besttravel. All rights reserved
        </Text>
      </Column>
    </>
  );
};

export default DesktopFifteenPage;
