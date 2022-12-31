import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Button,
  Stack,
  Line,
  List,
  CheckBox,
  SelectBox,
} from "components";

const DesktopEightPage = () => {
  function handleNavigate13() {
    window.location.href = "https://accounts.google.com/";
  }

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
          <Stack className="lg:h-[238px] xl:h-[273px] 2xl:h-[307px] 3xl:h-[368px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[100%]">
            <div className="absolute bg-teal_300 lg:h-[149px] xl:h-[170px] 2xl:h-[192px] 3xl:h-[230px] top-[0] w-[100%]"></div>
            <Column className="absolute bg-white_A700 border border-deep_orange_500 border-solid bottom-[0] inset-x-[0] mx-[auto] lg:p-[17px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[27px] rounded-radius15 shadow-bs3 w-[85%]">
              <Row className="items-end lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] w-[29%]">
                <Text className="font-normal italic lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
                  Car Rental /{" "}
                </Text>
                <Text className="font-normal italic mb-[1px] lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-deep_orange_500 w-[auto]">
                  Without Driver
                </Text>
              </Row>
              <Text className="font-normal lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] not-italic lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-teal_300 w-[auto]">
                Car Rental Without Driver
              </Text>
              <Text className="font-normal italic mb-[4px] lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-gray_500 w-[auto]">
                London • Wed, 14 Sep 2022 09:00 - Fri, 16 Sep 2022 09:00
              </Text>
            </Column>
          </Stack>
          <Row className="lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[91%]">
            <Column className="bg-white_A700 lg:p-[25px] xl:p-[29px] 2xl:p-[33px] 3xl:p-[39px] rounded-radius32 shadow-bs2 w-[67%]">
              <Row className="lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] w-[88%]">
                <Column className="lg:mt-[34px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] w-[39%]">
                  <Img
                    src="images/img_rectangle34_121X240.png"
                    className="xl:h-[108px] 2xl:h-[122px] 3xl:h-[146px] lg:h-[95px] w-[87%]"
                    alt="RectangleThirtyFour"
                  />
                  <Text className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:mt-[56px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[86px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-teal_300 w-[auto]">
                    Rental Policy
                  </Text>
                </Column>
                <Column className="w-[61%]">
                  <Text className="font-normal not-italic lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-teal_300 w-[auto]">
                    Mercedes Benz C300 AMG
                  </Text>
                  <Row className="lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[97%]">
                    <Img
                      src="images/img_google.svg"
                      className="common-pointer lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                      onClick={handleNavigate13}
                      alt="google"
                    />
                    <Text className="font-normal lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
                      AUTOMATIC
                    </Text>
                    <Img
                      src="images/img_call.svg"
                      className="lg:h-[26px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] 3xl:ml-[103px] lg:ml-[66px] xl:ml-[76px] 2xl:ml-[86px] mt-[1px] w-[6%]"
                      alt="call"
                    />
                    <Text className="font-normal lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-gray_500 w-[auto]">
                      4 seats
                    </Text>
                  </Row>
                  <Row className="ml-[2px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[40%]">
                    <Img
                      src="images/img_bag.svg"
                      className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] w-[19%]"
                      alt="bag"
                    />
                    <Text className="font-normal lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-gray_500 w-[auto]">
                      2 Package
                    </Text>
                  </Row>
                </Column>
              </Row>
              <Column className="lg:mb-[21px] xl:mb-[24px] 2xl:mb-[28px] 3xl:mb-[33px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] mr-[1px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[98%]">
                <Row className="items-end ml-[4px] w-[58%]">
                  <Img
                    src="images/img_clock_33X33.svg"
                    className="lg:h-[26px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] lg:w-[25px] xl:w-[29px] 2xl:w-[33px] 3xl:w-[39px]"
                    alt="clock"
                  />
                  <Text className="font-normal italic mb-[1px] lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
                    Usage of up to 24 hours per rental day
                  </Text>
                </Row>
                <Row className="items-end ml-[3px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[43%]">
                  <Img
                    src="images/img_vector_40X40.svg"
                    className="lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] mb-[1px] lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                    alt="Vector"
                  />
                  <Text className="font-normal italic lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
                    Return the fuel as received
                  </Text>
                </Row>
                <Line className="bg-deep_orange_500 h-[0.5px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]" />
                <Text className="font-normal ml-[1px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-teal_300 w-[auto]">
                  Rental Requirements
                </Text>
                <Row className="items-center ml-[1px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[87%]">
                  <Img
                    src="images/img_frame28.svg"
                    className="lg:h-[214px] xl:h-[245px] 2xl:h-[276px] 3xl:h-[331px] w-[5%]"
                    alt="FrameTwentyEight"
                  />
                  <Column className="lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] w-[92%]">
                    <Text className="font-normal italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
                      Deposit of $ 10000
                    </Text>
                    <Text className="font-normal italic lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
                      Driver’s License (SIM A)/International Driving Permit
                    </Text>
                    <Text className="font-normal italic lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
                      ID card (KTP or passport)
                    </Text>
                    <Text className="font-normal italic lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
                      Photo of Credit Card (can be replaced if you don’t have
                      one)
                    </Text>
                    <Text className="font-normal italic ml-[1px] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
                      Social Media Account Name
                    </Text>
                  </Column>
                </Row>
                <Line className="bg-deep_orange_500 h-[0.5px] lg:mt-[31px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[100%]" />
                <Text className="font-normal ml-[3px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-teal_300 w-[auto]">
                  Important Info
                </Text>
                <Text className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-deep_orange_500 w-[auto]">
                  Before you book
                </Text>
                <Text className="font-normal italic lg:ml-[56px] xl:ml-[64px] 2xl:ml-[73px] 3xl:ml-[87px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
                  Make sure to read the rental requirements.
                </Text>
                <Text className="font-normal ml-[1px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-deep_orange_500 w-[auto]">
                  After you book
                </Text>
                <Text className="font-normal italic leading-[normal] lg:ml-[56px] xl:ml-[64px] 2xl:ml-[73px] 3xl:ml-[87px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[88%]">
                  The rental provider will contact the driver through WhatsApp
                  to request photos of the required documents.
                </Text>
                <Text className="font-normal ml-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-deep_orange_500 w-[auto]">
                  During pick-up
                </Text>
                <Text className="font-normal italic leading-[normal] lg:ml-[56px] xl:ml-[64px] 2xl:ml-[73px] 3xl:ml-[87px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[85%]">
                  Bring your ID card, driver’s license, and other documents as
                  required by the rental provider.
                  <br />
                  <br />
                  When you meet with the rental staff, check the car’s condition
                  together with the staff.
                  <br />
                  <br />
                  After that, read and sign the rental agreement.
                </Text>
              </Column>
            </Column>
            <Column className="bg-white_A700 justify-center lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] rounded-radius32 shadow-bs1 w-[29%]">
              <Text className="font-normal lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mr-[105px] xl:mr-[120px] 2xl:mr-[135px] 3xl:mr-[162px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-teal_300 w-[auto]">
                Price Details
              </Text>
              <Column className="lg:mb-[15px] xl:mb-[17px] 2xl:mb-[20px] 3xl:mb-[24px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[98%]">
                <Line className="bg-deep_orange_500 h-[2px] w-[99%]" />
                <Text className="font-normal font-tirobangla ml-[2px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-deep_orange_500 w-[auto]">
                  Total price
                </Text>
                <Text className="font-normal font-tirobangla lg:ml-[171px] xl:ml-[195px] 2xl:ml-[220px] 3xl:ml-[264px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-deep_orange_500 w-[auto]">
                  $ 1000
                </Text>
                <Button className="font-baloo1 font-normal lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] not-italic lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-center w-[86%]">
                  Countine
                </Button>
                <Line className="bg-deep_orange_500 h-[2px] ml-[2px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[99%]" />
                <Text className="font-normal font-tirobangla italic ml-[1px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
                  Inclusive of taxes & fees
                </Text>
                <Line className="bg-deep_orange_500 h-[2px] ml-[2px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[99%]" />
                <Row className="font-tirobangla justify-between ml-[2px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[96%]">
                  <Text className="font-normal mb-[1px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-deep_orange_500 w-[auto]">
                    Basic rental
                  </Text>
                  <Text className="font-normal mt-[1px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-teal_300 w-[auto]">
                    $ 1000
                  </Text>
                </Row>
                <Line className="bg-deep_orange_500 h-[2px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[99%]" />
                <Row className="font-tirobangla justify-between ml-[1px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[96%]">
                  <Text className="font-normal mt-[2px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-deep_orange_500 w-[auto]">
                    You pay
                  </Text>
                  <Text className="font-normal mb-[2px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-teal_300 w-[auto]">
                    $ 1000
                  </Text>
                </Row>
              </Column>
            </Column>
          </Row>
        </Column>
        <List
          className="gap-[0] min-h-[auto] lg:ml-[52px] xl:ml-[59px] 2xl:ml-[67px] 3xl:ml-[80px] lg:mt-[31px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[61%]"
          orientation="vertical"
        >
          <Column className="bg-white_A700 lg:my-[15px] xl:my-[18px] 2xl:my-[20px] 3xl:my-[24px] lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] rounded-radius32 shadow-bs1 w-[100%]">
            <Row className="font-tirobangla items-end lg:ml-[41px] xl:ml-[47px] 2xl:ml-[53px] 3xl:ml-[63px] w-[31%]">
              <Img
                src="images/img_videocamera.svg"
                className="lg:h-[31px] xl:h-[35px] 2xl:h-[40px] 3xl:h-[47px] w-[14%]"
                alt="videocamera"
              />
              <Text className="font-normal mb-[1px] lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-teal_300 w-[auto]">
                Pick-up Location
              </Text>
            </Row>
            <Row className="font-tirobangla 3xl:ml-[108px] lg:ml-[70px] xl:ml-[80px] 2xl:ml-[90px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[36%]">
              <CheckBox
                className="lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px]"
                inputClassName="h-[29.17px] mr-[5px] w-[29.17px]"
                name="bx"
                label=""
                variant="FillDeeporange502"
              ></CheckBox>
              <Text className="font-normal lg:ml-[22px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] mt-[1px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-deep_orange_500 w-[auto]">
                Rental Office
              </Text>
              <Text className="font-normal italic lg:ml-[41px] xl:ml-[47px] 2xl:ml-[53px] 3xl:ml-[63px] mt-[1px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_500 w-[auto]">
                Free
              </Text>
            </Row>
            <Row className="font-tirobangla 3xl:ml-[108px] lg:ml-[70px] xl:ml-[80px] 2xl:ml-[90px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[59%]">
              <CheckBox
                className="lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px]"
                inputClassName="h-[29.17px] mr-[5px] w-[29.17px]"
                name="bx One"
                label=""
                variant="FillDeeporange5021_2"
              ></CheckBox>
              <Text className="font-normal lg:ml-[22px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] mt-[1px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-deep_orange_500 w-[auto]">
                Other Locations
              </Text>
              <Text className="font-normal italic lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] mt-[2px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_500 w-[auto]">
                Additional fees may apply
              </Text>
            </Row>
            <SelectBox
              className="font-baloo font-semibold lg:mb-[31px] xl:mb-[36px] 2xl:mb-[41px] 3xl:mb-[49px] lg:ml-[37px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-deep_orange_500 w-[93%]"
              placeholderClassName="text-deep_orange_500"
              name="Group198"
              placeholder="Rental Office"
              isSearchable={false}
              isMulti={false}
              getOptionLabel={(e) => (
                <div className="flex items-center">
                  <Img
                    src="images/img_location_33X26.svg"
                    className="lg:w-[20px] lg:h-[26px] lg:mr-[27px] xl:w-[23px] xl:h-[30px] xl:mr-[31px] 2xl:w-[26px] 2xl:h-[34px] 2xl:mr-[35px] 3xl:w-[31px] 3xl:h-[40px] 3xl:mr-[42px]"
                    alt="location"
                  />
                  <span>{e.label}</span>
                </div>
              )}
              indicator={
                <Img
                  src="images/img_arrowdown_deep_orange_502.svg"
                  className="lg:w-[20px] lg:h-[11px] lg:mr-[27px] xl:w-[23px] xl:h-[12px] xl:mr-[31px] 2xl:w-[26px] 2xl:h-[14px] 2xl:mr-[35px] 3xl:w-[31px] 3xl:h-[16px] 3xl:mr-[42px]"
                  alt="arrow_down"
                />
              }
              shape="RoundedBorder32"
              size="lg"
              variant="OutlineDeeporange5001_2"
            ></SelectBox>
          </Column>
          <Column className="bg-white_A700 lg:my-[15px] xl:my-[18px] 2xl:my-[20px] 3xl:my-[24px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] rounded-radius32 shadow-bs1 w-[100%]">
            <Row className="font-tirobangla items-end lg:ml-[42px] xl:ml-[48px] 2xl:ml-[55px] 3xl:ml-[66px] w-[32%]">
              <Img
                src="images/img_megaphone.svg"
                className="lg:h-[32px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] mb-[1px] w-[15%]"
                alt="megaphone"
              />
              <Text className="font-normal lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-teal_300 w-[auto]">
                Drop-off Location
              </Text>
            </Row>
            <Row className="font-tirobangla 3xl:ml-[110px] lg:ml-[71px] xl:ml-[81px] 2xl:ml-[92px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[35%]">
              <CheckBox
                className="lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px]"
                inputClassName="h-[29.17px] mr-[5px] w-[29.17px]"
                name="bx One"
                label=""
                variant="FillDeeporange5021_2"
              ></CheckBox>
              <Text className="font-normal lg:ml-[22px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] mt-[1px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-deep_orange_500 w-[auto]">
                Rental Office
              </Text>
              <Text className="font-normal italic lg:ml-[41px] xl:ml-[47px] 2xl:ml-[53px] 3xl:ml-[63px] mt-[1px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_500 w-[auto]">
                Free
              </Text>
            </Row>
            <Row className="font-tirobangla 3xl:ml-[110px] lg:ml-[71px] xl:ml-[81px] 2xl:ml-[92px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[59%]">
              <CheckBox
                className="lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px]"
                inputClassName="h-[29.17px] mr-[5px] w-[29.17px]"
                name="bx One One"
                label=""
                variant="FillDeeporange5021_2"
              ></CheckBox>
              <Text className="font-normal lg:ml-[22px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] mt-[1px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-deep_orange_500 w-[auto]">
                Other Locations
              </Text>
              <Text className="font-normal italic lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] mt-[2px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_500 w-[auto]">
                Additional fees may apply
              </Text>
            </Row>
            <SelectBox
              className="font-baloo font-semibold lg:mb-[34px] xl:mb-[39px] 2xl:mb-[44px] 3xl:mb-[52px] lg:ml-[39px] xl:ml-[45px] 2xl:ml-[51px] 3xl:ml-[61px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-deep_orange_500 w-[92%]"
              placeholderClassName="text-deep_orange_500"
              name="Group199"
              placeholder="Rental Office"
              isSearchable={false}
              isMulti={false}
              getOptionLabel={(e) => (
                <div className="flex items-center">
                  <Img
                    src="images/img_location_33X26.svg"
                    className="lg:w-[20px] lg:h-[26px] lg:mr-[27px] xl:w-[23px] xl:h-[30px] xl:mr-[31px] 2xl:w-[26px] 2xl:h-[34px] 2xl:mr-[35px] 3xl:w-[31px] 3xl:h-[40px] 3xl:mr-[42px]"
                    alt="location"
                  />
                  <span>{e.label}</span>
                </div>
              )}
              indicator={
                <Img
                  src="images/img_arrowdown_deep_orange_502.svg"
                  className="lg:w-[20px] lg:h-[11px] lg:mr-[27px] xl:w-[23px] xl:h-[12px] xl:mr-[31px] 2xl:w-[26px] 2xl:h-[14px] 2xl:mr-[35px] 3xl:w-[31px] 3xl:h-[16px] 3xl:mr-[42px]"
                  alt="arrow_down"
                />
              }
              shape="RoundedBorder32"
              size="lg"
              variant="OutlineDeeporange5001_2"
            ></SelectBox>
          </Column>
        </List>
        <Column className="bg-white_A700 lg:ml-[52px] xl:ml-[59px] 2xl:ml-[67px] 3xl:ml-[80px] lg:mt-[31px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] lg:p-[14px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius32 shadow-bs1 w-[73%]">
          <Row className="items-end lg:ml-[41px] xl:ml-[47px] 2xl:ml-[53px] 3xl:ml-[63px] w-[24%]">
            <Img
              src="images/img_clock_33X33.svg"
              className="lg:h-[26px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] lg:w-[25px] xl:w-[29px] 2xl:w-[33px] 3xl:w-[39px]"
              alt="clock One"
            />
            <Text className="font-normal mb-[2px] lg:ml-[20px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-teal_300 w-[auto]">
              Rental Duration
            </Text>
          </Row>
          <Column className="items-center lg:mb-[23px] xl:mb-[26px] 2xl:mb-[30px] 3xl:mb-[36px] lg:ml-[25px] xl:ml-[29px] 2xl:ml-[33px] 3xl:ml-[39px] lg:mr-[11px] xl:mr-[13px] 2xl:mr-[15px] 3xl:mr-[18px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[95%]">
            <Row className="justify-between w-[100%]">
              <Text className="font-normal italic mt-[4px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
                Pick-up
              </Text>
              <Text className="font-normal lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-teal_300 w-[auto]">
                2 (Days)
              </Text>
              <Text className="font-normal italic lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
                Drop-off
              </Text>
            </Row>
            <Row className="items-center justify-between lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
              <Text className="font-normal not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-deep_orange_500 w-[auto]">
                Monday, 19 September 2022 09:00
              </Text>
              <Text className="font-normal not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-deep_orange_500 w-[auto]">
                Monday, 19 September 2022 09:00
              </Text>
            </Row>
          </Column>
        </Column>
        <Row className="bg-white_A700 items-center lg:ml-[52px] xl:ml-[59px] 2xl:ml-[67px] 3xl:ml-[80px] lg:mt-[36px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] lg:p-[35px] xl:p-[40px] 2xl:p-[45px] 3xl:p-[54px] rounded-radius32 shadow-bs1 w-[73%]">
          <Text className="font-normal lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-deep_orange_500 w-[auto]">
            Total Price
          </Text>
          <Text className="font-normal lg:ml-[518px] xl:ml-[593px] 2xl:ml-[667px] 3xl:ml-[800px] mt-[2px] not-italic lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-deep_orange_500 w-[auto]">
            $ 1000
          </Text>
        </Row>
        <Column className="font-baloo1 items-end lg:mb-[101px] xl:mb-[116px] 2xl:mb-[131px] 3xl:mb-[157px] lg:mt-[59px] xl:mt-[68px] 2xl:mt-[77px] 3xl:mt-[92px] lg:px-[35px] xl:px-[40px] 2xl:px-[46px] 3xl:px-[55px] w-[100%]">
          <Button
            className="font-normal not-italic lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-center w-[34%]"
            size="2xl"
          >
            Continue to booking
          </Button>
        </Column>
      </Column>
    </>
  );
};

export default DesktopEightPage;
