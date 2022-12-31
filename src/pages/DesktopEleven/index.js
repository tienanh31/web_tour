import React from "react";

import { Column, Stack, Text, Row, Img, Button } from "components";

const DesktopElevenPage = () => {
  return (
    <>
      <Column className="bg-orange_50_cc font-tirobangla items-center mx-[auto] lg:p-[31px] xl:p-[35px] 2xl:p-[40px] 3xl:p-[48px] w-[100%]">
        <Stack className="2xl:h-[1038px] 3xl:h-[1246px] lg:h-[807px] xl:h-[923px] w-[78%]">
          <Column className="absolute bg-white_A700 border-bw3 border-solid border-white_A700 bottom-[0] justify-end lg:p-[19px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius32 shadow-bs4 w-[100%]">
            <Text className="font-normal font-tirobangla lg:ml-[27px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] lg:mt-[39px] xl:mt-[45px] 2xl:mt-[51px] 3xl:mt-[61px] not-italic lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-teal_300 w-[auto]">
              ACCOUNT VERIFICATION
            </Text>
            <Row className="bg-deep_orange_50 font-tirobangla lg:ml-[28px] xl:ml-[32px] 2xl:ml-[37px] 3xl:ml-[44px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius15 w-[91%]">
              <Img
                src="images/img_info.svg"
                className="lg:h-[32px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:w-[31px] xl:w-[36px] 2xl:w-[41px] 3xl:w-[49px]"
                alt="info"
              />
              <Text className="font-normal leading-[normal] lg:mb-[14px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[21px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-deep_orange_500 w-[86%]">
                Verification code has been sent to:Khiemhuy1722002@gmail.com.
                Please enter the verification code.
              </Text>
              <Img
                src="images/img_close.svg"
                className="lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] lg:w-[20px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                alt="close"
              />
            </Row>
            <Text className="font-normal font-tirobangla lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] lg:mt-[45px] xl:mt-[52px] 2xl:mt-[59px] 3xl:mt-[70px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-gray_500 w-[auto]">
              Verification Codes
            </Text>
            <Button
              className="font-normal font-tirobangla lg:ml-[28px] xl:ml-[32px] 2xl:ml-[37px] 3xl:ml-[44px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-center w-[91%]"
              size="3xl"
              variant="OutlineDeeporange500"
            >
              Enter Auth Code
            </Button>
            <Button
              className="font-baloo1 font-normal lg:ml-[28px] xl:ml-[32px] 2xl:ml-[37px] 3xl:ml-[44px] lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] not-italic lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-center text-white_A700 w-[91%]"
              size="2xl"
              variant="OutlineDeeporange5001_2"
            >
              Accuracy
            </Button>
            <Row className="font-tirobangla justify-center lg:ml-[164px] xl:ml-[187px] 2xl:ml-[211px] 3xl:ml-[253px] lg:mt-[61px] xl:mt-[70px] 2xl:mt-[79px] 3xl:mt-[94px] w-[55%]">
              <Text className="font-normal mt-[3px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-gray_500 w-[auto]">
                Haven't received the code yet?
              </Text>
              <Text className="font-normal mb-[4px] lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-teal_300 w-[auto]">
                Send to
              </Text>
            </Row>
          </Column>
          <Img
            src="images/img_rectangle1.png"
            className="absolute lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] inset-x-[0] mx-[auto] top-[0] w-[50%]"
            alt="RectangleSixtyFour"
          />
        </Stack>
        <Text className="font-normal lg:mb-[105px] xl:mb-[120px] 2xl:mb-[136px] 3xl:mb-[163px] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-teal_300 w-[auto]">
          © 2022 besttravel. All rights reserved
        </Text>
      </Column>
    </>
  );
};

export default DesktopElevenPage;
