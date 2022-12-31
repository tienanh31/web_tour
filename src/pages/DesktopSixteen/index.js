import React from "react";

import { Column, Stack, Text, Row, Img, Button } from "components";

const DesktopSixteenPage = () => {
  return (
    <>
      <Column className="bg-orange_50_cc font-tirobangla mx-[auto] lg:p-[31px] xl:p-[35px] 2xl:p-[40px] 3xl:p-[48px] w-[100%]">
        <Column className="items-center mx-[auto] w-[78%]">
          <Stack className="xl:h-[1002px] 2xl:h-[1127px] 3xl:h-[1352px] lg:h-[876px] w-[100%]">
            <Column className="absolute bg-white_A700 border-bw3 border-solid border-white_A700 bottom-[0] lg:p-[47px] xl:p-[54px] 2xl:p-[61px] 3xl:p-[73px] rounded-radius32 shadow-bs4 w-[100%]">
              <Text className="font-normal font-tirobangla lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-teal_300 w-[auto]">
                ACCOUNT VERIFICATION
              </Text>
              <Text className="font-normal font-tirobangla ml-[1px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-deep_orange_500 w-[auto]">
                Enter a new password to access your account.
              </Text>
              <Text className="font-normal font-tirobangla ml-[1px] lg:mt-[43px] xl:mt-[49px] 2xl:mt-[56px] 3xl:mt-[67px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-gray_500 w-[auto]">
                Passworrd
              </Text>
              <Row className="bg-white_A700 border-4 border-deep_orange_500 border-solid font-tirobangla items-center justify-between ml-[1px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] lg:p-[26px] xl:p-[30px] 2xl:p-[34px] 3xl:p-[40px] rounded-radius15 w-[98%]">
                <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-deep_orange_500 w-[auto]">
                  Enter your Password
                </Text>
                <Img
                  src="images/img_instagram_38X51.svg"
                  className="lg:h-[30px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] lg:mr-[6px] xl:mr-[7px] 2xl:mr-[8px] 3xl:mr-[9px] my-[3px] w-[6%]"
                  alt="instagram"
                />
              </Row>
              <Text className="font-normal font-tirobangla ml-[1px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-gray_500 w-[auto]">
                Enter the Password
              </Text>
              <Row className="bg-white_A700 border-4 border-deep_orange_500 border-solid font-tirobangla items-center justify-between ml-[1px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] lg:p-[26px] xl:p-[30px] 2xl:p-[34px] 3xl:p-[40px] rounded-radius15 w-[98%]">
                <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-deep_orange_500 w-[auto]">
                  Enter your Password
                </Text>
                <Img
                  src="images/img_instagram_38X51.svg"
                  className="lg:h-[30px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] lg:mr-[6px] xl:mr-[7px] 2xl:mr-[8px] 3xl:mr-[9px] my-[3px] w-[6%]"
                  alt="instagram One"
                />
              </Row>
              <Button
                className="font-baloo1 font-normal lg:mb-[34px] xl:mb-[39px] 2xl:mb-[44px] 3xl:mb-[52px] ml-[1px] lg:mt-[49px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] not-italic lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-center text-white_A700 w-[98%]"
                size="2xl"
                variant="OutlineDeeporange5001_2"
              >
                Reset password
              </Button>
            </Column>
            <Img
              src="images/img_rectangle1.png"
              className="absolute lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] inset-x-[0] mx-[auto] top-[0] w-[50%]"
              alt="RectangleSixtyFour"
            />
          </Stack>
        </Column>
        <Column className="items-end lg:mb-[62px] xl:mb-[71px] 2xl:mb-[80px] 3xl:mb-[96px] lg:mt-[53px] xl:mt-[61px] 2xl:mt-[69px] 3xl:mt-[82px] mx-[auto] lg:px-[180px] xl:px-[206px] 2xl:px-[232px] 3xl:px-[278px] w-[78%]">
          <Text className="font-normal not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-teal_300 w-[auto]">
            © 2022 besttravel. All rights reserved
          </Text>
        </Column>
      </Column>
    </>
  );
};

export default DesktopSixteenPage;
