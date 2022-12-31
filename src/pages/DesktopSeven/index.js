import React from "react";

import { Column, Row, Img, Text, Button, Stack, Line } from "components";

const DesktopSevenPage = () => {
  return (
    <>
      <Column className="bg-yellow_50 font-tirobangla mx-[auto] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] w-[100%]">
        <Column className="items-center w-[100%]">
          <Row className="items-center w-[98%]">
            <Img
              src="images/img_rectangle1.png"
              className="2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] w-[20%]"
              alt="RectangleTwentyThree"
            />
            <Text className="font-bold font-poppins lg:ml-[184px] xl:ml-[210px] 2xl:ml-[237px] 3xl:ml-[284px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-deep_orange_500 w-[auto]">
              Home
            </Text>
            <Text className="font-medium font-poppins lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
              About Us
            </Text>
            <Text className="font-medium font-poppins lg:ml-[36px] xl:ml-[41px] 2xl:ml-[47px] 3xl:ml-[56px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
              Destination
            </Text>
            <Text className="font-medium font-poppins lg:ml-[49px] xl:ml-[56px] 2xl:ml-[63px] 3xl:ml-[75px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
              Packages
            </Text>
            <Text className="font-medium font-poppins lg:ml-[35px] xl:ml-[40px] 2xl:ml-[46px] 3xl:ml-[55px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
              Contracts
            </Text>
            <Img
              src="images/img_search.svg"
              className="lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] lg:w-[27px] xl:w-[31px] 2xl:w-[35px] 3xl:w-[42px]"
              alt="search"
            />
            <Button
              className="font-baloo font-semibold lg:ml-[22px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-center w-[13%]"
              shape="CircleBorder38"
              size="2xl"
              variant="FillDeeporange5004c"
            >
              Book ticket
            </Button>
          </Row>
          <Stack className="lg:h-[232px] xl:h-[266px] 2xl:h-[299px] 3xl:h-[358px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[100%]">
            <div className="absolute bg-teal_300 lg:h-[149px] xl:h-[170px] 2xl:h-[192px] 3xl:h-[230px] top-[0] w-[100%]"></div>
            <Column className="absolute bg-white_A700 border border-deep_orange_500 border-solid bottom-[0] inset-x-[0] justify-end mx-[auto] lg:p-[14px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius15 shadow-bs3 w-[83%]">
              <Text className="font-normal lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] not-italic lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-deep_orange_500 w-[auto]">
                Flight from London to Ho Chi Minh City
                <br />
              </Text>
              <Text className="font-normal italic leading-[normal] lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-gray_500 w-[64%]">
                London (LHR) → Ho Chi Minh City (SGN) | 17 Sep 2022
                <br />
                <br />1 Adult | Economy
              </Text>
            </Column>
          </Stack>
          <Row className="items-center justify-between lg:mt-[49px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] w-[93%]">
            <Column className="bg-white_A700 lg:p-[6px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius32 shadow-bs2 w-[66%]">
              <Row className="justify-between lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mr-[18px] xl:mr-[21px] 2xl:mr-[24px] 3xl:mr-[28px] w-[97%]">
                <Stack className="lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] w-[29%]">
                  <Img
                    src="images/img_rectangle34.png"
                    className="absolute xl:h-[112px] 2xl:h-[126px] 3xl:h-[151px] lg:h-[98px] top-[0] w-[100%]"
                    alt="RectangleThirtyFour"
                  />
                  <Text className="absolute bottom-[0] font-normal not-italic right-[4%] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-teal_300 w-[auto]">
                    Quatar Airways
                  </Text>
                </Stack>
                <Column className="lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[69%]">
                  <Row className="w-[57%]">
                    <Text className="font-normal mb-[1px] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-teal_300 w-[auto]">
                      London
                    </Text>
                    <Img
                      src="images/img_arrowright.svg"
                      className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[8%]"
                      alt="arrowright"
                    />
                    <Text className="font-normal lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] mt-[1px] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-teal_300 w-[auto]">
                      Ho Chi Minh
                    </Text>
                  </Row>
                  <Text className="font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-deep_orange_500 w-[auto]">
                    Sat, 17 Sep 2022
                  </Text>
                  <Line className="bg-deep_orange_500 h-[2px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[100%]" />
                </Column>
              </Row>
              <Row className="justify-end lg:mb-[11px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] ml-[auto] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[65%]">
                <Column className="items-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[24%]">
                  <Text className="font-normal not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-black_900 w-[auto]">
                    16 : 00
                  </Text>
                  <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
                    (LHR)
                  </Text>
                </Column>
                <Stack className="lg:h-[53px] xl:h-[60px] 2xl:h-[68px] 3xl:h-[81px] w-[33%]">
                  <Img
                    src="images/img_group45.svg"
                    className="absolute bottom-[24%] lg:h-[25px] xl:h-[28px] 2xl:h-[32px] 3xl:h-[38px] w-[100%]"
                    alt="GroupFortyFive"
                  />
                  <Column className="absolute inset-x-[25%] items-center w-[48%]">
                    <Text className="font-normal not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
                      16h 25m
                    </Text>
                    <Text className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
                      Direct
                    </Text>
                  </Column>
                </Stack>
                <Column className="lg:ml-[28px] xl:ml-[32px] 2xl:ml-[37px] 3xl:ml-[44px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[37%]">
                  <Text className="font-normal not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-black_900 w-[auto]">
                    14 : 25 (+1 day)
                  </Text>
                  <Text className="font-normal lg:ml-[30px] xl:ml-[34px] 2xl:ml-[39px] 3xl:ml-[46px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
                    (SGN)
                  </Text>
                </Column>
              </Row>
            </Column>
            <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-radius32 shadow-bs1 w-[29%]">
              <Row className="lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[91%]">
                <Img
                  src="images/img_vector_30X30.svg"
                  className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                  alt="Vector"
                />
                <Text className="font-normal lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] mt-[1px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-teal_300 w-[auto]">
                  Additional Information
                </Text>
              </Row>
              <Line className="bg-deep_orange_500 h-[2px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[97%]" />
              <Column className="lg:my-[16px] xl:my-[18px] 2xl:my-[21px] 3xl:my-[25px] w-[91%]">
                <Text className="font-normal not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-deep_orange_500 w-[auto]">
                  LHR →SGN
                </Text>
                <Row className="items-end ml-[2px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[88%]">
                  <Img
                    src="images/img_info.svg"
                    className="lg:h-[26px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] mb-[3px] lg:w-[25px] xl:w-[29px] 2xl:w-[33px] 3xl:w-[39px]"
                    alt="info"
                  />
                  <Text className="font-normal lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_500 w-[auto]">
                    Refund Policy Unknown
                  </Text>
                </Row>
                <Row className="items-center ml-[2px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[99%]">
                  <Img
                    src="images/img_info.svg"
                    className="lg:h-[26px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] lg:w-[25px] xl:w-[29px] 2xl:w-[33px] 3xl:w-[39px]"
                    alt="info One"
                  />
                  <Text className="font-normal lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_500 w-[auto]">
                    Reschedule Policy Unknown
                  </Text>
                </Row>
              </Column>
            </Column>
          </Row>
        </Column>
        <Column className="items-end lg:mb-[133px] xl:mb-[153px] 2xl:mb-[172px] 3xl:mb-[206px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] lg:px-[35px] xl:px-[40px] 2xl:px-[46px] 3xl:px-[55px] w-[100%]">
          <Column className="bg-white_A700 font-tirobangla lg:p-[19px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius32 shadow-bs1 w-[56%]">
            <Text className="font-normal lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-teal_300 w-[auto]">
              Price Details
            </Text>
            <Column className="items-center lg:mb-[17px] xl:mb-[20px] 2xl:mb-[23px] 3xl:mb-[27px] ml-[1px] lg:mr-[3px] xl:mr-[4px] 2xl:mr-[5px] 3xl:mr-[6px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[99%]">
              <Line className="bg-deep_orange_500 h-[5px] w-[100%]" />
              <Row className="justify-between lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[97%]">
                <Text className="font-normal mt-[1px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-gray_500 w-[auto]">
                  Qatar Airways (adult) x1
                </Text>
                <Text className="font-normal mb-[1px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-deep_orange_500 w-[auto]">
                  $ 1000
                </Text>
              </Row>
              <Line className="bg-deep_orange_500 h-[2px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] w-[100%]" />
              <Row className="justify-between lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[97%]">
                <Text className="font-normal mt-[1px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-gray_500 w-[auto]">
                  Price you pay
                  <br />
                </Text>
                <Text className="font-normal mb-[1px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-deep_orange_500 w-[auto]">
                  $ 1000
                </Text>
              </Row>
            </Column>
          </Column>
          <Button
            className="font-baloo1 font-normal lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] not-italic lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-center w-[34%]"
            size="2xl"
          >
            Continue to booking
          </Button>
        </Column>
      </Column>
    </>
  );
};

export default DesktopSevenPage;
